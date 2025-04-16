#include "stm32f4xx_hal.h"
#include <cstring>
#include <cstdio>

// Буфер для хранения ADC samples
#define ADC_BUFFER_SIZE 1024
volatile uint16_t adcBuffer[ADC_BUFFER_SIZE];
volatile bool dataReady = false;

// Инициализация ADC
void ADC_Init() {
    ADC_ChannelConfTypeDef sConfig = {0};
    
    // Настройка ADC
    hadc1.Instance = ADC1;
    hadc1.Init.ClockPrescaler = ADC_CLOCK_SYNC_PCLK_DIV4;
    hadc1.Init.Resolution = ADC_RESOLUTION_12B;
    hadc1.Init.ScanConvMode = DISABLE;
    hadc1.Init.ContinuousConvMode = ENABLE;
    hadc1.Init.DiscontinuousConvMode = DISABLE;
    hadc1.Init.ExternalTrigConvEdge = ADC_EXTERNALTRIGCONVEDGE_RISING;
    hadc1.Init.ExternalTrigConv = ADC_EXTERNALTRIGCONV_T2_TRGO;
    hadc1.Init.DataAlign = ADC_DATAALIGN_RIGHT;
    hadc1.Init.NbrOfConversion = 1;
    hadc1.Init.DMAContinuousRequests = ENABLE;
    hadc1.Init.EOCSelection = ADC_EOC_SINGLE_CONV;
    HAL_ADC_Init(&hadc1);

    // Настройка канала ADC
    sConfig.Channel = ADC_CHANNEL_0;  // Используем PA0 (ADC1_IN0)
    sConfig.Rank = 1;
    sConfig.SamplingTime = ADC_SAMPLETIME_56CYCLES;
    HAL_ADC_ConfigChannel(&hadc1, &sConfig);
}

// Инициализация таймера для триггера ADC
void TIM_Init() {
    TIM_HandleTypeDef htim2;
    TIM_MasterConfigTypeDef sMasterConfig = {0};
    
    htim2.Instance = TIM2;
    htim2.Init.Prescaler = 100 - 1;
    htim2.Init.CounterMode = TIM_COUNTERMODE_UP;
    htim2.Init.Period = SystemCoreClock / 100000 - 1; // 10 kHz sampling
    htim2.Init.ClockDivision = TIM_CLOCKDIVISION_DIV1;
    HAL_TIM_Base_Init(&htim2);
    
    sMasterConfig.MasterOutputTrigger = TIM_TRGO_UPDATE;
    sMasterConfig.MasterSlaveMode = TIM_MASTERSLAVEMODE_DISABLE;
    HAL_TIMEx_MasterConfigSynchronization(&htim2, &sMasterConfig);
    
    HAL_TIM_Base_Start(&htim2);
}

// Инициализация DMA для ADC
void DMA_Init() {
    __HAL_RCC_DMA2_CLK_ENABLE();
    
    hdma_adc1.Instance = DMA2_Stream0;
    hdma_adc1.Init.Channel = DMA_CHANNEL_0;
    hdma_adc1.Init.Direction = DMA_PERIPH_TO_MEMORY;
    hdma_adc1.Init.PeriphInc = DMA_PINC_DISABLE;
    hdma_adc1.Init.MemInc = DMA_MINC_ENABLE;
    hdma_adc1.Init.PeriphDataAlignment = DMA_PDATAALIGN_HALFWORD;
    hdma_adc1.Init.MemDataAlignment = DMA_MDATAALIGN_HALFWORD;
    hdma_adc1.Init.Mode = DMA_CIRCULAR;
    hdma_adc1.Init.Priority = DMA_PRIORITY_HIGH;
    hdma_adc1.Init.FIFOMode = DMA_FIFOMODE_DISABLE;
    HAL_DMA_Init(&hdma_adc1);
    
    __HAL_LINKDMA(&hadc1, DMA_Handle, hdma_adc1);
}

// Инициализация UART для вывода данных
void UART_Init() {
    huart1.Instance = USART1;
    huart1.Init.BaudRate = 115200;
    huart1.Init.WordLength = UART_WORDLENGTH_8B;
    huart1.Init.StopBits = UART_STOPBITS_1;
    huart1.Init.Parity = UART_PARITY_NONE;
    huart1.Init.Mode = UART_MODE_TX_RX;
    huart1.Init.HwFlowCtl = UART_HWCONTROL_NONE;
    huart1.Init.OverSampling = UART_OVERSAMPLING_16;
    HAL_UART_Init(&huart1);
}

// Обработчик прерывания DMA
extern "C" void DMA2_Stream0_IRQHandler(void) {
    HAL_DMA_IRQHandler(&hdma_adc1);
    dataReady = true;
}

// Основной цикл
int main(void) {
    HAL_Init();
    SystemClock_Config();
    
    ADC_Init();
    TIM_Init();
    DMA_Init();
    UART_Init();
    
    // Запуск ADC с DMA
    HAL_ADC_Start_DMA(&hadc1, (uint32_t*)adcBuffer, ADC_BUFFER_SIZE);
    
    char uartBuf[64];
    
    while (1) {
        if (dataReady) {
            dataReady = false;
            
            // Отправка данных через UART
            for (int i = 0; i < ADC_BUFFER_SIZE; i++) {
                int len = snprintf(uartBuf, sizeof(uartBuf), "%d\n", adcBuffer[i]);
                HAL_UART_Transmit(&huart1, (uint8_t*)uartBuf, len, HAL_MAX_DELAY);
            }
            
            HAL_Delay(100); // Пауза между отправками данных
        }
    }
}
