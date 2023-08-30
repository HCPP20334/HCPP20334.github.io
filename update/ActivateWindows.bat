@echo off
:main
cls
color f1
echo  ======================================================================================================================
echo                                                     Windows 10 Activator 
echo  ======================================================================================================================
echo  **********************************************************************************************************************
echo                   Warning!! Running to Admin!!
echo                   ############################
echo                Stable Internet Connection!!
echo ***********************************************************************************************************************
echo  1 - LTSC
echo  2 - PRO
echo  3 - Home
echo   Select Version?
echo  ======================================================================================================================
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
echo Win10 PRO>activation..
slmgr /ipk FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4
slmgr /skms kms.digiboy.ir
slmgr /ato
:HOME
echo Win10 HOME>activation..
slmgr /ipk M7XTQ-FN8P6-TTKYV-9D4CC-J462D
slmgr /skms kms.digiboy.ir
slmgr /ato

pause
goto main