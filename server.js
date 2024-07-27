const express = require('express');
const path = require('path');
const fs = require('fs'); // Certifique-se de que fs está importado corretamente
const api = require('./api');  // Importa o módulo da API
const app = express();

// Define o diretório público para servir os arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
// Rota para servir arquivos JSON da API
app.get('/api/:category', (req, res) => {
  const category = req.params.category;
  const filePath = path.join(__dirname, 'db', `${category}.json`);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(404).json({
        status: false,
        mensagem: `Arquivo ${category}.json não encontrado.`,
      });
    }
    res.json(JSON.parse(data));
  });
});
// Rota dinâmica para servir arquivos HTML e TXT sem a extensão
app.get('/:page', (req, res) => {
  const page = req.params.page;
  const filePathHtml = path.join(__dirname, `${page}.html`);
  const filePathTxt = path.join(__dirname, `${page}.txt`);

  res.sendFile(filePathHtml, (err) => {
    if (err) {
      res.sendFile(filePathTxt, (err) => {
        if (err) {
          res.status(404).sendFile(path.join(__dirname, '404.html'));
        }
      });
    }
  });
});

// Rota para lidar com erros 404 e enviar a página de erro personalizada
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Define a porta do servidor
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
