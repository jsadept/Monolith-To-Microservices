const authRoutes = require("./auth");
const roomRoutes = require("./room");
const userRoutes = require("./user");
const notesRoutes = require("./notes");
const newsRoutes = require("./news");
const app = require("../app");


app.use('/api/auth', authRoutes);
app.use('/api/room', roomRoutes);
app.use('/api/user', userRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/news', newsRoutes);
