@echo off
cd /d "%~dp0..\.."
echo Limpando tabela historica e realizando carga limpa do CSV...
npm run import:csv:clear
pause