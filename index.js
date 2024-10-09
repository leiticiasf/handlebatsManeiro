const express = require('express');
const exphbs = require("express-handlebars");
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

app.get('/peixe', function (req,res) {
    res.render('peixe')
})

app.get('/', function (req,res) { //valor associado a requisição 
    const user = {
    name: 'Leticia',
    age: '34', 
    email: "mimimimi@gmail.com"
    }
    const auth = true;

    const approved = false; 

    res.render('acai', {user:user, auth, approved})  //envia dados do view para requisiçãpo 
})

app.listen(3000)