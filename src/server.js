//Server
const express = require('express')
const server = express()

function homePage(req, res){
    return res.render("index.html")
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
//Start do serviço
.listen(5300)