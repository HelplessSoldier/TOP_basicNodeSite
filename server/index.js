const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');
app.use(morgan('dev'));

app.use((req, res) => {
  res.status(400).render('404');
})
