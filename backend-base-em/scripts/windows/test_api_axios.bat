@echo off
cd /d "%~dp0..\.."
echo Disparando suite integrada de testes utilizando chamadas Axios...
npm run test:api
pause