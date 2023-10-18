@echo off
title PCTool by HCPP>>rgDumper.log
:main
color 0f
mode con cols=47 lines=10
cls
echo rev 1.0.1>>rgDumper.log
echo ----------------------------------------------
echo .
echo . (1) - Activator 
echo . (2) - Setup VSC++ (2005...2022)(not Work!!)
echo . (3) - Dump Regedit
echo . (4) - Exit
echo ----------------------------------------------
set /p menu_sel=
if  %menu_sel%==1 goto WinAc
if  %menu_sel%==2 goto sp_a
if  %menu_sel%==3 goto rg_dump
if %menu_sel%==4 exit
:WinAc
cls
echo Please turn Internet!!
echo Please run to admin!!
echo ----------------------------------------------
echo .
echo . (1) - Windows 10 LTSC
echo . (2) - Windows 10 PRO
echo . (3) - Windows 10 HOME
echo . (4) - Windows 8(PRO)
echo . (5) - Windows 8(embeded)
echo . (6) - Back to menu
echo ----------------------------------------------
set /p ver_a=
if %ver_a%==1 goto LTSC ,  else color b1
if %ver_a%==2 goto PRO  ,  else color b1
if %ver_a%==3 goto HOME ,  else color b1
if %ver_a%==4 goto win8_pro
if %ver_a%==5 goto win8_emd
if %ver_a%==6 goto main
goto main
:win8_emd
slmgr /ipk NG4HW-VH26C-733KW-K6F98-J8CK4
slmgr /skms kms.digiboy.ir
slmgr /ato
:win8_pro
slmgr /ipk MHF9N-XY6XB-WVXMC-BTDCT-MKKG7
slmgr /skms kms.digiboy.ir
slmgr /ato 
:LTSC
echo Win10 LTSC->activation..>>rgDumper.log
slmgr /ipk M7XTQ-FN8P6-TTKYV-9D4CC-J462D
slmgr /skms kms.digiboy.ir
slmgr /ato
:PRO
echo Win10 PRO->activation..>>rgDumper.log
slmgr /ipk FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4
slmgr /skms kms.digiboy.ir
slmgr /ato
:HOME
echo Win10 HOME>activation..>>rgDumper.log
slmgr /ipk M7XTQ-FN8P6-TTKYV-9D4CC-J462D
slmgr /skms kms.digiboy.ir
slmgr /ato
goto main
:sp_a
cls
echo ----------------------------------------------
echo .
echo . 
echo . (1) Install MSC++  to Console (needed Internet)
echo . (2) Redirect TechPower  (needed Internet)
echo . (3) Back to Menu
echo .
echo . 
echo ----------------------------------------------
set /p ff=
if %ff%==1 goto vs_rt
if %ff%==2 start https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/
if %ff%==3 goto main
goto main
:vs_rt
md "./MSC"
cls
echo ----------------------------------------------
echo .
echo . 
echo . Downloading VSC++ Runtime..>>rgDumper.log
echo . 
echo . 
echo ----------------------------------------------
powershell Invoke-WebRequest 'https://ia902302.us.archive.org/31/items/vsrc.-7z/VSRC++.7z' -outfile './MSC/VSC++.7z'
start ./MSC/VSC++.7z
goto main
:rg_dump
mode con cols=47 lines=20
cls
md "./RgDumper/"
echo ----------------------------------------------
echo .
echo . RgDumper v 1.0.1
echo . ------------------
echo . (1) import
echo . (2) export(not work)
echo . (3) Back to main
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