const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Comment = require('./models/comment')
//config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Body Parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())
//Rotas Inicial
        app.get('/',function(req,res){
            Comment.findAll({order:[['id','DESC']]}).then(function(Comments){
                res.render('home',{Comments})
        })
         })
//Rota do formulario
        app.get('/form',function(req,res){
            res.render('formulario.handlebars')
        })
//Rotas "post" só pode ser acessada quando alguem faz uma requisição
        app.post('/add',function(req,res){
            Comment.create({
                titulo: req.body.titulo,
                conteudo:req.body.conteudo
            }).then(function(){
                res.redirect('/')
            }).catch(function(erro){
                res.send("Comentário deletado com sucesso")
            }).catch(function(erro){
                res.send('Ocorreu um erro')
            })
        })
        //Rota para deletar Comentarios
        app.get('/deletar/:id',function(req,res)){
            Comment.destroy({where: {'id':req.prams.id}}).then(function()}
                res.send("Comentario deletado com sucesso")
            }).catch(function(erro){
                res.send('Ocorreu um erro')
            })
        }

app.use(express.static(__dirname + '/public'));

app.get('/home', function(_req, res) {
    res.sendFile(__dirname + '/public/html/home.html');
});

app.get('/jovemtech/listaalunos', function(_req, res) {
    res.send('lista de alunos');
});

app.get('/jovemtech/professores', function(_req, res) {
    res.send('lista de professores');
});

app.get('/jovemtech/cursos', function(_req, res) {
    res.send('cursos');
});

app.get('/jovemtech/inscricao', function(_req, res) {
    res.send('inscricao');
});

app.get('/jovemtech/comentarios', function(_req, res) {
    res.send('comentarios');
});

app.listen(8080,function(){
    console.log("Servidor rodando na porta http://localhost:8080/")
});