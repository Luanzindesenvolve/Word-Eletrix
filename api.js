const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const search = require('yt-search');
const yt = require('ytdl-core');
const criador = 'World Ecletic';
const router = express.Router();

//teste


const {
  rastrearEncomendas,
  dafontDowland,
  dafontSearch,
  xvideosPorno,
  dicionarioNome,
  XvideosSearch,
  XvideosDL,
  buscarMenoresPrecos,
  XnxxDL,
  XnxxSearch,
  geturl,
  pensador,
  styletext,
  getgrupos,
  gpwhatsapp,
  hentaistube,
  nerding,
  apkmodhacker,
  uptodown,
  pornhub,
  st,
  gpsrc,
  dafontDown,
  igstalk,
  ff,
  papeldeparede,
  htdl,
  assistithtdl,
  assistitht,
  pornogratis,
  wallmob,
  pinterest,
  rastrear,
  xvideos,
  xvideos1,
  soundl,
  sambaPornoSearch,
  playStoreSearch,
  letrasMusica,
  amazonSearch,
  partidoDosTrouxas,
  partidoLiberal,
  memesDroid,
  animesGoyabu,
  animesGoyabu2,
  gruposZap,
  iFunny,
  hentaiimg,
  fraseAmor,
  frasesPensador,
  animesBrSearch,
  ultimasNoticias,
  mercadoLivreSearch,
  xvideosSearch,
  hentaivid,
  xvideosDownloader,
  topFlixDL,
  pinterestVideo,
  pinterestVideoV2,
  uptodownsrc,
  uptodowndl, 
  teste, animesFireEps, 
  animeFireDownload, 
  mediafireDl,
  randomGrupos,
  hentai, 
  twitter, 
  quotesAnime,
  wallpaper2,
  hentaihome, 
  lojadomecanico,
  wallpaper,
  wikimedia
} = require('./config.js'); // arquivo que ele puxa as funções 
// Rota para pinterest
router.get('/pinterestfoto', async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) return res.status(400).send({ error: 'Query é necessária' });
    const result = await pinterest(query);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}); 


// Rota de tradução usando a API LibreTranslate
router.post('/traduzir', async (req, res) => {
    const { text, target } = req.body;

    if (!text || !target) {
        return res.status(400).json({ error: 'Por favor, forneça o texto e o idioma alvo.' });
    }

    try {
        const response = await axios.post('https://libretranslate.de/translate', {
            q: text,
            source: 'auto', // Detecta automaticamente a língua original
            target: target
        });

        const translation = response.data.translatedText;
        res.json({ translation });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao traduzir o texto.' });
    }
});

// Função para enviar figura com URL modificável
async function sendSticker(req, res, urlBase, max) {
    try {
        const rnd = Math.floor(Math.random() * max);
        res.type('png');
        res.send(await getBuffer(`${urlBase}${rnd}.webp`));
    } catch (e) {
        res.status(500).json({ status: false, mensagem: "Erro ao processar a solicitação." });
    }
}

// Rota de PrintSite
router.all('/printsite', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.json({ status: false, criador: 'World Ecletix', mensagem: "Faltou o parâmetro url" });
    try {
        res.type('png');
        res.send(await getBuffer(`https://api.bronxyshost.com.br/api-bronxys/print_de_site?url=${url}&apikey=tiomaker8930`));
    } catch (e) {
        res.status(500).json({ status: false, mensagem: "Erro ao processar a solicitação." });
    }
});

// Rotas de Figurinhas
router.all('/sticker/figu_emoji', (req, res) => {
    sendSticker(req, res, 'https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/Figurinha-emoji/', 102);
});

router.all('/figu_flork2', (req, res) => {
    sendSticker(req, res, 'https://raw.githubusercontent.com/Scheyot2/anya-bot/master/Figurinhas/figu_flork/', 102);
});

router.all('/figu_aleatori', (req, res) => {
    sendSticker(req, res, 'https://raw.githubusercontent.com/badDevelopper/Testfigu/master/fig ', 8051);
});

router.all('/figu_memes', (req, res) => {
    sendSticker(req, res, 'https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/Figurinha-memes/', 109);
});

router.all('/figu_anime', (req, res) => {
    sendSticker(req, res, 'https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-anime/', 109);
});

router.all('/figu_coreana', (req, res) => {
    sendSticker(req, res, 'https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-coreana/', 43);
});

router.all('/figu_bebe', (req, res) => {
    sendSticker(req, res, 'https://raw.githubusercontent.com/badDevelopper/Apis/master/pack/figbebe/', 17);
});

router.all('/figu_desenho', (req, res) => {
    sendSticker(req, res, 'https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-desenho/', 50);
});

router.all('/figu_animais', (req, res) => {
    sendSticker(req, res, 'https://raw.githubusercontent.com/badDevelopper/Apis/master/pack/figanimais/', 50);
});

router.all('/figu_engracada', (req, res) => {
    sendSticker(req, res, 'https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-engracadas/', 25);
});

router.all('/figu_raiva', (req, res) => {
    sendSticker(req, res, 'https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-raiva/', 25);
});

router.all('/figu_roblox', (req, res) => {
    sendSticker(req, res, 'https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-roblox/', 25);
});



