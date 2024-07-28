const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const criador = "World Ecletix";

function carregarUrlAleatoria(arquivo) {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'db', arquivo), 'utf8');
        const urls = JSON.parse(data);
        if (urls.length > 0) {
            return urls[Math.floor(Math.random() * urls.length)];
        }
        return null;
    } catch (err) {
        console.error(`Erro ao ler o arquivo ${arquivo}: ${err}`);
        return null;
    }
}

// Funções para carregar dados específicos
const categorias = [
    "aesthetic", "ahegao", "akira", "ass", "bonek", "Boruto", "cosplayloli",
    "cosplay", "cosplaysagiri", "cum", "contasonly", "Deidara", "elaina",
    "emilia", "ero", "erza", "feminotrava", "fotinhas", "GameWallp", "hinata",
    "itachi", "itori", "lolis", "madara", "manga", "masturbation", "meme",
    "memes-video", "mikasa", "metadinhas", "minato", "neko", "neko2", "nezuko",
    "nsfwelisa", "nsfwlolis", "nsfwmia", "onepiece", "orgy", "onlyfans", "pack",
    "pokemon", "pussy", "rize", "rose", "sagiri", "sakura", "sasuke", "satanic",
    "shotas", "tentacles", "travazap", "tsunade", "videozinhos", "waifu",
    "waifu2", "wallhp2", "wallpapernime", "zettai"
];

// Rota genérica para categorias
app.get('/:category', (req, res) => {
    const category = req.params.category;
    if (categorias.includes(category)) {
        const randomUrl = carregarUrlAleatoria(`${category}.json`);
        if (randomUrl) {
            res.json({
                status: true,
                criador: criador,
                url: randomUrl
            });
        } else {
            res.json({
                status: false,
                criador: criador,
                código: 404,
                mensagem: `ei 🤨 Naum Achei Nenhum Link De Imagem Na Categoria ${category}`
            });
        }
    } else {
        res.json({
            status: false,
            criador: criador,
            código: 404,
            mensagem: `ei 🤨 Categoria ${category} Naum Encontrada`
        });
    }
});

// Rota para contasonly
app.get('/contasonly', (req, res) => {
    const randomItem = carregarUrlAleatoria('contasonly.json');
    if (randomItem) {
        res.json({
            status: true,
            criador: criador,
            mensagem: randomItem
        });
    } else {
        res.json({
            status: false,
            criador: criador,
            código: 404,
            mensagem: "Arquivo contasonly.json não encontrado ou vazio."
        });
    }
});

// Rota para metadinhas
app.get('/metadinhas', (req, res) => {
    const randomItem = carregarUrlAleatoria('metadinhas.json');
    if (randomItem) {
        res.json({
            status: true,
            criador: criador,
            mensagem: randomItem
        });
    } else {
        res.json({
            status: false,
            criador: criador,
            código: 404,
            mensagem: "Arquivo metadinhas.json não encontrado ou vazio."
        });
    }
});

module.exports = app;
