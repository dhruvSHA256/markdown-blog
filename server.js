const express = require("express");
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const methodOverride = require('method-override');
const Article = require("./models/article");

const PORT = 5000;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

if (!DB_USER) {
    console.error('[error]: The "DB_USER" environment variable is required');
    process.exit(1);
}

if (!DB_PASS) {
    console.error('[error]: The "DB_PASS" environment variable is required');
    process.exit(1);
}

const MONGO_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.tcwwmec.mongodb.net/?retryWrites=true&w=majority`;


mongoose.connect(MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

app.get('/', async (_req, res) => {
    const articles = await Article.find().sort({ createdAt: "desc" });
    res.render('articles/index', { articles });
})

app.use('/articles', articleRouter);

app.listen(PORT);
