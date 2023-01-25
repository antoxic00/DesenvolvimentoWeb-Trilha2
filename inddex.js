var express = require('express');
var app = express();

app.get('/home', function(req, res) {
    res.send('principal');
});

app.get('/jovemtech/listaalunos', function(req, res) {
    res.send('lista de alunos');
});

app.get('/jovemtech/professores', function(req, res) {
    res.send('lista de professores');
});

app.get('/jovemtech/cursos', function(req, res) {
    res.send('cursos');
});

app.get('/jovemtech/inscricao', function(req, res) {
    res.send('inscricao');
});

app.get('/jovemtech/comentarios', function(req, res) {
    res.send('comentarios');
});

app.listen(8081,function(){
    console.log("Servidor rodando na porta http://localhost:8081/")
});