// Endpoint para informações de filmes
router.get('/filme', async (req, res) => {
    try {
        const { nome } = req.query;
        if (!nome) return res.json({ status: false, message: 'Cadê o parâmetro nome' });

        const movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(nome)}&language=pt`);
        const movie = movieInfo.data.results[0];
        const ImageMovieLink = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
        const fotoFilme = await getBuffer(ImageMovieLink);

        res.json({
            status: 'FUNCIONANDO',
            Criador: criador,
            Nome: movie.title,
            Nome_original: movie.original_title,
            Lancamento: movie.release_date,
            Avaliacoes: `${movie.vote_average} - ${movie.vote_count} Votos`,
            Popularidade: `${movie.popularity.toFixed(1)}%`,
            Classificacao_adulta: movie.adult ? 'Sim.' : 'Não.',
            Linguagem_oficial: movie.original_language,
            Sinopse: movie.overview,
            imagem: ImageMovieLink
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            status: false,
            message: 'Erro ao processar a solicitação',
            error: e.message
        });
    }
});

// Endpoint para informações de séries
router.get('/serie', async (req, res) => {
    try {
        const { nome } = req.query;
        if (!nome) return res.json({ status: false, message: 'Cadê o parâmetro nome' });

        const serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(nome)}&language=pt`);
        const serie = serieInfo.data.results[0];
        const ImageSerieLink = `https://image.tmdb.org/t/p/original${serie.backdrop_path}`;
        const fotoSerie = await getBuffer(ImageSerieLink);

        res.json({
            status: 'FUNCIONANDO',
            Criador: criador,
            Nome: serie.name,
            Nome_original: serie.original_name,
            Lancamento: serie.first_air_date,
            Avaliacoes: `${serie.vote_average} - ${serie.vote_count} Votos`,
            Popularidade: `${serie.popularity.toFixed(1)}%`,
            Classificacao_adulta: serie.adult ? 'Sim.' : 'Não.',
            Linguagem_oficial: serie.original_language,
            Sinopse: serie.overview,
            imagem: ImageSerieLink
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            status: false,
            message: 'Erro ao processar a solicitação',
            error: e.message
        });
    }
});

// Função para normalizar o nome do signo
function normalizeSign(sign) {
    const signs = {
        'aries': 'horoscopo-do-dia-para-aries',
        'touro': 'horoscopo-do-dia-para-touro',
        'gemeos': 'horoscopo-do-dia-para-gemeos',
        'cancer': 'horoscopo-do-dia-para-cancer',
        'leao': 'horoscopo-do-dia-para-leao',
        'virgem': 'horoscopo-do-dia-para-virgem',
        'libra': 'horoscopo-do-dia-para-libra',
        'escorpiao': 'horoscopo-do-dia-para-escorpiao',
        'sagitario': 'horoscopo-do-dia-para-sagitario',
        'capricornio': 'horoscopo-do-dia-para-capricornio',
        'aquario': 'horoscopo-do-dia-para-aquario',
        'peixes': 'horoscopo-do-dia-para-peixes'
    };
    
    const normalizedSign = sign.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return signs[normalizedSign] || null;
}

