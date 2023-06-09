@echo off
:BEGIN
echo (1) Dev
echo (2) Dev with build
echo (3) Local
CHOICE /N /C:123 /M "Pick mode"
IF ERRORLEVEL == 3 GOTO Local
IF ERRORLEVEL == 2 GOTO Dev-Build
IF ERRORLEVEL == 1 GOTO Dev
GOTO END
:Dev
cd .theme
npm run dev
cd ..
:Dev-Build
cd .theme
npm run dev:build
cd ..
:Local
cd .theme
npm run local
cd ..
END: