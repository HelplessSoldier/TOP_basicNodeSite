const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.listen(3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(morgan('dev'));

app.use((req, res) => {
  res.status(400).render('404');
})
