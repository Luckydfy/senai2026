@echo off
cd /d "%~dp0..\.."
echo Executando importacao incremental dos dados contidos no arquivo CSV...
npm run import:csv
pause