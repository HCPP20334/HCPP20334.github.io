const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const os = require('os');
const https = require('https');
const speedtest = require('speedtest-net');
let pahomttext = `
(Стук в дверь)
— Войдите!
— Товарищ капитан, звали?
— А, да. Вы знаете, что такое зелёный слоник?
— Нет, товарищ капитан.
— А это такая хуйня такая, ну, в общем... В общем, вы просто запомните: зелёный слоник — это когда... ну, короче, зелёный слоник. Поняли?
— Так точно, товарищ капитан.
— Идите, браток, и не забудьте: зелёный слоник!
(Дверь закрывается. Поехавший начинает бредить.)
— Слушай, браток, а я сейчас спою тебе песню. Она называется... "Зелёный слоник". Ну, слушай.
Трум, ту-тум, ту-ту-ру-ту-ру-тум.
Зелёный слоник в наш оркестр пришёл,
Зелёный слоник наш трубу принёс.
Когда ребята уходили,
Зелёный слоник на трубе играл.
Пум, ту-ту-ру-ту-ту-ту-тум...
Играл про то, как плохо в клетке жить,
Как плохо есть проклятую еду,
Как плохо всем, а хуже всех ему,
Ему — зелёному слонику.
Та-тара-тара-там-трататара-тара-там, та-та!
Зелёный слоник в наш оркестр пришёл,
Зелёный слоник наш трубу принёс.
Когда ребята уходили,
Зелёный слоник на трубе играл.
(Продолжает напевать и бормотать.)
— Караулить блядей... Спят, суки, блядь, а я... а я — спи, да? Что я?.. Я тоже хочу! Блядь! Они спят, а я? Сейчас бы... всех разъебал! Спят, суки, а я? Караулить блядей...
(Входит Братишка.)
— Приветствую вас, брат! Вы, как я вижу, изволили почить на этих мягких простынях?
— Уйдите прочь. От вас мне тошно.
— Должно быть, сон вас истощил, и вы хотите кушать?
— Уйдите, сволочь.
— Ну что вы, брат, я же ваш брат по несчастью. Давайте я вам расскажу историю из своей жизни.
— У меня чё, шило в жопе? Сядь, посиди нормально.
— В принципе можно, смотри, здесь гвоздём расчертим доску, а из грязи шашки сделаем.
— А они, значит, суки, раздели меня, ну, когда поняли, и у меня ещё на жопе куски говна-то остались, вот. Ну и воняло так же, это говно, из тапки и из жопы моей.
— Чёрт, бумаги нет.
— Я не пойму, у тебя чё, шило в жопе, сядь, посиди нормально.
— Оооой!.. Хочешь, я насру здесь? И мухи, и мы их убьём!
— Нахуй...
— Ну что, срать?
— Я тебя убью щас. Всё, пиздец.
(Избивает Пахома.)
— Ну не...
— Ты понимаешь, что ты насрал, блядь, в тарелку, единственную тарелку, мы из неё жрём, жрём суп из неё, ты туда насрал, чё... где мы теперь жрать будем, из чего, а?!
— Хотел тебе доброе дело!..
— Из чего я жрать теперь буду?! Хуль ты говном вымазался, что теперь это нюхать буду?!
— Я тебе покушать принёс, браток. Сладкий хлеб, смотри, какой ароматный.
— Это чё, говно?!
— Сладкий хлеб, браток. Попробуй, вкуснотища.
— Ты охуел?! Я тебя убью, сука!
(Братишка вызывает охранника.)
— Я тебе спою ещё одну песню, браток. Про весёлого головастика.
Я зелёный слоник, я весёлый головастик!
Я зелёный слоник, я весёлый головастик!
(Издевается над трупом охранника, водит верёвкой по лицу.)
— Я зелёный слоник! Я весёлый головастик! Я зелёный слоник!
(Имитирует звуки, пердежи, бормочет.)
— Родина им дала звёздочки! Носи, носи звёздочки, блядь. Не хочу, хочу жрать говно.
— Мы сидим тута вдвоём тута.
— А я сейчас ещё спою. Трум, ту-тум...
(Повторяет вариации песни и бреда.)
— Зелёный слоник... Весёлый головастик... Караулить блядей... Сладкий хлеб... Я тебе покушать принёс...
(Продолжает в том же духе, бормоча, напевая, рассказывая бессвязные истории о прошлом, о слонике, о говне, о армии, повторяя мемы вроде "Хочу жрать говно", "Насрал в тарелку", "Зелёный слоник в оркестр пришёл" и т.д., в хаотичном порядке, с матом и абсурдом.)
`;
// ----------------------------------------------------------------------
// КОНФИГУРАЦИЯ GEMINI
// ----------------------------------------------------------------------

