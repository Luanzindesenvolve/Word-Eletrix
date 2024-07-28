const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const app = express();

const criador = "Chupa cu";

async function getBuffer(url) {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(response.data, 'binary');
}

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

categorias.forEach(category => {
    app.all(`/${category}`, async (req, res) => {
        try {
            const randomUrl = carregarUrlAleatoria(`${category}.json`);
            if (randomUrl) {
                res.json({
                    criador: criador,
                    status: true,
                    url: randomUrl
                });
            } else {
                res.json({
                    criador: criador,
                    status: false,
                    código: 404,
                    mensagem: `ei 🤨 Naum Achei Nenhum Link De Imagem Na Categoria ${category}`
                });
            }
        } catch (e) {
            res.json({
                criador: criador,
                status: false,
                mensagem: 'Erro ao processar a solicitação'
            });
        }
    });
});

// Rota genérica para categorias
app.get('/:category', (req, res) => {
    const category = req.params.category;
    const randomUrl = carregarUrlAleatoria(`${category}.json`);
    if (randomUrl) {
        res.json({
            criador: criador,
            status: true,
            url: randomUrl
        });
    } else {
        res.json({
            criador: criador,
            status: false,
            código: 404,
            mensagem: `ei 🤨 Naum Achei Nenhum Link De Imagem Na Categoria ${category}`
        });
    }
});

// Rota para contasonly
app.get('/contasonly', (req, res) => {
    const randomUrl = carregarUrlAleatoria('contasonly.json');
    if (randomUrl) {
        res.json({
            criador: criador,
            status: true,
            url: randomUrl
        });
    } else {
        res.json({
            criador: criador,
            status: false,
            código: 404,
            mensagem: `ei 🤨 Naum Achei Nenhum Link De Imagem Na Categoria contasonly`
        });
    }
});

// Rota para metadinhas
app.get('/metadinhas', (req, res) => {
    const randomUrl = carregarUrlAleatoria('metadinhas.json');
    if (randomUrl) {
        res.json({
            criador: criador,
            status: true,
            url: randomUrl
        });
    } else {
        res.json({
            criador: criador,
            status: false,
            código: 404,
            mensagem: `ei 🤨 Naum Achei Nenhum Link De Imagem Na Categoria metadinhas`
        });
    }
});

module.exports = app
