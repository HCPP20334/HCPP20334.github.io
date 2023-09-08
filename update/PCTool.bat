@echo off
title PCTool by HCPP
color 0f
mode con cols=47 lines=10
:main
cls
echo ----------------------------------------------
echo .
echo . (1) - Activator 
echo . (2) - Setup VSC++ (2005...2022)
echo . (3) - Dump Regedit
echo ----------------------------------------------
set /p menu_sel=
if  %menu_sel%==1 goto WinAc
if  %menu_sel%==2 goto sp_a
if  %menu_sel%==3 goto rg_dump
:WinAc
cls
echo Please turn Internet!!
echo Please run to admin!!
echo ----------------------------------------------
echo .
echo . (1) - LTSC
echo . (2) - PRO
echo . (3) - HOME
echo ----------------------------------------------
set /p ver_a=
if %ver_a%==1 goto LTSC ,  else color b1
if %ver_a%==2 goto PRO  ,  else color b1
if %ver_a%==3 goto HOME ,  else color b1
goto main
:LTSC
echo Win10 LTSC->activation..
slmgr /ipk M7XTQ-FN8P6-TTKYV-9D4CC-J462D
slmgr /skms kms.digiboy.ir
slmgr /ato
:PRO
echo Win10 PRO->activation..
slmgr /ipk FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4
slmgr /skms kms.digiboy.ir
slmgr /ato
:HOME
echo Win10 HOME>activation..
slmgr /ipk M7XTQ-FN8P6-TTKYV-9D4CC-J462D
slmgr /skms kms.digiboy.ir
slmgr /ato
goto main
:sp_a
cls
echo ----------------------------------------------
echo .
echo . 
echo . (1) Install MSC++
echo .
echo . 
echo ----------------------------------------------
set /p ff=
if %ff%==1 goto vs_rt
goto main
:vs_rt
md "./MSC"
cls
echo ----------------------------------------------
echo .
echo . 
echo . Downloading VSC++ Runtime..
echo . 
echo . 
echo ----------------------------------------------
powershell Invoke-WebRequest 'https://uk1-dl.techpowerup.com/files/LOtjw4vzbi6-7QvX0R96hg/1694251132/Visual-C-Runtimes-All-in-One-May-2023.zip' -outfile './MSC/VSC++.zip'
start ./MSC/VSC++.zip
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
echo ----------------------------------------------
set /p cmd_a=
if %cmd_a%==1 goto import
if %cmd_a%==2 goto export
goto main
:import
echo Please wait...
md "./RgDumper/" 
REG EXPORT HKLM "./RgDumper/Rg_dump0_%date%.reg">nul>>rgDumper.log
echo Rg_dump0_%date%.reg - OK
REG EXPORT HKCU "./RgDumper/Rg_dump1_%date%.reg">nul>>rgDumper.log
echo Rg_dump1_%date%.reg - OK
REG EXPORT HKCR "./RgDumper/Rg_dump2_%date%.reg">nul>>rgDumper.log
echo Rg_dump2_%date%.reg - OK
REG EXPORT HKU "./RgDumper/Rg_dump3_%date%.reg">nul>>rgDumper.log
echo Rg_dump3_%date%.reg - OK
REG EXPORT HKCC "./RgDumper/Rg_dump4_%date%.reg">nul>>rgDumper.log
echo Rg_dump4_%date%.reg - OK
goto main