// Função para obter o horóscopo
async function getHoroscope(sign) {
    const normalizedPath = normalizeSign(sign);
    if (!normalizedPath) {
        throw new Error('Signo inválido.');
    }

    const url = `https://joaobidu.com.br/horoscopo-do-dia/${normalizedPath}`;
    
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((res) => {
                const $ = cheerio.load(res.data);

                // Extrair o horóscopo principal
                const horoscope = $('div.zoxrel.left p').first().text().trim();

                // Extrair Palpite do dia e Cor do dia
                const palpite = $('b:contains("Palpite do dia")').parent().text().split('Cor do dia:')[0].trim();
                const cor = $('b:contains("Cor do dia")').parent().text().split('Cor do dia:')[1].trim();

                // Extrair informações adicionais
                const additionalInfo = {};
                $('h3').each((i, element) => {
                    const key = $(element).text().replace(':', '').trim();
                    const value = $(element).next().text().trim();
                    additionalInfo[key] = value;
                });

                resolve({
                    horoscopo: horoscope,
                    palpite: palpite,
                    cor: cor,
                    ...additionalInfo
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Rota para obter o horóscopo
router.get('/signo', async (req, res) => {
    try {
        const sign = req.query.sign;
        if (!sign) return res.status(400).send({ error: 'Signo é necessário' });
        
        const result = await getHoroscope(sign);
        res.json(result);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


router.get('/letra', async (req, res) => {
  const texto = req.query.texto;
  if (!texto) {
    return res.json({ status: false, message: 'Cade o parametro texto??' });
  }

  try {
    const response = await axios.get(`https://api.popcat.xyz/lyrics?song=${texto}`);
    const sitee = response.data;

    res.json({
      titulo: sitee.title,
      imagem: sitee.image,
      artista: sitee.artist,
      letra: sitee.lyrics
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Erro ao processar a requisição" });
  }
});

// Rota para wallpaper
router.get('/wallpaper', async (req, res) => {
  try {
    const title = req.query.title;
    const page = req.query.page || '1';
    if (!title) return res.status(400).send({ error: 'Título é necessário' });
    const result = await wallpaper(title, page);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Rota para wikimedia
router.get('/wikipedia', async (req, res) => {
  try {
    const title = req.query.title;
    if (!title) return res.status(400).send({ error: 'Título é necessário' });
    const result = await wikimedia(title);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Rota para styletext
router.get('/styletext', async (req, res) => {
  try {
    const text = req.query.text;
    if (!text) return res.status(400).send({ error: 'Texto é necessário' });
    const result = await styletext(text);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Rota para hentai
router.get('/hentai', async (req, res) => {
  try {
    const result = await hentai();
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Rota para twitter
router.post('/twitter', async (req, res) => {
  try {
    const link = req.body.link;
    if (!link) return res.status(400).send({ error: 'Link é necessário' });
    const result = await twitter(link);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Rota para quotesAnime
router.get('/quotesAnime', async (req, res) => {
  try {
    const result = await quotesAnime();
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Rota para wallpaper2
router.get('/wallpaper2', async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) return res.status(400).send({ error: 'Query é necessária' });
    const result = await wallpaper2(query);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Rota para hentaihome
router.get('/hentaihome', async (req, res) => {
  try {
    const nome = req.query.nome;
    if (!nome) return res.status(400).send({ error: 'Nome é necessário' });
    const result = await hentaihome(nome);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Rota para lojadomecanico
router.get('/lojadomecanico', async (req, res) => {
  try {
    const nome = req.query.nome;
    if (!nome) return res.status(400).send({ error: 'Nome é necessário' });
    const result = await lojadomecanico(nome);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Rota para buscar episódios do AnimeFire
router.get('/animefireeps', async (req, res) => {
  try {
    const link = req.query.link;
    const result = await animesFireEps(link);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para buscar detalhes de download no AnimeFire
router.get('/animefiredow', async (req, res) => {
  try {
    const link = req.query.link;
    const result = await animeFireDownload(link);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para buscar detalhes do MediaFire
router.get('/mediafire', async (req, res) => {
  try {
    const link = req.query.link;
    const result = await mediafireDl(link);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Rota para buscar grupos aleatórios
router.get('/gruposaleatorios', async (req, res) => {
  try {
    const categoria = req.query.categoria;
    const result = await randomGrupos(categoria);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Rota para pinterestVideo
router.get('/pinterestdow', async (req, res) => {
  try {
    const link = req.query.link;
    if (!link) return res.status(400).send({ error: 'Link é necessário' });
    const result = await pinterestVideo(link);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Rota para pinterestVideoV2
router.post('/pinterestdowv2', async (req, res) => {
  try {
    const url = req.body.url;
    if (!url) return res.status(400).send({ error: 'URL é necessária' });
    const result = await pinterestVideoV2(url);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Rota para uptodownsrc
router.get('/uptodownsrc', async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) return res.status(400).send({ error: 'Consulta é necessária' });
    const result = await uptodownsrc(query);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Rota para uptodowndl
router.get('/uptodowndl', async (req, res) => {
  try {
    const url = req.query.url;
    if (!url) return res.status(400).send({ error: 'URL é necessária' });
    const result = await uptodowndl(url);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Rota para teste
router.get('/y2mate', async (req, res) => {
  try {
    const url = req.query.url;
    if (!url) return res.status(400).send({ error: 'URL é necessária' });
    const result = await teste(url);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


router.get('/mercadolivre', async (req, res) => {
  const { query } = req.query;
  try {
    const resultado = await mercadoLivreSearch(query);
    res.json(resultado);
  } catch (e) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos.' });
  }
});

router.get('/baixarxv', async (req, res) => {
  const { url } = req.query;
  try {
    const resultado = await xvideosDownloader(url);
    res.json(resultado);
  } catch (e) {
    res.status(500).json({ error: 'Ocorreu um erro ao baixar o vídeo.' });
  }
});
//ate aqu
router.get('/hentaiimg', async (req, res) => {
  const { title } = req.query;
  try {
    const resultado = await hentaiimg(title);
    res.json(resultado);
  } catch (e) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar imagens hentai.' });
  }
});

router.get('/hentaivid', async (req, res) => {
  try {
    const resultado = await hentaivid();
    res.json(resultado);
  } catch (e) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar vídeos hentai.' });
  }
});


router.get('/fraseamor', async (req, res) => {
  try {
    const resultado = await fraseAmor();
    res.json(resultado);
  } catch (e) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar frases de amor.' });
  }
});

router.get('/frasespensador', async (req, res) => {
  try {
    const resultado = await frasesPensador();
    res.json(resultado);
  } catch (e) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar frases no Pensador.' });
  }
});

router.get('/animesbr', async (req, res) => {
  const { query } = req.query;
  try {
    const resultado = await animesBrSearch(query);
    res.json(resultado);
  } catch (e) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar animes.' });
  }
});

router.get('/ultimasnoticias', async (req, res) => {
  try {
    const resultado = await ultimasNoticias();
    res.json(resultado);
  } catch (e) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar notícias.' });
  }
});

router.get('/ifunny', async (req, res) => {
  try {
    const dados = await iFunny();
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar memes do MemesDroid
router.get('/memesdroid', async (req, res) => {
  try {
    const dados = await memesDroid();
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar animes no Goyabu
router.get('/goyabu', async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'Query é necessária.' });

  try {
    const dados = await animesGoyabu(query);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar detalhes de um anime no Goyabu
router.get('/pesgoyabu', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL é necessária.' });

  try {
    const dados = await animesGoyabu2(url);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Rota para buscar grupos de WhatsApp
router.get('/gruposzap', async (req, res) => {
  const { url } = req.query;
  try {
    const dados = await gruposZap(url);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Rota para buscar notícias do Partido Liberal


// Rota para buscar produtos na Amazon
router.get('/amazon', async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'Query é necessária.' });

  try {
    const dados = await amazonSearch(query);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter letras de música
router.get('/letras', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL é necessária.' });

  try {
    const dados = await letrasMusica(url);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Função de busca na Google Play Store
router.get('/playstore', async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'Query é necessária.' });

  try {
    const dados = await playStoreSearch(query);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Função de busca no Samba Pornô
router.get('/sambaporno', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Query é necessária.' });

  try {
    const dados = await sambaPornoSearch(q);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Rota para obter URLs
router.get('/geturl', async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'ID é necessário.' });

  try {
    const dados = await geturl(id);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar pensadores
router.get('/frases', async (req, res) => {
  const { nome } = req.query;
  if (!nome) return res.status(400).json({ error: 'Nome do pensador é necessário.' });

  try {
    const dados = await pensador(nome);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para aplicar estilos ao texto
router.get('/styletext', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).json({ error: 'Texto é necessário.' });

  try {
    const resultado = await styletext(texto);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter grupos
router.get('/getgrupos', async (req, res) => {
  const { nome } = req.query;
  if (!nome) return res.status(400).json({ error: 'Nome do grupo é necessário.' });

  try {
    const dados = await getgrupos(nome);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter grupos WhatsApp
router.get('/gpwhatsapp', async (req, res) => {
  const { grupo } = req.query;
  if (!grupo) return res.status(400).json({ error: 'Nome do grupo é necessário.' });

  try {
    const dados = await gpwhatsapp(grupo);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar vídeos no Hentaistube
router.get('/hentaistube', async (req, res) => {
  const { termo } = req.query;
  if (!termo) return res.status(400).json({ error: 'Termo de pesquisa é necessário.' });

  try {
    const resultados = await hentaistube(termo);
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar nerding
router.get('/nerding', async (req, res) => {
  const { termo } = req.query;
  if (!termo) return res.status(400).json({ error: 'Termo de pesquisa é necessário.' });

  try {
    const resultados = await nerding(termo);
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar mods e hacks de APK
router.get('/apkmodhacker', async (req, res) => {
  const { app } = req.query;
  if (!app) return res.status(400).json({ error: 'Nome do aplicativo é necessário.' });

  try {
    const dados = await apkmodhacker(app);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar aplicativos no Uptodown
router.get('/uptodown', async (req, res) => {
  const { app } = req.query;
  if (!app) return res.status(400).json({ error: 'Nome do aplicativo é necessário.' });

  try {
    const dados = await uptodown(app);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar vídeos no Pornhub
router.get('/pornohub', async (req, res) => {
  const { termo } = req.query;
  if (!termo) return res.status(400).json({ error: 'Termo de pesquisa é necessário.' });

  try {
    const resultados = await pornhub(termo);
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter informações sobre ST
router.get('/st', async (req, res) => {
  const { termo } = req.query;
  if (!termo) return res.status(400).json({ error: 'Termo é necessário.' });

  try {
    const dados = await st(termo);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar fontes no GPSRC
router.get('/gpsrc', async (req, res) => {
  const { fonte } = req.query;
  if (!fonte) return res.status(400).json({ error: 'Fonte é necessária.' });

  try {
    const dados = await gpsrc(fonte);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para stalkear Instagram
router.get('/igstalk', async (req, res) => {
  const { usuario } = req.query;
  if (!usuario) return res.status(400).json({ error: 'Nome de usuário é necessário.' });

  try {
    const dados = await igstalk(usuario);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar informações no FF
router.get('/ff', async (req, res) => {
  const { termo } = req.query;
  if (!termo) return res.status(400).json({ error: 'Termo é necessário.' });

  try {
    const dados = await ff(termo);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar papel de parede
router.get('/papeldeparede', async (req, res) => {
  const { categoria } = req.query;
  if (!categoria) return res.status(400).json({ error: 'Categoria é necessária.' });

  try {
    const dados = await papeldeparede(categoria);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para baixar vídeos do Hentai
router.get('/baixarhentai', async (req, res) => {
  const { link } = req.query;
  if (!link) return res.status(400).json({ error: 'Link do vídeo é necessário.' });

  try {
    const dados = await htdl(link);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para assistir vídeos do Hentai
router.get('/assistirhentai', async (req, res) => {
  const { link } = req.query;
  if (!link) return res.status(400).json({ error: 'Link do vídeo é necessário.' });

  try {
    const dados = await assistithtdl(link);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para assistir vídeos do Hentai (ou outra função similar)
router.get('/assistirhentai2', async (req, res) => {
  const { link } = req.query;
  if (!link) return res.status(400).json({ error: 'Link do vídeo é necessário.' });

  try {
    const dados = await assistitht(link);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar conteúdo grátis
router.get('/pornogratis', async (req, res) => {
  const { termo } = req.query;
  if (!termo) return res.status(400).json({ error: 'Termo de pesquisa é necessário.' });

  try {
    const resultados = await pornogratis(termo);
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter papéis de parede mobile
router.get('/wallmob', async (req, res) => {
  const { categoria } = req.query;
  if (!categoria) return res.status(400).json({ error: 'Categoria é necessária.' });

  try {
    const dados = await wallmob(categoria);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar no Pinterest
router.get('/pinterest', async (req, res) => {
  const { termo } = req.query;
  if (!termo) return res.status(400).json({ error: 'Termo de pesquisa é necessário.' });

  try {
    const resultados = await pinterest(termo);
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para rastrear encomendas
router.get('/rastrear', async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'ID da encomenda é necessário.' });

  try {
    const dados = await rastrear(id);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

// Rota para buscar vídeos no Xvideos com outro método
router.get('/pesquisarnoxv', async (req, res) => {
  const { termo } = req.query;
  if (!termo) return res.status(400).json({ error: 'Termo de pesquisa é necessário.' });

  try {
    const resultados = await xvideos1(termo);
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar sons
router.get('/soundl', async (req, res) => {
  const { termo } = req.query;
  if (!termo) return res.status(400).json({ error: 'Termo de pesquisa é necessário.' });

  try {
    const resultados = await soundl(termo);
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para rastrear encomendas
router.get('/rastrearencomendas', async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'ID da encomenda é necessário.' });

  try {
    const dados = await rastrearEncomendas(id);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar fontes no DaFont
router.get('/dafont', async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'O termo de pesquisa é necessário.' });

  try {
    const resultados = await dafontSearch(query);
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para baixar fonte do DaFont
router.get('/dafontdow', async (req, res) => {
  const { link } = req.query;
  if (!link) return res.status(400).json({ error: 'O link da fonte é necessário.' });

  try {
    const dados = await dafontDownload(link);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar vídeos no Xvideos
router.get('/xvideos', async (req, res) => {
  const { termo } = req.query;
  if (!termo) return res.status(400).json({ error: 'O termo de pesquisa é necessário.' });

  try {
    const resultados = await XvideosSearch(termo);
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter detalhes do vídeo do Xvideos
router.get('/xvideosdow', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'A URL do vídeo é necessária.' });

  try {
    const dados = await XvideosDL(url);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar vídeos no Xnxx
router.get('/xnxx', async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'O termo de pesquisa é necessário.' });

  try {
    const resultados = await XnxxSearch(query);
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter detalhes do vídeo do Xnxx
router.get('/xnxxdow', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'A URL do vídeo é necessária.' });

  try {
    const dados = await XnxxDL(url);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar frases no Pensador
router.get('/pensador', async (req, res) => {
  const { nome } = req.query;
  if (!nome) return res.status(400).json({ error: 'O termo de pesquisa é necessário.' });

  try {
    const resultados = await pensador(nome);
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar significado de nomes
router.get('/significadodonome', async (req, res) => {
  const { nome } = req.query;
  if (!nome) return res.status(400).json({ error: 'O nome é necessário.' });

  try {
    const dados = await dicionarioNome(nome);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar menores preços de produtos
router.get('/menorpreco', async (req, res) => {
  const { produto } = req.query;
  if (!produto) return res.status(400).json({ error: 'O nome do produto é necessário.' });

  try {
    const dados = await buscarMenoresPrecos(produto);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//fim do teste
// Função para gerar CPF aleatório
function gerarCPF() {
    let n = '';
    for (let i = 0; i < 9; i++) {
        n += Math.floor(Math.random() * 10);
    }
    const cpf = n.split('');
    let v1 = 0;
    let v2 = 0;
    for (let i = 0; i < 9; i++) {
        v1 += cpf[i] * (10 - i);
        v2 += cpf[i] * (11 - i);
    }
    v1 = (v1 % 11) < 2 ? 0 : 11 - (v1 % 11);
    cpf.push(v1);
    v2 += v1 * 2;
    v2 = (v2 % 11) < 2 ? 0 : 11 - (v2 % 11);
    cpf.push(v2);
    return cpf.join('');
}

// Rota para pesquisa no YouTube
router.get('/pesquisayt', async (req, res) => {
    const query = req.query.query; // Termo de pesquisa enviado como query parameter

    if (!query) {
        return res.status(400).json({ error: 'É necessário fornecer um termo de pesquisa.' });
    }

    try {
        const videoResult = await search(query);
        const videos = videoResult.videos.slice(0, 10); // Limitando para 10 vídeos

        const formattedVideos = videos.map(video => ({
            link: video.url,
            title: video.title,
            thumbnail: video.thumbnail,
            channel: video.author.name,
            views: video.views,
            likes: video.likes,
            creator: video.author.name,
            duration: video.timestamp
        }));

        res.json({ criador: 'World Ecletix', formattedVideos });
    } catch (error) {
        console.error('Erro ao buscar vídeos do YouTube:', error.message);
        res.status(500).json({ error: 'Erro ao buscar vídeos do YouTube' });
    }
});

//ytmp3 pela ulr

router.get('/ytmp3', async (req, res) => {
  const url = req.query.url; // URL do vídeo do YouTube enviada como query parameter

  if (!url) {
    return res.status(400).json({ error: 'É necessário fornecer uma URL.' });
  }

  try {
    const id = yt.getVideoID(url);
    const data = await yt.getInfo(`https://www.youtube.com/watch?v=${id}`);
    const formats = data.formats;
    const audioFormat = formats.find(format => format.mimeType === 'audio/webm; codecs="opus"');

    if (!audioFormat) {
      return res.status(404).json({ error: 'Formato de áudio não encontrado' });
    }

    const result = {
      título: data.videoDetails.title,
      thumb: data.videoDetails.thumbnails[0].url,
      canal: data.videoDetails.author.name,
      publicado: data.videoDetails.uploadDate,
      visualizações: data.videoDetails.viewCount,
      link: audioFormat.url
    };

    res.json({ criador: 'World Ecletix', result });
  } catch (error) {
    console.error('Erro ao baixar o áudio do YouTube:', error.message);
    res.status(500).json({ error: 'Erro ao baixar o áudio do YouTube' });
  }
}); 
//ytmp4 pela ulr vídeo

router.get('/ytmp4', async (req, res) => {
  const url = req.query.url; // URL do vídeo do YouTube enviada como query parameter

  if (!url) {
    return res.status(400).json({ error: 'É necessário fornecer uma URL.' });
  }

  try {
    const id = yt.getVideoID(url);
    const data = await yt.getInfo(`https://www.youtube.com/watch?v=${id}`);
const formats = data.formats;
    const videoFormat = formats.find(format => format.container === 'mp4' && format.hasVideo && format.hasAudio);

    if (!videoFormat) {
      return res.status(404).json({ error: 'Formato de vídeo MP4 não encontrado' });
    }

    const result = {
      título: data.videoDetails.title,
      thumb: data.videoDetails.thumbnails[0].url,
      canal: data.videoDetails.author.name,
      publicado: data.videoDetails.uploadDate,
      visualizações: data.videoDetails.viewCount,
      link: videoFormat.url
    };

    res.json({ criador: 'World Ecletix', result });
  } catch (error) {
    console.error('Erro ao baixar o vídeo do YouTube:', error.message);
    res.status(500).json({ error: 'Erro ao baixar o vídeo do YouTube' });
  }
});


//play
router.get('/play', async (req, res) => {
  const query = req.query.query;

  console.log(`Recebida consulta para MP3: ${query}`);

  if (!query) {
    console.error('Nenhuma consulta fornecida.');
    return res.status(400).json({ error: 'É necessário fornecer uma consulta.' });
  }

  try {
    const searchResult = await search(query);
    console.log('Resultados da pesquisa:', searchResult);

    const video = searchResult.videos[0];
    if (!video) {
      console.error('Nenhum vídeo encontrado para a consulta.');
      return res.status(404).json({ error: 'Nenhum vídeo encontrado.' });
    }

    console.log(`Primeiro vídeo encontrado: ${video.url}`);

    const id = yt.getVideoID(video.url);
    console.log(`ID do vídeo: ${id}`);

    const data = await yt.getInfo(id);
    console.log('Informações do vídeo:', data);

    const audioFormat = data.formats.find(format => format.mimeType === 'audio/webm; codecs="opus"');
    console.log('Formato de áudio encontrado:', audioFormat);

    if (!audioFormat) {
      console.error('Formato de áudio não encontrado.');
      return res.status(404).json({ error: 'Formato de áudio não encontrado' });
    }

    const result = {
      título: data.videoDetails.title,
      thumb: data.videoDetails.thumbnails[0].url,
      canal: data.videoDetails.author.name,
      publicado: data.videoDetails.uploadDate,
      visualizações: data.videoDetails.viewCount,
      link: audioFormat.url
    };

    console.log('Resultado final:', result);
    res.json({ criador: 'World Ecletix', result });
  } catch (error) {
    console.error('Erro ao buscar e baixar o áudio do YouTube:', error.message);
    res.status(500).json({ error: 'Erro ao buscar e baixar o áudio do YouTube' });
  }
});

router.get('/playvideo', async (req, res) => {
  const query = req.query.query;

  console.log(`Recebida consulta para MP4: ${query}`);

  if (!query) {
    console.error('Nenhuma consulta fornecida.');
    return res.status(400).json({ error: 'É necessário fornecer uma consulta.' });
  }

  try {
    const searchResult = await search(query);
    console.log('Resultados da pesquisa:', searchResult);

    const video = searchResult.videos[0];
    if (!video) {
      console.error('Nenhum vídeo encontrado para a consulta.');
      return res.status(404).json({ error: 'Nenhum vídeo encontrado.' });
    }

    console.log(`Primeiro vídeo encontrado: ${video.url}`);

    const id = yt.getVideoID(video.url);
    console.log(`ID do vídeo: ${id}`);

    const data = await yt.getInfo(id);
    console.log('Informações do vídeo:', data);

    const videoFormat = data.formats.find(format => format.container === 'mp4' && format.hasVideo && format.hasAudio);
    console.log('Formato de vídeo encontrado:', videoFormat);

    if (!videoFormat) {
      console.error('Formato de vídeo MP4 não encontrado.');
      return res.status(404).json({ error: 'Formato de vídeo MP4 não encontrado' });
    }

    const result = {
      título: data.videoDetails.title,
      thumb: data.videoDetails.thumbnails[0].url,
      canal: data.videoDetails.author.name,
      publicado: data.videoDetails.uploadDate,
      visualizações: data.videoDetails.viewCount,
      link: videoFormat.url
    };

    console.log('Resultado final:', result);
    res.json({ criador: 'World Ecletix', result });
  } catch (error) {
    console.error('Erro ao buscar e baixar o vídeo do YouTube:', error.message);
    res.status(500).json({ error: 'Erro ao buscar e baixar o vídeo do YouTube' });
  }
});
//fim

// Rota para consulta de CEP
router.get('/consulta/cep/:cep', async (req, res) => {
    const cep = req.params.cep;
    if (!cep) return res.json({ erro: "Digite o CEP no parâmetro da URL" });

    try {
        const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);
        const data = response.data;

        const { state, city, neighborhood, street } = data;

        res.json({
            criador: 'World Ecletix',
            cep: cep,
            estado: state,
            cidade: city,
            vizinhança: neighborhood,
            rua: street,
            serviço: 'open-cep'
        });
    } catch (error) {
        console.error('Erro ao consultar API de CEP:', error.message);
        res.status(error.response?.status || 500).json({ error: 'Erro ao consultar API de CEP' });
    }
});

// Rota para consulta de cidades por DDD
router.get('/api/consulta/ddd/:ddd', async (req, res) => {
    const ddd = req.params.ddd;
    if (!ddd) return res.json({ erro: "digite o ddd no parâmetro da url" });

    try {
        const response = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`);
        const data = response.data;

        // Mapeia o estado associado ao DDD consultado
        const state = data.state;

        // Lista de cidades associadas ao DDD
        const cities = data.cities;

        res.json({
            criador: 'World Ecletix',
            state: state,
            cities: cities
        });
    } catch (error) {
        console.error('Erro ao consultar API de DDD:', error.message);
        res.status(error.response?.status || 500).json({ error: 'Erro ao consultar API de DDD' });
    }
});

// Rota para consulta de dados climáticos por aeroporto
router.get('/api/consulta/clima/aeroporto/:codigoICAO', async (req, res) => {
    const codigoICAO = req.params.codigoICAO;

    try {
        const response = await axios.get(`https://brasilapi.com.br/api/cptec/v1/clima/aeroporto/${codigoICAO}`);
        const data = response.data;

        // Extrai os dados conforme especificado
        const {
            umidade,
            visibilidade,
            codigo_icao,
            pressao_atmosferica,
            vento,
            direcao_vento,
            condicao,
            condicao_desc,
            temp,
            atualizado_em
        } = data;

        // Formata os dados conforme o modelo desejado
        const formattedData = {
            criador: 'World Ecletix',
            umidade: umidade,
            visibilidade: visibilidade,
            codigo_icao: codigo_icao,
            pressao_atmosferica: pressao_atmosferica,
            vento: vento,
            direcao_vento: direcao_vento,
            condicao: condicao,
            condicao_desc: condicao_desc,
            temp: temp,
            atualizado_em: atualizado_em
        };

        res.json(formattedData);
    } catch (error) {
        console.error('Erro ao consultar API de dados climáticos:', error.message);
        res.status(error.response?.status || 500).json({ error: 'Erro ao consultar API de dados climáticos' });
    }
});

// Rota para obter um vídeo aleatório
router.get('/videos', async (req, res) => {
    // Caminho para o arquivo JSON
    const videoFilePath = path.join(__dirname, 'dados', 'videos.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(videoFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar os vídeos do arquivo JSON
        const videoData = lerArquivoJSON();
        const videos = videoData.videos;

        // Escolher um vídeo aleatório
        const randomIndex = Math.floor(Math.random() * videos.length);
        const randomVideoUrl = videos[randomIndex];

        // Fazer requisição para obter o vídeo
        const response = await axios.get(randomVideoUrl, { responseType: 'arraybuffer' });

        // Enviar o vídeo como resposta
        res.set('Content-Type', 'video/mp4'); // Define o tipo de conteúdo como vídeo MP4
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter o vídeo aleatório:', error);
        res.status(500).send('Erro ao obter vídeo aleatório');
    }
});

// Rota para obter uma imagem aleatória
router.get('/loli', async (req, res) => {
    // Caminho para o arquivo JSON
    const loliFilePath = path.join(__dirname, 'dados', 'loli.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(loliFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar as imagens do arquivo JSON
        const loliData = lerArquivoJSON();
        const venomlolis = loliData.venomlolis;

        // Escolher uma imagem aleatória
        const randomIndex = Math.floor(Math.random() * venomlolis.length);
        const randomLoliUrl = venomlolis[randomIndex];

        // Fazer requisição para obter a imagem
        const response = await axios.get(randomLoliUrl, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter a imagem aleatória:', error);
        res.status(500).send('Erro ao obter a imagem aleatória');
    }
});

router.get('/dados-pessoais', async (req, res) => {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        const userData = response.data.results[0];

        const personalData = {
            nomeCompleto: `${userData.name.first} ${userData.name.last}`,
            idade: userData.dob.age,
            cpf: userData.login.uuid.substring(0, 14),
            email: userData.email,
            telefone: userData.phone,
            cidade: userData.location.city,
            estado: userData.location.state,
            cep: userData.location.postcode,
            endereco: `${userData.location.street.name}, ${userData.location.street.number}`,
            foto: userData.picture.large
        };

        res.json({ criador: 'World Ecletix', resultado: personalData });
    } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
        res.status(500).json({ error: 'Erro ao obter dados do usuário' });
    }
});

// Rota para gerar CPF aleatório
router.get('/gerar-cpf', (req, res) => {
    const cpf = gerarCPF();
    res.json({ criador: 'World Ecletix', cpf: cpf });
});
router.get('/videozinhos', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo os vídeos
        const videoFilePath = path.join(__dirname, 'dados', 'videozinhos.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(videoFilePath);
            return JSON.parse(rawdata);
        }

        // Carregar os vídeos do arquivo JSON
        const videoData = lerArquivoJSON();
        const videos = videoData.videos;

        // Escolher um vídeo aleatório
        const randomIndex = Math.floor(Math.random() * videos.length);
        const randomVideoUrl = videos[randomIndex];

        // Fazer requisição para obter o vídeo
        const response = await axios.get(randomVideoUrl, { responseType: 'arraybuffer' });

        // Enviar o vídeo como resposta
        res.set('Content-Type', 'video/mp4'); // Define o tipo de conteúdo como vídeo MP4
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter vídeo aleatório:', error);
        res.status(500).send('Erro ao obter vídeo aleatório');
    }
});
router.get('/imagens', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'imagens.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/fotodev', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'fotodev.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/pokemon', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'pokemon.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
// Rota para gerar frase aleatória
router.get('/frases', (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as frases
        const frasesFilePath = path.join(__dirname, 'dados', 'frases.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(frasesFilePath);
            return JSON.parse(rawdata);
        }

        // Carregar as frases do arquivo JSON
        const frasesData = lerArquivoJSON();
        const frases = frasesData.frases;

        // Escolher uma frase aleatória
        const randomIndex = Math.floor(Math.random() * frases.length);
        const randomFrase = frases[randomIndex];

        // Enviar a frase como resposta
        res.json({ criador: 'Venom Mods', frase: randomFrase });
    } catch (error) {
        console.error('Erro ao obter a frase aleatória:', error);
        res.status(500).json({ error: 'Erro ao obter a frase aleatória' });
    }
});
router.get('/aesthetic', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'aesthetic.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/ahegao', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'ahegao.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/akira', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'akira.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/ass', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'ass.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/bonek', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'bonek.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/boruto', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'boruto.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/cosplay', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'cosplay.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/cosplayloli', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'cosplayloli.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/cosplaysagiri', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'cosplaysagiri.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/cum', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'cum.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/deidara', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'deidara.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/elaina', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'elaina.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/emilia', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'emilia.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/ero', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'ero.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/erza', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'erza.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/femininotrava', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'femininotrava.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/fotinhas', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'fotinhas.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/gamewallp', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'gamewallp.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/hinata', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'hinata.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/itachi', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'itachi.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/itori', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'itori.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/lolis', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'lolis.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/madara', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'madara.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/manga', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'manga.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/masturbation', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'masturbation.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/meme', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'meme.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/mikasa', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'mikasa.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/minato', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'minato.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/neko', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'neko2.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/neko2', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'neko2.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/nezuko', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'nezuko.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/elisa', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'nsfwelisa.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/mia', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'nsfwmia.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/lolizinha', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'msfwlolis.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/onepiece', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'onepiece.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/orgy', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'orgy.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/onlyfans', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'onlyfans.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/atriz', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'atriz.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/hentai', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'hentai.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/hentai2', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'hentai2.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/pack', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'pack.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/pussy', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'pussy.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/rize', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'rize.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/rose', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'rose.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/sagiri', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'sagiri.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/sakura', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'sakura.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/sasuke', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'sasuke.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/satanic', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'satanic.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/shotas', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'shotas.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/tentacles', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'tentacles.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/travazap', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'travazap.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/tsunade', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'tsunade.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/waifu', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'waifu.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/waifu2', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'waifu2.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/wallhp2', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'wallhp2.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/nime', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'wallpapernime.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
router.get('/zettai', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'zettai.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        }

        // Carregar as imagens do arquivo JSON
        const imagensData = lerArquivoJSON();
        const imagens = imagensData.imagens;

        // Escolher uma imagem aleatória
        const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

        // Fazer requisição para obter a imagem
        const response = await axios.get(imagemAleatoria, { responseType: 'arraybuffer' });

        // Enviar a imagem como resposta
        res.set('Content-Type', 'image/jpeg'); // Define o tipo de conteúdo como imagem JPEG
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter imagem aleatória:', error);
        res.status(500).send('Erro ao obter imagem aleatória');
    }
});
// Rota para obter um vídeo aleatório
router.get('/memesvideos', async (req, res) => {
    // Caminho para o arquivo JSON
    const videoFilePath = path.join(__dirname, 'dados', 'memesvideos.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(videoFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar os vídeos do arquivo JSON
        const videoData = lerArquivoJSON();
        const videos = videoData.videos;

        // Escolher um vídeo aleatório
        const randomIndex = Math.floor(Math.random() * videos.length);
        const randomVideoUrl = videos[randomIndex];

        // Fazer requisição para obter o vídeo
        const response = await axios.get(randomVideoUrl, { responseType: 'arraybuffer' });

        // Enviar o vídeo como resposta
        res.set('Content-Type', 'video/mp4'); // Define o tipo de conteúdo como vídeo MP4
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter o vídeo aleatório:', error);
        res.status(500).send('Erro ao obter vídeo aleatório');
    }
});
// Rota para gerar link aleatório com nome
router.get('/contasonly', (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo os links
        const linksFilePath = path.join(__dirname, 'dados', 'contasonly.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(linksFilePath);
            return JSON.parse(rawdata);
        }

        // Carregar os links do arquivo JSON
        const linksData = lerArquivoJSON();

        // Escolher um link aleatório
        const randomIndex = Math.floor(Math.random() * linksData.length);
        const randomLink = linksData[randomIndex];

        // Enviar o link e o nome como resposta
        res.json({ criador: 'World Ecletix', nome: randomLink.nome, link: randomLink.link });
    } catch (error) {
        console.error('Erro ao obter o link aleatório:', error);
        res.status(500).json({ error: 'Erro ao obter o link aleatório' });
    }
});
// Rota para gerar link aleatório com nome
router.get('/metadinhas', (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo os links
        const linksFilePath = path.join(__dirname, 'dados', 'metadinhas.json');

        // Função para ler o arquivo JSON
        function lerArquivoJSON() {
            const rawdata = fs.readFileSync(linksFilePath, 'utf8');
            return JSON.parse(rawdata);
        }

        // Carregar os links do arquivo JSON
        const linksData = lerArquivoJSON();

        // Escolher um link aleatório
        const randomIndex = Math.floor(Math.random() * linksData.length);
        const randomLink = linksData[randomIndex];

        // Enviar os links masculinos e femininos como resposta
        res.json({
            criador: 'world ecletix',
            masculina: randomLink.masculina,
            feminina: randomLink.feminina
        });
    } catch (error) {
        console.error('Erro ao obter o link aleatório:', error);
        res.status(500).json({ error: 'Erro ao obter o link aleatório' });
    }
});
module.exports = router;



