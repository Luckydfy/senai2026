@echo off
cd /d "%~dp0..\.."
echo Limpando todos os registros e resetando chaves auto-incrementais...
npm run reset:leituras
pause