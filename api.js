const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const criador = "Chupa cu";

// Função para carregar URLs de um arquivo JSON
const carregarUrls = (arquivo) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, arquivo));
        return JSON.parse(data);
    } catch (error) {
        console.error(`Erro ao ler o arquivo ${arquivo}: ${error.message}`);
        return [];
    }
};

// Carregar URLs para cada categoria
const urls = {
    "aesthetic": carregarUrls('db/aesthetic.json'),
    "ahegao": carregarUrls('db/ahegao.json'),
    "akira": carregarUrls('db/akira.json'),
    "ass": carregarUrls('db/ass.json'),
    "bonek": carregarUrls('db/bonek.json'),
    "Boruto": carregarUrls('db/boruto.json'),
    "cosplayloli": carregarUrls('db/cosplayloli.json'),
    "cosplay": carregarUrls('db/cosplay.json'),
    "cosplaysagiri": carregarUrls('db/cosplaysagiri.json'),
    "cum": carregarUrls('db/cum.json'),
    "contasonly": carregarUrls('db/contasonly.json'),
    "Deidara": carregarUrls('db/deidara.json'),
    "elaina": carregarUrls('db/elaina.json'),
    "emilia": carregarUrls('db/emilia.json'),
    "ero": carregarUrls('db/ero.json'),
    "erza": carregarUrls('db/erza.json'),
    "feminotrava": carregarUrls('db/feminotrava.json'),
    "fotinhas": carregarUrls('db/fotinhas.json'),
    "GameWallp": carregarUrls('db/GameWallp.json'),
    "hinata": carregarUrls('db/hinata.json'),
    "itachi": carregarUrls('db/itachi.json'),
    "itori": carregarUrls('db/itori.json'),
    "lolis": carregarUrls('db/lolis.json'),
    "madara": carregarUrls('db/madara.json'),
    "manga": carregarUrls('db/manga.json'),
    "masturbation": carregarUrls('db/masturbation.json'),
    "meme": carregarUrls('db/meme.json'),
    "memes-video": carregarUrls('db/memes-video.json'),
    "mikasa": carregarUrls('db/mikasa.json'),
    "metadinhas": carregarUrls('db/metadinhas.json'),
    "minato": carregarUrls('db/minato.json'),
    "neko": carregarUrls('db/neko.json'),
    "neko2": carregarUrls('db/neko2.json'),
    "nezuko": carregarUrls('db/nezuko.json'),
    "nsfwelisa": carregarUrls('db/nsfwelisa.json'),
    "nsfwlolis": carregarUrls('db/nsfwlolis.json'),
    "nsfwmia": carregarUrls('db/nsfwmia.json'),
    "onepiece": carregarUrls('db/onepiece.json'),
    "orgy": carregarUrls('db/orgy.json'),
    "onlyfans": carregarUrls('db/onlyfans.json'),
    "pack": carregarUrls('db/pack.json'),
    "pokemon": carregarUrls('db/pokemon.json'),
    "pussy": carregarUrls('db/pussy.json'),
    "rize": carregarUrls('db/rize.json'),
    "rose": carregarUrls('db/rose.json'),
    "sagiri": carregarUrls('db/sagiri.json'),
    "sakura": carregarUrls('db/sakura.json'),
    "sasuke": carregarUrls('db/sasuke.json'),
    "satanic": carregarUrls('db/satanic.json'),
    "shotas": carregarUrls('db/shotas.json'),
    "tentcles": carregarUrls('db/tentacles.json'),
    "travazap": carregarUrls('db/travazap.json'),
    "tsunade": carregarUrls('db/tsunade.json'),
    "videozinhos": carregarUrls('db/videozinhos.json'),
    "waifu": carregarUrls('db/waifu.json'),
    "waifu2": carregarUrls('db/waifu2.json'),
    "wallhp2": carregarUrls('db/wallhp2.json'),
    "wallpapernime": carregarUrls('db/wallpapernime.json'),
    "zettai": carregarUrls('db/zettai.json'),
};

// Rota para obter URL aleatória por categoria
app.get('/:category', (req, res) => {
    const category = req.params.category;
    if (urls[category]) {
        const urlList = urls[category];
        if (urlList.length > 0) {
            const randomUrl = urlList[Math.floor(Math.random() * urlList.length)];
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

// Rota para obter dados de contasonly
app.get('/contasonly', (req, res) => {
    const contasonlyData = carregarUrls('db/contasonly.json');
    if (contasonlyData.length > 0) {
        const randomItem = contasonlyData[Math.floor(Math.random() * contasonlyData.length)];
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

// Rota para obter dados de metadinhas
app.get('/metadinhas', (req, res) => {
    const metadinhasData = carregarUrls('db/metadinhas.json');
    if (metadinhasData.length > 0) {
        const randomItem = metadinhasData[Math.floor(Math.random() * metadinhasData.length)];
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
