const db = require('./models/database')
const express = require('express')
const app = express()
const port = 3307;

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { Session } = require('express-session');
const session = require('express-session');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({
    secret: "12361827@287293hsasjdoj",
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(__dirname+"/views"));
app.set('view engine', 'ejs');

// Rotas para post 

const postController = require(__dirname+'/controller/postController') 
const userController = require(__dirname+'/controller/userController')
app.post('/cadastrar-usuario', userController.createUser)
app.post('/authUser', userController.authUser)
app.post('/criar-post', postController.createPost)

app.use(express.static(__dirname+"/views"));
app.set('view engine', 'ejs');




app.get('/', (req,res)=>{
    res.redirect("/login")
});
app.get('/cadastro', (req,res)=>{
    if (req.session.user) {
        res.render('layout', {contentFile:"cadastro", successMessage: req.query.success, erroMessage: req.query.erro, userName: req.session.user.nome, loginMessage: 'Logado'})
    } else {
        res.render('layout', {contentFile:"cadastro", successMessage: req.query.success, erroMessage: req.query.erro, userName: '', loginMessage: ''})
    }
});
const PostModel = require('./models/Post');
app.get('/home', async (req,res)=> {
    const posts = await PostModel.findAll()
    if (req.session.user) {
        res.render('layout', {contentFile:"home", successLogin:req.query.success, userName: req.session.user.nome, postagens: posts})
    } else {
        res.render('layout', {contentFile:"home", successLogin:req.query.success, userName: '', postagens: posts})
    }
})
app.get('/sobre', (req,res)=>{
    if (req.session.user) {
        res.render('layout', {contentFile:"sobre", userName: req.session.user.nome, loginMessage: 'Logado'})
    } else {
        res.render('layout', {contentFile:"sobre", userName: '', loginMessage: ''})
    }
});
app.get('/criarpost', (req,res)=>{
    res.render('layout', {contentFile:"criarpost", successMessage: req.query.success, erroMessage: req.query.erro})
});
app.get('/login', (req,res)=>{
    if (req.session.user) {
        res.render('layout', {contentFile:"login", userName: req.session.user.nome, loginMessage: 'Logado'})
    } else {
        res.render('layout', {contentFile:"login", userName: '', loginMessage: ''})
    }
});
app.get('/logout', function(req, res){
    delete req.session.user;
    res.redirect('/login');
})

app.listen(port,()=>{
    console.log('Servidor express rodando corretamente');
});
