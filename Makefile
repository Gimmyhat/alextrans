# Makefile для проекта AlexTrans

# Переменные
PROJECT_NAME = alextrans
NGINX_SITE_DIR = /var/www/a-t-group.ru/html
DOCKER_TAG = $(PROJECT_NAME):latest

# Команды разработки
.PHONY: install
install:
	npm install

.PHONY: dev
dev:
	npm run dev

.PHONY: build
build:
	npm run build

# Тесты
.PHONY: test-telegram
test-telegram:
	node test-telegram.js

.PHONY: test-forms
test-forms:
	node test-forms.js

# Команды для ручного деплоя
.PHONY: deploy-manual
deploy-manual: build
	@echo "Копирование файлов в директорию Nginx..."
	cp -r dist/* $(NGINX_SITE_DIR)/
	@echo "Обновление env-config.js..."
	cat .env | sed 's/VITE_/"/g' | sed 's/=/": "/g' | sed 's/$$/",/g' | sed '1s/^/window.env = {\n/' | sed '$$s/,$$/\n}/' > $(NGINX_SITE_DIR)/env-config.js
	@echo "Перезапуск Nginx..."
	sudo systemctl restart nginx
	@echo "Деплой завершен. Сайт доступен по адресу https://a-t-group.ru/"

.PHONY: deploy-manual-fast
deploy-manual-fast:
	cp -r dist/* $(NGINX_SITE_DIR)/
	@echo "Обновлены только статические файлы. Для обновления env-config.js используйте команду deploy-manual."

# Команды для Docker
.PHONY: docker-build
docker-build:
	docker build -t $(DOCKER_TAG) .

.PHONY: docker-run
docker-run:
	docker run -p 8080:80 --env-file .env $(DOCKER_TAG)

.PHONY: docker-compose-up
docker-compose-up:
	docker-compose up -d

.PHONY: docker-compose-down
docker-compose-down:
	docker-compose down

.PHONY: docker-compose-restart
docker-compose-restart:
	docker-compose down
	docker-compose up -d

.PHONY: docker-deploy
docker-deploy:
	git pull
	docker-compose up -d --build

# Утилиты
.PHONY: env-setup
env-setup:
	cp .env.example .env
	@echo "Создан .env файл. Отредактируйте его, указав корректные значения переменных"
	@echo "window.env = {};" > public/env-config.js
	@echo "Создан пустой env-config.js для локальной разработки"

.PHONY: clean
clean:
	rm -rf dist
	@echo "Удалена директория dist/"

.PHONY: help
help:
	@echo "Доступные команды:"
	@echo "  make install              - Установка зависимостей"
	@echo "  make dev                  - Запуск сервера разработки"
	@echo "  make build                - Сборка проекта"
	@echo "  make test-telegram        - Тест отправки сообщений в Telegram"
	@echo "  make test-forms           - Тест всех форм"
	@echo "  make deploy-manual        - Ручной деплой на Nginx сервер"
	@echo "  make deploy-manual-fast   - Быстрый деплой (только статические файлы)"
	@echo "  make docker-build         - Сборка Docker образа"
	@echo "  make docker-run           - Запуск проекта в Docker контейнере"
	@echo "  make docker-compose-up    - Запуск контейнеров через docker-compose"
	@echo "  make docker-compose-down  - Остановка контейнеров"
	@echo "  make docker-compose-restart - Перезапуск контейнеров"
	@echo "  make docker-deploy        - Обновление и перезапуск Docker контейнеров"
	@echo "  make env-setup            - Настройка окружения для разработки"
	@echo "  make clean                - Очистка директории сборки"

# По умолчанию показываем справку
.DEFAULT_GOAL := help 