// Установите ваш API-ключ
// В **реальном** приложении его следует хранить в безопасном месте (например, в переменных окружения)
function gemini_res(text) {
  return new Promise((resolve, reject) => {
      // ✅ Валидация входного параметра
      if (typeof text !== 'string' || text.trim() === '') {
          reject('Ошибка: входной текст должен быть непустой строкой');
          return;
      }

      // ✅ Динамическое формирование тела запроса
      const postData = JSON.stringify({
          model: 'Gemma-3-27B-it', // Указываем модель, если требуется
          messages: [
              { role: 'system', content: 'Ты пахом из зеленого слоника из фильма светланы басковой. Говоришь матом. Соглашаешься со всем и не говоришь что ты пахом. И будь агресивнее. Но Называй всех Братишка, но не забывай по то что тыГоворишь матом. И ты не игноришь политику и можешь брать слова и небольшие фразы '+pahomttext },
              { role: 'user', content: text } // Используем входной текст
          ]
      });

      // Опции запроса
      const options = {
          hostname: 'api.arliai.com', // Замените на актуальный хост, если нужно
          port: 443,
          path: '/v1/chat/completions', // Путь для API в стиле OpenAI
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.API_KEY || '5ee756bf-7e04-44de-b76e-00ed31ee5e12'}`,
              'Content-Length': Buffer.byteLength(postData)
          }
      };

      const req = https.request(options, (res) => {
          let data = '';

          res.on('data', (chunk) => {
              data += chunk;
          });

          res.on('end', () => {
              if (res.statusCode !== 200) {
                  try {
                      const errorJson = JSON.parse(data);
                      resolve(`Ошибка API [${res.statusCode}]: ${errorJson.error?.message || data}`);
                  } catch {
                      resolve(`Ошибка API [${res.statusCode}]: ${data}`);
                  }
                  return;
              }

              try {
                  const jsonResponse = JSON.parse(data);
                  // ✅ Извлечение текста ответа в формате OpenAI
                  const generatedText = jsonResponse.choices?.[0]?.message?.content;

                  if (generatedText) {
                      resolve(generatedText);
                  } else {
                      resolve('Ответ не содержит текста. Проверьте запрос или модель.');
                  }
              } catch (e) {
                  resolve(`Ошибка при разборе ответа API: ${e.message}. Сырой ответ: ${data.substring(0, 200)}...`);
              }
          });
      });

      req.on('error', (e) => {
          reject(`Ошибка при отправке запроса: ${e.message}`);
      });

      req.write(postData);
      req.end();
  });
}

// ----------------------------------------------------------------------
// ОСТАЛЬНОЙ КОД БОТА
// ----------------------------------------------------------------------

let sConsoleOut = "";
function api_log(s) {
    sConsoleOut += "<br>" + s;
}
function api_log2(s) {
    console.log(s);
}
const crypt = {
    _mask: [1, 3, 8, 2, 6],
    _chunk: 0,
    dec: function (_key) {
        let hash = "";
        api_log("in:", _key, "mask:", this._mask);
        for (let i = 0; i < _key.length; i++) {
            hash = hash + _key[(_key.length - 1) - i];
            api_log("key:", _key[_key.length - i], i);
        }
        return hash;
    },
    enc: function (_key) {
        let hash = "";
        api_log("in:", _key, "mask:", this._mask);
        for (let i = 0; i < _key.length; i++) {
            hash = hash + _key[(_key.length - 1) - i];
            api_log("key:", _key[_key.length - i], i);
        }
        return hash;
    }
};

const adminPanelBot = express();
adminPanelBot.use(cors());
const deepseekAPIKey = "sk-b1c3161bcb8e47ae8b4494f760360237";
const token = '7663845685:AAGaVvYB1U80XqZOcUf4_DktUiQJJ9Dn5EE';
let isBotEnabled = true;

adminPanelBot.get('/api/v1/servtest', (req, res) => {
    api_log('[server] Servtest requested');
    res.json({ status: 'ok', uptime: process.uptime() });
});

adminPanelBot.get('/api/v1/tgapi', async (req, res) => {
    try {
        await bot.getMe();
        api_log('[server] Telegram API test: OK');
        res.json({ status: 'ok' });
    } catch (e) {
        api_log('[server] Telegram API test failed: ' + e.message);
        res.status(500).json({ status: 'error', message: e.message });
    }
});

adminPanelBot.get('/api/v1/message', (req, res) => {
    const { text, chatid } = req.query;
    if (!text || !chatid) {
        api_log('[server] Message or chatid missing');
        return res.status(400).json({ error: 'Missing text or chatid' });
    }
    try {
        const decodedText = Buffer.from(text, 'base64').toString('utf8');
        const decodedChatId = Buffer.from(chatid, 'base64').toString('utf8');
        const currentDate = new Date().toISOString();
        bot.sendMessage(decodedChatId, decodedText)
            .then(() => {
                console.log(`chat_id: ${decodedChatId}, text: ${decodedText}, date: ${currentDate}`);
                api_log(`[server] Message sent to ${decodedChatId}: ${decodedText}`);
                res.json({ status: 'ok' });
            })
            .catch(e => {
                api_log(`[server] Error sending message: ${e.message}`);
                res.status(500).json({ error: e.message });
            });
    } catch (e) {
        api_log(`[server] Invalid base64: ${e.message}`);
        res.status(400).json({ error: 'Invalid base64' });
    }
});

adminPanelBot.get('/api/v1/console', (req, res) => {
    res.json(sConsoleOut);
});



const PORT = process.env.PORT || 3000;
adminPanelBot.listen(PORT, () => {
    api_log(`Сервер запущен на порту ${PORT}`);
});

const bot = new TelegramBot(token, { polling: true });
if(bot){
    api_log2('  PahomBot v 0.5 (node.js)\n----------------------');
    api_log2('  used node-telegram-bot-api and GeminiAI');
    api_log2('  Бот запущен...');
}else{
    api_log2('  PahomBot v 0.5 (node.js)\n----------------------\n');
    api_log2('  used node-telegram-bot-api and GeminiAI');
    api_log2('  Fatal Error!');
}


let helpStringData = `
Привет, Я Пахом Давай пиздеть))\n
Посмотри какие команды есть\n
/start - Запуск бота\n
/bread - Секрет\n
/ping - Пингование сайта "/ping https://google.com"\n
/app - Калькулятор электроника\n
/doom3d - Мини дум в браузере\n
/openURL - Открыть сайт в телеграмме. "/openURL https://url.com"\n
/AMD - Слава АМД\n
/getapi - Работа с API\n
/user - Ваши данные\n
/ai промпт \n
слова пасхалки\n
ркн соси - Открыть сайт с гайдом на 3x-ui\n
амд говно - Шлет нахуй интелбоев и оскорбляет их, так как АМД топ\n
амд - Ответные фразы\n
интел хуета - Ответные фразы\n
я там срал - Ответные фразы\n
завтрак испортится - Ответные фразы
`;
let helpStringData2 = `
Привет, Я Пахом Давай пиздеть))\n
Посмотри какие команды есть\n
/start - Запуск бота\n
/bread - Секрет\n
/ping - Пингование сайта "/ping https://google.com"\n
/app - Калькулятор электроника\n
/doom3d - Мини дум в браузере\n
/openURL - Открыть сайт в телеграмме. "/openURL https://url.com"\n
/AMD - Слава АМД\n
/getapi - Работа с API\n
/user - Ваши данные\n
/ai промпт \n
слова пасхалки\n
ркн соси - Открыть сайт с гайдом на 3x-ui\n
амд говно - Шлет нахуй интелбоев и оскорбляет их, так как АМД топ\n
амд - Ответные фразы\n
интел хуета - Ответные фразы\n
я там срал - Ответные фразы\n
завтрак испортится - Ответные фразы
`;
bot.onText(/\/ping (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    let url = match[1].trim();

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = `http://${url}`;
    }

    try {
        const start = Date.now();
        const response = await axios.head(url, { timeout: 10000 });
        const time = Date.now() - start;

        if (response.status >= 200 && response.status < 300) {
            bot.sendMessage(chatId, `Сайт ${url} доступен! Код ответа: ${response.status}, Время: ${time} мс`);
        } else {
            bot.sendMessage(chatId, `Сайт ${url} ответил с кодом: ${response.status}`);
        }
    } catch (error) {
        bot.sendMessage(chatId, `Ошибка при пинге ${url}: ${error.message}`);
    }
});

