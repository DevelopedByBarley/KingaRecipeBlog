const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const connectToDatabase = require('./database/connect/connect')

const recipeRoutes = require('./routes/recipes');


app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
app.set('layout', __dirname + '/views/layouts/layout')

app.use(express.static(__dirname + '/public'))
app.use(expressLayouts)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', recipeRoutes)


connectToDatabase();


app.listen(8080)