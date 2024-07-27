const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const criador = "World Ecletix";

// Função para carregar URLs de arquivos JSON
function carregarUrls(arquivo) {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'db', arquivo), 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Erro ao ler o arquivo ${arquivo}: ${err}`);
        return [];
    }
}

// Funções para carregar dados específicos
const urls = {
    "aesthetic": carregarUrls('aesthetic.json'),
    "ahegao": carregarUrls('ahegao.json'),
    "akira": carregarUrls('akira.json'),
    "ass": carregarUrls('ass.json'),
    "bonek": carregarUrls('bonek.json'),
    "Boruto": carregarUrls('boruto.json'),
    "cosplayloli": carregarUrls('cosplayloli.json'),
    "cosplay": carregarUrls('cosplay.json'),
    "cosplaysagiri": carregarUrls('cosplaysagiri.json'),
    "cum": carregarUrls('cum.json'),
    "contasonly": carregarUrls('contasonly.json'),
    "Deidara": carregarUrls('deidara.json'),
    "elaina": carregarUrls('elaina.json'),
    "emilia": carregarUrls('emilia.json'),
    "ero": carregarUrls('ero.json'),
    "erza": carregarUrls('erza.json'),
    "feminotrava": carregarUrls('femininotrava.json'),
    "fotinhas": carregarUrls('fotinhas.json'),
    "GameWallp": carregarUrls('GameWallp.json'),
    "hinata": carregarUrls('hinata.json'),
    "itachi": carregarUrls('itachi.json'),
    "itori": carregarUrls('itori.json'),
    "lolis": carregarUrls('lolis.json'),
    "madara": carregarUrls('madara.json'),
    "manga": carregarUrls('manga.json'),
    "masturbation": carregarUrls('masturbation.json'),
    "meme": carregarUrls('meme.json'),
    "memes-video": carregarUrls('memes-video.json'),
    "mikasa": carregarUrls('mikasa.json'),
    "metadinhas": carregarUrls('metadinhas.json'),
    "minato": carregarUrls('minato.json'),
    "neko": carregarUrls('neko.json'),
    "neko2": carregarUrls('neko2.json'),
    "nezuko": carregarUrls('nezuko.json'),
    "nsfwelisa": carregarUrls('nsfwelisa.json'),
    "nsfwlolis": carregarUrls('nsfwlolis.json'),
    "nsfwmia": carregarUrls('nsfwmia.json'),
    "onepiece": carregarUrls('onepiece.json'),
    "orgy": carregarUrls('orgy.json'),
    "onlyfans": carregarUrls('onlyfans.json'),
    "pack": carregarUrls('pack.json'),
    "pokemon": carregarUrls('pokemon.json'),
    "pussy": carregarUrls('pussy.json'),
    "rize": carregarUrls('rize.json'),
    "rose": carregarUrls('rose.json'),
    "sagiri": carregarUrls('sagiri.json'),
    "sakura": carregarUrls('sakura.json'),
    "sasuke": carregarUrls('sasuke.json'),
    "satanic": carregarUrls('satanic.json'),
    "shotas": carregarUrls('shotas.json'),
    "tentcles": carregarUrls('tentacles.json'),
    "travazap": carregarUrls('travazap.json'),
    "tsunade": carregarUrls('tsunade.json'),
    "videozinhos": carregarUrls('videozinhos.json'),
    "waifu": carregarUrls('waifu.json'),
    "waifu2": carregarUrls('waifu2.json'),
    "wallhp2": carregarUrls('wallhp2.json'),
    "wallpapernime": carregarUrls('wallpapernime.json'),
    "zettai": carregarUrls('zettai.json'),
};

// Rota genérica para categorias
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

// Rota para contasonly
app.get('/contasonly', (req, res) => {
    const contasonlyData = carregarUrls('contasonly.json');
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

// Rota para metadinhas
app.get('/metadinhas', (req, res) => {
    const metadinhasData = carregarUrls('metadinhas.json');
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