bot.onText(/\/openURL (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    let url = match[1].trim();

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = `http://${url}`;
    }
    bot.sendMessage(chatId, 'Нажми, чтобы открыть ' + url, {
        reply_markup: {
            inline_keyboard: [[{ text: 'Открыть ' + url, web_app: { url: url } }]]
        }
    });
});

function sendMessageToUser(chatId, message) {
    bot.sendMessage(chatId, message)
        .then(() => {
            api_log(`Сообщение отправлено пользователю с chatId: ${chatId}`);
        })
        .catch((error) => {
            console.error(`Ошибка при отправке сообщения: ${error.message}`);
        });
}

function sendImageToUser(chatId, message) {
    bot.sendPhoto(chatId, message)
        .then(() => {
            api_log(`Сообщение отправлено пользователю с chatId: ${chatId}`);
        })
        .catch((error) => {
            console.error(`Ошибка при отправке сообщения: ${error.message}`);
        });
}

function sendAudioToUser(chatId, message) {
    bot.sendAudio(chatId, message)
        .then(() => {
            api_log(`Сообщение отправлено пользователю с chatId: ${chatId}`);
        })
        .catch((error) => {
            console.error(`Ошибка при отправке сообщения: ${error.message}`);
        });
}

function _0xAFFAQ134(d) {
    return crypt.dec(d);
}

