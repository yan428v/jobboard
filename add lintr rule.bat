@echo off

:: Устанавливаем переменную %filename% равной имени этого файла (без расширения .bat)
set filename=%~n0

:: Переходим в директорию с вашим локальным репозиторием Git
cd /d C:\Users\prosh\Desktop\jobboard

:: Выполняем команды Git
git add .
git commit -m "%filename%"
git push

:: Ожидаем ввода пользователя для закрытия окна
pause
