const express = require('express');
const res = require('express/lib/response');
const app = express(); // estanciando o exppress

//Como e com o que vamos renderizar arquivos
app.set("view engine", "ejs");

// Criando rotas de navegação
app.get("/", (req, res) =>{
  const items = [
    {
      title: "D",
      message: "esenvolver aplicações/serviços de forma fácil"
    },
    {
      title: "E",
      message: "JS usa Javascript para renderizar HTML"
    },
    {
      title: "M",
      message: "uito fácil de usar"
    },
    {
      title: "A",
      message: "morzinho"
    },
    {
      title: "I",
      message: "nstall ejs"
    },
    {
      title: "S",
      message: "intaxe simples"
    }
  ];

  const subtitle = "Uma linguagem de modelagem para criação de página de HTML ultilizando Javascript"

  res.render('pages/index', {
    qualitys: items,
    subtitle: subtitle,
  });
});



app.get("/sobre", (req, res) =>{
  res.render('pages/about')
})

// Falando pro servidor rodar

app.listen(8080)

console.log('Servidor rodando')