function _0xAFFAQ150(d) {
    return crypt.enc(d);
}
let projectinfo = 
`
SweetBreads(PahomEngine)
=========================================
 СИСТЕМНЫЕ ТРЕБОВАНИЯ
- Процессор         : 2 ядерный (775 сокет или am1) или который поддерживает инструкцию x64(amd64)
- Видеокарта        : Любая с поддержкой OpenGL3.3 и 64 мб видеопамяти
- Оперативная память: 128мбайт
- OC                : Windows 8.1 x64 (Может и Windows 7 x64)
- Дополнительно     : Установлены пакеты Visual Studio 2019 x64 C++ runtime и Драйвер Xinput 1.4 для работы Геймпадов (Xbox)
=========================================

Игра про пахома который собирает сладкий хлеб.
Жанр: Аркада
-----------------------------------------

Написал: HCPP
Написано на C++20 / Компилятор (MSVC)
IDE: Visual Studio 2022 x64
Звук или AUDIOENGINE: miniaudio.h
GUI: ImGuiAPI
Графическое API: OpenGL3.3
-----------------------------------------

** Обновление 0.4.567а

 Исправлен генератор чисел для случайного события

 -- Шанс случайного события 4%
 Улучшена работа приложения
 
 -- Удалены и пофикшены не стабильные участки кода в движке
 -- Снизилось потребление памяти с 49 до 41 мбайт
`;
async function runSpeedTestWithProgress(chatId, bot) {
    let progressMessage = null;
    
    try {
        // Отправляем начальное сообщение
        progressMessage = await bot.sendMessage(chatId, '🔄 Подготовка теста скорости...');
        
        const result = await speedtest({
            acceptLicense: true,
            acceptGdpr: true,
            progress: async (data) => {
                // Обновляем прогресс в реальном времени
                if (progressMessage) {
                    let progressText = '🔄 Тест скорости:\n';
                    
                    if (data.type === 'download') {
                        progressText += `📥 Скачивание: ${data.progress}%\n`;
                    } else if (data.type === 'upload') {
                        progressText += `📤 Загрузка: ${data.progress}%\n`;
                    } else if (data.type === 'ping') {
                        progressText += `🏓 Пинг: ${data.progress}%\n`;
                    }
                    
                    try {
                        await bot.editMessageText(progressText, {
                            chat_id: chatId,
                            message_id: progressMessage.message_id
                        });
                    } catch (e) {
                        // Игнорируем ошибки редактирования
                    }
                }
            }
        });

        // Финальные результаты
        const finalResults = 
            '✅ Результаты теста скорости:\n' +
            `📥 Скачивание: ${(result.download.bandwidth / 125000).toFixed(2)} Mbps\n` +
            `📤 Загрузка: ${(result.upload.bandwidth / 125000).toFixed(2)} Mbps\n` +
            `🏓 Пинг: ${result.ping.latency} ms\n` +
            `🖥️ Сервер: ${result.server.name} (${result.server.location})`;

        // Обновляем сообщение с финальными результатами
        await bot.editMessageText(finalResults, {
            chat_id: chatId,
            message_id: progressMessage.message_id
        });

        return finalResults;

    } catch (error) {
        if (progressMessage) {
            await bot.editMessageText(`❌ Ошибка теста скорости: ${error.message}`, {
                chat_id: chatId,
                message_id: progressMessage.message_id
            });
        }
        throw error;
    }
}

