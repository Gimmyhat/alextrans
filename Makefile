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

.PHONY: test-all
test-all: test-telegram test-forms

# Команды для ручного деплоя
.PHONY: deploy-manual
deploy-manual: build
	@echo "Копирование файлов в директорию Nginx..."
	cp -r dist/* $(NGINX_SITE_DIR)/
	@echo "Обновление env-config.js..."
	echo 'window.env = {' > $(NGINX_SITE_DIR)/env-config.js
	grep -E '^VITE_' .env | sed 's/VITE_\([^=]*\)=\(.*\)/  "VITE_\1": "\2",/' >> $(NGINX_SITE_DIR)/env-config.js
	sed -i '$$ s/,$$//' $(NGINX_SITE_DIR)/env-config.js
	echo '}' >> $(NGINX_SITE_DIR)/env-config.js
	@echo "Перезапуск Nginx..."
	sudo systemctl restart nginx
	@echo "Деплой завершен. Сайт доступен по адресу https://a-t-group.ru/"

.PHONY: deploy-manual-fast
deploy-manual-fast:
	cp -r dist/* $(NGINX_SITE_DIR)/
	@echo "Обновлены только статические файлы. Для обновления env-config.js используйте команду deploy-manual."

.PHONY: update-env-config
update-env-config:
	@echo "Обновление env-config.js..."
	echo 'window.env = {' > $(NGINX_SITE_DIR)/env-config.js
	grep -E '^VITE_' .env | sed 's/VITE_\([^=]*\)=\(.*\)/  "VITE_\1": "\2",/' >> $(NGINX_SITE_DIR)/env-config.js
	sed -i '$$ s/,$$//' $(NGINX_SITE_DIR)/env-config.js
	echo '}' >> $(NGINX_SITE_DIR)/env-config.js
	@echo "Перезапуск Nginx..."
	sudo systemctl restart nginx
	@echo "Файл env-config.js обновлен."

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

.PHONY: docker-compose-logs
docker-compose-logs:
	docker-compose logs -f

.PHONY: docker-deploy
docker-deploy:
	git pull
	docker-compose up -d --build

# Git команды
.PHONY: git-push
git-push:
	git add .
	git commit -m "Автоматический коммит через Makefile"
	git push

.PHONY: git-update
git-update:
	git pull

# Утилиты
.PHONY: env-setup
env-setup:
	cp .env.example .env
	@echo "Создан .env файл. Отредактируйте его, указав корректные значения переменных"
	@echo "window.env = {};" > public/env-config.js
	@echo "Создан пустой env-config.js для локальной разработки"

.PHONY: nginx-restart
nginx-restart:
	sudo systemctl restart nginx

.PHONY: nginx-status
nginx-status:
	sudo systemctl status nginx

.PHONY: clean
clean:
	rm -rf dist
	@echo "Удалена директория dist/"

.PHONY: help
help:
	@echo "Доступные команды:"
	@echo ""
	@echo "Разработка:"
	@echo "  make install              - Установка зависимостей"
	@echo "  make dev                  - Запуск сервера разработки"
	@echo "  make build                - Сборка проекта"
	@echo ""
	@echo "Тестирование:"
	@echo "  make test-telegram        - Тест отправки сообщений в Telegram"
	@echo "  make test-forms           - Тест всех форм"
	@echo "  make test-all             - Запуск всех тестов"
	@echo ""
	@echo "Ручной деплой:"
	@echo "  make deploy-manual        - Полный деплой на Nginx сервер (сборка + копирование + env-config)"
	@echo "  make deploy-manual-fast   - Быстрый деплой (только статические файлы)"
	@echo "  make update-env-config    - Обновление только env-config.js на сервере"
	@echo ""
	@echo "Docker:"
	@echo "  make docker-build         - Сборка Docker образа"
	@echo "  make docker-run           - Запуск проекта в Docker контейнере"
	@echo "  make docker-compose-up    - Запуск контейнеров через docker-compose"
	@echo "  make docker-compose-down  - Остановка контейнеров"
	@echo "  make docker-compose-restart - Перезапуск контейнеров"
	@echo "  make docker-compose-logs  - Просмотр логов контейнеров"
	@echo "  make docker-deploy        - Обновление и перезапуск Docker контейнеров"
	@echo ""
	@echo "Git:"
	@echo "  make git-push             - Коммит и пуш изменений в репозиторий"
	@echo "  make git-update           - Обновление из репозитория (git pull)"
	@echo ""
	@echo "Утилиты:"
	@echo "  make env-setup            - Настройка окружения для разработки"
	@echo "  make nginx-restart        - Перезапуск Nginx"
	@echo "  make nginx-status         - Проверка статуса Nginx"
	@echo "  make clean                - Очистка директории сборки"

# По умолчанию показываем справку
.DEFAULT_GOAL := help 