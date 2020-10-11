import express from "express";
import nunjucks from "nunjucks";

const server = express();

function homePage(req, res) {
  return res.render("index.html");
}

function loginPage(req, res) {
  return res.render("login.html");
}

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});
//Inicio e configuralção do servidor
server
  //configurar arquivos estaticos (scripts, css, imagens...etc)
  .use(express.static("public"))
  //rotas da aplicação
  .get("/", homePage)
  .get("/login", loginPage)
  //Start do serviço
  .listen(5300);
