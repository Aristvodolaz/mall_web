const express = require('express');
const path = require('path');
const app = express();

// Настройка шаблонов EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware для статики
app.use(express.static(path.join(__dirname, 'public')));


// Middleware для обработки данных из формы
app.use(express.urlencoded({ extended: true })); 
// Маршруты
const movies = [
    {
      id: 1,
      title: "Любовь Советского Союза",
      genre: "история, драма",
      image: "/images/event1.jpg",
      description: "Описание фильма: история о любви и испытаниях во времена СССР."
    },
    {
      id: 2,
      title: "Руки Вверх!",
      genre: "музыкальный",
      image: "/images/event3.jpg",
      description: "Музыкальный концерт известной группы с удивительными сюрпризами."
    },
    {
      id: 3,
      title: "Астрал. Игры призраков",
      genre: "хоррор",
      image: "/images/event2.jpg",
      description: "Хоррор о столкновении с мистическими силами."
    },
    {
      id: 4,
      title: "Огниво",
      genre: "приключения, фэнтези",
      image: "/images/event2.jpg",
      description: "Сказочное путешествие юного героя в мир магии."
    },
    {
      id: 5,
      title: "Федя. Народный футболист",
      genre: "спорт, драма",
      image: "/images/event3.jpg",
      description: "Спортивная драма о пути к успеху."
    }
  ];
  
  // Маршрут главной страницы
  app.get('/', (req, res) => {
    res.render('index', { movies });
  });
  
  app.get('/movies', (req, res) => {
    res.render('movies', { movies }); // Передаем список всех фильмов
});

  // Маршрут для отдельного фильма

  app.get('/movie/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (movie) {
        res.render('movie-detail', { movie });
    } else {
        res.status(404).send('Фильм не найден');
    }
});

app.get('/shops', (req, res) => {
    res.render('shops');
});

app.get('/entertainment', (req, res) => {
    res.render('events', { events: mockEvents }); // Передаем список событий в шаблон "events.ejs"
});


app.get('/map', (req, res) => {
    res.render('map');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/events/:id', (req, res) => {
    const eventId = parseInt(req.params.id); // Получаем ID события из URL
    const event = mockEvents.find(e => e.id === eventId); // Ищем событие по ID

    if (event) {
        res.render('event-detail', { event }); // Отображаем страницу с деталями события
    } else {
        res.status(404).send('Событие не найдено'); // Если событие не найдено
    }
});


app.get('/reserve', (req, res) => {
    const eventName = req.query.eventName || '';
    res.render('reserve', { eventName });
});

app.post('/reserve', (req, res) => {
    const { name, date, time, guests } = req.body;

    // After processing reservation
    res.render('reserve-success', { name, date, time, guests });
});



// app.post('/reserve', (req, res) => {
//     const { name, date, time, guests } = req.body;
//     console.log(`Бронирование: Имя: ${name}, Дата: ${date}, Время: ${time}, Гостей: ${guests}`);
//     res.render('reserve-success', { name, date, time, guests });
// });

// Mock данные событий
const mockEvents = [
    { id: 1, title: 'Концерт группы Руки Вверх', date: '2025-01-20', description: 'Концерт популярной группы.', location: 'Зал 1' },
    { id: 2, title: 'Выставка современного искусства', date: '2025-02-15', description: 'Лучшие работы современных художников.', location: 'Галерея 3' },
    { id: 3, title: 'Кулинарный мастер-класс', date: '2025-03-10', description: 'Узнайте секреты шеф-поваров.', location: 'Ресторан Di Marko' }
];

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
