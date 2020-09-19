const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const homeRoute = require('./routes/home');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/',homeRoute);

app.listen(3000,()=>{
    console.log("Server Started");
})