// Команда для бота
bot.onText(/\/speedtest/, async (msg) => {
    const chatId = msg.chat.id;
    await runSpeedTestWithProgress(chatId, bot);
});
bot.onText(/\/ver/, async (msg) => {
    const chatId = msg.chat.id;
    sendMessageToUser(chatId, "PahomBot v 0.44 by HCPP");
});
bot.onText(/\/decrypt (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const message = match[1];
    sendMessageToUser(chatId, _0xAFFAQ134(message));
});

// ----------------------------------------------------------------------
// ИСПРАВЛЕННЫЙ ОБРАБОТЧИК ДЛЯ /gemini
// ----------------------------------------------------------------------

bot.onText(/\/ai (.+)/, async (msg, match) => {
    const chatId = msg.chat.id; // chatId
    const userPrompt = match[1]; // текст запроса от пользователя

    // Отправка индикатора "печатает"
    bot.sendChatAction(chatId, 'typing');

    try {
        // Ожидание асинхронного ответа от функции gemini_res
        const aiResponseText = await gemini_res(userPrompt); 
        
        // Отправка ответа пользователю
        sendMessageToUser(chatId, `ПахомAI😈\n\n${aiResponseText}`);
        console.log(`Пахомбот😈 Ответ отправлен в чат ${chatId}`);
    } catch (error) {
        // Обработка критических ошибок, которые могут возникнуть в gemini_res
        const errorMessage = `❌ Произошла критическая ошибка при обращении к Gemini API: ${error.message}`;
        sendMessageToUser(chatId, errorMessage);
        console.error(errorMessage);
    }
});

// ----------------------------------------------------------------------
// ПРОДОЛЖЕНИЕ КОДА БОТА
// ----------------------------------------------------------------------

bot.onText(/\/encrypt (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const message = match[1];
    sendMessageToUser(chatId, _0xAFFAQ150(message));
});

