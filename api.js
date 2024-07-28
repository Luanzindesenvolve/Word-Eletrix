const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const app = express();

const criador = "World Ecletix";

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

// Lista de categorias
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
    app.all(`/db/${category}`, async (req, res) => {
        try {
            const randomUrl = carregarUrlAleatoria(`${category}.json`);
            if (randomUrl) {
                res.type('png'); // ou 'jpg' dependendo do tipo de imagem que você espera
                res.send(await getBuffer(randomUrl));
            } else {
                res.json({
                    status: false,
                    criador: criador,
                    código: 404,
                    mensagem: `ei 🤨 Naum Achei Nenhum Link De Imagem Na Categoria ${category}`
                });
            }
        } catch (e) {
            res.send({
                status: false,
                criador: criador,
                mensagem: 'Erro ao processar a solicitação'
            });
        }
    });
});

app.all('*', async (req, res) => {
    res.status(404).json({
        status: 404,
        error: 'A página que você está procurando não foi encontrada',
        endpoint: req.path
    });
});

module.exports = app;
