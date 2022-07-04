const express = require('express');
const app = express();

const connectToDatabase = require('./database/connect/connect')

const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
app.set('layout', __dirname + '/views/layouts/layout')

app.use(express.static(__dirname + '/public'))
app.use(expressLayouts)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req,res) => {
  res.render('index');
})
app.get('/admin', (req,res) => {
  res.render('partials/oops');
})

connectToDatabase();


app.listen(8080)