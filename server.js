const express = require('express');
const path = require('path');
const apiRoutes = require('./api'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Define o diretório público para servir os arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
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

// Usar as rotas do api.js para qualquer caminho que comece com /api
app.use('/api', apiRoutes);

// Rota para lidar com erros 404 e enviar a página de erro personalizada
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Inicia o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
