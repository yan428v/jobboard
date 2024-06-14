#!/bin/bash

# Устанавливаем переменную filename равной имени этого файла (без расширения .sh)
filename=$(basename "$0" .sh)

# Переходим в директорию с вашим локальным репозиторием Git
cd /path/to/your/repository

# Выполняем команды Git
git add .
git commit -m "$filename"
git push