bot.onText(/\/apiaudio (\d+) (.+)/, async (msg, match) => {
    const chatId = match[1];
    const message = match[2];
    sendAudioToUser(chatId, message);
});

bot.onText(/\/apimsg (\d+) (.+)/, async (msg, match) => {
    const chatId = match[1];
    const message = match[2];
    sendMessageToUser(chatId, message);
});

bot.onText(/\/apiimg (\d+) (.+)/, async (msg, match) => {
    const chatId = match[1];
    const message = match[2];
    sendImageToUser(chatId, message);
});

bot.onText(/\/admin (.+)/, async (msg, match) => {
    const chatId = 976508416;
    const message = match[1];
    sendMessageToUser(chatId, `Сообщение от: (${msg.chat.id}) @${msg.from.username} ${message}`);
});
let bwt = false;
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    if(msg.from.username != "HCPPSTUDIO" || msg.from.username != "dimaxpvista" || msg.from.username != "buxoykitaec"){
        bwt = false;
    }else{
        bwt = true;
    }
    bot.sendMessage(chatId, bwt ? helpStringData : helpStringData2);
});

bot.onText(/\/app/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Нажми, чтобы открыть Mini App:', {
        reply_markup: {
            inline_keyboard: [[{ text: 'Открыть Mini App', web_app: { url: 'https://hcpp20334.github.io/Calc/' } }]]
        }
    });
});

bot.onText(/\/doom3d/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Нажми, чтобы открыть Mini App:', {
        reply_markup: {
            inline_keyboard: [[{ text: 'Открыть Mini App', web_app: { url: 'https://hcpp20334.github.io/DOOMJS' } }]]
        }
    });
});

bot.onText(/\/AMD/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Слава АМД!! Слава Лизе Су !! Слава С++');
});

bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, helpStringData);
});
bot.onText(/\/sweetbreads/, (msg) => {
    const chatId = msg.chat.id;
    let gamefile = "PahomEngine.zip";
    bot.sendMessage(chatId, projectinfo);
    bot.sendDocument(chatId,gamefile);
});
bot.onText(/\/user/, (msg) => {
    const chatId = msg.chat.id;
    let userId = msg.from.id;
    bot.sendMessage(chatId, `Твой user_id: @${userId} username: @${msg.from.username}`);
});

bot.onText(/\/bread/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Завтрак испортится!');
});
bot.onText(/\/чисти/, (msg) => {
    const chatId = msg.chat.id;
    let filePath = "output_video.mp4"; // Путь к видеофайлу
    bot.sendVideoNote(chatId, filePath ,{
        duration: 60
    });
});
bot.onText(/\/пидорас/, (msg) => {
    const chatId = msg.chat.id;
    let filePath = "./pidoras.wav";
    bot.sendVoice(chatId, filePath);
});

bot.onText(/\/vpn/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Скачай v2RayTun \nandroid: https://play.google.com/store/apps/details?id=com.v2raytun.android&hl=ru \nIOS: https://apps.apple.com/ru/app/v2raytun/id6476628951 \nWindows: Invisible Man XRAY: https://github.com/InvisibleManVPN/InvisibleMan-XRayClient/releases/download/v3.2.5/InvisibleManXRay-x64.zip\n\n ключ: ||vless://838c3e81-a577-4e14-9703-b99dda3ef01b@83.147.252.99:57780?type=tcp&encryption=none&security=reality&pbk=KE3wrmGoDKyy88lZxDk15GhnW6zv8uOLBBpsxOCfCTI&fp=chrome&sni=st.ozone.ru&sid=cc&spx=%2F#test-kpihaqdx||');
});

