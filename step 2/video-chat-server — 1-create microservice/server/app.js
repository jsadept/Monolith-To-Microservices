// Создаем наше приложение
// 1. основа приложения будет хранится в app.js и експортироваться в index.js
// 2. добавим nodemon
// 3. Создадим базовые роуты (папка routes)
// 3.1 Создадим роут auth.js - который будет отвечть за регистрацию\авторизацию пользователя
// 3.2 в файле app нужно зарегистрировать новосозданные роуты
// 4. Создадим контрлеры (папка contollers) (функции которые будут хранить логику если пришел какой либо route) занесем туда нужную логику и вызовем при нужном route нужный contoller

// 4.1 Создадим все роуты и все контрлеры
// 5. Подключим bodyParser что бы понимать поля из request
//6. Подключим cors, morgan



//7 Создадим модели для базы даных
// 7.1 Подключим mongoose для работы с базой данных

// 8 перехордим к разработке
// 8.1 Создадим логику первого роут (в контролере) - авторизации (единственого кек)
// 8.2 начинаем регитсрации кек
// 8.3 Нужно зашифровать пароль прежде чем ложить в бд bcrypt - Однак там ошибки и зависимости -> bcryptjs без ошибок и без зависимостей
// 8.4 findOne если находит с таким же емейлом возвращаем ошибку если нет создаем пользоветля

// 8.5 Создать логику логина
// 8.6 если логин прошел то нужно вернуть токен - для генирации токена библиотека - jsonwebtoken JWT


// 9 Подключим паспорт, паспорт jwt что бы обезопасить остальные api Запросы
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const proxy = require('express-http-proxy');
const mongoose = require('mongoose');
const passport = require('passport');
const middlewarePassport = require('./middleware/passport');

const authRoutes = require('./routes/auth');
//const roomRoutes = require('./routes/room');
const userRoutes = require('./routes/user');
const notesRoutes = require('./routes/notes');
const newsRoutes = require('./routes/news');
const {mongoURI} = require("./config/keys");
const app = express();


const httpServer = require("http").createServer(app);
// const { ExpressPeerServer } = require("peer");
// const peerServer = ExpressPeerServer(httpServer, {
//     debug: true,
// });

//7
mongoose.connect(mongoURI).then(() => console.log('MongoDB Connected'))


app.use(passport.initialize());

middlewarePassport(passport);

// 6
app.use(morgan('dev'))


// 5 safe url data
app.use(bodyParser.urlencoded({extended: true}))
// to get objects from json
app.use(bodyParser.json())

// 6
app.use(cors())










app.get('/', (req, res) => {
    // API Gateway не тільки для запиту на перенаправлення.
    // API Gateway також використовується як служба автентифікатора, обробки кешування даних і як агрегатор відповідей.
})
app.use('/api/room', proxy('localhost:8082'))

app.use('/api/auth', authRoutes);
//app.use('/api/room', roomRoutes);
app.use('/api/user', userRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/news', newsRoutes);



//3.2

//
// app.use('/peerServer', peerServer);

module.exports = app;
