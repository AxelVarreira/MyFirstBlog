//Server
const express = require('express')
const server = express()

function homePage(req, res){
    return res.render("index.html")
}

function projectsPage(req, res){
    return res.render("projects.html")
}

const nunjucks = require ('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, 
})
//Inicio e configuralção do servidor
server
//configurar arquivos estaticos (scripts, css, imagens...etc)
.use(express.static("public"))
//rotas da aplicação
.get("/", homePage)
.get("/projects", projectsPage)
//Start do serviço
.listen(5300)