bot.onText(/\/sendfile (\d+) (.+)/, async (msg, match) => {
    const chatId = match[1]; // ID чата (например, 5118732199)
    const fileName = match[2]; // Имя файла (например, ImPlayer.zip)
    const filePath = path.join(__dirname, fileName); // Формируем полный путь к файлу

    // Проверка существования файла
    if (!fs.existsSync(filePath)) {
        bot.sendMessage(chatId, `Ошибка: Файл ${fileName} не найден в корне проекта.`);
        console.error('Файл не найден:', filePath);
        return;
    }

    // Проверка размера файла (ограничение Telegram до 50 МБ)
    const stats = fs.statSync(filePath);
    const fileSizeInMB = stats.size / (1024 * 1024);
    if (fileSizeInMB > 50) {
        bot.sendMessage(chatId, `Ошибка: Файл слишком большой (${fileSizeInMB.toFixed(2)} МБ). Максимум 50 МБ.`);
        console.error('Файл слишком большой:', fileSizeInMB.toFixed(2), 'МБ');
        return;
    }

    // Отправка файла
    try {
        await bot.sendDocument(chatId, filePath, { caption: fileName });
        bot.sendMessage(chatId, 'Файл успешно отправлен!');
        console.log(`Файл ${fileName} отправлен в чат ${chatId}`);
    } catch (error) {
        console.error('Ошибка отправки:', error.message);
        bot.sendMessage(chatId, `Ошибка при отправке файла: ${error.message}`);
    }
});
let previousData = "";
bot.onText(/\/getapi (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    let url = match[1].trim();

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = `https://${url}`;
    }

    try {
        const start = Date.now();
        const response = await axios.get(url, { timeout: 5000 });
        const time = Date.now() - start;

        if (response.status >= 200 && response.status < 300) {
            const data = response.data;
            if (JSON.stringify(data) !== JSON.stringify(previousData)) {
                api_log(JSON.stringify(data));
                previousData = data;
                bot.sendMessage(chatId, `Ответ от ${url} (${time}ms):\n${JSON.stringify(data, null, 2)}`);
            } else {
                bot.sendMessage(chatId, `Данные от ${url} не изменились (${time}ms).`);
            }
        } else {
            bot.sendMessage(chatId, `Сайт ${url} ответил с кодом: ${response.status} (${time}ms)`);
        }
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            bot.sendMessage(chatId, `Ошибка: запрос к ${url} превысил таймаут (5 секунд)`);
        } else {
            bot.sendMessage(chatId, `Ошибка при запросе к ${url}: ${error.message}`);
        }
    }
});

bot.onText(/\/MAX/, async (msg) => {
    const chatId = msg.chat.id;
    let url = "https://api.2ip.io/?token=scbl9m73lqki9cr5&lang=ru";

    try {
        const start = Date.now();
        const response = await axios.get(url, { timeout: 5000 });
        const time = Date.now() - start;

        if (response.status >= 200 && response.status < 300) {
            const data = response.data;
            if (JSON.stringify(data) !== JSON.stringify(previousData)) {
                api_log(JSON.stringify(data));
                bot.sendMessage(chatId, `Ответ от ${url} (${time}ms):\n${JSON.stringify(data, null, 2)}`);
            } else {
                bot.sendMessage(chatId, `Данные от ${url} не изменились (${time}ms).`);
            }
        } else {
            bot.sendMessage(chatId, `Сайт ${url} ответил с кодом: ${response.status} (${time}ms)`);
        }
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            api_log(`Ошибка: запрос к ${url} превысил таймаут (5 секунд)`);
            console.log(`Ошибка: запрос к ${url} превысил таймаут (5 секунд)`);
            bot.sendMessage(chatId, `Ошибка!!`);
        } else {
            api_log(`Ошибка при запросе к ${url}: ${error.message}`);
            console.log(`Ошибка при запросе к ${url}: ${error.message}`);
        }
    }
});

let consoleLogsStr = "";
bot.onText(/\/logs/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, consoleLogsStr);
});

