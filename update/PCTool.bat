
title PCTool by HCPP
:main
@echo off
color 09
mode con cols=47 lines=18
cls
echo ----------------------------------------------
echo   PCTool v 1.0.3
echo ----------------------------------------------
echo .
echo . (1) - Active windows
echo . (2) - Download Center
echo . (3) - regedit dumper
echo . (4) - Uninstaller
echo . (5) - Admin user
echo . (6) - Test mode
echo . (7) - Exit
echo .
echo ----------------------------------------------
set /p menu_sel=
if  %menu_sel%==1 goto WinAc
if  %menu_sel%==2 goto sp_a
if  %menu_sel%==3 goto rg_dump
if  %menu_sel%==4 goto dl_edge
if  %menu_sel%==5 goto ad_tls
if  %menu_sel%==6 goto ts_mode
if  %menu_sel%==7 exit
:ts_mode
cls
echo ----------------------------------------------
echo   TEST MODE 
echo ----------------------------------------------
echo .
echo . (1) - on
echo . (2) - off
echo . (3) - back
echo .
echo ----------------------------------------------
set /p ts_state=
if %ts_state%==1 bcdedit /set TESTSIGNING on
if %ts_state%==2 bcdedit /set TESTSIGNING off
if %ts_state%==3 goto main
:ad_tls
cls
echo ----------------------------------------------
echo   Admin user
echo ----------------------------------------------
echo .
echo . (1) - on
echo . (2) - off
echo . (3) - back
echo .
echo ----------------------------------------------
set /p admin_state=
if %admin_state%==1 net user Администратор /active:on
if %admin_state%==2 net user Администратор /active:off
if %admin_state%==3 goto main
:dl_edge
cls
echo ----------------------------------------------
echo   Uninstaller
echo ----------------------------------------------
echo . (1) - microsoft edge
echo . (2) - Exit
set /p dl_menu=
if  %dl_menu%==1 goto dlE
if  %dl_menu%==2 goto sp_a
:dlE
echo deleting..
rd /S /Q C:\Windows\SystemApps\Microsoft.MicrosoftEdge_8wekyb3d8bbwe
rd /s /q C:\Windows\SystemApps\Microsoft.MicrosoftEdgeDevToolsClient_8wekyb3d8bbwe
rd /s /q %ProgramFiles(x86)%/Microsoft/Edge/Application
cd %ProgramFiles(x86)%
cd Microsoft
cd Edge
cd Application
taskkill /f /im msedge.exe
del /f msedge.exe
echo deleted!
goto main
:WinAc
mode con cols=60 lines=38
cls
echo ----------------------------------------------
echo   Windows activitor(need internet) 
echo ----------------------------------------------
echo . *******************************************
echo . please run PCTool.bat to admin
echo . *******************************************
echo . (0)  - back
echo . (1)  - Windows 10 LTSC
echo . (2)  - Windows 10 PRO
echo . (3)  - Windows 10 HOME
echo . (4)  - Windows 8(PRO)
echo . (5)  - Windows 8(embeded)
echo . (6)  - Windows Server 2022 Datacenter
echo . (7)  - Windows Server 2022 Standard
echo . (8)  - Windows Server 2019 Datacenter
echo . (9)  - Windows Server 2019 Standard
echo . (10) - Windows Server 2019 Essentials
echo . (11) - Windows Server 2016 Datacenter
echo . (12) - Windows Server 2016 Standard
echo . (13) - Windows Server 2016 Essentials
echo . (14) - Windows Server Datacenter(Semi-Annual Channel)
echo . (15) - Windows Server Standard(Semi-Annual Channel)
echo . (16) - Windows 11 pro and Windows 10 pro
echo . (17) - Windows 11 Pro N and Windows 10 Pro N
echo . (18) - Windows 11 Pro,Windows 10 Pro work station
echo . (19) - Windows 11 Pro,Windows 10 Pro work station N
echo . (20) - Windows 11,10 corparation edition N
echo . (21) - Windows 10 corparation N LTSB 2016
echo . (22) - Windows 10 corparation  LTSB 2016
echo . (23) - Windows 8.1 pro
echo . (24) - Windows 8.1 Pro N
echo . (25) - Windows 8.1 corparation
echo . (26) - Windows 8.1 corparation N
echo . (27) - Windows 7 pro
echo . (28) - Windows 7 corparation
echo . (29) - Windows Vista Business
echo . (30) - Windows Vista Enterprise
echo ----------------------------------------------
set /p ver_a=
echo Please wait..
if %ver_a%==0 goto main 
if %ver_a%==1 goto LTSC ,  else color b1
if %ver_a%==2 goto PRO  ,  else color b1
if %ver_a%==3 goto HOME ,  else color b1
if %ver_a%==4 goto win8_pro
if %ver_a%==5 goto win8_emd
if %ver_a%==6 goto win_ser_Datacenter_2022
if %ver_a%==7 goto win_ser_standard_2022
if %ver_a%==8 goto win_ser_Datacenter_2019
if %ver_a%==9 goto win_ser_standard_2019
if %ver_a%==10 goto win_ser_Essentials_2019
if %ver_a%==11 goto win_ser_Datacenter_2016
if %ver_a%==12 goto win_ser_std_2016
if %ver_a%==13 goto win_ser_Essentials_2016
if %ver_a%==14 goto win_ser_data_sac
if %ver_a%==15 goto win_ser_std_sac
if %ver_a%==16 goto win11_10_pro
if %ver_a%==17 goto win11_10_proN
if %ver_a%==18 goto win11_10_pro_wStation
if %ver_a%==19 goto win11_10_pro_wStationN
if %ver_a%==20 goto win11_10_corpN
if %ver_a%==21 goto win11_10_corpN_2016
if %ver_a%==22 goto win11_10_corp_2016
if %ver_a%==23 goto win8_1_pro
if %ver_a%==24 goto win8_1_proN
if %ver_a%==25 goto win8_1_corp
if %ver_a%==26 goto win8_1_corpN
if %ver_a%==27 goto win7_pro
if %ver_a%==28 goto win7_corp
if %ver_a%==29 goto win_vistaB
if %ver_a%==30 goto win_vistaE
if %ver_a%==31 color 0f
goto main
:win8_emd
slmgr /ipk NG4HW-VH26C-733KW-K6F98-J8CK4
slmgr /skms kms.digiboy.ir
slmgr /ato
goto main
:win8_pro
slmgr /ipk MHF9N-XY6XB-WVXMC-BTDCT-MKKG7
slmgr /skms kms.digiboy.ir
slmgr /ato 
:LTSC
echo Win10 LTSC->activation..>>rgDumper.log
slmgr /ipk M7XTQ-FN8P6-TTKYV-9D4CC-J462D
slmgr /skms kms.digiboy.ir
slmgr /ato
goto main
:PRO
echo Win10 PRO->activation..>>rgDumper.log
slmgr /ipk FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4
slmgr /skms kms.digiboy.ir
slmgr /ato
goto main
:HOME
echo Win10 HOME>activation..>>rgDumper.log
slmgr /ipk M7XTQ-FN8P6-TTKYV-9D4CC-J462D
slmgr /skms kms.digiboy.ir
slmgr /ato
goto main
:win_ser_Datacenter_2022
slmgr /ipk WX4NM-KYWYW-QJJR4-XV3QB-6VM33
slmgr /skms kms.digiboy.ir
slmgr /ato
goto main
:win_ser_standard_2022
slmgr /ipk VDYBN-27WPP-V4HQT-9VMD4-VMK7H
slmgr /skms kms.digiboy.ir
slmgr /ato
:win_ser_Datacenter_2019
slmgr /ipk WMDGN-G9PQG-XVVXX-R3X43-63DFG
slmgr /skms kms.digiboy.ir
slmgr /ato
goto main
:win_ser_standard_2019
slmgr /ipk 	N69G4-B89J2-4G8F4-WWYCC-J464C
slmgr /skms kms.digiboy.ir
slmgr /ato
:win_ser_std_2016
slmgr /ipk WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY
slmgr /skms kms.digiboy.ir
slmgr /ato
:win_ser_Essentials_2016
slmgr /ipk 	JCKRF-N37P4-C2D82-9YXRT-4M63B
slmgr /skms kms.digiboy.ir
slmgr /ato
goto main
:win_ser_data_sac
slmgr /ipk 	6NMRW-2C8FM-D24W7-TQWMY-CWH2D
slmgr /skms kms.digiboy.ir
slmgr /ato
:win_ser_std_sac
slmgr /ipk N2KJX-J94YW-TQVFB-DG9YT-724CC
slmgr /skms kms.digiboy.ir
slmgr /ato
:win11_10_pro
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
slmgr /skms kms.digiboy.ir
slmgr /ato
:win11_10_proN
slmgr /ipk MH37W-N47XK-V7XM9-C7227-GCQG9
slmgr /skms kms.digiboy.ir
slmgr /ato
:win11_10_pro_wStation
slmgr /ipk NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J
slmgr /skms kms.digiboy.ir
slmgr /ato
goto main
:win11_10_corpN
slmgr /ipk DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4
slmgr /skms kms.digiboy.ir
slmgr /ato
:win11_10_corpN_2016
slmgr /ipk QFFDN-GRT3P-VKWWX-X7T3R-8B639
slmgr /skms kms.digiboy.ir
slmgr /ato
:win11_10_corp_2016
slmgr /ipk DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ
slmgr /skms kms.digiboy.ir
slmgr /ato
:win8_1_pro
slmgr /ipk GCRJD-8NW9H-F2CDX-CCM8D-9D6T9
slmgr /skms kms.digiboy.ir
slmgr /ato
:win8_1_proN
slmgr /ipk HMCNV-VVBFX-7HMBH-CTY9B-B4FXY
slmgr /skms kms.digiboy.ir
slmgr /ato
goto main
:win8_1_corp
slmgr /ipk MHF9N-XY6XB-WVXMC-BTDCT-MKKG7
slmgr /skms kms.digiboy.ir
slmgr /ato
:win8_1_corpN
slmgr /ipk MHF9N-XY6XB-WVXMC-BTDCT-MKKG7
slmgr /skms kms.digiboy.ir
slmgr /ato
:win7_pro
slmgr /ipk FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4
slmgr /skms kms.digiboy.ir
slmgr /ato
:win7_corp
slmgr /ipk 33PXH-7Y6KF-2VJC9-XBBR8-HVTHH
slmgr /skms kms.digiboy.ir
slmgr /ato
:win_vistaB
slmgr /ipk YFKBB-PQJJV-G996G-VWGXY-2V3X8
slmgr /skms kms.digiboy.ir
slmgr /ato
:win_vistaE
slmgr /ipk VKK3X-68KWM-X2YGT-QR4M6-4BWMV
slmgr /skms kms.digiboy.ir
slmgr /ato
goto main
:sp_a
mode con cols=47 lines=20
color 0a
cls
echo ----------------------------------------------
echo  download center (need internet)
echo ----------------------------------------------
echo .
echo . 
echo . (1) Скачать MSC++ из под консоли
echo . (2) Скачать MSC++ с TechPower самому
echo . (3) Скачать DirectX 
echo . (4) Скачать NET Framework 4.5
echo . (5) Скачать MS Edge 
echo ----------------------------------------------
set /p ff=
if %ff%==1 goto 7z_ab
if %ff%==2 start https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/
if %ff%==3 goto DX_0a
if %ff%==4 goto NetFr_0a
if %ff%==5 powershell Invoke-WebRequest 'https://edgeupdates.microsoft.com/api/products?view=enterprise' -outfile './downloads/ist_msedge.msi'
goto main
:DX_0a
cls
echo ----------------------------------------------
echo  download DirectX .. microsoft
echo ----------------------------------------------
echo .
echo . 

