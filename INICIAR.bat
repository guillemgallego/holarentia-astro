@echo off
echo ==========================================
echo    INICIANDO PROYECTO HOLA RENTIA
echo ==========================================
echo.
echo 1. Instalando librerias (esto puede tardar...)...
call npm install
echo.
echo 2. Encendiendo el servidor...
echo Una vez que veas "Local: http://localhost:4321", abre ese link en tu navegador.
echo.
npm run dev
pause