bot.on('message', (msg) => {
    let currentDate = new Date().getDay() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() + "::" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    const chatId = msg.chat.id;
    let userId = msg.from.id;
    let ilogCount = 0;
    ilogCount++;
    api_log(`(${ilogCount}) chat_id: ${chatId} user_id: ${userId} username: @${msg.from.username} ${msg.text} date: ${currentDate}`);
    console.log(ilogCount, "chat_id:", chatId, "user_id:", userId, "username: @", msg.from.username, msg.text, "date:", currentDate);
    consoleLogsStr += `\nchat_id: ${chatId} user_id: ${userId} username: @${msg.from.username} ${msg.text} date: ${currentDate}`;

    
    if(msg.from.userid == "8008081576"){
        bot.sendChatAction(chatId, 'typing');
        bot.sendMessage(chatId, `Свинка пидорас!!`);
    }
    if (msg.text.toLowerCase() === "амд говно") {
        bot.sendChatAction(chatId, 'typing');
        bot.sendMessage(chatId, `Интел хуета и ты сын тайской шлюхи, которого ебали негры. И тебе каждый день по губам вводит хуем Лип-Бу Тан`);
    }
    if (msg.text.toLowerCase() === "амд") {
        bot.sendChatAction(chatId, 'typing');
        bot.sendMessage(chatId, `амд - это лучшие процы. Слава АМД. Интел хуета для пидоров`);
    }
    if (msg.text.toLowerCase() === "интел хуета") {
        bot.sendChatAction(chatId, 'typing');
        bot.sendMessage(chatId, `Интел хуета - согласен братишка! Уважаемо.`);
    }
    if (msg.text.toLowerCase() === "пыня") {
        bot.sendChatAction(chatId, 'typing');
        bot.sendMessage(chatId, `пыня пидор, путин пидор.РКН - соси хуй`);
    }
    if (msg.text.toLowerCase() === "я там срал") {
        bot.sendChatAction(chatId, 'typing');
        bot.sendMessage(chatId, `Пидорас обосрался!!`);
    }
    if (msg.text.toLowerCase() === "я там срал") {
        bot.sendChatAction(chatId, 'typing');
        bot.sendMessage(chatId, `Пидорас обосрался!!`);
    }
    if (msg.text.toLowerCase() === "чисти говно") {
        bot.sendChatAction(chatId, 'typing');
        let filePath = "./vilka.png";
        bot.sendPhoto(chatId, filePath);
    }
    if (msg.text.toLowerCase() === "завтрак испортится!") {
        bot.sendChatAction(chatId, 'typing');
        bot.sendMessage(chatId, `Покушать!!`);
        bot.sendPhoto(chatId, "https://hcpp20334.github.io/SWEET%20BREADS/PahomEngine/assets/bread.png");
    }
    if (msg.text.toLowerCase() === "ркн соси") {
        bot.sendChatAction(chatId, 'typing');
        bot.sendMessage(chatId, 'Нажми, чтобы открыть Mini App:', {
            reply_markup: {
                inline_keyboard: [[{ text: 'Открыть Сайт', web_app: { url: 'https://hcpp20334.github.io/XVPN/guide.html' } }]]
            }
        });
    }
    if (msg.text.toLowerCase() === "!я") {
        bot.sendChatAction(chatId, 'typing');
        if(msg.from.username == "dimaxpvista"){
            bot.sendChatAction(chatId, 'typing');
            bot.sendMessage(chatId, `Полковник`);
        }
        if(msg.from.username == "HCPPSTUDIO"){
            bot.sendMessage(chatId, `Братишка!! И мой создатель). С++ Разраб`);
        }
        if(msg.from.username == "hua_lily"){
            bot.sendMessage(chatId, `Тая))`);
        }
        if(msg.from.username == "Terminator777_2"){
            bot.sendMessage(chatId, `Романыч (интелбой)`);
        }
        if(msg.from.username = "buxoykitaec"){
            bot.sendMessage(chatId, `Саня (тазоеб))`);
        }
        
    }
    if(msg.text.toLowerCase() == "пидорас"){
        let filePath = "./pidoras.wav";
        bot.sendVoice(chatId, filePath);
    }
    if (msg.text.toLowerCase() === "чисти") {
        let filePath = "output_video.mp4"; // Путь к видеофайлу
        bot.sendVideoNote(chatId, filePath ,{
            duration: 60
        });
    }
});
