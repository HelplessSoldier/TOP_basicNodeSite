const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.listen(3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(morgan('dev'));

const publicDirPath = path.join(__dirname, 'public');
app.use(express.static(publicDirPath));

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('/contact-me', (req, res) => {
  res.render('contact');
})

app.use((req, res) => {
  res.status(400).render('404');
})
