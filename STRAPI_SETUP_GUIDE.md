# Руководство по настройке Strapi для сайта

Это руководство поможет настроить Strapi CMS для управления контентом сайта.

## Доступ к Strapi

Strapi CMS доступен по адресу: https://strapi.a-t-group.ru/admin

## Настройка CORS для взаимодействия с основным сайтом

Для корректной работы API Strapi с основным сайтом https://a-t-group.ru/ необходимо настроить CORS:

1. Войдите в админ-панель Strapi: https://strapi.a-t-group.ru/admin
2. Перейдите в раздел "Settings" -> "Security" -> "CORS"
3. В поле "Origin" добавьте домен https://a-t-group.ru
4. Сохраните настройки

Если CORS настроен правильно, вы должны увидеть "Access-Control-Allow-Origin: https://a-t-group.ru" в заголовках ответа при обращении к API Strapi с сайта a-t-group.ru.

## Настройка Nginx для проксирования запросов

Приложение React запускается на порту 8080. Для доступа к нему через домен a-t-group.ru, необходимо настроить Nginx:

1. Отредактируйте конфигурацию Nginx на сервере:

```bash
sudo nano /etc/nginx/sites-available/a-t-group.ru
```

2. Добавьте следующую конфигурацию:

```nginx
server {
    listen 80;
    server_name a-t-group.ru www.a-t-group.ru;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

3. Создайте символическую ссылку и перезапустите Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/a-t-group.ru /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

## Создание типов контента в Strapi

Настройте следующие типы контента в Strapi:

### 1. Коллекция "Pages" (Страницы)

Создайте новый тип коллекции "Pages" со следующими полями:

- `title` (Text): Заголовок страницы
- `slug` (UID): Уникальный идентификатор страницы (например, "home", "about", "services")
- `metaTitle` (Text): SEO заголовок
- `metaDescription` (Text): SEO описание
- `backgroundImage` (Media): Фоновое изображение страницы
- `mapTitle` (Text): Заголовок для раздела с картой (только для домашней страницы)
- `mapBackgroundImage` (Media): Фоновое изображение для раздела с картой (только для домашней страницы)

### 2. Коллекция "Components" (Компоненты)

Создайте новый тип коллекции "Components" со следующими полями:

- `name` (Text): Название компонента (например, "hero", "services", "advantages")
- `data` (JSON): Данные компонента в формате JSON

### 3. Коллекция "Services" (Услуги)

Создайте новый тип коллекции "Services" со следующими полями:

- `title` (Text): Название услуги
- `description` (Rich Text): Описание услуги
- `iconName` (Text): Название иконки (например, "truck", "package", "globe")
- `linkTo` (Text): Ссылка на страницу услуги
- `image` (Media): Изображение услуги

### 4. Одиночный тип "Global" (Глобальные настройки)

Создайте новый одиночный тип "Global" со следующими полями:

- `siteName` (Text): Название сайта
- `siteDescription` (Text): Описание сайта
- `contactInfo` (Component):
  - `email` (Email): Контактный email
  - `phone` (Text): Контактный телефон
  - `address` (Text): Адрес
  - `workingHours` (Text): Часы работы
- `socialLinks` (Component):
  - `facebook` (Text): Ссылка на Facebook
  - `instagram` (Text): Ссылка на Instagram
  - `telegram` (Text): Ссылка на Telegram
  - `whatsapp` (Text): Ссылка на WhatsApp
- `logo` (Media): Логотип сайта
- `footerText` (Rich Text): Текст в подвале сайта
- `copyrightText` (Text): Текст копирайта

### 5. Одиночный тип "Navigation" (Навигация)

Создайте новый одиночный тип "Navigation" со следующими полями:

- `items` (Repeatable Component):
  - `title` (Text): Название пункта меню
  - `url` (Text): URL пункта меню
  - `order` (Number): Порядок отображения
  - `isActive` (Boolean): Активен ли пункт меню

## Настройка разрешений API

1. Перейдите в раздел "Settings > USERS & PERMISSIONS PLUGIN > Roles".
2. Выберите роль "Public".
3. В разделе "Permissions" включите следующие разрешения:
   - Pages: find и findOne
   - Components: find и findOne
   - Services: find и findOne
   - Global: find
   - Navigation: find
4. Нажмите "Save" для сохранения настроек.

## Заполнение контентом

1. Создайте запись в коллекции "Pages" для главной страницы:
   - title: Главная страница
   - slug: home
   - metaTitle: Алекстранс - Грузоперевозки в Иркутске и области
   - metaDescription: Надежные грузоперевозки по России и миру. Профессиональные логистические решения для вашего бизнеса в Иркутске и области.

2. Создайте запись в коллекции "Components" для секции Hero:
   - name: hero
   - data: 
```json
{
  "title": "Надежные грузоперевозки по России и миру",
  "subtitle": "Профессиональные логистические решения для вашего бизнеса в Иркутске и области",
  "calculatorButtonText": "Рассчитать стоимость",
  "contactButtonText": "Оставить заявку",
  "contactCard": {
    "title": "Всегда на связи",
    "workingHours": "Пн-Пт: 9:00 - 18:00",
    "address": "г. Иркутск, ул. Транспортная, 25",
    "deliveryArea": "По всей России и СНГ"
  }
}
```

3. Создайте другие необходимые компоненты и страницы по аналогии.

## Проверка API

Вы можете проверить работу API, открыв следующие URL:

- https://strapi.a-t-group.ru/api/pages
- https://strapi.a-t-group.ru/api/components
- https://strapi.a-t-group.ru/api/services
- https://strapi.a-t-group.ru/api/global
- https://strapi.a-t-group.ru/api/navigation

## Использование в React-приложении

В React-приложении уже настроено взаимодействие со Strapi API через useStrapiContext(). Компоненты будут автоматически загружать данные из Strapi, как только они будут доступны в API.

## Обновление контента

1. Войдите в панель администратора Strapi: https://strapi.a-t-group.ru/admin
2. Перейдите к нужному типу контента (Pages, Components, Services и т.д.)
3. Отредактируйте существующие записи или создайте новые
4. Нажмите "Save" для сохранения изменений

Изменения контента в Strapi автоматически отразятся на сайте без необходимости перезапуска приложения. 