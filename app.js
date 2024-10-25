const express = require('express');
const path = require('path');
const app = express();

// Настройка шаблонов EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware для статики
app.use(express.static(path.join(__dirname, 'public')));

// Маршруты
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/shops', (req, res) => {
    res.render('shops');
});

app.get('/events', (req, res) => {
    res.render('events');
});

app.get('/map', (req, res) => {
    res.render('map');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