echo . 
echo . 
echo ----------------------------------------------
powershell Invoke-WebRequest 'https://download.microsoft.com/download/1/7/1/1718CCC4-6315-4D8E-9543-8E28A4E18C4C/dxwebsetup.exe' -outfile 'dxs.exe'
start ./dxs.exe
goto main
:NetFr_0a
cls
echo ----------------------------------------------
echo  Скачивание NET Framework 4.5.. microsoft
echo ----------------------------------------------
echo .
echo . 
echo . Downloading...
echo . 
echo . 
echo ----------------------------------------------
powershell Invoke-WebRequest 'https://download.microsoft.com/download/B/A/4/BA4A7E71-2906-4B2D-A0E1-80CF16844F5F/dotNetFx45_Full_setup.exe' -outfile 'nt45.exe'
start ./nt45.exe
goto main
:7z_ab
cls
echo for unpack need 7zip!!
echo -----------------------------------------------
echo .                                              
echo .     you installed 7zip?                                         
echo .                                              
echo .    (1) - yes     (2) -  no
echo .       
echo -----------------------------------------------     
set /p e0a=
if %e0a%==1 goto vs_rt
if %e0a%==2 goto 7z_s 
goto main   
:7z_s
cls
echo ----------------------------------------------
echo  downloading 7zip.. 7zip.org 
echo ----------------------------------------------
echo .
echo . 
echo . Downloading..
echo . 
echo . 
echo ----------------------------------------------
powershell Invoke-WebRequest 'https://www.7-zip.org/a/7z2301-x64.exe' -outfile '7zS.exe'
start /wait ./7zS.exe
goto vs_rt
goto main                           
:vs_rt
md "./MSC"
mode con cols=47 lines=20
cls
echo ----------------------------------------------
echo  Downloading...VSC++ Runtime.. archive.org
echo ----------------------------------------------
echo .
echo . 
echo . Downloading...
echo . 
echo . 
echo ----------------------------------------------
powershell Invoke-WebRequest 'https://ia902302.us.archive.org/31/items/vsrc.-7z/VSRC++.7z' -outfile './MSC/VSC++.7z'
start ./MSC/VSC++.7z
goto main
:rg_dump
color 0f
mode con cols=47 lines=20
cls
md "./RgDumper/"
echo RgDumper - dumper regedit
echo ----------------------------------------------
echo :::  RgDumper v 1.0.1
echo ----------------------------------------------
echo .
echo . (1) import regedit
echo . (2) export(not work)
echo . (3) back
echo ----------------------------------------------
set /p cmd_a=
if %cmd_a%==1 goto import
if %cmd_a%==2 goto export
if %cmd_a%==3 goto main
goto main
:import
echo Please wait...
md "./RgDumper/" 
REG EXPORT HKLM "./RgDumper/Rg_dump0_%date%.reg">nul
echo Rg_dump0_%date%.reg - OK>>rgDumper.log
REG EXPORT HKCU "./RgDumper/Rg_dump1_%date%.reg">nul
echo Rg_dump1_%date%.reg - OK>>rgDumper.log
REG EXPORT HKCR "./RgDumper/Rg_dump2_%date%.reg">nul
echo Rg_dump2_%date%.reg - OK>>rgDumper.log
REG EXPORT HKU "./RgDumper/Rg_dump3_%date%.reg">nul
echo Rg_dump3_%date%.reg - OK>>rgDumper.log
REG EXPORT HKCC "./RgDumper/Rg_dump4_%date%.reg">nul
echo Rg_dump4_%date%.reg - OK>>rgDumper.log
goto main