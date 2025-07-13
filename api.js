bla = process.cwd()
__path = process.cwd()
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const JXR = require("jxr-canvas");
const canvacard = require("canvacard")
const { musicCard, RankCard } = require("musicard-bun");
const { Card } = require("welcomify")
const morgan  = require("morgan");
const { createDecipheriv } = require("crypto");
const Canvasfy = require("canvafy")
const ffmpeg = require('fluent-ffmpeg');
const cheerio = require('cheerio');
const search = require('yt-search');
const ytSearch = require('yt-search');
const yt = require('@distube/ytdl-core');
const criador = 'World Ecletix';
const { exec } = require('child_process');
const sharp = require('sharp'); // Biblioteca para conversão WebP
const cors = require('cors');
const { yts, ytmp4, ytmp3, alldl, ai } = require('@hiudyy/ytdl');
const archiver = require('archiver');
const YTMusic = require('@tnfangel/ytmusic-api');
const iconv = require('iconv-lite'); // Biblioteca para lidar com codificação de caracteres
const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const readline = require('readline');
const { Api } = require('telegram/tl');
const { NewMessage, CallbackQuery } = require('telegram/events');
const input = require('input');
const router = express.Router();
const getImageBuffer = async (url) => {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar imagem.');
    }
};
const API_KEY = "sk_55253a1928f65a03e8c680b002b1d5bf270044112e99516c";
const ELEVEN_API = "https://api.elevenlabs.io/v1/text-to-speech";

// 🔑 VoiceRSS API Key
const VOICERSS_API_KEY = "1852b97120ed44b3a47ba647b2dcece6";

// Função para gerar o User-Agent
function userAgent() {
  const oos = [
    'Macintosh; Intel Mac OS X 10_15_7', 'Macintosh; Intel Mac OS X 10_15_5', 'Macintosh; Intel Mac OS X 10_11_6',
    'Macintosh; Intel Mac OS X 10_6_6', 'Macintosh; Intel Mac OS X 10_9_5', 'Macintosh; Intel Mac OS X 10_10_5',
    'Macintosh; Intel Mac OS X 10_7_5', 'Macintosh; Intel Mac OS X 10_11_3', 'Macintosh; Intel Mac OS X 10_10_3',
    'Macintosh; Intel Mac OS X 10_6_8', 'Macintosh; Intel Mac OS X 10_10_2', 'Macintosh; Intel Mac OS X 10_10_3',
    'Macintosh; Intel Mac OS X 10_11_5', 'Windows NT 10.0; Win64; x64', 'Windows NT 10.0; WOW64', 'Windows NT 10.0'
  ];

  return `Mozilla/5.0 (${oos[Math.floor(Math.random() * oos.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(Math.random() * 3) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;
}


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
  wikimedia,
  snapsave,
  searching, 
  spotifydl,
  photooxy,
  tiktok2, 
  FacebookMp4,
  ChatGpt,
  getNoticiasEsporte,
  BBC,
  CNNBrasil,
  Estadao,
  Exame,
  G1,
  JovemPan,
  NoticiasAoMinuto,
  Poder360,
  Terra,
  Uol,
  VejaAbril,
  Vasco,
  AGazeta,
  TodaNoticias,
  fetchFortalezaNews,
  fetchCorinthiansNews,
  fetchSaoPauloNews,
  buscarNoticiasSantos,
  buscarNoticiasFluminense,
  buscarNoticiasFlamengo,
  videodl,
  audiodl,
  musicard,
  comunismo,
  bolsonaro,
  bnw,
  blurr, 
  affect, 
  beautiful, 
  circle, 
  del, 
  gay, 
  invert, 
  facepalm, 
  dither, 
  jail, 
  magik, 
  pixelate, 
  rip,
  sepia, 
  rotate, 
  trash,
  wanted,
  wasted, 
  bobross, 
  mms
} = require('./config.js'); // arquivo que ele puxa as funções 

// 719 rotas 10/06/2025 18:38


async function generateAudio(res, voiceId, text) {
  if (!text) return res.status(400).json({ erro: "Texto ausente" });

  try {
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        text,
        model_id: "eleven_monolingual_v1",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.5
        }
      },
      {
        headers: {
          "xi-api-key": API_KEY,
          "Content-Type": "application/json"
        },
        responseType: "arraybuffer"
      }
    );

    res.setHeader("Content-Type", "audio/mpeg");
    res.send(response.data);
  } catch (err) {
    console.error("❌ Erro ao gerar áudio:", err.response?.data || err.message);
    res.status(500).json({ erro: "Erro ao gerar áudio" });
  }
}


// 🎧 Rota VoiceRSS com idioma fixo pt-br e sem texto padrão
router.get("/voicerss", (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res.status(400).json({ error: "Parâmetro 'text' é obrigatório." });
  }

  const encodedText = encodeURIComponent(text);
  const url = `https://api.voicerss.org/?key=${VOICERSS_API_KEY}&hl=pt-br&c=MP3&f=48khz_16bit_stereo&src=${encodedText}`;

  res.redirect(url);
});

// 🗣️ Rotas de vozes com IDs corretos da ElevenLabs
router.get("/audio-aria", (req, res) =>
  generateAudio(res, "NLXGN93c0fZldVoIxtNn", req.query.text)
);

router.get("/audio-sarah", (req, res) =>
  generateAudio(res, "TxGEqnHWrfWFTfGW9XjX", req.query.text)
);

router.get("/audio-laura", (req, res) =>
  generateAudio(res, "yoZ06aMxZJJ28mfd3POQ", req.query.text)
);

router.get("/audio-charlie", (req, res) =>
  generateAudio(res, "XB0fDUnXU5powFXDhCwa", req.query.text)
);

router.get("/audio-george", (req, res) =>
  generateAudio(res, "VR6AewLTigWG4xSOukaG", req.query.text)
);

router.get("/audio-callum", (req, res) =>
  generateAudio(res, "N2lVS1w4EtoT3dr4eOWO", req.query.text)
);

router.get("/audio-river", (req, res) =>
  generateAudio(res, "ZQe5CZNOzWyzPSCn5a3c", req.query.text)
);

router.get("/audio-liam", (req, res) =>
  generateAudio(res, "MF3mGyEYCl7XYWbV9V6O", req.query.text)
);

router.get("/audio-charlotte", (req, res) =>
  generateAudio(res, "LcfcDJNUP1GQjkzn1xUU", req.query.text)
);

router.get("/audio-alice", (req, res) =>
  generateAudio(res, "TxGEqnHWrfWFTfGW9XjX", req.query.text) // Alice usa mesmo ID da Sarah
);

router.get("/audio-matilda", (req, res) =>
  generateAudio(res, "EXAVITQu4vr4xnSDxMaL", req.query.text)
);

router.get("/audio-will", (req, res) =>
  generateAudio(res, "jsCqWAovK2LkecY7zXl4", req.query.text)
);

router.get("/audio-jessica", (req, res) =>
  generateAudio(res, "z9fAnlkpzviPz146aGWa", req.query.text)
);

router.get("/audio-eric", (req, res) =>
  generateAudio(res, "ErXwobaYiN019PkySvjV", req.query.text)
);

router.get("/audio-chris", (req, res) =>
  generateAudio(res, "pNInz6obpgDQGcFmaJgB", req.query.text)
);

router.get("/audio-brian", (req, res) =>
  generateAudio(res, "AZnzlk1XvdvUeBnXmlld", req.query.text)
);

router.get("/audio-daniel", (req, res) =>
  generateAudio(res, "onwK4e9ZLuTAKqWW03F9", req.query.text)
);

router.get("/audio-lily", (req, res) =>
  generateAudio(res, "flq6f7yk4E4fJM5XTYuZ", req.query.text)
);

router.get("/audio-bill", (req, res) =>
  generateAudio(res, "bVMeCyTHy58xNoL34h3p", req.query.text)
);



// 1) Download vídeo MP4 pelo URL do YouTube
router.get('/linkmp4', async (req, res) => {
  const ytUrl = req.query.url;
  if (!ytUrl) return res.status(400).send('URL do YouTube é obrigatório');

  try {
    const response = await axios.get(`https://api.vreden.my.id/api/ytmp4?url=${encodeURIComponent(ytUrl)}`);
    const downloadUrl = response.data.result.download.url;
    res.redirect(downloadUrl);
  } catch (error) {
    res.status(500).send('Erro ao obter link de download');
  }
});

// 2) Download MP3 por busca no YouTube (usando ?name=...)
router.get('/musica', async (req, res) => {
  const name = req.query.name;
  if (!name) return res.status(400).send('Parâmetro "name" é obrigatório');

  try {
    const response = await axios.get(`https://api.vreden.my.id/api/ytplaymp3?query=${encodeURIComponent(name)}`);
    const downloadUrl = response.data.result.download.url;
    res.redirect(downloadUrl);
  } catch (error) {
    res.status(500).send('Erro ao obter link de download');
  }
});

// 3) Download MP4 por busca no YouTube (usando ?name=...)
router.get('/clipe', async (req, res) => {
  const name = req.query.name;
  if (!name) return res.status(400).send('Parâmetro "name" é obrigatório');

  try {
    const response = await axios.get(`https://api.vreden.my.id/api/ytplaymp4?query=${encodeURIComponent(name)}`);
    const downloadUrl = response.data.result.download.url;
    res.redirect(downloadUrl);
  } catch (error) {
    res.status(500).send('Erro ao obter link de download');
  }
});

// 4) (Bonus) Exemplo para baixar áudio MP3 direto por URL (não tinha na sua lista, mas é comum)
router.get('/linkmp3', async (req, res) => {
  const ytUrl = req.query.url;
  if (!ytUrl) return res.status(400).send('URL do YouTube é obrigatório');

  try {
    const response = await axios.get(`https://api.vreden.my.id/api/ytmp3?url=${encodeURIComponent(ytUrl)}`);
    const downloadUrl = response.data.result.download.url;
    res.redirect(downloadUrl);
  } catch (error) {
    res.status(500).send('Erro ao obter link de download');
  }
});


function getYouTubeVideoId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|v\/|embed\/|user\/[^\/\n\s]+\/)?(?:watch\?v=|v%3D|embed%2F|video%2F)?|youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/|youtube\.com\/playlist\?list=)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

const audioQualities = [92, 128, 256, 320];
const videoQualities = [144, 360, 480, 720, 1080];

const hexcode = (hex) => Buffer.from(hex, "hex");
const decode = (enc) => {
  try {
    const secret_key = "C5D58EF67A7584E4A29F6C35BBC4EB12";
    const data = Buffer.from(enc, "base64");
    const iv = data.slice(0, 16);
    const content = data.slice(16);
    const key = hexcode(secret_key);

    const decipher = createDecipheriv("aes-128-cbc", key, iv);
    const decrypted = Buffer.concat([decipher.update(content), decipher.final()]);

    return JSON.parse(decrypted.toString());
  } catch (error) {
    throw new Error(error.message);
  }
};

async function savetube(link, quality, type) {
  try {
    const cdn     = (await axios.get("https://media.savetube.me/api/random-cdn")).data.cdn;
    const infoget = (
      await axios.post(
        `https://${cdn}/v2/info`,
        { url: link },
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36",
            Referer: "https://yt.savetube.me/1kejjj1?id=362796039",
          },
        }
      )
    ).data;

    const info = decode(infoget.data);

    const { data: downloadResp } = await axios.post(
      `https://${cdn}/download`,
      { downloadType: type, quality: `${quality}`, key: info.key },
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36",
          Referer: "https://yt.savetube.me/start-download?from=1kejjj1%3Fid%3D362796039",
        },
      }
    );

    return {
      status: true,
      quality: `${quality}${type === "audio" ? "kbps" : "p"}`,
      availableQuality: type === "audio" ? audioQualities : videoQualities,
      url: downloadResp.data.downloadUrl,
      filename: `${info.title} (${quality}${type === "audio" ? "kbps).mp3" : "p).mp4"}`,
    };
  } catch (error) {
    console.error("Converting error:", error);
    return { status: false, message: "Converting error" };
  }
}

async function playmp3(link, quality = 128) {
  const videoId = getYouTubeVideoId(link);
  const q       = audioQualities.includes(+quality) ? +quality : 128;

  if (!videoId) return { status: false, message: "Invalid YouTube URL" };

  const url       = `https://youtube.com/watch?v=${videoId}`;
  const meta      = await ytSearch(url);
  const download  = await savetube(url, q, "audio");

  return { status: true, creator: "@vreden/youtube_scraper", metadata: meta.all[0], download };
}

async function playmp4(link, quality = 360) {
  const videoId = getYouTubeVideoId(link);
  const q       = videoQualities.includes(+quality) ? +quality : 360;

  if (!videoId) return { status: false, message: "Invalid YouTube URL" };

  const url       = `https://youtube.com/watch?v=${videoId}`;
  const meta      = await ytSearch(url);
  const download  = await savetube(url, q, "video");

  return { status: true, creator: "@vreden/youtube_scraper", metadata: meta.all[0], download };
}

async function fetchTranscript(link) {
  try {
    const { data } = await axios.get("https://ytb2mp4.com/api/fetch-transcript", {
      params: { url: link },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36",
        Referer: "https://ytb2mp4.com/youtube-transcript",
      },
    });
    return { status: true, creator: "@vreden/youtube_scraper", transcript: data.transcript };
  } catch (error) {
    return { status: false, message: error.message };
  }
}

async function ytdlv2(link, quality) {
  try {
    const { data: meta } = await axios.get(`https://ytdl.vreden.web.id/metadata?url=${link}`);

    // Reutiliza nossas próprias funções para gerar URLs diretos
    const mp3 = await playmp3(link, quality);
    const mp4 = await playmp4(link, quality);

    meta.downloads.audio = mp3.download.url;
    meta.downloads.video = mp4.download.url;

    return { status: true, creator: "@vreden/youtube_scraper", ...meta };
  } catch (error) {
    return { status: false, message: error.message };
  }
}

async function channel(teks) {
  try {
    const result = await axios.get(`https://ytdl.vreden.web.id/channel/${teks}`);
    return {
      status: true,
      creator: "@vreden/youtube_scraper",
      ...result.data
    };
  } catch (error) {
    return {
      status: false,
      message: error.message
    };
  }
}

// 7) /ytmp3dl?url=...&quality=128  → redireciona p/ MP3
router.get("/linkmp3-7", async (req, res) => {
  const { url, quality } = req.query;
  if (!url) return res.status(400).json({ status: false, message: 'Parâmetro "url" ausente' });

  const result = await playmp3(url, quality || 128);
  if (!result.status) return res.status(500).json(result);

  res.redirect(result.download.url);
});

// 8) /ytmp4dl?url=...&quality=360  → redireciona p/ MP4
router.get("/linkmp4-7", async (req, res) => {
  const { url, quality } = req.query;
  if (!url) return res.status(400).json({ status: false, message: 'Parâmetro "url" ausente' });

  const result = await playmp4(url, quality || 360);
  if (!result.status) return res.status(500).json(result);

  res.redirect(result.download.url);
});

// 9) /musicadl?name=...&quality=128 → busca por nome e redireciona p/ MP3
router.get("/musica7", async (req, res) => {
  const { name, quality } = req.query;
  if (!name) return res.status(400).json({ status: false, message: 'Parâmetro "name" ausente' });

  try {
    const srch = await ytSearch(name);
    if (!srch.videos.length) return res.status(404).json({ status: false, message: "Nenhum resultado encontrado" });

    const first = srch.videos[0].url;
    const result = await playmp3(first, quality || 128);
    if (!result.status) return res.status(500).json(result);

    res.redirect(result.download.url);
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
});

// 10) /clipedl?name=...&quality=360 → busca por nome e redireciona p/ MP4
router.get("/clipe7", async (req, res) => {
  const { name, quality } = req.query;
  if (!name) return res.status(400).json({ status: false, message: 'Parâmetro "name" ausente' });

  try {
    const srch = await ytSearch(name);
    if (!srch.videos.length) return res.status(404).json({ status: false, message: "Nenhum resultado encontrado" });

    const first = srch.videos[0].url;
    const result = await playmp4(first, quality || 360);
    if (!result.status) return res.status(500).json(result);

    res.redirect(result.download.url);
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
});

// 5) /musica?name=...&quality=128         → devolve áudio MP3
router.get("/musicadl", async (req, res) => {
  const { name, quality } = req.query;
  if (!name) {
    return res.status(400).json({ status: false, message: 'Parâmetro "name" ausente' });
  }

  try {
    // Procura o vídeo pelo nome
    const searchResults = await ytSearch(name);
    if (!searchResults.videos.length) {
      return res.status(404).json({ status: false, message: "Nenhum resultado encontrado" });
    }

    // Usa o primeiro vídeo
    const firstVideoUrl = searchResults.videos[0].url;
    const result = await playmp3(firstVideoUrl, quality || 128);
    res.status(200).json({ ...result, fromQuery: name });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
});

// 6) /clipe?name=...&quality=360         → devolve vídeo MP4
router.get("/clipedl", async (req, res) => {
  const { name, quality } = req.query;
  if (!name) {
    return res.status(400).json({ status: false, message: 'Parâmetro "name" ausente' });
  }

  try {
    const searchResults = await ytSearch(name);
    if (!searchResults.videos.length) {
      return res.status(404).json({ status: false, message: "Nenhum resultado encontrado" });
    }

    const firstVideoUrl = searchResults.videos[0].url;
    const result = await playmp4(firstVideoUrl, quality || 360);
    res.status(200).json({ ...result, fromQuery: name });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
});

// 1) /ytmp3?url=...&quality=128
router.get("/linkmp3dl", async (req, res) => {
  const { url, quality } = req.query;
  if (!url) return res.status(400).json({ status: false, message: 'Parâmetro "url" ausente' });

  const result = await playmp3(url, quality || 128);
  res.status(result.status ? 200 : 500).json(result);
});

// 2) /ytmp4?url=...&quality=360
router.get("/linkmp4dl", async (req, res) => {
  const { url, quality } = req.query;
  if (!url) return res.status(400).json({ status: false, message: 'Parâmetro "url" ausente' });

  const result = await playmp4(url, quality || 360);
  res.status(result.status ? 200 : 500).json(result);
});

// 3) /transcript?url=...
router.get("/transcript", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, message: 'Parâmetro "url" ausente' });

  const result = await fetchTranscript(url);
  res.status(result.status ? 200 : 500).json(result);
});

// 4) /ytdl?url=...&quality=360
// (Devolve metadados + links diretos de áudio e vídeo)
router.get("/ytdl", async (req, res) => {
  const { url, quality } = req.query;
  if (!url) return res.status(400).json({ status: false, message: 'Parâmetro "url" ausente' });

  const result = await ytdlv2(url, quality || 360);
  res.status(result.status ? 200 : 500).json(result);
});


// 11) /channel?name=UC_x5XG1OV2P6uZZ5FSM9Ttw   (ID ou “@handle”)
router.get("/channel", async (req, res) => {
  const { name } = req.query;
  if (!name)
    return res.status(400).json({ status: false, message: 'Parâmetro "name" ausente' });

  const result = await channel(name);
  res.status(result.status ? 200 : 500).json(result);
});

// 12) /channeldl?name=...
router.get("/channeldl", async (req, res) => {
  const { name } = req.query;
  if (!name)
    return res.status(400).json({ status: false, message: 'Parâmetro "name" ausente' });

  const result = await channel(name);
  if (!result.status || !result.url)               // a API retorna o link no campo "url"
    return res.status(500).json(result);

  res.redirect(result.url);                        // redireciona direto pro canal no YouTube
});



router.get('/igstalk', async (req, res) => {
  const username = req.query.user
  if (!username) {
    return res.status(400).json({ error: 'Parâmetro ?user= é obrigatório' })
  }

  // Função interna para buscar perfil do Instagram
  const instaCheck = async (user) => {
    const api = 'https://privatephotoviewer.com/wp-json/instagram-viewer/v1/fetch-profile'
    const payload = { find: user }
    const headers = {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'X-Requested-With': 'XMLHttpRequest',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 11)',
      'Referer': 'https://privatephotoviewer.com/'
    }

    try {
      const { data } = await axios.post(api, payload, { headers })
      const $ = cheerio.load(data.html)

      let profilePic = $('#profile-insta').find('.col-md-4 img').attr('src')
      if (profilePic?.startsWith('//')) profilePic = 'https:' + profilePic

      const name = $('#profile-insta').find('.col-md-8 h4.text-muted').text().trim()
      const user = $('#profile-insta').find('.col-md-8 h5.text-muted').text().trim()
      const stats = {}

      $('#profile-insta')
        .find('.col-md-8 .d-flex.justify-content-between.my-3 > div')
        .each((i, el) => {
          const value = $(el).find('strong').text().trim()
          const label = $(el).find('span.text-muted').text().trim().toLowerCase()
          if (label.includes('posts')) stats.posts = value
          else if (label.includes('followers')) stats.followers = value
          else if (label.includes('following')) stats.following = value
        })

      const bio = $('#profile-insta').find('.col-md-8 p').text().trim()

      return {
        name,
        username: user,
        profilePic,
        posts: stats.posts,
        followers: stats.followers,
        following: stats.following,
        bio
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error.message)
      return null
    }
  }

  try {
    const data = await instaCheck(username)
    if (!data) {
      return res.status(404).json({ error: 'Perfil não encontrado ou privado' })
    }

    res.json({
      status: 'success',
      source: 'privatephotoviewer.com',
      data
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro interno no servidor' })
  }
})

router.get('/jogo/:slug', async (req, res) => {
  const { slug } = req.params;

  try {
    const response = await axios.get('https://world-ecletix.onrender.com/api/futemax');
    const jogos = response.data;

    const jogo = jogos.find(j => {
      const path = j.link.replace('https://futemax.loan/', '').replace(/\/$/, '').toLowerCase();
      return path.includes(slug.toLowerCase());
    });

    if (!jogo) {
      return res.status(404).send('Jogo não encontrado');
    }

    const futplay = await axios.get(`https://world-ecletix.onrender.com/api/futplay?url=${encodeURIComponent(jogo.link)}`);
    const { title, description, thumbnail, players } = futplay.data;

    const html = `
      <html>
        <head>
          <title>${title}</title>
          <style>
            body {
              margin: 0;
              padding: 20px;
              background: url('https://files.catbox.moe/daejby.jpg') no-repeat center center fixed;
              background-size: cover;
              color: #fff;
              font-family: Arial, sans-serif;
              text-align: center;
            }
            h1 {
              font-size: 28px;
              margin-bottom: 10px;
            }
            p {
              font-size: 18px;
              margin-bottom: 20px;
            }
            img {
              max-width: 90%;
              border-radius: 8px;
              margin-bottom: 20px;
            }
            button {
              margin: 10px 5px;
              padding: 14px 24px;
              background: #ff4444;
              color: #fff;
              border: none;
              border-radius: 10px;
              cursor: pointer;
              font-size: 18px;
              transition: background 0.3s;
            }
            button:hover {
              background: #cc0000;
            }
            iframe {
              width: 100%;
              max-width: 100%;
              height: 60vh;
              border: none;
              border-radius: 12px;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <h1>${title}</h1>
          <p>${description}</p>
          <img src="${thumbnail}" alt="${title}" />
          <div>
            ${players.map((p, i) => `<button onclick="loadPlayer('${p.link}')">${p.label}</button>`).join('')}
          </div>
          <div id="player-container">
            <iframe id="player" src="" allowfullscreen></iframe>
          </div>
          <script>
            function loadPlayer(link) {
              document.getElementById('player').src = link;
            }
          </script>
        </body>
      </html>
    `;

    res.send(html);

  } catch (err) {
    res.status(500).send('Erro ao carregar o jogo');
  }
});    


router.get('/multicanais', async (req, res) => {
  try {
    const { data } = await axios.get('https://multicanais.casino/api/real-games.php');

    if (data?.success && Array.isArray(data.jogos)) {
      let jogos = data.jogos.map(jogo => ({
        titulo: `${jogo.time1} vs ${jogo.time2}`,
        campeonato: jogo.campeonato,
        horario: jogo.horario,
        data: jogo.data,
        link: `https://multicanais.casino/assistir/${jogo.slug}`,
        time1: jogo.time1,
        time2: jogo.time2,
        time1_foto: `https://multicanais.casino/api/team-logo.php?team=${encodeURIComponent(jogo.time1)}`,
        time2_foto: `https://multicanais.casino/api/team-logo.php?team=${encodeURIComponent(jogo.time2)}`,
        transmissoes: jogo.transmissao // opcional
      }));

      return res.json({
        success: true,
        total: jogos.length,
        jogos
      });
    }

    return res.status(502).json({
      success: false,
      jogos: [],
      error: 'A resposta da API oficial veio em formato inesperado.'
    });
  } catch (err) {
    console.error('❌ Erro ao consultar a API do Multicanais:', err.message);
    return res.status(500).json({
      success: false,
      jogos: [],
      error: 'Erro ao acessar a API real-games.php do Multicanais'
    });
  }
});

router.get('/futemax', async (req, res) => {
  const baseUrl = 'https://futemax.loan/';

  try {
    const { data } = await axios.get(baseUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/90.0.4430.212 Safari/537.36',
        'Accept-Language': 'pt-BR,pt;q=0.9',
        'Referer': 'https://www.google.com'
      }
    });

    const $ = cheerio.load(data);
    const jogos = [];

    $('.ultp-block-item').each((_, el) => {
      const title = $(el).find('.ultp-block-title a').text().trim();
      const link = $(el).find('.ultp-block-title a').attr('href');
      const imgSrc = $(el).find('img.ultp-block-image-content').attr('src');

      if (title && link && imgSrc) {
        // Corrige imagem relativa para absoluta
        const image = imgSrc.startsWith('http') ? imgSrc : baseUrl + imgSrc.replace(/^\/?/, '');
        jogos.push({ title, link, image });
      }
    });

    res.json(jogos);

  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados da página inicial.', details: err.message });
  }
});

router.get('/futplay', async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: 'URL é obrigatória.' });
  }
  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/90.0.4430.212 Safari/537.36',
        'Accept-Language': 'pt-BR,pt;q=0.9',
        'Referer': 'https://www.google.com'
      }
    });

    const $ = cheerio.load(data);

    // Thumbnail
    const thumbnailMatch = data.match(/"thumbnailUrl":"(https:\/\/img\.futemax\.loan[^"]+)/);
    const thumbnail = thumbnailMatch ? thumbnailMatch[1] : null;

    // Metadados
    const title = $('meta[property="og:title"]').attr('content') || null;
    const description = $('meta[property="og:description"]').attr('content') || null;
    const canonical = $('link[rel="canonical"]').attr('href') || null;

    // Players
    const players = [];
    $('.btn-player button').each((_, el) => {
      const label = $(el).text().trim();
      const link = $(el).attr('data-src');
      if (link) {
        players.push({ label, link });
      }
    });

    res.json({
      title,
      description,
      thumbnail,
      canonical,
      players
    });

  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados do Futemax.', details: err.message });
  }
});

router.get('/assistir', async (req, res) => {
  const query = req.query.oq;
  if (!query) return res.status(400).json({ error: 'Parâmetro "oq" é obrigatório.' });

  const searchUrl = `https://multicanais.casino/?s=${encodeURIComponent(query)}`;
  try {
    const searchRes = await axios.get(searchUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    const $ = cheerio.load(searchRes.data);
    const firstPost = $('article.vlog-post').first();
    const postLink = firstPost.find('h2.entry-title a').attr('href');
    const imagem = firstPost.find('.entry-image img').attr('src');

    if (!postLink) return res.status(404).json({ error: 'Jogo não encontrado.' });

    const postRes = await axios.get(postLink, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    const $$ = cheerio.load(postRes.data);
    const titulo = $$('h2.wp-block-heading').first().text();

    const links = $$('.links a[data-id]')
      .map((i, el) => $$(el).attr('data-id'))
      .get()
      .filter(Boolean);

    if (links.length === 0) return res.status(404).json({ error: 'Nenhum player encontrado.' });

    res.json({
      titulo,
      imagem,
      links
    });

  } catch (err) {
    console.error('Erro ao buscar:', err.message);
    res.status(500).json({ error: 'Erro ao buscar dados.' });
  }
});


router.get('/assistir2', async (req, res) => {
  const query = req.query.oq;
  if (!query) return res.status(400).json({ error: 'Parâmetro "oq" é obrigatório.' });

  const searchUrl = `https://multicanais.casino/?s=${encodeURIComponent(query)}`;
  try {
    const searchRes = await axios.get(searchUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    const $ = cheerio.load(searchRes.data);
    const firstPost = $('article.vlog-post').first();
    const postLink = firstPost.find('h2.entry-title a').attr('href');
    const imagem = firstPost.find('.entry-image img').attr('src');

    if (!postLink) return res.status(404).json({ error: 'Jogo não encontrado.' });

    const postRes = await axios.get(postLink, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    const $$ = cheerio.load(postRes.data);
    const firstPlayer = $$('.links a[data-id]').first().attr('data-id');
    const titulo = $$('h2.wp-block-heading').first().text();

    if (!firstPlayer) return res.status(404).json({ error: 'Nenhum player encontrado.' });

    res.json({
      titulo,
      imagem,
      link: firstPlayer
    });

  } catch (err) {
    console.error('Erro ao buscar:', err.message);
    res.status(500).json({ error: 'Erro ao buscar dados.' });
  }
});

router.get('/fut/:slug', async (req, res) => {
  const { slug } = req.params;
  if (!slug) return res.status(400).send('Slug inválido.');

  try {
    // 🔑 1. Remonta a URL completa do jogo no Multicanais
    const fullUrl = `https://multicanais.casino/assistir/${slug}/`;

    // 🔑 2. Consulta a API já com a URL codificada
    const apiURL =
      'https://world-ecletix.onrender.com/api/futopcoes?url=' +
      encodeURIComponent(fullUrl);

    const { data } = await axios.get(apiURL);

    // 🔑 3. Monta o HTML do player
    res.send(/* html */ `
      <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>${data.titulo || 'Transmissão ao Vivo'}</title>
          <style>
            body{
              background:#000;color:#fff;font-family:Arial,sans-serif;
              margin:0;padding:20px;text-align:center
            }
            h1{margin-bottom:10px}
            .info{color:#00ccff;font-size:14px;margin-bottom:8px}
            .desc{color:#ccc;font-size:15px;margin-bottom:15px}
            .buttons{
              display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:20px 0
            }
            .buttons button{
              background:#00ccff;color:#000;border:none;padding:10px 16px;
              border-radius:8px;font-weight:bold;cursor:pointer;
              transition:background .3s
            }
            .buttons button:hover{background:#0099cc}
            iframe{
              width:100%;max-width:950px;height:500px;border:none;
              border-radius:10px;box-shadow:0 0 10px #00ccff55;margin:0 auto
            }
          </style>
        </head>
        <body>
          <h1>${data.titulo || 'Transmissão ao Vivo'}</h1>
          ${data.campeonato ? `<div class="info">${data.campeonato}</div>` : ''}
          ${data.dataHora   ? `<div class="desc">${data.dataHora}</div>`   : ''}

          <div class="buttons">
            ${
              data.players?.length
                ? data.players
                    .map(
                      p =>
                        `<button onclick="setIframe('${p.link}')">${p.nome}</button>`
                    )
                    .join('')
                : `<button onclick="setIframe('${data.iframeLink}')">PLAYER PRINCIPAL</button>`
            }
          </div>

          <iframe id="player"
                  src="${
                    data.iframeLink ||
                    (data.players?.length ? data.players[0].link : '')
                  }"
                  allowfullscreen></iframe>

          <script>
            function setIframe(url){ document.getElementById('player').src = url; }
          </script>
        </body>
      </html>
    `);
  } catch (err) {
    console.error('Erro ao carregar dados do jogo:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


router.get("/futopcoes", async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Parâmetro \"url\" é obrigatório." });
  }

  try {
    const response = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    const $ = cheerio.load(response.data);

    // Extrair título do meta tag ou title
    let titulo = $("meta[property=\"og:title\"]").attr("content") || 
                 $("title").text().trim() || 
                 $("h1").first().text().trim() || "";
    
    // Limpar o título removendo " - Ao Vivo - Multicanais" se existir
    titulo = titulo.replace(/\s*-\s*Ao Vivo.*$/i, "").trim();

    // Extrair imagem do meta tag Open Graph
    const imagem = $("meta[property=\"og:image\"]").attr("content") || null;

    // Extrair campeonato
    const campeonato = $(".info-item i.fa-trophy")
      .parent()
      .find("span")
      .text()
      .trim() || 
      $(".info-item i.fa-trophy")
      .parent()
      .text()
      .replace(/\s+/g, " ")
      .trim();

    // Extrair data e hora
    const dataHora = $(".info-item i.fa-calendar")
      .parent()
      .find("span")
      .text()
      .trim() ||
      $(".info-item i.fa-calendar")
      .parent()
      .text()
      .replace(/\s+/g, " ")
      .trim();

    // Extrair link do iframe principal
    const iframeLink = $("#player-iframe").attr("src") || $("iframe").first().attr("src") || null;

    // Extrair links dos players
    const players = [];
    
    // Buscar por todos os botões dentro de .stream-controls
    $(".stream-controls button").each((i, el) => {
      const onclickAttr = $(el).attr("onclick") || "";
      const nomeCompleto = $(el).text().trim();
      
      // Extrair o link usando regex simples
      const match = onclickAttr.match(/https?:\/\/[^'",\s]+/);
      
      if (match && match[0]) {
        // Limpar o nome removendo ícones
        let nome = nomeCompleto.replace(/^\s*\S+\s+/, "").trim();
        
        players.push({
          nome: nome,
          link: match[0]
        });
      }
    });

    // Retornar todas as informações
    res.json({
      titulo: titulo,
      imagem: imagem,
      campeonato: campeonato,
      dataHora: dataHora,
      iframeLink: iframeLink,
      players: players
    });

  } catch (error) {
    console.error("❌ Erro ao processar URL:", error.message);
    res.status(500).json({ 
      error: "Erro interno do servidor",
      details: error.message 
    });
  }
});

router.get('/book', async (req, res) => {
  const { livro } = req.query;
  if (!livro) return res.json({ status: false, erro: "Informe o parâmetro: livro" });

  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`, {
      params: {
        q: livro,
        langRestrict: 'pt'
      }
    });

    res.json({
      status: true,
      criador: "world-ecletix",
      resultado: response.data.items || []
    });
  } catch {
    res.json({ status: false, resultado: "Nenhuma resposta obtida do servidor" });
  }
});
router.get('/cotacao', async (req, res) => {
  const { moeda } = req.query;
  if (!moeda) return res.json({ erro: "Faltando parâmetro: moeda" });

  const moda = moeda.toLowerCase().replace("ó", "o");
  const moedasMap = {
    dolar: "USD-BRL",
    euro: "EUR-BRL",
    bitcoin: "BTC-BRL",
    libra: "GBP-BRL",
    ether: "ETH-BRL",
    iene: "JPY-BRL",
    yuan: "CNY-BRL"
  };

  const money = moedasMap[moda];
  if (!money) {
    return res.json({
      erro: `A moeda escolhida não está presente em meu banco de dados... As moedas disponíveis são:
• Dólar
• Euro
• Bitcoin
• Libra
• Ether
• Iene
• Yuan`
    });
  }

  try {
    const response = await axios.get(`https://economia.awesomeapi.com.br/last/${money}`);
    const dados = response.data[Object.keys(response.data)[0]];

    res.json({
      status: true,
      criador: "world-ecletix",
      resultado: [dados]
    });
  } catch {
    res.json({ status: false, erro: "Nenhuma resposta obtida do servidor" });
  }
});
router.get('/celular2', async (req, res) => {
  try {
    const modelo = req.query.modelo;
    if (!modelo) return res.json({ status: false, motivo: 'Coloque o parâmetro: modelo' });

    const buscaResp = await axios.get(`https://www.techtudo.com.br/busca/?q=${encodeURIComponent(modelo)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const $busca = cheerio.load(buscaResp.data);
    const DFN_UR = $busca(".widget--navigational__title").text().toLowerCase();
    if (!DFN_UR) return res.json({ status: false, message: 'Modelo não encontrado' });

    const slug = DFN_UR.replace(/\s+/g, '-');
    const detalhesResp = await axios.get(`https://www.techtudo.com.br/tudo-sobre/${slug}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const $detalhes = cheerio.load(detalhesResp.data);
    const titulo = $detalhes("h1").text();
    const resumo = $detalhes("div").find(".content-row").text().replace(/  /g, "\n\n").trim();
    const info = $detalhes("div").find(".all-about").text().trim();

    res.json({
      status: true,
      código: 999,
      criador: 'World-Ecletix',
      resultado: {
        title: titulo,
        info: info,
        resumo: resumo
      }
    });
  } catch (error) {
    res.json({ message: "Erro... Aguarde ou fale com algum administrador." });
  }
});

// Rota para buscar as informações do site
router.get('/playertv', async (req, res) => {
  try {
    // URL do site para puxar os dados
    const url = 'https://playertv.net';
    
    // Fazendo a requisição HTTP
    const { data } = await axios.get(url);
    
    // Usando Cheerio para parsear o HTML
    const $ = cheerio.load(data);
    const posts = [];
    
    // Buscando os posts
    $('.elementor-post').each((index, element) => {
      const link = $(element).find('.elementor-post__title a').attr('href');
      const title = $(element).find('.elementor-post__title a').text().trim();
      const imgSrc = $(element).find('.elementor-post__thumbnail img').attr('src') || '';
      
      posts.push({
        link,
        title,
        imgSrc
      });
    });

    // Respondendo com os posts encontrados
    res.json(posts);
  } catch (error) {
    console.error('Erro ao obter o conteúdo:', error);
    res.status(500).json({ error: 'Erro ao buscar o conteúdo.' });
  }
});
router.get('/playertv2', async (req, res) => {
  try {
    const { data } = await axios.get('https://playertv.net/c/max/uefa.php');
    const $ = cheerio.load(data);
    const resultados = [];

    $('.col-lg-3').each((_, el) => {
      const card = $(el);
      const titulo = card.find('.card-title').text().trim();
      const horario = card.find('.btn.btn-primary').first().text().trim();
      const assistirHref = card.find('.btn.btn-danger').attr('href');
      const iframe = card.find('input.form-control').val();
      const imagem = card.find('img').attr('src');

      resultados.push({
        titulo,
        horario,
        imagem,
        iframe,
        assistir: `https://playertv.net/c/max/${assistirHref}`
      });
    });

    res.json(resultados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao capturar dados', details: err.message });
  }
});
router.get('/playertv3', async (req, res) => {
  try {
    const { data } = await axios.get('https://playertv.net/c/one/one.php');
    const $ = cheerio.load(data);
    const resultados = [];

    $('.col-lg-3').each((_, el) => {
      const card = $(el);
      const titulo = card.find('.card-title').text().trim();
      const horario = card.find('.btn.btn-primary').first().text().trim();
      const assistirHref = card.find('.btn.btn-danger').attr('href');
      const iframe = card.find('input.form-control').val();
      const imagem = card.find('img').attr('src');

      resultados.push({
        titulo,
        horario,
        imagem,
        iframe,
        assistir: `https://playertv.net/c/one/${assistirHref}`
      });
    });

    res.json(resultados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao capturar dados', details: err.message });
  }
});

router.get('/iframe', async (req, res) => {
  const canalUrl = req.query.canal;
  if (!canalUrl) {
    return res.status(400).json({ error: 'URL do canal é necessária' });
  }

  try {
    // Faz a requisição para a página do canal
    const { data } = await axios.get(canalUrl);
    const $ = cheerio.load(data);

    // Busca o iframe correto dentro da página
    const iframeSrc = $('.entry-content iframe').attr('src');

    if (!iframeSrc) {
      return res.status(404).json({ error: 'Iframe não encontrado' });
    }

    res.json({ iframe: iframeSrc });
  } catch (error) {
    console.error('Erro ao buscar o iframe:', error);
    res.status(500).json({ error: 'Erro ao processar a página do canal' });
  }
});



    router.get('/canal/:slug', async (req, res) => {
  const slug = req.params.slug;

  try {
    const response = await axios.get('https://world-ecletix.onrender.com/api/playertv');
    const canais = response.data;

    const canal = canais.find(c => slugify(c.title) === slug);

    if (!canal) {
      return res.status(404).send('<h1>Canal não encontrado</h1>');
    }

    const iframeResponse = await axios.get(`https://world-ecletix.onrender.com/api/iframe?canal=${encodeURIComponent(canal.link)}`);
    const iframeUrl = iframeResponse.data.iframe;

    res.send(`
      <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Assistindo ${canal.title}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              background: url('https://files.catbox.moe/d0cb9z.jpg') no-repeat center center fixed;
              background-size: cover;
              color: white;
            }
            iframe {
              width: 100%;
              height: 500px;
              border: none;
              margin-top: 20px;
            }
            h1 {
              background-color: rgba(0, 0, 0, 0.5);
              display: inline-block;
              padding: 10px 20px;
              border-radius: 10px;
            }
          </style>
        </head>
        <body>
          <h1>Assistindo ${canal.title}</h1>
          <iframe src="${iframeUrl}" allow="encrypted-media" allowfullscreen></iframe>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Erro ao carregar o canal:', error);
    res.status(500).send('<h1>Erro ao carregar o canal.</h1>');
  }
});

// Função para converter nomes de canais em slugs
function slugify(text) {
  return text.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[^a-z0-9]+/g, "-") // Troca espaços e caracteres especiais por "-"
    .replace(/^-+|-+$/g, ""); // Remove traços extras no início/fim
}



// Função para buscar o vídeo pelo nome usando yt-search
async function searchVideoByName(name) {
  const result = await search(name);  // Busca o vídeo pelo nome
  if (result && result.videos.length > 0) {
    return result.videos[0].url;  // Retorna a URL do primeiro vídeo encontrado
  }
  throw new Error('Vídeo não encontrado');
}

const { ytmp3: play, ytmp4: clipe } = require('@vreden/youtube_scraper');

// Função para baixar e enviar o arquivo diretamente como buffer
const sendMediaAsBuffer = async (res, url, type) => {
  try {
    // Faz a requisição para o arquivo
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    // Envia os headers para download
    res.setHeader('Content-Type', type);
    res.setHeader('Content-Disposition', 'attachment; filename="media"');

    // Envia o arquivo como buffer
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao processar a mídia' });
  }
};

// Função utilitária para tentar pegar qualquer link válido de áudio/vídeo
function tentarOutrasQualidades(data) {
  const qualidades = Object.values(data || {});
  for (const item of qualidades) {
    if (typeof item === 'string' && item.startsWith('http')) {
      return item;
    }
  }
  return null;
}

// Rota para baixar áudio do YouTube
router.get('/audio', async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'Parâmetro "query" não fornecido' });

  try {
    const url = `https://api.nexfuture.com.br/api/downloads/youtube/playaudio/v2?query=${encodeURIComponent(query)}`;
    const response = await axios.get(url);

    const downloads = response.data?.resultado?.result?.downloads?.audio;
    let link = downloads?.any4k;

    if (!link) {
      link = tentarOutrasQualidades(downloads?.config);
    }

    if (!link) {
      return res.status(404).json({ error: 'Nenhum link de áudio encontrado' });
    }

    res.redirect(link);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao processar download de áudio', details: err.message });
  }
});

// Rota para baixar vídeo do YouTube
router.get('/video', async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'Parâmetro "query" não fornecido' });

  try {
    const url = `https://api.nexfuture.com.br/api/downloads/youtube/playvideo/v2?query=${encodeURIComponent(query)}`;
    const response = await axios.get(url);

    const downloads = response.data?.resultado?.result?.downloads?.video;
    let link = downloads?.any4k;

    if (!link) {
      link = tentarOutrasQualidades(downloads?.config);
    }

    if (!link) {
      return res.status(404).json({ error: 'Nenhum link de vídeo encontrado' });
    }

    res.redirect(link);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao processar download de vídeo', details: err.message });
  }
});

router.get('/play-audio', async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'Parâmetro "query" não fornecido' });

  try {
    const endpoint = `https://api.nexfuture.com.br/api/downloads/youtube/playaudio/v2?query=${encodeURIComponent(query)}`;
    const response = await axios.get(endpoint);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar áudio do YouTube', details: err.message });
  }
});

router.get('/play-video', async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'Parâmetro "query" não fornecido' });

  try {
    const endpoint = `https://api.nexfuture.com.br/api/downloads/youtube/playvideo/v2?query=${encodeURIComponent(query)}`;
    const response = await axios.get(endpoint);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar vídeo do YouTube', details: err.message });
  }
});

// Baixar áudio pelo nome
router.get('/play', async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const response = await axios.get(`https://api.vreden.my.id/api/ytplaymp3?query=${encodeURIComponent(name)}`);
    const downloadUrl = response.data.result.download.url;

    if (downloadUrl) {
      return res.redirect(downloadUrl);  // Redireciona para o link de download do áudio
    } else {
      return res.status(404).json({ error: 'Download link not available' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Baixar vídeo pelo nome
router.get('/playvideo', async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const response = await axios.get(`https://api.vreden.my.id/api/ytplaymp4?query=${encodeURIComponent(name)}`);
    const downloadUrl = response.data.result.download.url;

    if (downloadUrl) {
      return res.redirect(downloadUrl);  // Redireciona para o link de download do vídeo
    } else {
      return res.status(404).json({ error: 'Download link not available' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Baixar áudio pelo link

router.get('/ytmp3', async (req, res) => {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const response = await axios.get(`https://api.vreden.my.id/api/ytmp3?url=${url}`);
    const downloadUrl = response.data.result.download.url;

    if (downloadUrl) {
      return res.redirect(downloadUrl);  // Redireciona para o link de download do áudio
    } else {
      return res.status(404).json({ error: 'Download link not available' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Baixar vídeo pelo link
router.get('/ytmp4', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const response = await axios.get(`https://api.vreden.my.id/api/ytmp4?url=${url}`);
    const downloadUrl = response.data.result.download.url;

    if (downloadUrl) {
      return res.redirect(downloadUrl);  // Redireciona para o link de download do vídeo
    } else {
      return res.status(404).json({ error: 'Download link not available' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Rota para buscar e tocar uma música pelo nome
router.get('/play5', async (req, res) => {
  const nome = req.query.nome;
  const quality = req.query.quality || "128";

  if (!nome) {
    return res.status(400).json({ error: 'O parâmetro nome é obrigatório' });
  }

  try {
    const searchResults = await ytSearch(nome);
    if (!searchResults.videos.length) {
      return res.status(404).json({ error: 'Nenhum resultado encontrado' });
    }

    const videoUrl = searchResults.videos[0].url;
    const result = await play(videoUrl, quality);

    if (result.status && result.download) {
      return sendMediaAsBuffer(res, result.download.url, 'audio/mpeg');
    }
    res.status(500).json({ error: result.result });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

router.get('/musica6', async (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ error: 'O parâmetro \"name\" é obrigatório' });
    }

    try {
        const response = await axios.get(`https://api.nexfuture.com.br/api/downloads/youtube/playaudio/v2?query=${encodeURIComponent(name)}`);
        
        if (response.data.resultado && response.data.resultado.result && response.data.resultado.result.downloads && response.data.resultado.result.downloads.audio) {
            return res.redirect(response.data.resultado.result.downloads.audio.any4k);
        }
        
        res.status(404).json({ error: 'Música não encontrada' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar a música' });
    }
});


// Rota para buscar e tocar um clipe pelo nome
router.get('/playvideo5', async (req, res) => {
  const nome = req.query.nome;
  const quality = req.query.quality || "360";

  if (!nome) {
    return res.status(400).json({ error: 'O parâmetro nome é obrigatório' });
  }

  try {
    const searchResults = await ytSearch(nome);
    if (!searchResults.videos.length) {
      return res.status(404).json({ error: 'Nenhum resultado encontrado' });
    }

    const videoUrl = searchResults.videos[0].url;
    const result = await clipe(videoUrl, quality);

    if (result.status && result.download) {
      return sendMediaAsBuffer(res, result.download.url, 'video/mp4');
    }
    res.status(500).json({ error: result.result });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});


router.get('/clipe6', async (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).send('Parâmetro "name" é obrigatório');

  try {
    const response = await axios.get(`https://api.nexfuture.com.br/api/downloads/youtube/playvideo/v2?query=${encodeURIComponent(name)}`);
    const any4k = response.data?.resultado?.result?.downloads?.video?.any4k;

    if (!any4k) return res.status(404).send('Link de download não encontrado');

    return res.redirect(any4k);
  } catch (err) {
    return res.status(500).send('Erro ao buscar o vídeo');
  }
});


// Rota para baixar áudio diretamente pelo link do YouTube
router.get('/ytmp35', async (req, res) => {
  const url = req.query.url;
  const quality = req.query.quality || "128";

  if (!url) {
    return res.status(400).json({ error: 'O parâmetro url é obrigatório' });
  }

  try {
    const result = await play(url, quality);

    if (result.status && result.download) {
      return sendMediaAsBuffer(res, result.download.url, 'audio/mpeg');
    }
    res.status(500).json({ error: result.result });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

// Rota para baixar vídeo diretamente pelo link do YouTube
router.get('/ytmp45', async (req, res) => {
  const url = req.query.url;
  const quality = req.query.quality || "360";

  if (!url) {
    return res.status(400).json({ error: 'O parâmetro url é obrigatório' });
  }

  try {
    const result = await clipe(url, quality);

    if (result.status && result.download) {
      return sendMediaAsBuffer(res, result.download.url, 'video/mp4');
    }
    res.status(500).json({ error: result.result });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});


// Rota para baixar vídeo
router.get('/play2', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).send('Por favor, forneça um parâmetro de busca (query).');
  }

  try {
    const results = await search(query);
    const video = results.videos[0];

    if (!video) {
      return res.status(404).send('Vídeo não encontrado.');
    }

    const videoStream = yt(video.url, { quality: 'highestvideo' });

    res.setHeader('Content-Disposition', `attachment; filename="${video.title}.mp4"`);
    videoStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao baixar o vídeo.');
  }
});

router.get('/threads', async (req, res) => { try { const { url } = req.query; if (!url) return res.status(400).json({ error: 'URL is required' });

const response = await axios.get(`https://api.vreden.my.id/api/download/threads?url=${encodeURIComponent(url)}`);
    
    const data = response.data;
    data.creator = 'come primas';
    
    res.json(data);
} catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
}

});



router.get('/facebook2', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL não fornecida' });

  try {
    const response = await axios.get(`https://api.vreden.my.id/api/fbdl?url=${encodeURIComponent(url)}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados do Facebook', details: err.message });
  }
});

router.get('/drive', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL não fornecida' });

  try {
    const response = await axios.get(`https://api.vreden.my.id/api/drive?url=${encodeURIComponent(url)}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados do Drive', details: err.message });
  }
});

router.get('/threads2', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL não fornecida' });

  try {
    const endpoint = `https://kamuiapi.shop/api/dl/threads?link=${encodeURIComponent(url)}&apikey=YT8q4bUNXV`;
    const response = await axios.get(endpoint);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados do Threads', details: err.message });
  }
});

router.get('/capcut', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) return res.status(400).json({ error: 'URL is required' });

        const response = await axios.get(`https://api.vreden.my.id/api/capcutdl?url=${encodeURIComponent(url)}`);
        
        const data = response.data;
        data.creator = 'come primas';
        
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Rota para baixar música
router.get('/play3', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).send('Por favor, forneça um parâmetro de busca (query).');
  }

  try {
    const results = await search(query);
    const video = results.videos[0];

    if (!video) {
      return res.status(404).send('Música não encontrada.');
    }

    const audioStream = yt(video.url, { filter: 'audioonly', quality: 'highestaudio' });

    res.setHeader('Content-Disposition', `attachment; filename="${video.title}.mp3"`);
    audioStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao baixar a música.');
  }
});
// Dicionário de nacionalidades
const nacionalidades = {
  'asiatica': 'asian girls',
  'chinesa': 'china girls',
  'japonesa': 'japan girls',
  'coreana': 'korean girls',
  'indiana': 'india girls',
  'tailandesa': 'thailand girls',
  'filipina': 'philippines girls',
  'vietnamita': 'vietnam girls',
  'indonesia': 'indonesia girls',
  'malasia': 'malaysia girls',
  'sri-lanquesa': 'sri lanka girls',
  'nepalesa': 'nepal girls'
};

// Rota para buscar imagens de nacionalidade
router.get('/foto-nac/:nacionalidade', async (req, res) => {
  try {
    // A chave da nacionalidade vinda da URL
    const nacionalidade = req.params.nacionalidade.toLowerCase();

    // Verificando se a nacionalidade existe no dicionário
    if (!nacionalidades[nacionalidade]) {
      return res.status(400).json({ error: 'Nacionalidade não encontrada.' });
    }

    // Chaves de API dentro da própria rota
    const UNSPLASH_API_KEY = 'IM5AxyOpo_MgGdD2p4zF6KlItQI7ZuCyM7-9pc5exNU';

    // Fazendo a requisição para a API do Unsplash
    const response = await axios.get(`https://api.unsplash.com/photos/random?query=${nacionalidades[nacionalidade]}&client_id=${UNSPLASH_API_KEY}&count=1`);

    // Pegando os dados da imagem
    const imageData = response.data[0];

    if (!imageData) {
      return res.status(404).json({ error: 'Imagem não encontrada para a nacionalidade.' });
    }

    // Retornando os detalhes da imagem
    const imageUrl = imageData.urls && imageData.urls.full ? imageData.urls.full : null;
    const photographer = imageData.user ? imageData.user.name : 'Desconhecido';
    const photoLink = imageData.links ? imageData.links.html : 'Link não disponível';
    const altDescription = imageData.alt_description || 'Descrição não disponível';
    const location = imageData.location ? imageData.location.name : 'Localização desconhecida';
    const views = imageData.views || 'Desconhecido';
    const downloads = imageData.downloads || 'Desconhecido';

    // Enviando a resposta com os dados da imagem
    res.json({
      imageUrl,
      photographer,
      photoLink,
      altDescription,
      location,
      views,
      downloads
    });
  } catch (error) {
    console.error("Erro ao buscar a imagem:", error);
    res.status(500).json({ error: 'Erro ao buscar a imagem. Tente novamente mais tarde.' });
  }
});


router.get('/clouds', async (req, res) => {
    const url = 'https://premium.primaryhost.shop:2198/clouds.php?url=max.com&token=@amaralcoder';

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os dados.' });
    }
});

router.get('/sisregi/:cpf', async (req, res) => {
    const { cpf } = req.params;
    const url = `https://sisregi.mdzapis.com/sisregi.php?Token=mdz&cpf=${cpf}`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os dados.' });
    }
});

router.get('/kwai', async (req, res) => {
    const { url } = req.query;
    
    if (!url) {
        return res.status(400).json({ error: "Por favor, forneça uma URL do Kwai!" });
    }

    async function kwaiDownloader(videoUrl) {
        try {
            const response = await axios.get(videoUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
                }
            });

            if (response.status !== 200) {
                throw new Error(`Erro na requisição: Status ${response.status}`);
            }

            const $ = cheerio.load(response.data);
            const videoSrc = $("#main .video-content .video-box #video-0").attr("src");

            if (!videoSrc) {
                throw new Error("Vídeo não encontrado, verifique a URL!");
            }

            return videoSrc;

        } catch (error) {
            throw new Error(`Erro ao buscar o vídeo: ${error.message}`);
        }
    }

    try {
        const videoLink = await kwaiDownloader(url);
        res.json({ videoUrl: videoLink });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/ifunny', async (req, res) => {
    const { url } = req.query;

    if (!url || !url.startsWith("https://")) {
        return res.status(400).json({ error: "Por favor, forneça uma URL válida do iFunny!" });
    }

    async function ifunnyDownloader(videoUrl) {
        try {
            const response = await axios.get(videoUrl, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Android; Linux armv7l; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 Fennec/10.0.1",
                }
            });

            if (response.status !== 200) {
                throw new Error(`Erro na requisição: Status ${response.status}`);
            }

            const $ = cheerio.load(response.data);
            const resultado = {
                thumb: $('meta[property="og:image"]').attr("content"),
                video: $('meta[property="og:video:url"]').attr("content"),
                autor: $('meta[name="author"]').attr("content"),
                width: $('meta[property="og:video:width"]').attr("content"),
                height: $('meta[property="og:video:height"]').attr("content"),
                legenda: $("h1.HGgf").text()?.trim() || "",
                mimetype: $('meta[property="og:video:type"]').attr("content"),
            };

            if (!resultado.video) {
                throw new Error("Erro ao baixar o vídeo. Verifique o link e tente novamente.");
            }

            return resultado;

        } catch (error) {
            throw new Error(`Erro ao buscar o vídeo: ${error.message}`);
        }
    }

    try {
        const videoData = await ifunnyDownloader(url);
        res.json({ 
            status: "sucesso",
            criador: "hirokkkkk",
            resultado: videoData 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/ddos', async (req, res) => {
    const { site } = req.query;

    if (!site) {
        return res.status(400).json({ error: true, message: "Parâmetro 'site' é obrigatório." });
    }

    try {
        const apiUrl = `https://shirouzvoidex.com/aleatorios/dns.php?site=${encodeURIComponent(site)}`;
        const response = await axios.get(apiUrl);
        return res.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar informações DNS:', error);
        return res.status(500).json({ error: true, message: "Erro ao obter informações DNS." });
    }
});

router.get('/ipinfo', async (req, res) => {
    const { ip } = req.query;

    if (!ip) {
        return res.status(400).json({ error: true, message: "Parâmetro 'ip' é obrigatório." });
    }

    try {
        const apiUrl = `https://ipapi.com/ip_api.php?ip=${encodeURIComponent(ip)}`;
        const response = await axios.get(apiUrl);
        return res.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar informações do IP:', error);
        return res.status(500).json({ error: true, message: "Erro ao obter informações do IP." });
    }
});

router.get('/googleimage/:query', async (req, res) => {
  try {
    const query = req.params.query;

    if (!query) {
      return res.status(400).json({ error: 'Por favor, forneça um termo de pesquisa.' });
    }

    // Chaves de API do Google
    const GOOGLE_API_KEY = 'AIzaSyD1LwGYfWvRGpwOt7ppmXwHkWLm-lYMZUw';
    const GOOGLE_CX = '8336f5de960b14645'; // ID de pesquisa do Google

    // Fazendo a requisição para a API do Google
    const response = await axios.get(`https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&cx=${GOOGLE_CX}&searchType=image&key=${GOOGLE_API_KEY}&imgSize=huge`);

    // Pegando os links das imagens
    const images = response.data.items.map(item => item.link);

    if (images.length === 0) {
      return res.status(404).json({ error: 'Nenhuma imagem encontrada para o termo de pesquisa.' });
    }

    // Retornando uma imagem aleatória
    const randomIndex = Math.floor(Math.random() * images.length);
    res.json({ imageUrl: images[randomIndex] });
  } catch (error) {
    console.error("Erro ao buscar imagem no Google:", error);
    res.status(500).json({ error: 'Erro ao buscar imagem no Google. Tente novamente mais tarde.' });
  }
});
router.get('/deviantart/:query', async (req, res) => {
  try {
    const query = req.params.query;

    if (!query) {
      return res.status(400).json({ error: 'Por favor, forneça um termo de pesquisa.' });
    }

    // URL de pesquisa do DeviantArt
    const searchUrl = `https://www.deviantart.com/search?q=${encodeURIComponent(query)}`;

    // Fazendo a requisição para o DeviantArt
    const response = await axios.get(searchUrl);

    // Analisando os itens da resposta
    const images = [];
    response.data.forEach(item => {
      const src = item.src;  // Ajuste conforme o formato de resposta da API
      if (src && src.includes('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com')) {
        images.push(src);
      }
    });

    if (images.length === 0) {
      return res.status(404).json({ error: 'Nenhuma imagem encontrada no DeviantArt.' });
    }

    // Enviar até 5 imagens encontradas no DeviantArt
    res.json({ images: images.slice(0, 5) });
  } catch (error) {
    console.error("Erro ao buscar no DeviantArt:", error);
    res.status(500).json({ error: 'Erro ao buscar imagens no DeviantArt. Tente novamente mais tarde.' });
  }
});
router.get('/gitclone', async (req, res) => {
    const repoUrl = req.query.url;
    if (!repoUrl) {
        return res.status(400).json({ error: 'Parâmetro "url" é obrigatório' });
    }

    const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!regex.test(repoUrl)) {
        return res.status(400).json({ error: 'URL inválida do GitHub' });
    }

    let [, user, repo] = repoUrl.match(regex) || [];
    repo = repo.replace(/.git$/, '');
    const url = `https://api.github.com/repos/${user}/${repo}/zipball`;

    try {
        const headers = await axios.head(url);
        const filename = headers.headers['content-disposition'].match(/attachment; filename=(.*)/)[1];

        res.json({ download_url: url, filename: filename + '.zip' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao tentar clonar o repositório' });
    }
});

router.get('/cpfcompleto', async (req, res) => {
    const cpf = req.query.cpf;
    if (!cpf) {
        return res.status(400).json({ error: 'Parâmetro "cpf" é obrigatório' });
    }

    try {
        const response = await axios.get(`https://scraper.mdzapis.com/consultar/mdz?type=cpf&data=${encodeURIComponent(cpf)}&base=COMPLETA&apikey=freemdz15days`);
        
        if (!response.data || !response.data.resultado) {
            return res.status(404).json({ error: 'Dados não encontrados para este CPF' });
        }

        const dados = response.data.resultado;

        res.json({
            nome: dados.match(/NOME:\s(.*?)\n/)?.[1] || "Não encontrado",
            cpf: dados.match(/CPF:\s(.*?)\n/)?.[1] || "Não encontrado",
            situacao_cadastral: dados.match(/SITUAÇÃO CADASTRAL:\s(.*?)\n/)?.[1] || "Não encontrado",
            nascimento: dados.match(/NASCIMENTO:\s(.*?)\n/)?.[1] || "Não encontrado",
            escolaridade: dados.match(/ESCOLARIDADE:\s(.*?)\n/)?.[1] || "Não encontrado",
            mae: dados.match(/MÃE:\s(.*?)\n/)?.[1] || "Não encontrado",
            pai: dados.match(/PAI:\s(.*?)\n/)?.[1] || "Não encontrado",
            renda: dados.match(/RENDA:\s(.*?)\n/)?.[1] || "Não encontrado",
            poder_aquisitivo: dados.match(/PODER AQUISITIVO:\s(.*?)\n/)?.[1] || "Não encontrado"
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao consultar o CPF' });
    }
});


router.get('/temporal', async (req, res) => {
    const cidade = req.query.cidade;
    if (!cidade) {
        return res.status(400).json({ error: 'Parâmetro "cidade" é obrigatório' });
    }

    try {
        const response = await axios.get(`https://wttr.in/${encodeURIComponent(cidade)}?format=j1`);

        if (response.data.error) {
            return res.status(404).json({ error: `Não foi possível encontrar a previsão para "${cidade}"` });
        }

        const data = response.data;
        const condicao = data.current_condition[0];

        res.json({
            cidade: data.nearest_area[0].areaName[0].value,
            regiao: data.nearest_area[0].region[0].value,
            pais: data.nearest_area[0].country[0].value,
            temperatura: `${condicao.temp_C}°C`,
            sensacao_termica: `${condicao.FeelsLikeC}°C`,
            umidade: `${condicao.humidity}%`,
            vento: `${condicao.windspeedKmph} km/h`,
            condicao: condicao.weatherDesc[0].value
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar a previsão do tempo' });
    }
});


router.get('/pairing', async (req, res) => {
    const numero = req.query.numero;
    if (!numero) {
        return res.status(400).json({ error: 'Parâmetro "numero" é obrigatório' });
    }

    try {
        const startPairingTime = Date.now();
        const response = await axios.get(`http://premium.primaryhost.shop:2171/code?number=${numero}`);

        if (response.data.error) {
            return res.status(400).json({ error: response.data.error });
        }

        res.json({
            numero,
            mensagem: response.data.message,
            tempo_resposta: ((Date.now() - startPairingTime) / 1000).toFixed(2) + ' segundos',
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao iniciar pairing' });
    }
});
router.get('/receita', async (req, res) => {
    const nomeReceita = req.query.nome;
    const url = nomeReceita
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(nomeReceita)}`
        : 'https://www.themealdb.com/api/json/v1/1/random.php';

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (!data.meals) {
            return res.status(404).json({ error: 'Nenhuma receita encontrada' });
        }

        const receita = data.meals[0];

        let ingredientes = [];
        for (let i = 1; i <= 20; i++) {
            if (receita[`strIngredient${i}`]) {
                ingredientes.push(`${receita[`strIngredient${i}`]} - ${receita[`strMeasure${i}`]}`);
            }
        }

        res.json({
            nome: receita.strMeal,
            categoria: receita.strCategory,
            ingredientes,
            instrucoes: receita.strInstructions,
            imagem: receita.strMealThumb,
            link: receita.strSource || `https://www.themealdb.com/meal/${receita.idMeal}`,
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar a receita' });
    }
});

router.get('/pesq-anime', async (req, res) => {
    const query = req.query.q;
    const page = req.query.page || 1;

    if (!query) {
        return res.status(400).json({ error: 'Parâmetro "q" (termo de busca) é obrigatório' });
    }

    try {
        const response = await axios.get(`https://api-anime-three.vercel.app/anime/gogoanime/${encodeURIComponent(query)}?page=${page}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/feriados', async (req, res) => {
    const ano = req.query.ano || new Date().getFullYear(); // Se não for passado, usa o ano atual

    try {
        const response = await axios.get(`https://brasilapi.com.br/api/feriados/v1/${ano}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get('/gato', async (req, res) => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1');
        const data = response.data;
        res.json({ url: data[0].url });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar imagem de gato' });
    }
});
router.get('/cachorro', async (req, res) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1');
        const data = response.data;
        res.json({ url: data[0].url });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar imagem de cachorro' });
    }
});
router.get('/basquete-news', async (req, res) => {
    try {
        const response = await axios.get('https://noticiasdebasquete.com.br/noticias-basquete/');
        const html = response.data;
        const $ = cheerio.load(html);

        const noticias = [];
        $('.listing-item').each((_, el) => {
            noticias.push({
                titulo: $(el).find('.post-title').text().trim(),
                resumo: $(el).find('.post-summary').text().trim(),
                link: $(el).find('a').attr('href'),
            });
        });

        res.json(noticias.slice(0, 5));
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar notícias de basquete' });
    }
});
router.get('/noticias-news', async (req, res) => {
    const { tema } = req.query;
    if (!tema) return res.status(400).json({ error: 'Informe um tema' });

    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(tema)}&sortBy=publishedAt&language=pt&apiKey=SUA_API_KEY`);
        const data = response.data;
        res.json(data.articles.slice(0, 5));
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar notícias' });
    }
});
router.get('/hd', async (req, res) => {
    const { imageUrl } = req.query;
    if (!imageUrl) return res.status(400).json({ error: 'Informe uma URL de imagem' });

    try {
        const response = await axios.get(`https://https://api.nexfuture.com.br/api/outros/remini?url=${encodeURIComponent(imageUrl)}`, { responseType: 'arraybuffer' });
        res.setHeader('Content-Type', 'image/jpeg');
        res.send(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao melhorar imagem' });
    }
});
router.get('/imagine', async (req, res) => {
    const { prompt } = req.query;
    if (!prompt) return res.status(400).json({ error: 'Informe um prompt' });

    try {
        const response = await axios.get(`https://hercai.onrender.com/v3/text2image?prompt=${encodeURIComponent(prompt)}`);
        const data = response.data;
        res.json({ url: data.url });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao gerar imagem' });
    }
});
router.get('/baixarsite', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('Erro: URL não fornecida');
    }

    const domain = new URL(url).hostname.replace(/\W/g, '_'); // Garante um nome seguro
    const outputDir = path.join(__dirname, 'downloads', domain);
    const zipFilePath = path.join(__dirname, 'downloads', `${domain}.zip`);

    // Criar diretório se não existir
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    // Executa o wget para baixar o site
    exec(`wget --mirror --convert-links --adjust-extension --page-requisites --no-parent -P ${outputDir} ${url}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao baixar site: ${stderr}`);
            return res.status(500).send('Erro ao baixar site');
        }

        // Criar arquivo ZIP
        const output = fs.createWriteStream(zipFilePath);
        const archive = archiver('zip', { zlib: { level: 9 } });

        output.on('close', () => {
            console.log(`Download concluído: ${zipFilePath}`);
            res.download(zipFilePath, `${domain}.zip`, (err) => {
                if (err) res.status(500).send('Erro ao enviar o arquivo');
                fs.rmSync(outputDir, { recursive: true, force: true }); // Limpa arquivos baixados
                fs.unlinkSync(zipFilePath); // Remove o ZIP após o download
            });
        });

        archive.pipe(output);
        archive.directory(outputDir, false);
        archive.finalize();
    });
});


router.get('/volei-news', async (req, res) => {
    try {
        const { data } = await axios.get('https://webvolei.com.br/');
        const $ = cheerio.load(data);

        let noticias = [];
        $('li.articles-box-item').each((index, element) => {
            const titulo = $(element).find('h3.article-title a').text().trim();
            const dataPublicacao = $(element).find('.article-meta-info .date').text().trim();
            const link = $(element).find('h3.article-title a').attr('href');
            const imagem = $(element).find('.article-thumb img').attr('src');

            if (titulo && link) {
                noticias.push({
                    titulo,
                    dataPublicacao,
                    link,
                    imagem
                });
            }
        });

        noticias = noticias.slice(0, 5);

        if (noticias.length === 0) {
            return res.status(404).json({ error: 'Nenhuma notícia de vôlei encontrada' });
        }

        res.json(noticias);
    } catch (error) {
        console.error('Erro ao buscar notícias de Vôlei:', error);
        res.status(500).json({ error: 'Erro ao buscar notícias de vôlei' });
    }
});



router.get('/qrcode', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.status(400).json({ error: 'Digite um texto/url que deseja criar um código qr' });
    }

    try {
        const { data } = await axios.get(`https://api.qrserver.com/v1/create-qr-code/`, {
            params: { data: texto, size: '150x150' }
        });

        res.send(data);  // Envia o QR Code gerado como imagem
    } catch (error) {
        console.error('Erro ao gerar QR Code:', error);
        res.status(500).json({ error: 'Erro ao gerar QR Code' });
    }
});
router.get('/printarsite', async (req, res) => {
    const siteUrl = req.query.url;

    if (!siteUrl) {
        return res.status(400).json({ error: 'Você precisa fornecer o link do site que deseja tirar o print.' });
    }

    const isValidUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(siteUrl);
    if (!isValidUrl) {
        return res.status(400).json({ error: 'O link fornecido não é válido.' });
    }

    try {
        const response = await axios.get('https://api.apilight.com/screenshot/get', {
            params: { url: siteUrl, base64: 1, width: 1366, height: 1024 },
            headers: { 'x-api-key': 'j1gIaMwfU545P2ymFWA0gan7yHr7Yla05CJnMheL' }
        });

        res.send(Buffer.from(response.data, 'base64'));  // Envia o print como imagem
    } catch (error) {
        console.error('Erro ao gerar print do site:', error);
        res.status(500).json({ error: 'Erro ao gerar print do site' });
    }
});

router.get('/letradamusica', async (req, res) => {
    const musica = req.query.musica;

    if (!musica) {
        return res.status(400).json({ error: 'Cadê o nome da música?' });
    }

    try {
        const api = new YTMusic.default();
        await api.initialize();

        const musica1 = await api.search(musica);
        const musicaid = musica1[0].videoId;

        const letra1 = await api.getLyrics(musicaid);
        const letra = letra1;

        res.json({ nome: musica1[0].name, letra });
    } catch (e) {
        console.error('Erro ao buscar letra de música:', e);
        res.status(500).json({ error: 'Erro ao buscar letra de música' });
    }
});
router.get('/bing', async (req, res) => {
    const query = req.query.query;

    if (!query) {
        return res.status(400).json({ error: 'Você precisa fornecer uma consulta para buscar.' });
    }

    try {
        const { data } = await axios.get(`https://www.bing.com/search?q=${encodeURIComponent(query)}`);
        const $ = cheerio.load(data);

        const results = [];
        $('.b_algo').each((index, element) => {
            const title = $(element).find('h2').text().trim() || 'Sem título';
            const url = $(element).find('h2 a').attr('href') || 'Sem URL';
            const snippet = $(element).find('.b_caption p').text().trim() || 'Sem descrição';
            results.push({ title, url, snippet });
        });

        if (results.length > 0) {
            const firstResult = results[0];
            res.json({
                title: firstResult.title,
                url: firstResult.url,
                snippet: firstResult.snippet
            });
        } else {
            res.status(404).json({ error: 'Nenhum resultado encontrado' });
        }
    } catch (e) {
        console.error('Erro ao buscar no Bing:', e);
        res.status(500).json({ error: 'Erro ao buscar no Bing' });
    }
});
// Rota GET simples, apenas com o parâmetro 'vers'
router.get("/biblia", async (req, res) => {
  const versiculo = req.query.vers;

  // Verificar se o parâmetro `vers` foi passado
  if (!versiculo) {
    return res.status(400).json({ error: "O parâmetro 'vers' é obrigatório." });
  }

  try {
    // Fazendo a requisição à API externa (com a tradução fixa 'almeida')
    const response = await axios.get(`https://bible-api.com/${encodeURIComponent(versiculo)}?translation=almeida`);
    res.json(response.data); // Retornando a resposta da API externa
  } catch (error) {
    // Tratando erros (ex.: versículo inválido)
    res.status(500).json({
      error: "Erro ao buscar o versículo. Verifique o formato ou se ele existe.",
      details: error.message,
    });
  }
});

router.get('/spam', async (req, res) => {
    const numero = req.query.numero;
    const quantos = parseInt(req.query.quantos);

    if (!numero || !quantos || quantos <= 0) {
        return res.status(400).json({ error: 'Parâmetro "numero" e "quantos" são obrigatórios e "quantos" deve ser um número positivo' });
    }

    try {
        const results = [];
        for (let i = 0; i < quantos; i++) {
            const response = await axios.get(`http://premium.primaryhost.shop:2171/code?number=${numero}`);
            results.push(response.data);
        }
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer o spam', details: error.message });
    }
});

router.get('/banido', async (req, res) => {
    const userId = req.query.id;

    if (!userId) {
        return res.status(400).json({ error: 'Parâmetro "id" é obrigatório' });
    }

    try {
        const response = await axios.get(`https://api.nowgarena.com/api/check_banned?uid=${userId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao verificar o status do usuário', details: error.message });
    }
});

router.get('/eventos', async (req, res) => {
    try {
        const response = await axios.get('https://api.nowgarena.com/api/events?region=br&key=projetoswq');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter eventos', details: error.message });
    }
});
router.get('/info-ff', async (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'O parâmetro "id" é obrigatório.' });
    }

    try {
        const response = await axios.get(`http://system.ffgarena.cloud/api/info_avatar?uid=${id}&region=br`);
        const data = response.data;

        const info = data.basicInfo;
        const pet = data.petInfo;
        const clan = data.clanBasicInfo;
        const avatarUrl = data.avatars;

        const formatted = {
            "Apelido": info.nickname,
            "ID": info.accountId,
            "Região": info.region,
            "Nível": info.level,
            "Experiência": info.exp.toLocaleString(),
            "Pontos de Ranking": info.rankingPoints,
            "Rank Atual": info.rank,
            "Rank CS": info.csRank,
            "Likes": info.liked.toLocaleString(),
            "Possui Passe Elite": info.hasElitePass ? 'Sim' : 'Não',
            "Clã": clan ? clan.clanName : 'Sem clã',
            "Level do Clã": clan ? clan.clanLevel : '—',
            "Mascote": pet ? pet.petName : 'Nenhum',
            "Level do Mascote": pet ? pet.level : '—',
            "Avatar": avatarUrl
        };

        res.json(formatted);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar informações do jogador.', details: error.message });
    }
});
router.get('/info-player', async (req, res) => {
    const playerId = req.query.id;

    if (!playerId) {
        return res.status(400).json({ error: 'Parâmetro "id" é obrigatório' });
    }

    try {
        const response = await axios.get(`https://api.nowgarena.com/api/info_player?id=${playerId}&region=br`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter informações do jogador', details: error.message });
    }
});

router.get('/likeff', async (req, res) => {
    const { id, quantity = 10 } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'O parâmetro "id" é obrigatório.' });
    }

    try {
        const response = await axios.get(`https://likes.ffgarena.cloud/api/freefire/likes?uid=${id}&quantity=${quantity}`);
        const data = response.data;

        const formattedResponse = {
            "Apelido do Jogador": data.nickname,
            "Região": data.region,
            "Nível": data.level,
            "Experiência": data.exp.toLocaleString(),
            "Likes Antes": data.likes_before.toLocaleString(),
            "Likes Depois": data.likes_after.toLocaleString(),
            "Likes Enviados pelo Bot": data.sent
        };

        res.json(formattedResponse);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar informações de likes.', details: error.message });
    }
});


router.get('/likesff', async (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'O parâmetro "id" é obrigatório.' });
    }

    try {
        const apiUrl = `https://likeskryptor.squareweb.app/api/likes?uid=${encodeURIComponent(id)}&quantity=100&key=bykryptor`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        const likesCalculado = data.Likes_Depois - data.Likes_Antes;

        const formattedResponse = {
            "ID do Jogador": id,
            "Apelido": data.PlayerNickname,
            "Região": data.PlayerRegion,
            "Nível": data.PlayerLevel,
            "Likes Antes": data.Likes_Antes,
            "Likes Depois": data.Likes_Depois,
            "Likes Enviados": likesCalculado
        };

        res.json(formattedResponse);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar informações de likes.', details: error.message });
    }
});


router.get('/likesff2', async (req, res) => {
    const { id, quantity = 10 } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'O parâmetro "id" é obrigatório.' });
    }

    try {
        const response = await axios.get(`https://adderfreefirelikes.squareweb.app/api/like?uid=${id}&quantity=${quantity}`);
        const data = response.data;

        const formattedResponse = {
            "ID do Jogador": data.target_id,
            "Likes Enviados": data.likes_enviados.toLocaleString(),
            "Falhas": data.falhas,
            "Sucessos": data.sucessos,
            "Status": data.status === "ok" ? "Sucesso" : "Erro"
        };

        res.json(formattedResponse);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao enviar likes.', details: error.message });
    }
});


router.get('/instamp4', async (req, res) => {
    const { url: instagramUrl } = req.query;

    if (!instagramUrl) {
        return res.status(400).json({ error: 'URL do Instagram é obrigatório' });
    }

    try {
        // Montar a URL da API externa
        const apiUrl = `https://https://api.nexfuture.com.br/api/downloads/instagram/dl?url=${encodeURIComponent(instagramUrl)}`;

        // Fazer a requisição para a API externa
        const apiResponse = await axios.get(apiUrl);

        // Verificar se a resposta é válida e contém o link do vídeo
        if (apiResponse.data.status && apiResponse.data.resultado?.video) {
            const videoUrl = apiResponse.data.resultado.video;

            // Redirecionar o cliente para o link do vídeo
            res.redirect(videoUrl);
        } else {
            return res.status(404).json({ error: 'Vídeo não encontrado' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});
router.get('/instamp3', (req, res) => {
    const { url: instagramUrl } = req.query;

    if (!instagramUrl) {
        return res.status(400).json({ error: 'URL do Instagram é obrigatório' });
    }

    try {
        // Montar a URL da API externa
        const apiUrl = `https://https://api.nexfuture.com.br/api/downloads/instagram/mp3?url=${encodeURIComponent(instagramUrl)}`;

        // Redirecionar o cliente para a URL
        res.redirect(apiUrl);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});
//musica usando scraper
// Função para pesquisar a música e pegar o primeiro resultado
const searchMusic = async (query) => {
    try {
        console.log(`Searching for: ${query}`);
        const results = await ytSearch(query);  // Pesquisa usando yt-search
        if (results.videos && results.videos.length > 0) {
            const video = results.videos[0]; // Pega o primeiro vídeo da lista
            console.log(`Found video: ${video.title}`);
            return video.url;  // Retorna o URL do primeiro vídeo
        } else {
            throw new Error('No results found for this music');
        }
    } catch (err) {
        console.error('Error during music search:', err.message);
        throw new Error('Error while searching music: ' + err.message);
    }
};

// Rota para pesquisar e baixar o vídeo MP4 da música
router.get('/clipe3', async (req, res) => {
    const query = req.query.name; // Nome da música enviado como parâmetro na URL
    if (!query) {
        return res.status(400).send({ message: 'Name parameter is required' });
    }

    try {
        const videoUrl = await searchMusic(query);
        if (!videoUrl) {
            return res.status(404).send({ message: 'Music not found' });
        }

        const video = await ytmp4(videoUrl);
        res.setHeader('Content-Type', 'video/mp4'); // Tipo MIME correto
        res.setHeader('Content-Disposition', 'attachment; filename=music-video.mp4'); // Nome do arquivo para download
        res.send(video); // Envia o Buffer do vídeo
    } catch (err) {
        console.error('Error downloading video:', err.message);
        res.status(500).send({ message: 'Error downloading video', error: err.message });
    }
});

// Rota para pesquisar e baixar o áudio MP3 da música
router.get('/musica3', async (req, res) => {
    const query = req.query.name; // Nome da música enviado como parâmetro na URL
    if (!query) {
        return res.status(400).send({ message: 'Name parameter is required' });
    }

    try {
        const videoUrl = await searchMusic(query);
        if (!videoUrl) {
            return res.status(404).send({ message: 'Music not found' });
        }

        const audio = await ytmp3(videoUrl);
        res.setHeader('Content-Type', 'audio/mp3'); // Tipo MIME correto
        res.setHeader('Content-Disposition', 'attachment; filename=music-audio.mp3'); // Nome do arquivo para download
        res.send(audio); // Envia o Buffer do áudio
    } catch (err) {
        console.error('Error downloading audio:', err.message);
        res.status(500).send({ message: 'Error downloading audio', error: err.message });
    }
});
// Rota para baixar o vídeo MP4 a partir da URL
router.get('/linkmp45', async (req, res) => {
    const videoUrl = req.query.url; // URL do vídeo enviado como parâmetro na URL
    if (!videoUrl) {
        return res.status(400).send({ message: 'URL parameter is required' });
    }

    try {
        const video = await ytmp4(videoUrl); // Baixar o vídeo
        res.setHeader('Content-Type', 'video/mp4'); // Tipo MIME correto
        res.setHeader('Content-Disposition', 'attachment; filename=music-video.mp4'); // Nome do arquivo para download
        res.send(video); // Envia o Buffer do vídeo
    } catch (err) {
        console.error('Error downloading video:', err.message);
        res.status(500).send({ message: 'Error downloading video', error: err.message });
    }
});

// Rota para baixar o áudio MP3 a partir da URL
router.get('/linkmp35', async (req, res) => {
    const videoUrl = req.query.url; // URL do vídeo enviado como parâmetro na URL
    if (!videoUrl) {
        return res.status(400).send({ message: 'URL parameter is required' });
    }

    try {
        const audio = await ytmp3(videoUrl); // Baixar o áudio
        res.setHeader('Content-Type', 'audio/mp3'); // Tipo MIME correto
        res.setHeader('Content-Disposition', 'attachment; filename=music-audio.mp3'); // Nome do arquivo para download
        res.send(audio); // Envia o Buffer do áudio
    } catch (err) {
        console.error('Error downloading audio:', err.message);
        res.status(500).send({ message: 'Error downloading audio', error: err.message });
    }
});
//fim 
router.get('/musica5', async (req, res) => {
    const { query } = req; // O nome da música será passado como parâmetro de consulta
    const musicName = query.name; // Exemplo: /play?nome=nome_da_musica

    if (!musicName) {
        return res.status(400).json({ error: 'Nome da música é obrigatório' });
    }

    try {
        // Montar a URL da API com o nome da música
        const apiUrl = `https://api.nexfuture.com.br/api/downloads/youtube/play?query=${encodeURIComponent(musicName)}`;
        
        // Fazer a requisição para a API
        const response = await axios.get(apiUrl);

        if (response.data.status && response.data.resultado && response.data.resultado.audio) {
            const audioUrl = response.data.resultado.audio;

            // Redirecionar para o link do áudio
            return res.redirect(audioUrl);
        } else {
            return res.status(404).json({ error: 'Áudio não encontrado' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});

// Rota GET chamada "playlink"

router.get('/linkmp33', async (req, res) => {
    const { url } = req.query;
    if (!url) {
        return res.status(400).json({ error: 'O parâmetro url é obrigatório' });
    }

    try {
        const response = await axios.get(`https://api.nexfuture.com.br/api/downloads/youtube/playaudio/v2?query=${encodeURIComponent(url)}`);
        const audioLink = response.data?.resultado?.result?.downloads?.audio?.config;

        if (!audioLink) {
            return res.status(404).json({ error: 'Música não encontrada' });
        }

        return res.redirect(audioLink);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar a música' });
    }
});

router.get('/linkmp44', async (req, res) => {
    const { url } = req.query;
    if (!url) {
        return res.status(400).json({ error: 'O parâmetro url é obrigatório' });
    }

    try {
        const response = await axios.get(`https://api.nexfuture.com.br/api/downloads/youtube/playvideo/v2?query=${encodeURIComponent(url)}`);
        const videoLink = response.data?.resultado?.result?.downloads?.video?.config;

        if (!videoLink) {
            return res.status(404).json({ error: 'Link de download não encontrado' });
        }

        return res.redirect(videoLink);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar o vídeo' });
    }
});


// Rota GET chamada "clipelink"
router.get('/clipe5', async (req, res) => {
    const { name } = req.query; // Obtenha o nome da música ou vídeo a partir dos parâmetros da query
    
    if (!name) {
        return res.status(400).send('O parâmetro "name" é obrigatório.');
    }
    
    try {
        // Realiza a busca no YouTube pelo nome
        const results = await search(name);
        const video = results.videos[0]; // Obtém o primeiro vídeo da busca
        
        if (!video) {
            return res.status(404).send('Nenhum vídeo encontrado.');
        }
        
        // Monta a URL da API com o link do vídeo encontrado
        const apiUrl = `https://https://api.nexfuture.com.br/api/downloads/youtube/mp4?url=${encodeURIComponent(video.url)}`;
        
        // Redireciona para a URL da API
        res.redirect(apiUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao processar a requisição.');
    }
});


// Rota para buscar e baixar áudio
router.get('/audio3', async (req, res) => {
  const { name } = req.query;  // Obtém o nome da música da query string

  if (!name) {
    return res.status(400).json({ error: 'Nome da música é necessário' });
  }

  try {
    const videoUrl = await searchVideoByName(name);  // Busca o vídeo pelo nome
    const audioUrl = await audiodl(videoUrl);  // Obtém a URL do áudio
    res.redirect(audioUrl);  // Redireciona para a URL de download do áudio
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar e baixar vídeo
router.get('/video3', async (req, res) => {
  const { name } = req.query;  // Obtém o nome do vídeo da query string

  if (!name) {
    return res.status(400).json({ error: 'Nome do vídeo é necessário' });
  }

  try {
    const videoUrl = await searchVideoByName(name);  // Busca o vídeo pelo nome
    const videoDownloadUrl = await videodl(videoUrl);  // Obtém a URL do vídeo
    res.redirect(videoDownloadUrl);  // Redireciona para a URL de download do vídeo
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Rota para baixar áudio
router.get('/linkaudio', async (req, res) => {
  const { url } = req.query;  // Obtém o URL da query string

  if (!url) {
    return res.status(400).json({ error: 'URL do vídeo é necessária' });
  }

  try {
    const audioUrl = await audiodl(url);  // Chama a função audiodl para obter o áudio
    res.redirect(audioUrl);  // Redireciona para a URL de download do áudio
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para baixar vídeo
router.get('/linkvideo', async (req, res) => {
  const { url } = req.query;  // Obtém o URL da query string

  if (!url) {
    return res.status(400).json({ error: 'URL do vídeo é necessária' });
  }

  try {
    const videoUrl = await videodl(url);  // Chama a função videodl para obter o vídeo
    res.redirect(videoUrl);  // Redireciona para a URL de download do vídeo
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/gtts', async (req, res) => {
  const { texto } = req.query;

  if (!texto) {
    return res.status(400).json({ status: false, mensagem: 'O parâmetro "texto" é obrigatório.' });
  }

  try {
    const response = await axios.get(`https://api-aswin-sparky.koyeb.app/api/convert/gtts?lang=pt&text=${encodeURIComponent(texto)}`);

    if (response.data && response.data.result && response.data.result.audio) {
      // Redireciona diretamente para a URL do áudio
      res.redirect(response.data.result.audio);
    } else {
      res.json({ mensagem: 'Não foi possível gerar o áudio.' });
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    res.status(500).json({ status: false, mensagem: 'Erro interno do servidor.' });
  }
});

//ia ilimitada 
// GPT-4-turbo
router.get('/gpt-4-turbo', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.v2(texto, "gpt-4-turbo");
    res.json({ resposta: response });
  } catch (error) {
    res.status(500).send('Error while generating AI response.');
  }
});

// GPT-4o
router.get('/gpt-4o', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.v2(texto, "gpt-4o");
    res.json({ resposta: response });
  } catch (error) {
    res.status(500).send('Error while generating AI response.');
  }
});

// Grok-2
router.get('/grok-2', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.v2(texto, "grok-2");
    res.json({ resposta: response });
  } catch (error) {
    res.status(500).send('Error while generating AI response.');
  }
});

// Grok-2-mini
router.get('/grok-2-mini', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.v2(texto, "grok-2-mini");
    res.json({ resposta: response });
  } catch (error) {
    res.status(500).send('Error while generating AI response.');
  }
});

// Grok-beta
router.get('/grok-beta', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.v2(texto, "grok-beta");
    res.json({ resposta: response });
  } catch (error) {
    res.status(500).send('Error while generating AI response.');
  }
});

// Claude-3-opus
router.get('/claude-3-opus', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.v2(texto, "claude-3-opus");
    res.json({ resposta: response });
  } catch (error) {
    res.status(500).send('Error while generating AI response.');
  }
});

// Claude-3-sonnet
router.get('/claude-3-sonnet', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.v2(texto, "claude-3-sonnet");
    res.json({ resposta: response });
  } catch (error) {
    res.status(500).send('Error while generating AI response.');
  }
});

// Claude-3-5-sonnet
router.get('/claude-3-5-sonnet', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.v2(texto, "claude-3-5-sonnet");
    res.json({ resposta: response });
  } catch (error) {
    res.status(500).send('Error while generating AI response.');
  }
});

// Claude-3-5-sonnet-2
router.get('/claude-3-5-sonnet-2', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.v2(texto, "claude-3-5-sonnet-2");
    res.json({ resposta: response });
  } catch (error) {
    res.status(500).send('Error while generating AI response.');
  }
});

// Gemini
router.get('/gemini', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.v2(texto, "gemini");
    res.json({ resposta: response });
  } catch (error) {
    res.status(500).send('Error while generating AI response.');
  }
});
// DALL·E
router.get('/dalle', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.image(texto, "dalle");
    res.redirect(response.url); // Redireciona para a URL da imagem gerada
  } catch (error) {
    res.status(500).send('Error while generating AI image.');
  }
});

// V1
router.get('/image-v1', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.image(texto, "v1");
    res.redirect(response.url); // Redireciona para a URL da imagem gerada
  } catch (error) {
    res.status(500).send('Error while generating AI image.');
  }
});

// V2
router.get('/image-v2', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.image(texto, "v2");
    res.redirect(response.url); // Redireciona para a URL da imagem gerada
  } catch (error) {
    res.status(500).send('Error while generating AI image.');
  }
});

// V2-beta
router.get('/image-v2-beta', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.image(texto, "v2-beta");
    res.redirect(response.url); // Redireciona para a URL da imagem gerada
  } catch (error) {
    res.status(500).send('Error while generating AI image.');
  }
});

// Lexica
router.get('/lexica', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.image(texto, "lexica");
    res.redirect(response.url); // Redireciona para a URL da imagem gerada
  } catch (error) {
    res.status(500).send('Error while generating AI image.');
  }
});

// Prodia
router.get('/prodia', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.image(texto, "prodia");
    res.redirect(response.url); // Redireciona para a URL da imagem gerada
  } catch (error) {
    res.status(500).send('Error while generating AI image.');
  }
});

// Simurg
router.get('/simurg', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.image(texto, "simurg");
    res.redirect(response.url); // Redireciona para a URL da imagem gerada
  } catch (error) {
    res.status(500).send('Error while generating AI image.');
  }
});

// Animefy
router.get('/animefy', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.image(texto, "animefy");
    res.redirect(response.url); // Redireciona para a URL da imagem gerada
  } catch (error) {
    res.status(500).send('Error while generating AI image.');
  }
});

// Raava
router.get('/raava', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.image(texto, "raava");
    res.redirect(response.url); // Redireciona para a URL da imagem gerada
  } catch (error) {
    res.status(500).send('Error while generating AI image.');
  }
});

// Shonin
router.get('/shonin', async (req, res) => {
  const { texto } = req.query;
  if (!texto) return res.status(400).send('Texto parameter is required.');

  try {
    const response = await ai.image(texto, "shonin");
    res.redirect(response.url); // Redireciona para a URL da imagem gerada
  } catch (error) {
    res.status(500).send('Error while generating AI image.');
  }
});
// Rota para utilizar IA (exemplo de GPT)
router.get('/ai', async (req, res) => {
  const { prompt, model, chatId } = req.query;
  if (!prompt) return res.status(400).send('Prompt is required.');

  try {
    const response = await ai(prompt, model, chatId);
    res.json(response);
  } catch (error) {
    res.status(500).send('Error while generating AI response.');
  }
});

// Rota para gerar imagem com IA
router.get('/image', async (req, res) => {
  const { prompt, model } = req.query;
  if (!prompt) return res.status(400).send('Prompt is required.');

  try {
    const response = await ai.image(prompt, model);
    res.json(response);
  } catch (error) {
    res.status(500).send('Error while generating AI image.');
  }
});
      
//fim

//inteligência artificial 
router.get('/ia', async (req, res) => {
  const { texto } = req.query;

  if (!texto) {
    return res.status(400).json({ status: false, mensagem: 'O parâmetro "texto" é obrigatório.' });
  }

  try {
    const response = await axios.get(`https://https://api.nexfuture.com.br/api/ai/gpt?query=${texto}`);

    if (response.data && response.data.resposta) {
      res.json({ resposta: response.data.resposta });
    } else {
      res.json({ resposta: 'Sem resposta disponível' });
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    res.status(500).json({ status: false, mensagem: 'Erro interno do servidor.' });
  }
});

router.get('/lady', async (req, res) => {
  const { texto } = req.query;

  if (!texto) {
    return res
      .status(400)
      .json({ status: false, mensagem: 'O parâmetro "texto" é obrigatório.' });
  }

  try {
    // Faz a chamada à nova API, enviando o texto no parâmetro ask
    const { data } = await axios.get(
      'https://fastrestapis.fasturl.link/aillm/gpt-4o-turbo',
      { params: { ask: texto } }
    );

    // A API retorna a resposta no campo data.result
    const resposta = data && data.result ? data.result : 'Sem resposta disponível';

    res.json({ resposta });
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    res
      .status(500)
      .json({ status: false, mensagem: 'Erro interno do servidor.' });
  }
});

router.get('/blackbox', async (req, res) => {
    const { texto } = req.query;

    if (!texto) {
        return res.status(400).json({ status: false, mensagem: 'O parâmetro "texto" é obrigatório.' });
    }

    try {
        const response = await axios.get(`https://api.nexfuture.com.br/api/inteligencias/blackbox??query=${encodeURIComponent(texto)}`);

        if (response.data && response.data.resposta) {
            res.json({ resposta: response.data.resposta });
        } else {
            res.json({ resposta: 'Sem resposta disponível' });
        }
    } catch (error) {
        console.error('Erro ao buscar dados:', error.message);
        res.status(500).json({ status: false, mensagem: 'Erro interno do servidor.' });
    }
});

router.get('/deepseek', async (req, res) => {
    const { texto } = req.query;

    if (!texto) {
        return res.status(400).json({ status: false, mensagem: 'O parâmetro "texto" é obrigatório.' });
    }

    try {
        const response = await axios.get(`https://api.nexfuture.com.br/api/inteligencias/deepseek?query=${encodeURIComponent(texto)}`);

        if (response.data && response.data.resposta) {
            res.json({ resposta: response.data.resposta });
        } else {
            res.json({ resposta: 'Sem resposta disponível' });
        }
    } catch (error) {
        console.error('Erro ao buscar dados:', error.message);
        res.status(500).json({ status: false, mensagem: 'Erro interno do servidor.' });
    }
});
router.get('/we-ai', async (req, res) => {
    const { texto } = req.query;

    if (!texto) {
        return res.status(400).json({ status: false, mensagem: 'O parâmetro "texto" é obrigatório.' });
    }

    try {
        const response = await axios.get(`https://api.nexfuture.com.br/api/inteligencias/chatgpt?query=${encodeURIComponent(texto)}`);

        if (response.data && response.data.resposta) {
            res.json({ resposta: response.data.resposta });
        } else {
            res.json({ resposta: 'Sem resposta disponível' });
        }
    } catch (error) {
        console.error('Erro ao buscar dados:', error.message);
        res.status(500).json({ status: false, mensagem: 'Erro interno do servidor.' });
    }
});
router.get('/sabetudo', async (req, res) => {
  const { texto } = req.query;

  if (!texto) {
    return res.status(400).json({ status: false, mensagem: 'O parâmetro "texto" é obrigatório.' });
  }

  try {
    const response = await axios.get(`https://https://api.nexfuture.com.br/api/inteligencias/gemini/pro?query=${texto}`);

    if (response.data && response.data.resposta) {
      res.json({ resposta: response.data.resposta });
    } else {
      res.json({ resposta: 'Sem resposta disponível' });
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    res.status(500).json({ status: false, mensagem: 'Erro interno do servidor.' });
  }
});

router.get('/ai-gemini', async (req, res) => {
  const { texto } = req.query;

  if (!texto) {
    return res.status(400).json({ status: false, mensagem: 'O parâmetro "texto" é obrigatório.' });
  }

  try {
    const response = await axios.get(`https://api.giftedtech.web.id/api/ai/geminiai?apikey=gifted&q=${texto}`);

    if (response.data && response.data.result) {
      res.json({ resposta: response.data.result });
    } else {
      res.json({ resposta: 'Sem resposta disponível' });
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    res.status(500).json({ status: false, mensagem: 'Erro interno do servidor.' });
  }
});

router.get('/ai-geminipro', async (req, res) => {
  const { texto } = req.query; // Captura o parâmetro 'texto' da URL
  
  if (!texto) {
    return res.status(400).json({ erro: 'O parâmetro "texto" é obrigatório' });
  }

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/ai/geminiaipro?apikey=gifted&q=${encodeURIComponent(texto)}`;
    const { data } = await axios.get(apiUrl);

    if (data && data.result) {
      res.json({ resposta: data.result });
    } else {
      res.status(500).json({ erro: 'Resposta inválida da API' });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar a API', detalhes: error.message });
  }
});

router.get('/ai-gpt', async (req, res) => {
  const { texto } = req.query; // Captura o parâmetro 'texto' da query string
  
  if (!texto) {
    return res.status(400).json({ erro: 'O parâmetro "texto" é obrigatório' });
  }

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/ai/gpt?apikey=gifted&q=${encodeURIComponent(texto)}`;
    const { data } = await axios.get(apiUrl);

    if (data && data.result) {
      res.json({ resposta: data.result });
    } else {
      res.status(500).json({ erro: 'Resposta inválida da API' });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar a API', detalhes: error.message });
  }
});


router.get('/ai-gpt3.5-turbo', async (req, res) => {
  const { texto } = req.query; // Captura o parâmetro 'texto' da query string

  if (!texto) {
    return res.status(400).json({ erro: 'O parâmetro "texto" é obrigatório' });
  }

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/ai/gpt-turbo?apikey=gifted&q=${encodeURIComponent(texto)}`;
    const { data } = await axios.get(apiUrl);

    if (data && data.result) {
      res.json({ resposta: data.result });
    } else {
      res.status(500).json({ erro: 'Resposta inválida da API' });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar a API', detalhes: error.message });
  }
});
//canvas 

// Rota para a função gay
router.get('/gay', async (req, res) => {
  try {
    const image = req.query.link;

    // Chama a função gay definida no config.js para gerar a imagem
    const filePath = await gay(image);

    // Envia a imagem gerada para o cliente
    res.sendFile(filePath);  // Aqui o Express envia o arquivo para o cliente
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: 500,
      info: 'Ops, aconteceu um erro no servidor interno.',
      resultado: 'error'
    });
  }
});
router.get('/comunismo', async (req, res) => {
  try {
    const image = req.query.link;
    if (!image) {
      return res.status(400).json({ message: "Faltando o parâmetro image" });
    }

    const filePath = await comunismo(image);  // Passando 'image' diretamente
    res.sendFile(filePath); // Envia o arquivo gerado como resposta
  } catch (err) {
    res.status(500).send({
      status: 500,
      info: 'Ops, aconteceu um erro no servidor interno.',
      resultado: 'error'
    });
  }
});
router.get('/bolsonaro', async (req, res) => {
  try {
    const image = req.query.link;
    // Passando 'req' e 'res' para a função 'bolsonaro'
    const filePath = await bolsonaro(image);  
    res.sendFile(filePath);  // Envia o arquivo gerado para o cliente
  } catch (err) {
    res.status(500).send({
      status: 500,
      info: 'Ops, aconteceu um erro no servidor interno.',
      resultado: 'error'
    });
  }
});
router.get('/beautiful', beautiful)
router.get('/musicard', musicard) 
router.get('/bnw', bnw) 
router.get('/affect', affect) 
router.get('/blur', blurr)    
router.get('/circle', circle) 
router.get('/del', del) 
router.get('/invert', invert)  
router.get('/lgbt', gay) 
router.get('/facepalm', facepalm)    
router.get('/dither', dither) 
router.get('/jail', jail) 
router.get('/magik', magik) 
router.get('/rip', rip)   
router.get('/sepia', sepia) 
router.get('/rotate', rotate) 
router.get('/pixelate', pixelate) 
router.get('/trash', trash) 
router.get('/wasted', wasted)
router.get('/wanted', wanted)
router.get('/bobross', bobross)
router.get('/karaba', bobross)
router.get('/mms', mms)


router.get('/welcome', async (req, res, next) => {
if(!req.query.titulo) return res.json({ status: 404, error: 'Insira o parametro: titulo'})
if(!req.query.perfil) return res.json({ status: 404, error: 'Insira o parametro: perfil'})
if(!req.query.fundo) return res.json({ status: 404, error: 'Insira o parametro: fundo'})
if(!req.query.desc) return res.json({ status: 404, error: 'Insira o parametro: desc'})
let wewelcomeer = await new Canvasfy.WelcomeLeave()
  .setAvatar(req.query.perfil)
  .setBackground("image", req.query.fundo)
  .setTitle(req.query.titulo)
  .setDescription(req.query.desc)
  .setBorder("#2a2e35")
  .setAvatarBorder("#2a2e35")
  .setOverlayOpacity(0.6)
  .build();
require('fs').writeFileSync(bla + '/assets/Tempo/welkom.png', wewelcomeer, 'base64')
res.sendFile(bla + '/assets/Tempo/welkom.png')
})

router.get('/top', async (req, res, next) => {
  var { message, fundo, foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, nome1, nome2, nome3, nome4, nome5, nome6, nome7, nome8, nome9, nome10, xp1, xp2, xp3, xp4, xp5, xp6, xp7, xp8, xp9, xp10 } = req.query
  database = [
    {top: 1, avatar: foto1, tag: nome1, score: Number(xp1)},
    {top: 2, avatar: foto2, tag: nome2, score: Number(xp2)},
    {top: 3, avatar: foto3, tag: nome3, score: Number(xp3)},
    {top: 4, avatar: foto4, tag: nome4, score: Number(xp4)},
    {top: 5, avatar: foto5, tag: nome5, score: Number(xp5)},
    {top: 6, avatar: foto6, tag: nome6, score: Number(xp6)},
    {top: 7, avatar: foto7, tag: nome7, score: Number(xp7)},
    {top: 8, avatar: foto8, tag: nome8, score: Number(xp8)},
    {top: 9, avatar: foto9, tag: nome9, score: Number(xp9)},
    {top: 10, avatar: foto10, tag: nome10, score: Number(xp10)}
    ]
  const top10 = await new Canvasfy.Top()
  .setOpacity(0.6)
  .setScoreMessage(message)
  .setabbreviateNumber(true)
  .setBackground("image", fundo)
  .setColors({box: "#212121", username: "#ffffff", score: "#ffffff", firstRank: "#f7c716", secondRank: "#9e9e9e", thirdRank: "#94610f"})
  .setUsersData(database)
  .build();

require('fs').writeFileSync(bla + '/assets/Tempo/welkom.png', top10, 'base64')
res.sendFile(bla + '/assets/Tempo/welkom.png')
})

router.get('/level', async (req, res, next) => {
var { foto, nome, expnow, expall, level, fundo } = req.query
if(!foto) return res.json({message: "Faltando o parâmetro foto"})
if(!nome) return res.json({message: "Faltando o parâmetro nome"})
if(!expnow) return res.json({message: "Faltando o parâmetro XP atual"})
if(!expall) return res.json({message: "Faltando o parâmetro XP total"})
if(!level) return res.json({message: "Faltando o parâmetro level"})
if(!fundo) return res.json({message: "Faltando o parâmetro fundo"})
let rank1 = await new Canvasfy.Rank()
    .setAvatar(foto)
    .setBackground("image", fundo)
    .setUsername(nome)
    .setBorder("#fff")
    .setBarColor("#00ffff")
    .setStatus("online")
    .setLevel(Number(level))
    .setLevelColor({text:"#00ffff",number:"#fff"})
    .setRank(Number(expnow), "XP")
    .setRankColor({text:"#00ffff",number:"#fff"})
    .setCurrentXp(Number(expnow))
    .setRequiredXp(Number(expall))
    .build();

require('fs').writeFileSync(bla + '/assets/Tempo/welkom.png', rank1, 'base64')
res.sendFile(bla + '/assets/Tempo/welkom.png')
})

router.get('/levelup', async (req, res, next) => {
var { foto, nome, lvb, lva, fundo } = req.query
if(!foto) return res.json({message: "Faltando o parâmetro foto"})
if(!nome) return res.json({message: "Faltando o parâmetro nome"})
if(!lvb) return res.json({message: "Faltando o parâmetro level before"})
if(!lva) return res.json({message: "Faltando o parâmetro level after"})
if(!fundo) return res.json({message: "Faltando o parâmetro fundo"})
let lvup = await new Canvasfy.LevelUp()
    .setAvatar(foto)
    .setBackground("image", fundo)
    .setUsername(nome)
    .setBorder("#000000")
    .setAvatarBorder("#00ffff")
    .setOverlayOpacity(0.7)
    .setLevels(Number(lvb), Number(lva))
    .build();

require('fs').writeFileSync(bla + '/assets/Tempo/welkom.png', lvup, 'base64')
res.sendFile(bla + '/assets/Tempo/welkom.png')
})

router.get('/levelup2', async (req, res, next) => {
var { foto, nome, lvb, lva, fundo } = req.query
if(!foto) return res.json({message: "Faltando o parâmetro foto"})
if(!nome) return res.json({message: "Faltando o parâmetro nome"})
if(!lvb) return res.json({message: "Faltando o parâmetro level before"})
if(!lva) return res.json({message: "Faltando o parâmetro level after"})
if(!fundo) return res.json({message: "Faltando o parâmetro fundo"})
let lvup2 = await new Canvasfy.LevelUp()
    .setAvatar(foto)
    .setBackground("image", fundo)
    .setUsername(nome)
    .setBorder("#000000")
    .setAvatarBorder("#ff0000")
    .setOverlayOpacity(0.7)
    .setLevels(Number(lvb), Number(lva))
    .build();

require('fs').writeFileSync(bla + '/assets/Tempo/welkom.png', lvup2, 'base64')
res.sendFile(bla + '/assets/Tempo/welkom.png')
})

router.get('/ship', async (req, res, next) => {
var { foto1, foto2, fundo, mat } = req.query
if(!foto1) return res.json({message: "Faltando o parâmetro foto 1"})
if(!foto2) return res.json({message: "Faltando o parâmetro foto 2"})
if(!mat) return res.json({message: "Faltando o parâmetro mat"})
if(!fundo) return res.json({message: "Faltando o parâmetro fundo"})
let shiplv = await new Canvasfy.Ship()
    .setAvatars(foto1, foto2)
    .setBackground("image", fundo)
    .setBorder("#f0f0f0")
    .setOverlayOpacity(0.2)
    .setCustomNumber(Number(mat))
    .build();

require('fs').writeFileSync(bla + '/assets/Tempo/welkom.png', shiplv, 'base64')
res.sendFile(bla + '/assets/Tempo/welkom.png')
})

router.get('/tweed', async (req, res, next) => {
var { theme, name, username, verified, message, perfil } = req.query
th = theme.toLowerCase()
let tweedcv = await new Canvasfy.Tweet()
.setTheme((th == `black` || th == `preto`) ? `dark` : (th == `white` || white == `branco`) ? `light` : `dim`)//"dark", "light" and "dim"
.setUser({displayName: name, username: username})
.setVerified(verified && (verified == `s` || verified == `y`) ? true : false)
.setComment(message)
.setAvatar(perfil)
.build();

require('fs').writeFileSync(bla + '/assets/Tempo/welkom.png', tweedcv, 'base64')
res.sendFile(bla + '/assets/Tempo/welkom.png')
})

router.get('/welcome4', async (req, res, next) => {
if (!req.query.titulo) return res.json({ status: 404, error: 'Insira o parametro: titulo'})
if (!req.query.nome) return res.json({ status: 404, error: 'Insira o parametro: nome'})
if (!req.query.perfil) return res.json({ status: 404, error: 'Insira o parametro: perfil'})
if (!req.query.fundo) return res.json({ status: 404, error: 'Insira o parametro: fundo'})
if (!req.query.grupo) return res.json({ status: 404, error: 'Insira o parametro: grupo'})

let welcomer = await new canvasx.Welcome()
.setUsername(req.query.nome)
.setDiscriminator("2024")
.setText("title", req.query.titulo)
.setText("message", req.query.grupo)
.setAvatar(req.query.perfil)
.setColor('border', '#00100C')
.setColor('username-box', '#00100C')
.setColor('discriminator-box', '#00100C')
.setColor('message-box', '#00100C')
.setColor('title', '#00FFFF')
.setBackground(req.query.fundo)
.toAttachment()
let base64 = `${welcomer.toBuffer().toString('base64')}`
require('fs').writeFileSync(bla+'/assets/welkom.png', base64, 'base64')
res.sendFile(bla+'/assets/welkom.png')
})

router.get('/welcome5', async (req, res, next) => {
  var { nome, guilda, perfil, membro, avatar, fundo } = req.query
  if(!nome) return res.json({resultado: "Faltando o parâmetro nome"})
  if(!guilda) return res.json({resultado: "Faltando o parâmetro guilda"})
  if(!perfil) return res.json({resultado: "Faltando o parâmetro perfil"})
  if(!membro) return res.json({resultado: "Faltando o parâmetro membro"})
  if(!avatar) return res.json({resultado: "Faltando o parâmetro avatar"})
  if(!fundo) return res.json({resultado: "Faltando o parâmetro fundo"})
  let imagejxr = await new JXR.Welcome()
  .setUsername(nome)
  .setGuildName(guilda)
  .setGuildIcon(perfil)
  .setMemberCount(`${membro}`)
  .setAvatar(avatar)
  .setBackground(fundo)
  .toAttachment();

  let datajxr = `${imagejxr.toBuffer().toString('base64')}`
  require('fs').writeFileSync(bla+'/assets/welkom.png', datajxr, 'base64')
  res.sendFile(bla+'/assets/welkom.png')
})

router.get('/welcome2', async (req, res, next) => {
  var { nome, grupo, perfil, membro, fundo } = req.query
  if(!nome) return res.json({resultado: "Faltando o parâmetro nome"})
  if(!grupo) return res.json({resultado: "Faltando o parâmetro guilda"})
  if(!perfil) return res.json({resultado: "Faltando o parâmetro perfil"})
  if(!membro) return res.json({resultado: "Faltando o parâmetro membro"})
  if(!fundo) return res.json({resultado: "Faltando o parâmetro fundo"})
  var imagejxr2 = await new JXR.Welcome2()
    .setAvatar(perfil)
    .setUsername(nome)
    .setBg(fundo)
    .setGroupname(grupo)
    .setMember(membro)
    .toAttachment();

  let datajxr2 = `${imagejxr2.toBuffer().toString('base64')}`
  require('fs').writeFileSync(bla+'/assets/welkom.png', datajxr2, 'base64')
  res.sendFile(bla+'/assets/welkom.png')
})

router.get('musicard-music', async (req, res, next) => {
  var { nome, autor, tipo , opacity, thumb, progresso, start, end } = req.query
  const cardmusic = new musicCard()
        .setName(nome)
        .setAuthor(autor)
        .setColor("auto")
        .setTheme(tipo == `space2` ? `space+` : tipo)
        .setBrightness(Number(opacity))
        .setThumbnail(thumb)
        .setProgress(Number(progresso))
        .setStartTime(start)
        .setEndTime(end)
        const cardBuffer = await cardmusic.build();
        require('fs').writeFileSync(bla + '/assets/Tempo/welkom.png', cardBuffer, 'base64')
        return res.sendFile(bla + '/assets/Tempo/welkom.png')
})

router.get('/level', async (req, res, next) => {
  var { nome, level, brightness, perfil, rank, xpb, xpa, progresso } = req.query
  const cardlvmb = new RankCard()
  .setName(nome)
  .setLevel(level)
  .setColor("auto")
  .setBrightness(Number(brightness))
  .setAvatar(perfil)
  .setProgress(Number(progresso))
  .setRank(rank)
  .setCurrentXp(xpb)
  .setRequiredXp(xpa)
  .setShowXp(true);
        require('fs').writeFileSync(bla + '/assets/Tempo/welkom.png', (await cardlvmb.build()), 'base64')
        return res.sendFile(bla + '/assets/Tempo/welkom.png')
})

router.get('/rank', async (req, res, next) => {
  var { nome, level, stts, perfil, rank, xpb, xpa, fundo } = req.query
  const rankcc = new canvacard.Rank()
  .setAvatar(perfil)
  .setBackground('IMAGE', fundo)
  .setCurrentXP(Number(xpb), "#00BFFF")
  .setRequiredXP(Number(xpa), "#00BFFF")
  .setRank(Number(rank))
  .setRankColor("#FFFFFF", "#00BFFF")
  .setLevel(Number(level), `LEVEL `)
  .setLevelColor("#FFFFFF", "#00BFFF")
  .setStatus(stts, true)
  .setOverlay("#23272A", 0.75, true)
  .setProgressBar(["#1E90FF", "#00BFFF"], "GRADIENT")
  .setProgressBarTrack("#000000")
  .setUsername(nome)
  .renderEmojis(true)

        require('fs').writeFileSync(bla + '/assets/Tempo/welkom.png', (await rankcc.build()), 'base64')
        return res.sendFile(bla + '/assets/Tempo/welkom.png')
})

router.get('/welcome3', async (req, res, next) => {
  var { title, nome, hex, perfil, message, fundo } = req.query
  const welcomifycard = new Card()
    .setTitle(title)
    .setName(nome)
    .setAvatar(perfil)
    .setMessage(message)
    .setBackground(fundo)
    .setColor(hex)

        require('fs').writeFileSync(bla + '/assets/Tempo/welkom.png', (await welcomifycard.build()), 'base64')
        return res.sendFile(bla + '/assets/Tempo/welkom.png')
})

router.get('/wppphoto', async (req, res, next) => {
  var { nick, number, bio, ultimovisto, foto } = req.query
  ABC = await fetchJson(`https://tohka.tech/api/canvas/perfilzap?nome=${nick}&numero=${number}&bio=${bio}&horas=${ultimovisto}&perfil=${foto}&apikey=matheuzinho2006`)

        require('fs').writeFileSync(bla + '/assets/Tempo/welkom.png', ABC, 'base64')
        return res.sendFile(bla + '/assets/Tempo/welkom.png')
})

router.get('/qrcode', async (req, res, next) => {
var { texto, apikey } = req.query
if(!texto || !apikey) return res.json({erro: "Link incompleto"})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "apikey_invalida.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RegisKey(apikey, req);
try {
    hasil = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${texto}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/gostosinha.jpg', data)
        res.sendFile(bla+'/assets/gostosinha.jpg') 
} catch (error) {
return res.status(404).json({resultado: `Erro`, status: 500});
}
}) 

router.get('/leitor-qrcode', async(req, res, next) => {
var { qrcode, apikey } = req.query
if(!qrcode || !apikey) return res.json({erro: "Link incompleto"})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "apikey_invalida.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RegisKey(apikey, req);
data = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=GataDios&img=${qrcode}`)
res.json({
status: true,
criador: `@m4thxyz_`,
resultado: data.result
})
})

router.get('/collage', async(req, res) => {
var { url1, ulr2, url3, url4, url5 } = req.query
try {
var photo = {
  width: '600px',
  height: ['250px', '170px'],
  layout: [1, 4],
  photos: [
    { source: url1 },
    { source: url2 },
    { source: url3 },
    { source: url4 },
    { source: url5 }
  ],
  showNumOfRemainingPhotos: true
}
data = await fetch(photo).then(v => v.buffer())
await fs.writeFileSync(bla+'/assets/gostosinha.jpg', data)
res.sendFile(bla+'/assets/gostosinha.jpg')
} catch(e) {
console.log(e)
res.json({resultado: `Erro`})
}
})

//fim do canvas
// Rota GET para buscar resultados do Google (Raspagem)
router.get('/google', async (req, res) => {
  try {
    const { query } = req.query;  // O termo de pesquisa
    if (!query) {
      return res.status(400).json({ error: 'O parâmetro "query" é obrigatório para buscar.' });
    }

    // URL do Google de busca
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    // Realizando a requisição para a página de resultados do Google
    const response = await axios.get(googleUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    // Usando cheerio para analisar a página HTML
    const $ = cheerio.load(response.data);

    // Extrair os links dos resultados
    const results = [];
    $('h3').each((index, element) => {
      const title = $(element).text();
      const link = $(element).parent().attr('href');
      results.push({ title, link });
    });

    // Retornando os resultados
    res.status(200).json(results);
  } catch (error) {
    console.error('Erro ao raspar conteúdo do Google:', error.message);
    res.status(500).json({ error: 'Erro ao raspar conteúdo do Google' });
  }
});
router.get('/bing', async (req, res) => {
  try {
    const { query } = req.query; // O termo de pesquisa
    if (!query) {
      return res.status(400).json({ error: 'O parâmetro "query" é obrigatório para buscar.' });
    }

    // URL do Bing de busca
    const bingUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;

    // Realizando a requisição para a página de resultados do Bing
    const response = await axios.get(bingUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    // Usando cheerio para analisar a página HTML
    const $ = cheerio.load(response.data);

    // Extrair os links e títulos dos resultados
    const results = [];
    $('.b_algo').each((index, element) => {
      const title = $(element).find('h2').text();
      const link = $(element).find('h2 a').attr('href');
      if (title && link) {
        results.push({ title, link });
      }
    });

    // Retornando os resultados
    res.status(200).json(results);
  } catch (error) {
    console.error('Erro ao raspar conteúdo do Bing:', error.message);
    res.status(500).json({ error: 'Erro ao raspar conteúdo do Bing' });
  }
});
router.get('/guia-filmes', async (req, res) => {
    try {
        const { data } = await axios.get('https://meuguia.tv/programacao/categoria/Filmes');
        const $ = cheerio.load(data);
        const programacao = [];

        $('li').each((i, element) => {
            const canal = $(element).find('h2').text().trim();
            const programas = [];
            
            $(element).find('h3').each((i, programElement) => {
                const hora = $(programElement).find('strong').text().trim();
                const titulo = $(programElement).text().replace(hora, '').trim();
                programas.push({ hora, titulo });
            });

            programacao.push({ canal, programas });
        });

        res.json(programacao);
    } catch (error) {
        console.error('Erro ao raspar os dados:', error);
        res.status(500).send('Erro ao buscar programação');
    }
});
// Rota GET para pegar a programação de séries
router.get('/guia-series', async (req, res) => {
    try {
        const { data } = await axios.get('https://meuguia.tv/programacao/categoria/Series');
        const $ = cheerio.load(data);
        const programacao = [];

        $('li').each((i, element) => {
            const canal = $(element).find('h2').text().trim();
            const programas = [];
            
            $(element).find('h3').each((i, programElement) => {
                const hora = $(programElement).find('strong').text().trim();
                const titulo = $(programElement).text().replace(hora, '').trim();
                programas.push({ hora, titulo });
            });

            programacao.push({ canal, programas });
        });

        res.json(programacao);
    } catch (error) {
        console.error('Erro ao raspar os dados:', error);
        res.status(500).send('Erro ao buscar programação');
    }
});

router.get('/calendario', async (req, res) => { try { const { data } = await axios.get('https://multicanais.casino/calendario'); const $ = cheerio.load(data);

const dias = [];

$('.section').each((_, el) => {
  const tituloCompleto = $(el).find('.section-title').text().trim();
  const [titulo, dia] = tituloCompleto.split(' - ');
  const total_jogos = parseInt($(el).find('.section-badge').text()) || 0;

  const jogos = [];

  $(el).find('.game-card').each((_, jogoEl) => {
    const link = $(jogoEl).attr('href');
    const campeonato = $(jogoEl).find('.championship').text().trim();
    const horario = $(jogoEl).find('.time-badge').text().trim();

    const time1 = $(jogoEl).find('.team').first();
    const time2 = $(jogoEl).find('.team').last();

    const time1_nome = time1.find('.team-name').text().trim();
    const time2_nome = time2.find('.team-name').text().trim();
    const time1_img = time1.find('img').attr('src')?.startsWith('http') ? time1.find('img').attr('src') : `https://multicanais.casino/${time1.find('img').attr('src')}`;
    const time2_img = time2.find('img').attr('src')?.startsWith('http') ? time2.find('img').attr('src') : `https://multicanais.casino/${time2.find('img').attr('src')}`;

    const transmissoes = $(jogoEl)
      .find('.transmission')
      .text()
      .replace(/^[^:]*?:?\s*/, '')
      .split(',')
      .map(t => t.trim())
      .filter(t => t);

    jogos.push({
      titulo: `${time1_nome} x ${time2_nome}`,
      link: `https://multicanais.casino${link}`,
      horario,
      campeonato,
      time1: time1_nome,
      time1_img,
      time2: time2_nome,
      time2_img,
      transmissoes
    });
  });

  dias.push({ titulo, dia, total_jogos, jogos });
});

res.json({ success: true, dias });

} catch (error) { console.error('Erro ao obter calendário:', error.message); res.status(500).json({ success: false, message: 'Erro ao obter o calendário.' }); } });

router.get('/jogosdodia', async (req, res) => {
  try {
    const { data } = await axios.get('https://multicanais.casino/api/real-games.php');

    if (data?.success && Array.isArray(data.jogos)) {
      const jogosComExtras = data.jogos.map(jogo => ({
        titulo: `${jogo.time1} vs ${jogo.time2}`,
        campeonato: jogo.campeonato,
        data: jogo.data,
        horario: jogo.horario,
        link: `https://multicanais.casino/assistir/${jogo.slug}`,
        time1: jogo.time1,
        time2: jogo.time2,
        time1_foto: `https://multicanais.casino/api/team-logo.php?team=${encodeURIComponent(jogo.time1)}`,
        time2_foto: `https://multicanais.casino/api/team-logo.php?team=${encodeURIComponent(jogo.time2)}`,
        transmissoes: jogo.transmissao
      }));

      return res.json({
        success: true,
        total: jogosComExtras.length,
        jogos: jogosComExtras
      });
    }

    return res.status(500).json({
      success: false,
      jogos: [],
      error: 'Formato inesperado da API de origem'
    });
  } catch (error) {
    console.error('❌ Erro na rota /jogosdodia:', error.message);
    return res.status(500).json({
      success: false,
      jogos: [],
      error: 'Erro ao acessar a API do Multicanais'
    });
  }
});

router.get('/guia-esportes', async (req, res) => {
    try {
        const { data } = await axios.get('https://meuguia.tv/programacao/categoria/Esportes');
        const $ = cheerio.load(data);
        const programacao = [];

        $('li').each((i, element) => {
            const canal = $(element).find('h2').text().trim();
            const programas = [];
            
            $(element).find('h3').each((i, programElement) => {
                const hora = $(programElement).find('strong').text().trim();
                const titulo = $(programElement).text().replace(hora, '').trim();
                programas.push({ hora, titulo });
            });

            programacao.push({ canal, programas });
        });

        res.json(programacao);
    } catch (error) {
        console.error('Erro ao raspar os dados:', error);
        res.status(500).send('Erro ao buscar programação');
    }
});

router.get('/guia-infantil', async (req, res) => {
    try {
        const { data } = await axios.get('https://meuguia.tv/programacao/categoria/Infantil');
        const $ = cheerio.load(data);
        const programacao = [];

        $('li').each((i, element) => {
            const canal = $(element).find('h2').text().trim();
            const programas = [];
            
            $(element).find('h3').each((i, programElement) => {
                const hora = $(programElement).find('strong').text().trim();
                const titulo = $(programElement).text().replace(hora, '').trim();
                programas.push({ hora, titulo });
            });

            programacao.push({ canal, programas });
        });

        res.json(programacao);
    } catch (error) {
        console.error('Erro ao raspar os dados:', error);
        res.status(500).send('Erro ao buscar programação');
    }
});
router.get('/guia-variedades', async (req, res) => {
    try {
        const { data } = await axios.get('https://meuguia.tv/programacao/categoria/Variedades');
        const $ = cheerio.load(data);
        const programacao = [];

        $('li').each((i, element) => {
            const canal = $(element).find('h2').text().trim();
            const programas = [];
            
            $(element).find('h3').each((i, programElement) => {
                const hora = $(programElement).find('strong').text().trim();
                const titulo = $(programElement).text().replace(hora, '').trim();
                programas.push({ hora, titulo });
            });

            programacao.push({ canal, programas });
        });

        res.json(programacao);
    } catch (error) {
        console.error('Erro ao raspar os dados:', error);
        res.status(500).send('Erro ao buscar programação');
    }
});
router.get('/guia-documentarios', async (req, res) => {
    try {
        const { data } = await axios.get('https://meuguia.tv/programacao/categoria/Documentarios');
        const $ = cheerio.load(data);
        const programacao = [];

        $('li').each((i, element) => {
            const canal = $(element).find('h2').text().trim();
            const programas = [];
            
            $(element).find('h3').each((i, programElement) => {
                const hora = $(programElement).find('strong').text().trim();
                const titulo = $(programElement).text().replace(hora, '').trim();
                programas.push({ hora, titulo });
            });

            programacao.push({ canal, programas });
        });

        res.json(programacao);
    } catch (error) {
        console.error('Erro ao raspar os dados:', error);
        res.status(500).send('Erro ao buscar programação');
    }
});
router.get('/guia-noticias', async (req, res) => {
    try {
        const { data } = await axios.get('https://meuguia.tv/programacao/categoria/Noticias');
        const $ = cheerio.load(data);
        const programacao = [];

        $('li').each((i, element) => {
            const canal = $(element).find('h2').text().trim();
            const programas = [];
            
            $(element).find('h3').each((i, programElement) => {
                const hora = $(programElement).find('strong').text().trim();
                const titulo = $(programElement).text().replace(hora, '').trim();
                programas.push({ hora, titulo });
            });

            programacao.push({ canal, programas });
        });

        res.json(programacao);
    } catch (error) {
        console.error('Erro ao raspar os dados:', error);
        res.status(500).send('Erro ao buscar programação');
    }
});
router.get('/guia-aberta', async (req, res) => {
    try {
        const { data } = await axios.get('https://meuguia.tv/programacao/categoria/Aberta');
        const $ = cheerio.load(data);
        const programacao = [];

        $('li').each((i, element) => {
            const canal = $(element).find('h2').text().trim();
            const programas = [];
            
            $(element).find('h3').each((i, programElement) => {
                const hora = $(programElement).find('strong').text().trim();
                const titulo = $(programElement).text().replace(hora, '').trim();
                programas.push({ hora, titulo });
            });

            programacao.push({ canal, programas });
        });

        res.json(programacao);
    } catch (error) {
        console.error('Erro ao raspar os dados:', error);
        res.status(500).send('Erro ao buscar programação');
    }
});
router.get('/jogador/:nome', async (req, res) => {
  const nomeJogador = req.params.nome;
  console.log(`Iniciando busca para o jogador: ${nomeJogador}`);

  try {
    const urlBusca = `https://onefootball.com/pt-br/busca?q=${nomeJogador}`;
    console.log(`Fazendo requisição para buscar jogador: ${urlBusca}`);

    // Faz a requisição para a página de busca
    const responseBusca = await axios.get(urlBusca);
    console.log('Página de busca carregada com sucesso');

    const $ = cheerio.load(responseBusca.data);

    // Localiza o link do jogador na lista de resultados que contém "jogador/"
    const jogadorLinkRelativo = $('a').filter(function() {
      return $(this).attr('href') && $(this).attr('href').includes('/jogador/');
    }).attr('href');

    if (!jogadorLinkRelativo) {
      console.log('Jogador não encontrado');
      return res.status(404).json({ error: 'Jogador não encontrado' });
    }

    const jogadorLink = `https://onefootball.com${jogadorLinkRelativo}`;
    console.log(`Link do jogador encontrado: ${jogadorLink}`);

    // Faz a requisição para a página do jogador
    const urlJogador = jogadorLink;
    console.log(`Fazendo requisição para a página do jogador: ${urlJogador}`);
    const responseJogador = await axios.get(urlJogador);
    console.log('Página do jogador carregada com sucesso');

    const $$ = cheerio.load(responseJogador.data);

    // Coleta as informações do jogador
    const time = $$('p.EntityNavigationLink_title__zbfTk.title-7-bold').text().trim();
    const idade = $$('p.TransferDetails_entryTitle__5Oqq_').eq(0).text().trim();
    const posicao = $$('p.TransferDetails_entryTitle__5Oqq_').eq(1).text().trim();
    const pais = $$('p.TransferDetails_entryTitle__5Oqq_').eq(2).text().trim();
    const altura = $$('p.TransferDetails_entryTitle__5Oqq_').eq(3).text().trim();
    const peso = $$('p.TransferDetails_entryTitle__5Oqq_').eq(4).text().trim();
    const numeroCamisa = $$('p.TransferDetails_entryTitle__5Oqq_').eq(5).text().trim();

    // Log dos dados extraídos
    console.log('Dados do jogador extraídos:');
    console.log(`Time: ${time}`);
    console.log(`Idade: ${idade}`);
    console.log(`Posição: ${posicao}`);
    console.log(`País: ${pais}`);
    console.log(`Altura: ${altura}`);
    console.log(`Peso: ${peso}`);
    console.log(`Número da camisa: ${numeroCamisa}`);

    // Envia os dados para o cliente
    res.json({
      nome: nomeJogador,
      time,
      idade,
      posicao,
      pais,
      altura,
      peso,
      numeroCamisa,
    });
  } catch (error) {
    console.error('Erro ao buscar informações:', error.message);
    res.status(500).json({ error: 'Erro ao buscar informações' });
  }
});
router.get('/tabela-ucl', async (req, res) => {
  try {
    const response = await axios.get('https://onefootball.com/pt-br/competicao/uefa-liga-dos-campeoes-5/tabela');
    
    // Carregar a página HTML com o cheerio
    const $ = cheerio.load(response.data);
    
    const tabela = [];
    const logo = 'https://image-service.onefootball.com/transform?w=128&dpr=2&image=https://images.onefootball.com/icons/leagueColoredCompetition/128/5.png'; // Logo da competição

    // Agora pegamos as linhas que contêm os dados de cada time
    $('li.Standing_standings__row__5sdZG').each((index, element) => {
      const posicao = $(element).find('.Standing_standings__cell__5Kd0W span').first().text().trim();
      const time = $(element).find('.title-7-medium.Standing_standings__teamName__psv61').text().trim();
      
      // Evitar adicionar time vazio
      if (!time) return;

      const jogos = $(element).find('.Standing_standings__cell__5Kd0W').eq(2).text().trim();
      const vitorias = $(element).find('.Standing_standings__cell__5Kd0W').eq(3).text().trim();
      const empates = $(element).find('.Standing_standings__cell__5Kd0W').eq(4).text().trim();
      const derrotas = $(element).find('.Standing_standings__cell__5Kd0W').eq(5).text().trim();
      const saldo = $(element).find('.Standing_standings__cell__5Kd0W').eq(6).text().trim();
      const pontos = $(element).find('.Standing_standings__cell__5Kd0W').eq(7).text().trim();

      tabela.push({
        time,
        posicao,
        jogos,
        vitorias,
        empates,
        derrotas,
        saldo,
        pontos
      });
    });

    // Adiciona a logo no início da resposta
    const responseData = {
      logo,
      tabela
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao extrair dados' });
  }
});

router.get('/tabela-laliga', async (req, res) => {
  try {
    const response = await axios.get('https://onefootball.com/pt-br/competicao/laliga-10/tabela');
    
    // Carregar a página HTML com o cheerio
    const $ = cheerio.load(response.data);
    
    const tabela = [];
    const logo = 'https://oneftbl-cms.imgix.net/https%3A%2F%2Fimages.onefootball.com%2Ficons%2FleagueColoredCompetition%2F128%2F10.png?auto=format%2Ccompress&crop=faces&dpr=2&fit=crop&h=0&q=25&w=256&s=e463b392a49b852072242e4858d597a4'; // Logo da competição

    // Agora pegamos as linhas que contêm os dados de cada time
    $('li.Standing_standings__row__5sdZG').each((index, element) => {
      const posicao = $(element).find('.Standing_standings__cell__5Kd0W span').first().text().trim();
      const time = $(element).find('.title-7-medium.Standing_standings__teamName__psv61').text().trim();
      
      // Evitar adicionar time vazio
      if (!time) return;

      const jogos = $(element).find('.Standing_standings__cell__5Kd0W').eq(2).text().trim();
      const vitorias = $(element).find('.Standing_standings__cell__5Kd0W').eq(3).text().trim();
      const empates = $(element).find('.Standing_standings__cell__5Kd0W').eq(4).text().trim();
      const derrotas = $(element).find('.Standing_standings__cell__5Kd0W').eq(5).text().trim();
      const saldo = $(element).find('.Standing_standings__cell__5Kd0W').eq(6).text().trim();
      const pontos = $(element).find('.Standing_standings__cell__5Kd0W').eq(7).text().trim();

      tabela.push({
        time,
        posicao,
        jogos,
        vitorias,
        empates,
        derrotas,
        saldo,
        pontos
      });
    });

    // Adiciona a logo no início da resposta
    const responseData = {
      logo,
      tabela
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao extrair dados' });
  }
});
router.get('/tabela-premierleague', async (req, res) => {
  try {
    const response = await axios.get('https://onefootball.com/pt-br/competicao/premier-league-9/tabela');
    
    // Carregar a página HTML com o cheerio
    const $ = cheerio.load(response.data);
    
    const tabela = [];
    const logo = 'https://oneftbl-cms.imgix.net/https%3A%2F%2Fimages.onefootball.com%2Ficons%2FleagueColoredCompetition%2F128%2F9.png?auto=format%2Ccompress&crop=faces&dpr=2&fit=crop&h=0&q=25&w=256&s=af2ee309c6dafeb5c5f604e89ce8a94c'; // Logo da competição

    // Agora pegamos as linhas que contêm os dados de cada time
    $('li.Standing_standings__row__5sdZG').each((index, element) => {
      const posicao = $(element).find('.Standing_standings__cell__5Kd0W span').first().text().trim();
      const time = $(element).find('.title-7-medium.Standing_standings__teamName__psv61').text().trim();
      
      // Evitar adicionar time vazio
      if (!time) return;

      const jogos = $(element).find('.Standing_standings__cell__5Kd0W').eq(2).text().trim();
      const vitorias = $(element).find('.Standing_standings__cell__5Kd0W').eq(3).text().trim();
      const empates = $(element).find('.Standing_standings__cell__5Kd0W').eq(4).text().trim();
      const derrotas = $(element).find('.Standing_standings__cell__5Kd0W').eq(5).text().trim();
      const saldo = $(element).find('.Standing_standings__cell__5Kd0W').eq(6).text().trim();
      const pontos = $(element).find('.Standing_standings__cell__5Kd0W').eq(7).text().trim();

      tabela.push({
        time,
        posicao,
        jogos,
        vitorias,
        empates,
        derrotas,
        saldo,
        pontos
      });
    });

    // Adiciona a logo no início da resposta
    const responseData = {
      logo,
      tabela
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao extrair dados' });
  }
});
router.get('/tabela-bundesliga', async (req, res) => {
  try {
    const response = await axios.get('https://onefootball.com/pt-br/competicao/bundesliga-1/tabela');
    
    // Carregar a página HTML com o cheerio
    const $ = cheerio.load(response.data);
    
    const tabela = [];
    const logo = 'https://oneftbl-cms.imgix.net/https%3A%2F%2Fimages.onefootball.com%2Ficons%2FleagueColoredCompetition%2F128%2F1.png?auto=format%2Ccompress&crop=faces&dpr=2&fit=crop&h=0&q=25&w=256&s=d1874d598b463068260f0f91daef42a5'; // Logo da competição

    // Agora pegamos as linhas que contêm os dados de cada time
    $('li.Standing_standings__row__5sdZG').each((index, element) => {
      const posicao = $(element).find('.Standing_standings__cell__5Kd0W span').first().text().trim();
      const time = $(element).find('.title-7-medium.Standing_standings__teamName__psv61').text().trim();
      
      // Evitar adicionar time vazio
      if (!time) return;

      const jogos = $(element).find('.Standing_standings__cell__5Kd0W').eq(2).text().trim();
      const vitorias = $(element).find('.Standing_standings__cell__5Kd0W').eq(3).text().trim();
      const empates = $(element).find('.Standing_standings__cell__5Kd0W').eq(4).text().trim();
      const derrotas = $(element).find('.Standing_standings__cell__5Kd0W').eq(5).text().trim();
      const saldo = $(element).find('.Standing_standings__cell__5Kd0W').eq(6).text().trim();
      const pontos = $(element).find('.Standing_standings__cell__5Kd0W').eq(7).text().trim();

      tabela.push({
        time,
        posicao,
        jogos,
        vitorias,
        empates,
        derrotas,
        saldo,
        pontos
      });
    });

    // Adiciona a logo no início da resposta
    const responseData = {
      logo,
      tabela
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao extrair dados' });
  }
});
router.get('/tabela-seriea', async (req, res) => {
  try {
    const response = await axios.get('https://onefootball.com/pt-br/competicao/serie-a-13/tabela');
    
    // Carregar a página HTML com o cheerio
    const $ = cheerio.load(response.data);
    
    const tabela = [];
    const logo = 'https://oneftbl-cms.imgix.net/https%3A%2F%2Fimages.onefootball.com%2Ficons%2FleagueColoredCompetition%2F128%2F13.png?auto=format%2Ccompress&crop=faces&dpr=2&fit=crop&h=0&q=25&w=256&s=9d87b0266c49182b3d11937ba59f8a82'; // Logo da competição

    // Agora pegamos as linhas que contêm os dados de cada time
    $('li.Standing_standings__row__5sdZG').each((index, element) => {
      const posicao = $(element).find('.Standing_standings__cell__5Kd0W span').first().text().trim();
      const time = $(element).find('.title-7-medium.Standing_standings__teamName__psv61').text().trim();
      
      // Evitar adicionar time vazio
      if (!time) return;

      const jogos = $(element).find('.Standing_standings__cell__5Kd0W').eq(2).text().trim();
      const vitorias = $(element).find('.Standing_standings__cell__5Kd0W').eq(3).text().trim();
      const empates = $(element).find('.Standing_standings__cell__5Kd0W').eq(4).text().trim();
      const derrotas = $(element).find('.Standing_standings__cell__5Kd0W').eq(5).text().trim();
      const saldo = $(element).find('.Standing_standings__cell__5Kd0W').eq(6).text().trim();
      const pontos = $(element).find('.Standing_standings__cell__5Kd0W').eq(7).text().trim();

      tabela.push({
        time,
        posicao,
        jogos,
        vitorias,
        empates,
        derrotas,
        saldo,
        pontos
      });
    });

    // Adiciona a logo no início da resposta
    const responseData = {
      logo,
      tabela
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao extrair dados' });
  }
});
router.get('/tabela-brasileirao', async (req, res) => {
  try {
    const response = await axios.get('https://onefootball.com/pt-br/competicao/brasileirao-betano-16/tabela');
    
    // Carregar a página HTML com o cheerio
    const $ = cheerio.load(response.data);
    
    const tabela = [];
    const logo = 'https://oneftbl-cms.imgix.net/https%3A%2F%2Fimages.onefootball.com%2Ficons%2FleagueColoredCompetition%2F128%2F16.png?auto=format%2Ccompress&crop=faces&dpr=2&fit=crop&h=0&q=25&w=256&s=443e5027b246f937cde0011c87456acd'; // Logo da competição

    // Agora pegamos as linhas que contêm os dados de cada time
    $('li.Standing_standings__row__5sdZG').each((index, element) => {
      const posicao = $(element).find('.Standing_standings__cell__5Kd0W span').first().text().trim();
      const time = $(element).find('.title-7-medium.Standing_standings__teamName__psv61').text().trim();
      
      // Evitar adicionar time vazio
      if (!time) return;

      const jogos = $(element).find('.Standing_standings__cell__5Kd0W').eq(2).text().trim();
      const vitorias = $(element).find('.Standing_standings__cell__5Kd0W').eq(3).text().trim();
      const empates = $(element).find('.Standing_standings__cell__5Kd0W').eq(4).text().trim();
      const derrotas = $(element).find('.Standing_standings__cell__5Kd0W').eq(5).text().trim();
      const saldo = $(element).find('.Standing_standings__cell__5Kd0W').eq(6).text().trim();
      const pontos = $(element).find('.Standing_standings__cell__5Kd0W').eq(7).text().trim();

      tabela.push({
        time,
        posicao,
        jogos,
        vitorias,
        empates,
        derrotas,
        saldo,
        pontos
      });
    });

    // Adiciona a logo no início da resposta
    const responseData = {
      logo,
      tabela
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao extrair dados' });
  }
});
router.get('/tabela-ligue1', async (req, res) => {
  try {
    const response = await axios.get('https://onefootball.com/pt-br/competicao/ligue-1-23/tabela');
    
    // Carregar a página HTML com o cheerio
    const $ = cheerio.load(response.data);
    
    const tabela = [];
    const logo = 'https://oneftbl-cms.imgix.net/https%3A%2F%2Fimages.onefootball.com%2Ficons%2FleagueColoredCompetition%2F128%2F23.png?auto=format%2Ccompress&crop=faces&dpr=2&fit=crop&h=0&q=25&w=256&s=f8636d26087d579e11e307fca6a3077e'; // Logo da competição

    // Agora pegamos as linhas que contêm os dados de cada time
    $('li.Standing_standings__row__5sdZG').each((index, element) => {
      const posicao = $(element).find('.Standing_standings__cell__5Kd0W span').first().text().trim();
      const time = $(element).find('.title-7-medium.Standing_standings__teamName__psv61').text().trim();
      
      // Evitar adicionar time vazio
      if (!time) return;

      const jogos = $(element).find('.Standing_standings__cell__5Kd0W').eq(2).text().trim();
      const vitorias = $(element).find('.Standing_standings__cell__5Kd0W').eq(3).text().trim();
      const empates = $(element).find('.Standing_standings__cell__5Kd0W').eq(4).text().trim();
      const derrotas = $(element).find('.Standing_standings__cell__5Kd0W').eq(5).text().trim();
      const saldo = $(element).find('.Standing_standings__cell__5Kd0W').eq(6).text().trim();
      const pontos = $(element).find('.Standing_standings__cell__5Kd0W').eq(7).text().trim();

      tabela.push({
        time,
        posicao,
        jogos,
        vitorias,
        empates,
        derrotas,
        saldo,
        pontos
      });
    });

    // Adiciona a logo no início da resposta
    const responseData = {
      logo,
      tabela
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao extrair dados' });
  }
});
router.get('/tabela-portugal', async (req, res) => {
  try {
    const response = await axios.get('https://onefootball.com/pt-br/competicao/liga-portugal-35/tabela');
    
    // Carregar a página HTML com o cheerio
    const $ = cheerio.load(response.data);
    
    const tabela = [];
    const logo = 'https://oneftbl-cms.imgix.net/https%3A%2F%2Fimages.onefootball.com%2Ficons%2FleagueColoredCompetition%2F128%2F35.png?auto=format%2Ccompress&crop=faces&dpr=2&fit=crop&h=0&q=25&w=256&s=5def0cd8a2e18cd7a49483556f60ab72'; // Logo da competição

    // Agora pegamos as linhas que contêm os dados de cada time
    $('li.Standing_standings__row__5sdZG').each((index, element) => {
      const posicao = $(element).find('.Standing_standings__cell__5Kd0W span').first().text().trim();
      const time = $(element).find('.title-7-medium.Standing_standings__teamName__psv61').text().trim();
      
      // Evitar adicionar time vazio
      if (!time) return;

      const jogos = $(element).find('.Standing_standings__cell__5Kd0W').eq(2).text().trim();
      const vitorias = $(element).find('.Standing_standings__cell__5Kd0W').eq(3).text().trim();
      const empates = $(element).find('.Standing_standings__cell__5Kd0W').eq(4).text().trim();
      const derrotas = $(element).find('.Standing_standings__cell__5Kd0W').eq(5).text().trim();
      const saldo = $(element).find('.Standing_standings__cell__5Kd0W').eq(6).text().trim();
      const pontos = $(element).find('.Standing_standings__cell__5Kd0W').eq(7).text().trim();

      tabela.push({
        time,
        posicao,
        jogos,
        vitorias,
        empates,
        derrotas,
        saldo,
        pontos
      });
    });

    // Adiciona a logo no início da resposta
    const responseData = {
      logo,
      tabela
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao extrair dados' });
  }
});
router.get('/jogosdehoje', async (req, res) => {
  const url = 'https://onefootball.com.br/pt-br/jogos';

  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
      }
    });

    const $ = cheerio.load(data);
    const jogos = [];

    $('article').each((index, element) => {
      const casa = $(element).find('.SimpleMatchCardTeam_simpleMatchCardTeam__name__7Ud8D').first().text().trim();
      const fora = $(element).find('.SimpleMatchCardTeam_simpleMatchCardTeam__name__7Ud8D').last().text().trim();

      let horario = $(element).find('time').text().trim();
      if (!horario || horario.toLowerCase().includes('inval')) {
        horario = '';
      }

      let tempo = $(element)
        .find('.title-8-bold.SimpleMatchCard_simpleMatchCard__live__kg0bW')
        .text()
        .trim();

      if (!tempo) tempo = 'Hoje';

      let status = $(element)
        .find('.title-8-medium.SimpleMatchCard_simpleMatchCard__infoMessage___NJqW.SimpleMatchCard_simpleMatchCard__infoMessage__secondary__hisY4')
        .text()
        .trim();

      // Regras para status e horário
      if (tempo !== 'Hoje') {
        status = 'Ao vivo';
        if (!horario) {
          horario = 'Agora';
        }
      }

      const placarCasa = $(element)
        .find('.SimpleMatchCardTeam_simpleMatchCardTeam__score__UYMc_')
        .first()
        .text()
        .trim();
      const placarFora = $(element)
        .find('.SimpleMatchCardTeam_simpleMatchCardTeam__score__UYMc_')
        .last()
        .text()
        .trim();
      const placar = (placarCasa && placarFora) ? `${placarCasa} x ${placarFora}` : ' x ';

      jogos.push({
        casa,
        fora,
        horario,
        placar,
        status,
        tempo
      });
    });

    res.json(jogos);
  } catch (error) {
    console.error('Erro ao fazer o scraping:', error);
    res.status(500).json({ error: 'Erro ao buscar os jogos' });
  }
});

router.get('/info-times', async (req, res) => {
  const time = req.query.time;
  if (!time) return res.status(400).json({ error: 'Informe o nome do time com ?time=nome' });

  try {
    // 1. Buscar o link do time
    const searchUrl = `https://onefootball.com/pt-br/busca?q=${encodeURIComponent(time)}`;
    const searchRes = await axios.get(searchUrl);
    const $search = cheerio.load(searchRes.data);

    const teamLink = $search('a')
      .map((_, el) => $search(el).attr('href'))
      .get()
      .find(href => href && href.includes('/time/'));

    if (!teamLink) return res.status(404).json({ error: 'Time não encontrado.' });

    // 2. Ir para a página do time
    const teamUrl = `https://onefootball.com${teamLink}`;
    const teamPageRes = await axios.get(teamUrl);
    const $ = cheerio.load(teamPageRes.data);

    const resultados = [];

    $('ul.MatchCardsList_matches__8_UwB li').each((_, el) => {
      const match = $(el);
      const equipes = match.find('span.SimpleMatchCardTeam_simpleMatchCardTeam__name__7Ud8D').map((_, e) => $(e).text()).get();
      const placares = match.find('span.SimpleMatchCardTeam_simpleMatchCardTeam__score__UYMc_').map((_, e) => $(e).text()).get();
      const data = match.find('time').text();
      const status = match.find('span.SimpleMatchCard_simpleMatchCard__infoMessage___NJqW').text();
      const campeonato = match.find('p.SimpleMatchCard_simpleMatchCard__competitionName__hAGjw').text();

      if (equipes.length === 2 && placares.length === 2) {
        resultados.push({
          equipe_casa: equipes[0],
          placar_casa: placares[0],
          equipe_fora: equipes[1],
          placar_fora: placares[1],
          data,
          status,
          campeonato
        });
      }
    });

    res.json({ time, resultados });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar resultados.' });
  }
});

router.get('/resultados', async (req, res) => {
  const time = req.query.time;
  if (!time) return res.status(400).json({ error: 'Informe o nome do time com ?time=nome' });

  try {
    // 1. Buscar o link do time
    const searchUrl = `https://onefootball.com/pt-br/busca?q=${encodeURIComponent(time)}`;
    const searchRes = await axios.get(searchUrl);
    const $search = cheerio.load(searchRes.data);

    const teamLink = $search('a')
      .map((_, el) => $search(el).attr('href'))
      .get()
      .find(href => href && href.includes('/time/'));

    if (!teamLink) return res.status(404).json({ error: 'Time não encontrado.' });

    // 2. Ir para a página do time
    const teamUrl = `https://onefootball.com${teamLink}/resultados`;
    const teamPageRes = await axios.get(teamUrl);
    const $ = cheerio.load(teamPageRes.data);

    const resultados = [];

    $('ul.MatchCardsList_matches__8_UwB li').each((_, el) => {
      const match = $(el);
      const equipes = match.find('span.SimpleMatchCardTeam_simpleMatchCardTeam__name__7Ud8D').map((_, e) => $(e).text()).get();
      const placares = match.find('span.SimpleMatchCardTeam_simpleMatchCardTeam__score__UYMc_').map((_, e) => $(e).text()).get();
      const data = match.find('time').text();
      const status = match.find('span.SimpleMatchCard_simpleMatchCard__infoMessage___NJqW').text();
      const campeonato = match.find('p.SimpleMatchCard_simpleMatchCard__competitionName__hAGjw').text();

      if (equipes.length === 2 && placares.length === 2) {
        resultados.push({
          equipe_casa: equipes[0],
          placar_casa: placares[0],
          equipe_fora: equipes[1],
          placar_fora: placares[1],
          data,
          status,
          campeonato
        });
      }
    });

    res.json({ time, resultados });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar resultados.' });
  }
});
router.get('/elenco', async (req, res) => {
  const time = req.query.time;
  if (!time) return res.status(400).json({ error: 'Informe o nome do time com ?time=nome' });

  try {
    // 1. Buscar o link do time
    const searchUrl = `https://onefootball.com/pt-br/busca?q=${encodeURIComponent(time)}`;
    const searchRes = await axios.get(searchUrl);
    const $search = cheerio.load(searchRes.data);
    
    // 2. Encontrar o primeiro link de time
    const teamLink = $search('a')
      .map((i, el) => $search(el).attr('href'))
      .get()
      .find(href => href && href.includes('/time/'));

    if (!teamLink) return res.status(404).json({ error: 'Time não encontrado.' });

    const elencoUrl = `https://onefootball.com${teamLink}/elenco`;

    // 3. Buscar elenco
    const elencoRes = await axios.get(elencoUrl);
    const $ = cheerio.load(elencoRes.data);

    const elenco = [];

    $('article').each((_, article) => {
      const posicao = $(article).find('header').text().trim();
      const jogadores = [];

      $(article).find('li').each((_, li) => {
        const nomeNumero = $(li).find('p.title-7-bold').text().trim();
        const imagem = $(li).find('img').attr('src') || '';
        const match = nomeNumero.match(/(.+)\s(\d+)/);

        jogadores.push({
          nome: match ? match[1] : nomeNumero,
          numero: match ? parseInt(match[2]) : null,
          imagem: imagem.replace(/^images\//, 'https://onefootball.com/images/')
        });
      });

      elenco.push({ posicao, jogadores });
    });

    res.json({ time, elenco });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar elenco.' });
  }
});

router.get('/prox-jogos', async (req, res) => {
  const time = req.query.time;
  if (!time) return res.status(400).json({ error: 'Informe o nome do time com ?time=nome' });

  try {
    // 1. Buscar o link do time
    const searchUrl = `https://onefootball.com/pt-br/busca?q=${encodeURIComponent(time)}`;
    const searchRes = await axios.get(searchUrl);
    const $search = cheerio.load(searchRes.data);

    const teamLink = $search('a')
      .map((_, el) => $search(el).attr('href'))
      .get()
      .find(href => href && href.includes('/time/'));

    if (!teamLink) return res.status(404).json({ error: 'Time não encontrado.' });

    // 2. Ir para a página do time
    const teamUrl = `https://onefootball.com${teamLink}/jogos`;
    const teamPageRes = await axios.get(teamUrl);
    const $ = cheerio.load(teamPageRes.data);

    const resultados = [];

    $('ul.MatchCardsList_matches__8_UwB li').each((_, el) => {
  const match = $(el);
  const equipes = match.find('span.SimpleMatchCardTeam_simpleMatchCardTeam__name__7Ud8D').map((_, e) => $(e).text()).get();
  const placares = match.find('span.SimpleMatchCardTeam_simpleMatchCardTeam__score__UYMc_').map((_, e) => $(e).text()).get();
  
  const data = match.find('time').first().text(); // Pega a data
  const hora = match.find('time').last().text(); // Pega a hora
  const dataHora = `${data} ${hora}`; // Combina data e hora com espaço
  
  const status = match.find('span.SimpleMatchCard_simpleMatchCard__infoMessage___NJqW').text() || "";
  const campeonato = match.find('p.SimpleMatchCard_simpleMatchCard__competitionName__hAGjw').text();

  if (equipes.length === 2) {
    resultados.push({
      equipe_casa: equipes[0],
      placar_casa: placares[0] || "",
      equipe_fora: equipes[1],
      placar_fora: placares[1] || "",
      data: dataHora,
      status,
      campeonato
    });
  }
});

    res.json({ time, resultados });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar resultados.' });
  }
});

router.get('/ufc', async (req, res) => {
  try {
    const siteUrl = 'https://multicanais.casino/jogo-ao-vivo/ufc-ao-vivo/';
    const { data } = await axios.get(siteUrl);

    const $ = cheerio.load(data);
    const events = [];

    // Itera por cada elemento que representa um evento
    $('.entry-image').each((index, element) => {
      const entry = $(element).find('a');
      const title = entry.attr('title');
      const link = entry.attr('href');
      const image = entry.find('img').attr('src');

      if (title && link && image) {
        events.push({ title, link, image });
      }
    });

    if (events.length > 0) {
      res.json(events);
    } else {
      res.status(404).json({ error: 'Nenhum evento encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao fazer o scraping:', error.message);
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
});
// Rota para a API bbb25
router.get('/bbb25', (req, res) => {
  const resultado = [
    "https://multicanais.casino/assistir-bbb-ao-vivo-online-24-horas/",
    "https://globoplay.gratis/"
  ];
  
  res.json({ resultado });
});

router.get('/basquete', async (req, res) => {
  try {
    const siteUrl = 'https://multicanais.casino/categoria/jogo-ao-vivo/nba-ao-vivo/';
    const { data } = await axios.get(siteUrl);

    const $ = cheerio.load(data);
    const events = [];

    // Itera por cada elemento que representa um evento
    $('.entry-image').each((index, element) => {
      const entry = $(element).find('a');
      const title = entry.attr('title');
      const link = entry.attr('href');
      const image = entry.find('img').attr('src');

      if (title && link && image) {
        events.push({ title, link, image });
      }
    });

    if (events.length > 0) {
      res.json(events);
    } else {
      res.status(404).json({ error: 'Nenhum evento encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao fazer o scraping:', error.message);
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
});


router.get('/nfl', async (req, res) => {
  try {
    const siteUrl = 'https://multicanais.casino/jogo-ao-vivo/nfl-ao-vivo/';
    const { data } = await axios.get(siteUrl);

    const $ = cheerio.load(data);
    const events = [];

    // Itera por cada elemento que representa um evento
    $('.entry-image').each((index, element) => {
      const entry = $(element).find('a');
      const title = entry.attr('title');
      const link = entry.attr('href');
      const image = entry.find('img').attr('src');

      if (title && link && image) {
        events.push({ title, link, image });
      }
    });

    if (events.length > 0) {
      res.json(events);
    } else {
      res.status(404).json({ error: 'Nenhum evento encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao fazer o scraping:', error.message);
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
});

 router.get('/ucl', async (req, res) => {
  try {
    const siteUrl = 'https://multicanais.casino/jogo-ao-vivo/champions-league-ao-vivo/';
    const { data } = await axios.get(siteUrl);

    const $ = cheerio.load(data);
    const events = [];

    // Itera por cada elemento que representa um evento
    $('.entry-image').each((index, element) => {
      const entry = $(element).find('a');
      const title = entry.attr('title');
      const link = entry.attr('href');
      const image = entry.find('img').attr('src');

      if (title && link && image) {
        events.push({ title, link, image });
      }
    });

    if (events.length > 0) {
      res.json(events);
    } else {
      res.status(404).json({ error: 'Nenhum evento encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao fazer o scraping:', error.message);
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
});   

router.get('/brasileirao', async (req, res) => {
  try {
    const siteUrl = 'https://multicanais.casino/jogo-ao-vivo/brasileiro-ao-vivo/';
    const { data } = await axios.get(siteUrl);

    const $ = cheerio.load(data);
    const events = [];

    // Itera por cada elemento que representa um evento
    $('.entry-image').each((index, element) => {
      const entry = $(element).find('a');
      const title = entry.attr('title');
      const link = entry.attr('href');
      const image = entry.find('img').attr('src');

      if (title && link && image) {
        events.push({ title, link, image });
      }
    });

    if (events.length > 0) {
      res.json(events);
    } else {
      res.status(404).json({ error: 'Nenhum evento encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao fazer o scraping:', error.message);
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
});
router.get('/tv', async (req, res) => {
  try {
    const siteUrl = 'https://multicanais.casino/jogo-ao-vivo/tv-online-ao-vivo/';
    const { data } = await axios.get(siteUrl);

    const $ = cheerio.load(data);
    const events = [];

    // Itera por cada elemento que representa um evento
    $('.entry-image').each((index, element) => {
      const entry = $(element).find('a');
      const title = entry.attr('title');
      const link = entry.attr('href');
      const image = entry.find('img').attr('src');

      if (title && link && image) {
        events.push({ title, link, image });
      }
    });

    if (events.length > 0) {
      res.json(events);
    } else {
      res.status(404).json({ error: 'Nenhum evento encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao fazer o scraping:', error.message);
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
});
router.get('/esportedodia', async (req, res) => {
  try {
    const siteUrl = 'https://multicanais.casino/jogo-ao-vivo/canais-de-esportes/';
    const { data } = await axios.get(siteUrl);

    const $ = cheerio.load(data);

    // Seleciona todos os elementos desejados
    const entries = $('.entry-image a');
    const results = [];

    entries.each((index, element) => {
      const title = $(element).attr('title');
      const link = $(element).attr('href');
      const image = $(element).find('img').attr('src');

      if (title && link && image) {
        results.push({ title, link, image });
      }
    });

    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(404).json({ error: 'Informações não encontradas.' });
    }
  } catch (error) {
    console.error('Erro ao fazer o scraping:', error.message);
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
});
router.get('/futebol', async (req, res) => {
  try {
    const siteUrl = 'https://multicanais.casino/jogo-ao-vivo/futebol-ao-vivo/';
    const { data } = await axios.get(siteUrl);

    const $ = cheerio.load(data);
    const events = [];

    // Itera por cada elemento que representa um evento
    $('.entry-image').each((index, element) => {
      const entry = $(element).find('a');
      const title = entry.attr('title');
      const link = entry.attr('href');
      const image = entry.find('img').attr('src');

      if (title && link && image) {
        events.push({ title, link, image });
      }
    });

    if (events.length > 0) {
      res.json(events);
    } else {
      res.status(404).json({ error: 'Nenhum evento encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao fazer o scraping:', error.message);
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
});

router.get('/celular', async (req, res) => {
  try {
    const { modelo } = req.query;
    if (!modelo) {
      return res.status(400).json({ error: 'O parâmetro "modelo" é obrigatório.' });
    }

    const searchUrl = `https://www.tudocelular.com/?sName=${encodeURIComponent(modelo)}`;

    // Forçar a codificação UTF-8 ao buscar os dados
    const response = await axios.get(searchUrl, { responseType: 'arraybuffer' });
    const html = iconv.decode(response.data, 'utf-8'); // Decodifica corretamente os caracteres
    const $ = cheerio.load(html);

    const firstPhoneLink = $('li a.item_movil').attr('href');
    if (!firstPhoneLink) {
      return res.status(404).json({ error: 'Celular não encontrado na busca.' });
    }

    const redirectResponse = await axios.get(firstPhoneLink, { maxRedirects: 5 });
    const finalUrl = redirectResponse.request.res.responseUrl;

    const phoneResponse = await axios.get(finalUrl, { responseType: 'arraybuffer' });
    const phoneHtml = iconv.decode(phoneResponse.data, 'utf-8'); // Decodifica corretamente os caracteres
    const $$ = cheerio.load(phoneHtml);

    // Captura do nome do celular
    const name = $$('h1').text().trim() || 'Nome não encontrado';

    // Estrutura inicial para armazenar as especificações
    const phoneDetails = {
      name: name,
      url: finalUrl,
      specs: {}
    };

    // Localizando os títulos das seções e os valores correspondentes
    $$('div#phone_columns .phone_column').each((index, element) => {
      const sectionTitles = $$('div#controles_titles .phone_column_features li').map((i, el) => $$(el).text().trim()).get();
      const sectionValues = $$(element).find('.phone_column_features').map((i, el) => {
        return $$(el).find('li').map((j, li) => cleanText($$(li).text().trim())).get();
      }).get();

      // Mapeando títulos com os valores
      sectionTitles.forEach((title, i) => {
        if (title && sectionValues[i]) {
          phoneDetails.specs[cleanText(title)] = sectionValues[i];
        }
      });
    });

    res.status(200).json(phoneDetails);
  } catch (error) {
    console.error('Erro ao buscar ficha técnica:', error.message);
    res.status(500).json({ error: 'Erro ao buscar ficha técnica do celular' });
  }
});

// Função para limpar caracteres corrompidos
function cleanText(text) {
  if (!text) return "Não especificado";
  
  // Substituições manuais de caracteres corrompidos
  const corrections = {
    "Dimens�es": "Dimensões",
    "Mem�ria Max": "Memória Max",
    "C�mera Frontal": "Câmera Frontal",
    "Resolu��o": "Resolução",
    "Estabiliza��o": "Estabilização",
    "V�deo C�mera Frontal": "Vídeo Câmera Frontal",
    "Mem�ria Expans�vel": "Memória Expansível",
    "Velocidade m�xima de download": "Velocidade máxima de download",
    "Velocidade m�xima de upload": "Velocidade máxima de upload",
    "Aperture Size": "Abertura da Lente",
    "Tamanho do Sensor": "Tamanho do Sensor"
  };

  return corrections[text] || text.replace(/�/g, "").trim();
}


// Rota GET para buscar produtos do Mercado Livre
router.get('/mercadolivre', async (req, res) => {
  try {
    const { q, category } = req.query; // 'q' é o termo de busca e 'category' é opcional
    if (!q) {
      return res.status(400).json({ error: 'O parâmetro "q" é obrigatório para buscar produtos.' });
    }

    // URL de busca da API do Mercado Livre
    const url = 'https://api.mercadolibre.com/sites/MLB/search';

    // Realizando a requisição para a API do Mercado Livre
    const response = await axios.get(url, {
      params: {
        q: q,              // Termo de busca
        category: category || undefined, // Categoria opcional
      },
    });

    // Retorna os produtos encontrados
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error.message);
    res.status(500).json({ error: 'Erro ao buscar produtos no Mercado Livre' });
  }
});

router.get('/printsite', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ status: false, mensagem: 'O parâmetro "url" é obrigatório.' });
  }

  try {
    const response = await axios.get(`https://api.giftedtech.web.id/api/tools/ssweb?apikey=gifted&url=${encodeURIComponent(url)}`);

    if (response.data && response.data.result) {
      // Redireciona diretamente para a URL da imagem
      res.redirect(response.data.result);
    } else {
      res.json({ mensagem: 'Não foi possível gerar a captura de tela.' });
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    res.status(500).json({ status: false, mensagem: 'Erro interno do servidor.' });
  }
});


router.get('/print-celular', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ status: false, mensagem: 'O parâmetro "url" é obrigatório.' });
  }

  try {
    const response = await axios.get(`https://api.giftedtech.web.id/api/tools/ssphone?apikey=gifted&url=${encodeURIComponent(url)}`);

    if (response.data && response.data.result) {
      // Redireciona diretamente para a URL da imagem
      res.redirect(response.data.result);
    } else {
      res.json({ mensagem: 'Não foi possível gerar a captura de tela.' });
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    res.status(500).json({ status: false, mensagem: 'Erro interno do servidor.' });
  }
});


router.get('/print-pc', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ status: false, mensagem: 'O parâmetro "url" é obrigatório.' });
  }

  try {
    const response = await axios.get(`https://api.giftedtech.web.id/api/tools/sspc?apikey=gifted&url=${encodeURIComponent(url)}`);

    if (response.data && response.data.result) {
      // Redireciona diretamente para a URL da imagem
      res.redirect(response.data.result);
    } else {
      res.json({ mensagem: 'Não foi possível gerar a captura de tela.' });
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    res.status(500).json({ status: false, mensagem: 'Erro interno do servidor.' });
  }
});


router.get('/print-tablet', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ status: false, mensagem: 'O parâmetro "url" é obrigatório.' });
  }

  try {
    const response = await axios.get(`https://api.giftedtech.web.id/api/tools/sstab?apikey=gifted&url=${encodeURIComponent(url)}`);

    if (response.data && response.data.result) {
      // Redireciona diretamente para a URL da imagem
      res.redirect(response.data.result);
    } else {
      res.json({ mensagem: 'Não foi possível gerar a captura de tela.' });
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    res.status(500).json({ status: false, mensagem: 'Erro interno do servidor.' });
  }
});

// Criando o app e usando o Router

router.get('/ai-gpt4', async (req, res) => {
  const { texto } = req.query; // Captura o parâmetro 'texto' da query string

  if (!texto) {
    return res.status(400).json({ erro: 'O parâmetro "texto" é obrigatório' });
  }

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/ai/gpt4?apikey=gifted&q=${encodeURIComponent(texto)}`;
    const { data } = await axios.get(apiUrl);

    if (data && data.result) {
      res.json({ resposta: data.result });
    } else {
      res.status(500).json({ erro: 'Resposta inválida da API' });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar a API', detalhes: error.message });
  }
});

router.get('/ai-gpt4v2', async (req, res) => {
  const { texto } = req.query; // Captura o parâmetro 'texto' da query string

  if (!texto) {
    return res.status(400).json({ erro: 'O parâmetro "texto" é obrigatório' });
  }

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/ai/gpt4v2?apikey=gifted&q=${encodeURIComponent(texto)}`;
    const { data } = await axios.get(apiUrl);

    if (data && data.result) {
      res.json({ resposta: data.result });
    } else {
      res.status(500).json({ erro: 'Resposta inválida da API' });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar a API', detalhes: error.message });
  }
});


// Rota GET para buscar dados da NASA
router.get('/nasa', async (req, res) => {
  try {
    const { date } = req.query; // opcional, formato YYYY-MM-DD
    const NASA_API_KEY = 'uZvH3nheGNcV59ZqWt6CwyiDPqWtL6R7fl3tFkbH';  // Coloque sua chave diretamente aqui

    const response = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key: NASA_API_KEY, // A chave da API está diretamente no código
        date: date || undefined, // Inclui a data apenas se fornecida
      },
    });

    // Retorna os dados recebidos da API da NASA
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados da NASA:', error.message);
    res.status(500).json({ error: 'Erro ao buscar dados da NASA' });
  }
});


router.get('/ai-gpt4-o', async (req, res) => {
  const { texto } = req.query; // Captura o parâmetro 'texto' da query string

  if (!texto) {
    return res.status(400).json({ erro: 'O parâmetro "texto" é obrigatório' });
  }

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/ai/gpt4-o?apikey=gifted&q=${encodeURIComponent(texto)}`;
    const { data } = await axios.get(apiUrl);

    if (data && data.result) {
      res.json({ resposta: data.result });
    } else {
      res.status(500).json({ erro: 'Resposta inválida da API' });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar a API', detalhes: error.message });
  }
});


router.get('/ai-llama', async (req, res) => {
  const { texto } = req.query; // Captura o parâmetro 'texto' da query string

  if (!texto) {
    return res.status(400).json({ erro: 'O parâmetro "texto" é obrigatório' });
  }

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/ai/llamaai?apikey=gifted&q=${encodeURIComponent(texto)}`;
    const { data } = await axios.get(apiUrl);

    if (data && data.result) {
      res.json({ resposta: data.result });
    } else {
      res.status(500).json({ erro: 'Resposta inválida da API' });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar a API', detalhes: error.message });
  }
});

router.get('/ai-blackbox', async (req, res) => {
  const { texto } = req.query; // Captura o parâmetro 'texto' da query string

  if (!texto) {
    return res.status(400).json({ erro: 'O parâmetro "texto" é obrigatório' });
  }

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/ai/blackbox?apikey=gifted&q=${encodeURIComponent(texto)}`;
    const { data } = await axios.get(apiUrl);

    if (data && data.result) {
      res.json({ resposta: data.result });
    } else {
      res.status(500).json({ erro: 'Resposta inválida da API' });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar a API', detalhes: error.message });
  }
});

router.get('/ai-lumin', async (req, res) => {
  const { query } = req.query; // Captura o parâmetro 'query' da query string

  if (!query) {
    return res.status(400).json({ erro: 'O parâmetro "query" é obrigatório' });
  }

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/ai/luminai?apikey=gifted&query=${encodeURIComponent(query)}`;
    const { data } = await axios.get(apiUrl);

    if (data && data.result) {
      res.json({ resposta: data.result });
    } else {
      res.status(500).json({ erro: 'Resposta inválida da API' });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar a API', detalhes: error.message });
  }
});

router.get('/ai-simsimi', async (req, res) => {
  const { query } = req.query; // Captura o parâmetro 'query' da query string

  if (!query) {
    return res.status(400).json({ erro: 'O parâmetro "query" é obrigatório' });
  }

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/ai/simsimi?apikey=gifted&query=${encodeURIComponent(query)}`;
    const { data } = await axios.get(apiUrl);

    if (data && data.result) {
      res.json({ resposta: data.result });
    } else {
      res.status(500).json({ erro: 'Resposta inválida da API' });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar a API', detalhes: error.message });
  }
});

router.get('/ai-letmegpt', async (req, res) => {
  const { query } = req.query; // Captura o parâmetro 'query' da query string

  if (!query) {
    return res.status(400).json({ erro: 'O parâmetro "query" é obrigatório' });
  }

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/ai/letmegpt?apikey=gifted&query=${encodeURIComponent(query)}`;
    const { data } = await axios.get(apiUrl);

    if (data && data.result) {
      res.json({ resposta: data.result });
    } else {
      res.status(500).json({ erro: 'Resposta inválida da API' });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar a API', detalhes: error.message });
  }
});

router.get('/ai-wwdgpt', async (req, res) => {
  const { prompt } = req.query; // Captura o parâmetro 'prompt' da query string

  if (!prompt) {
    return res.status(400).json({ erro: 'O parâmetro "prompt" é obrigatório' });
  }

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/ai/wwdgpt?apikey=gifted&prompt=${encodeURIComponent(prompt)}`;
    const { data } = await axios.get(apiUrl);

    if (data && data.result) {
      res.json({ resposta: data.result });
    } else {
      res.status(500).json({ erro: 'Resposta inválida da API' });
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar a API', detalhes: error.message });
  }
});

// Endpoint personalizado: /playstore
router.get('/playstore2', async (req, res) => {
    const nome = req.query.nome;

    if (!nome) {
        return res.status(400).json({ error: 'O parâmetro "nome" é obrigatório!' });
    }

    try {
        // Fazendo a solicitação para a API externa
        const response = await axios.get(
            `https://https://api.nexfuture.com.br/api/pesquisa/playstore?nome=${encodeURIComponent(nome)}`
        );

        // Verificando se a resposta contém o campo "resultado"
        if (response.data && response.data.pesquisa && response.data.pesquisa.resultado) {
            return res.json(response.data.pesquisa.resultado); // Retorna apenas o campo "resultado"
        } else {
            return res.status(500).json({ error: 'Erro ao obter os resultados da pesquisa.' });
        }
    } catch (error) {
        console.error('Erro ao chamar a API:', error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação.' });
    }
});

router.get('/ai-imagine', async (req, res) => {
    const { texto } = req.query; // Captura o parâmetro 'texto' da query string

    if (!texto) {
        return res.status(400).json({ error: 'Texto é obrigatório.' });
    }

    try {
        const response = await axios.get(
            `https://api.giftedtech.web.id/api/ai/text2img?apikey=gifted&prompt=${encodeURIComponent(texto)}`,
            { responseType: 'arraybuffer' } // Para obter a imagem como buffer
        );

        // Cria um nome para o arquivo e o caminho
        const fileName = `imagem-${Date.now()}.png`;
        const filePath = path.join(__dirname, fileName);

        // Salva a imagem no servidor
        fs.writeFileSync(filePath, response.data);

        // Envia a imagem para o usuário
        res.sendFile(filePath, (err) => {
            if (err) {
                console.error('Erro ao enviar a imagem:', err);
                res.status(500).json({ error: 'Erro ao enviar a imagem' });
            }

            // Remove a imagem do servidor após o envio
            fs.unlinkSync(filePath);
        });
    } catch (error) {
        console.error('Erro ao chamar a API:', error.message);
        res.status(500).json({ error: 'Erro ao gerar a imagem' });
    }
});

router.get('/ai-sd', async (req, res) => {
    const { prompt } = req.query; // Captura o parâmetro 'prompt' da query string

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt é obrigatório.' });
    }

    try {
        const response = await axios.get(
            `https://api.giftedtech.web.id/api/ai/sd?apikey=gifted&prompt=${encodeURIComponent(prompt)}`,
            { responseType: 'arraybuffer' } // Para obter a imagem como buffer
        );

        // Cria um nome para o arquivo e o caminho
        const fileName = `imagem-${Date.now()}.png`;
        const filePath = path.join(__dirname, fileName);

        // Salva a imagem no servidor
        fs.writeFileSync(filePath, response.data);

        // Envia a imagem para o usuário
        res.sendFile(filePath, (err) => {
            if (err) {
                console.error('Erro ao enviar a imagem:', err);
                res.status(500).json({ error: 'Erro ao enviar a imagem' });
            }

            // Remove a imagem do servidor após o envio
            fs.unlinkSync(filePath);
        });
    } catch (error) {
        console.error('Erro ao chamar a API:', error.message);
        res.status(500).json({ error: 'Erro ao gerar a imagem' });
    }
});

// Endpoint personalizado: /orbital-img
router.get('/orbital-img', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.status(400).json({ error: 'O parâmetro "texto" é obrigatório!' });
    }

    try {
        // Fazendo a solicitação para a API externa
        const response = await axios.get(
            `https://https://api.nexfuture.com.br/api/ai/orbital-img?query=${encodeURIComponent(texto)}&model=animefy`
        );

        // Verificando a resposta
        if (response.data && response.data.status === "200") {
            const imageUrl = response.data.url; // Pegando o link da imagem
            return res.redirect(imageUrl); // Redirecionando para o link da imagem
        } else {
            return res.status(500).json({ error: 'Erro ao gerar a imagem.' });
        }
    } catch (error) {
        console.error('Erro ao chamar a API:', error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação.' });
    }
});

// Endpoint personalizado: /imgsys
router.get('/ai-imgsys', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.status(400).json({ error: 'O parâmetro "texto" é obrigatório!' });
    }

    try {
        // Fazendo a solicitação para a API externa
        const response = await axios.get(
            `https://api.giftedtech.web.id/api/ai/imgsys?apikey=gifted&prompt=${encodeURIComponent(texto)}`
        );

        // Verificando a resposta
        if (response.data && response.data.success) {
            const imageUrl = response.data.result[0]; // Pegando o primeiro link do array
            return res.redirect(imageUrl); // Redirecionando para a imagem
        } else {
            return res.status(500).json({ error: 'Erro ao gerar a imagem.' });
        }
    } catch (error) {
        console.error('Erro ao chamar a API:', error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação.' });
    }
});

// Endpoint personalizado: /fluximg
router.get('/ai-fluximg', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.status(400).json({ error: 'O parâmetro "texto" é obrigatório!' });
    }

    try {
        // Montando a URL diretamente
        const url = `https://api.giftedtech.web.id/api/ai/fluximg?apikey=gifted&prompt=${encodeURIComponent(texto)}`;
        const response = await axios.get(url);

        if (response.data && response.data.success) {
            const imageUrl = response.data.result;
            return res.redirect(imageUrl);
        } else {
            return res.status(500).json({ error: 'Erro ao gerar a imagem.' });
        }
    } catch (error) {
        console.error('Erro ao chamar a API:', error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação.' });
    }
});

//fim
// Rota para retornar notícias esportivas
router.get('/genoticias', async (req, res) => {
  const termo = req.query.termo || ''; // parâmetro opcional para definir o tipo de notícia
  try {
    const noticias = await getNoticiasEsporte(termo);
    res.json({ sucesso: true, dados: noticias });
  } catch (error) {
    res.status(500).json({ sucesso: false, mensagem: 'Erro ao obter notícias', erro: error.message });
  }
});

const { createCanvas, registerFont } = require('canvas');
const GIFEncoder = require('gifencoder');
// Registre a fonte Arial Narrow 7 a partir do arquivo .ttf
registerFont('./arial_narrow_7.ttf', { family: 'Arial Narrow' });

const webp = require('webp-converter'); // Conversor WebP sem precisar do "gif2webp"

router.get('/rgb', async (req, res) => {
    var texto = req.query.texto || 'Figurinha';
    var largura = 512;
    var altura = 512;
    var frames = 10;
    var delay = 100;
    var maxWidth = largura * 0.9;

    var encoder = new GIFEncoder(largura, altura);
    encoder.start();
    encoder.setRepeat(0);
    encoder.setDelay(delay);
    encoder.setTransparent(0x000000);

    var canvas = createCanvas(largura, altura);
    var ctx = canvas.getContext('2d');

    function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';
        var totalHeight = 0;
        var lines = [];

        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;

            if (testWidth > maxWidth && n > 0) {
                lines.push(line);
                line = words[n] + ' ';
                totalHeight += lineHeight;
            } else {
                line = testLine;
            }
        }
        lines.push(line);
        totalHeight += lineHeight;

        // **Desenha o texto centralizado verticalmente**
        var startY = y - totalHeight / 2 + lineHeight / 2;
        lines.forEach((l, i) => {
            context.fillText(l, x, startY + i * lineHeight);
        });

        return totalHeight;
    }

    for (let i = 0; i < frames; i++) {
        ctx.clearRect(0, 0, largura, altura);

        // **EFEITO PISCANDO: COR ALEATÓRIA A CADA FRAME**
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

        // **TEXTO GRANDE E CENTRALIZADO**
        ctx.font = 'bold 150px "Arial Narrow"';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        wrapText(ctx, texto, largura / 2, altura / 2, maxWidth, 150);

        encoder.addFrame(ctx);
    }

    encoder.finish();

    // **SALVAR GIF TEMPORÁRIO**
    var gifBuffer = encoder.out.getData();
    var gifPath = './temp.gif';
    var webpPath = './temp.webp';

    fs.writeFileSync(gifPath, gifBuffer);

    // **CONVERTER GIF → WEBP ANIMADO SEM PRECISAR DO "gif2webp"**
    webp.gwebp(gifPath, webpPath, "-q 80")
        .then(() => {
            res.setHeader('Content-Type', 'image/webp');
            res.sendFile(path.resolve(webpPath));
        })
        .catch(err => {
            console.error("Erro ao converter para WebP:", err);
            res.status(500).send("Erro ao gerar sticker.");
        });
});

router.get('/rgb2', (req, res) => {
    const texto = req.query.texto || 'Figurinha';
    const largura = 300;
    const altura = 300;
    const frames = 10;  // Número de frames no GIF
    const delay = 100;  // Delay entre os frames em ms
    const maxWidth = largura * 0.8; // Largura máxima para o texto

    // Cria o encoder GIF e define a configuração do GIF
    const encoder = new GIFEncoder(largura, altura);
    encoder.start();
    encoder.setRepeat(0);  // 0 para loop infinito
    encoder.setDelay(delay);

    const canvas = createCanvas(largura, altura);
    const ctx = canvas.getContext('2d');

    // Função para dividir o texto em linhas e retornar a altura total do texto
    function wrapText(context, text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        let totalHeight = 0; // Altura total ocupada pelo texto

        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = context.measureText(testLine);
            const testWidth = metrics.width;

            if (testWidth > maxWidth && n > 0) {
                context.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
                totalHeight += lineHeight; // Adiciona à altura total
            } else {
                line = testLine;
            }
        }
        context.fillText(line, x, y);
        totalHeight += lineHeight; // Adiciona a última linha à altura total
        return totalHeight; // Retorna a altura total ocupada pelo texto
    }

    // Gera cada frame do GIF
    for (let i = 0; i < frames; i++) {
        ctx.clearRect(0, 0, largura, altura);  // Limpa o frame para o fundo transparente

        // Define uma cor aleatória para o texto em cada frame
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

        // Usa a fonte Arial Narrow 7
        ctx.font = 'bold 50px "Arial Narrow"'; // Fonte ajustada para Arial Narrow 7
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Chama a função para quebrar o texto em linhas e obter a altura total
        const totalHeight = wrapText(ctx, texto, largura / 2, altura / 2, maxWidth, 60);

        // Recalcula a posição vertical para centralizar
        const verticalCenter = (altura - totalHeight) / 2 + (totalHeight / 2); // Centraliza corretamente

        // Limpa o canvas e desenha o texto centralizado
        ctx.clearRect(0, 0, largura, altura); // Limpa o frame
        wrapText(ctx, texto, largura / 2, verticalCenter, maxWidth, 60);

        // Adiciona o frame ao encoder GIF
        encoder.addFrame(ctx);
    }

    encoder.finish();

    // Define o cabeçalho e envia o GIF
    res.setHeader('Content-Type', 'image/gif');
    res.send(encoder.out.getData());
});


router.get('/rgb3', (req, res) => {
    const texto = req.query.texto || 'Figurinha';
    const largura = 300;
    const altura = 300;
    const frames = 10;  // Número de frames no GIF
    const delay = 100;  // Delay entre os frames em ms
    const maxWidth = largura * 0.8; // Largura máxima para o texto

    // Cria o encoder GIF e define a configuração do GIF
    const encoder = new GIFEncoder(largura, altura);
    encoder.start();
    encoder.setRepeat(0);  // 0 para loop infinito
    encoder.setDelay(delay);
    encoder.setTransparent(0); // Define a transparência (0 significa cor transparente)

    const canvas = createCanvas(largura, altura);
    const ctx = canvas.getContext('2d');

    // Função para dividir o texto em linhas e retornar a altura total do texto
    function wrapText(context, text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        let totalHeight = 0; // Altura total ocupada pelo texto

        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = context.measureText(testLine);
            const testWidth = metrics.width;

            if (testWidth > maxWidth && n > 0) {
                context.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
                totalHeight += lineHeight; // Adiciona à altura total
            } else {
                line = testLine;
            }
        }
        context.fillText(line, x, y);
        totalHeight += lineHeight; // Adiciona a última linha à altura total
        return totalHeight; // Retorna a altura total ocupada pelo texto
    }

    // Gera cada frame do GIF
    for (let i = 0; i < frames; i++) {
        // Limpa o canvas e preserva a transparência
        ctx.clearRect(0, 0, largura, altura); // Limpa a tela, mantendo a transparência

        // Define uma cor aleatória para o texto em cada frame
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

        // Usa a fonte Arial Narrow 7
        ctx.font = 'bold 50px "Arial Narrow"'; // Fonte ajustada para Arial Narrow 7
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Chama a função para quebrar o texto em linhas e obter a altura total
        const totalHeight = wrapText(ctx, texto, largura / 2, altura / 2, maxWidth, 60);

        // Recalcula a posição vertical para centralizar
        const verticalCenter = (altura - totalHeight) / 2 + (totalHeight / 2); // Centraliza corretamente

        // Limpa o canvas e desenha o texto centralizado
        ctx.clearRect(0, 0, largura, altura); // Limpa o frame novamente
        wrapText(ctx, texto, largura / 2, verticalCenter, maxWidth, 60);

        // Adiciona o frame ao encoder GIF
        encoder.addFrame(ctx);
    }

    encoder.finish();

    // Define o cabeçalho e envia o GIF
    res.setHeader('Content-Type', 'image/gif');
    res.send(encoder.out.getData());
});
router.get('/futeboledits', async (req, res) => {
    // Caminho para o arquivo JSON
    const loliFilePath = path.join(__dirname, 'dados', 'futeboledits.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(loliFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar os vídeos do arquivo JSON
        const loliData = lerArquivoJSON();
        const videos = loliData.videos; // Alterado para 'videos'

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
        res.status(500).send('Erro ao obter o vídeo aleatório');
    }
});
router.get('/soloedits', async (req, res) => {
    // Caminho para o arquivo JSON
    const loliFilePath = path.join(__dirname, 'dados', 'soloedits.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(loliFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar os vídeos do arquivo JSON
        const loliData = lerArquivoJSON();
        const videos = loliData.videos; // Alterado para 'videos'

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
        res.status(500).send('Erro ao obter o vídeo aleatório');
    }
});

router.get('/editsfeminina', async (req, res) => {
    // Caminho para o arquivo JSON
    const loliFilePath = path.join(__dirname, 'dados', 'editsfeminina.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(loliFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar os vídeos do arquivo JSON
        const loliData = lerArquivoJSON();
        const videos = loliData.videos; // Alterado para 'videos'

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
        res.status(500).send('Erro ao obter o vídeo aleatório');
    }
});
router.get('/chainsaw', async (req, res) => {
    // Caminho para o arquivo JSON
    const loliFilePath = path.join(__dirname, 'dados', 'chainsaw.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(loliFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar os vídeos do arquivo JSON
        const loliData = lerArquivoJSON();
        const videos = loliData.videos; // Alterado para 'videos'

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
        res.status(500).send('Erro ao obter o vídeo aleatório');
    }
});
router.get('/hunterx', async (req, res) => {
    // Caminho para o arquivo JSON
    const loliFilePath = path.join(__dirname, 'dados', 'hunterx.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(loliFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar os vídeos do arquivo JSON
        const loliData = lerArquivoJSON();
        const videos = loliData.videos; // Alterado para 'videos'

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
        res.status(500).send('Erro ao obter o vídeo aleatório');
    }
});
router.get('/bleach', async (req, res) => {
    // Caminho para o arquivo JSON
    const loliFilePath = path.join(__dirname, 'dados', 'bleach.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(loliFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar os vídeos do arquivo JSON
        const loliData = lerArquivoJSON();
        const videos = loliData.videos; // Alterado para 'videos'

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
        res.status(500).send('Erro ao obter o vídeo aleatório');
    }
});
router.get('/jujutsu', async (req, res) => {
    // Caminho para o arquivo JSON
    const loliFilePath = path.join(__dirname, 'dados', 'jujutsu.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(loliFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar os vídeos do arquivo JSON
        const loliData = lerArquivoJSON();
        const videos = loliData.videos; // Alterado para 'videos'

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
        res.status(500).send('Erro ao obter o vídeo aleatório');
    }
});
router.get('/aleatorios', async (req, res) => {
    // Caminho para o arquivo JSON
    const loliFilePath = path.join(__dirname, 'dados', 'aleatoriosmp4.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(loliFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar os vídeos do arquivo JSON
        const loliData = lerArquivoJSON();
        const videos = loliData.videos; // Alterado para 'videos'

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
        res.status(500).send('Erro ao obter o vídeo aleatório');
    }
});
router.get('/narutomp4', async (req, res) => {
    // Caminho para o arquivo JSON
    const loliFilePath = path.join(__dirname, 'dados', 'narutomp4.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(loliFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar os vídeos do arquivo JSON
        const loliData = lerArquivoJSON();
        const videos = loliData.videos; // Alterado para 'videos'

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
        res.status(500).send('Erro ao obter o vídeo aleatório');
    }
});
router.get('/dragonball', async (req, res) => {
    // Caminho para o arquivo JSON
    const loliFilePath = path.join(__dirname, 'dados', 'dragonball.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(loliFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar os vídeos do arquivo JSON
        const loliData = lerArquivoJSON();
        const videos = loliData.videos; // Alterado para 'videos'

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
        res.status(500).send('Erro ao obter o vídeo aleatório');
    }
});
router.get('/kimetsu', async (req, res) => {
    // Caminho para o arquivo JSON
    const loliFilePath = path.join(__dirname, 'dados', 'kimetsu.json');

    // Função para ler o arquivo JSON
    function lerArquivoJSON() {
        const rawdata = fs.readFileSync(loliFilePath);
        return JSON.parse(rawdata);
    }

    try {
        // Carregar os vídeos do arquivo JSON
        const loliData = lerArquivoJSON();
        const videos = loliData.videos; // Alterado para 'videos'

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
        res.status(500).send('Erro ao obter o vídeo aleatório');
    }
});

router.get('/whois/:domain', async (req, res) => {
    const domain = req.params.domain; // Captura o domínio da URL
    const apiKey = 'at_pMBw3G9ao2Etc4sUrlr68fNoS8amb'; // Sua chave de API
    const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${apiKey}&domainName=${domain}&outputFormat=JSON`;

    try {
        const response = await axios.get(url);
        const whoisData = response.data;

        // Envia a resposta JSON com os dados do Whois
        res.json(whoisData);
    } catch (error) {
        console.error('Erro ao buscar dados do Whois:', error);
        res.status(500).json({ error: 'Erro ao buscar dados do Whois.' });
    }
});

class OperadoraUtil {
  static formtarNumero(n) {
    n = n?.replace(/[^0-9]/g, "");
    if (!(n.startsWith('55') && /([0-9]{5,16}|0)/.test(n))) return null;

    const ddd = n.substr(2, 2);
    const testN = 8 == n.substr(4).length;
    let numero = n.substr(4, 5) + "-" + n.substr(9, 4);
    if (testN) {
      numero = n.substr(4, 4) + "-" + n.substr(8, 4);
    }
    return `(${ddd}) ${numero}`;
  }

  static async getHTML(url, options) {
    const headers = options.headers;
    const formData = new URLSearchParams();
    formData.append('telefone', options.form.telefone);

    const response = await axios.post(url, formData, { headers });
    return response.data;
  }

  static qualOperadora(numero) {
    const user = userAgent();
    const getDate = String(Date.now()).slice(0, 10);
    const telefone = this.formtarNumero(numero);
    if (!telefone) return Promise.reject('Número desconhecido.');

    const headers = {
      "user-agent": user,
      "cookie": `SSID=sfeb17gj92tcllul8c17tb6iji; USID=4f85b07d2188dc8b683bf2050d0a20dc; _jsuid=2662589599; _heatmaps_g2g_100536567=no; cf_clearance=KmTYQBKBLdNP4axA2h60DDwZE9j.wTKAPaI38jgr8lk-${getDate}-0-1-68ba348d.886f8aa2.e20e0874-0.2.${getDate}`,
      'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      Origin: 'https://www.qualoperadora.net',
      Referer: 'https://www.qualoperadora.net/'
    };

    const options = {
      method: "POST",
      headers,
      form: { telefone }
    };

    return this.getHTML('https://www.qualoperadora.net', options).then((html) => {
      const $ = cheerio.load(html);
      const ope = $('div[id="resultado"] > span').html()?.split(/ +/);
      if (!ope) return Promise.reject('Operadora desconhecida ou não encontrada.');

      const estado = $('div[id="resultado"] > span > span').html();

      return {
        telefone,
        operadora: ope[0],
        dispositivo: ope.pop(),
        estado
      };
    });
  }
}

// Rota GET usando a classe acima
router.get('/operadora2/:numero', async (req, res) => {
  const numero = req.params.numero;

  try {
    const resultado = await OperadoraUtil.qualOperadora(numero);
    res.json(resultado);
  } catch (err) {
    res.status(400).json({ error: err.toString() });
  }
});


router.get('/qual-operadora/:numero', async (req, res) => {
  const numero = req.params.numero?.replace(/\D/g, "");

  if (!numero || !/^55\d{10,11}$/.test(numero)) {
    return res.status(400).json({ error: 'Número inválido. Use o formato com DDI (ex: 5591987654321)' });
  }

  const ddd = numero.substr(2, 2);
  const restante = numero.substr(4);
  const formatado = `(${ddd}) ${restante.length === 8 ? restante.substr(0, 4) + '-' + restante.substr(4) : restante.substr(0, 5) + '-' + restante.substr(5)}`;

  const formData = new URLSearchParams();
  formData.append("telefone", formatado);

  const headers = {
    'User-Agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/117.0.0.0 Safari/537.36`,
    'Referer': 'https://www.qualoperadora.net/',
    'Origin': 'https://www.qualoperadora.net',
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  try {
    const response = await axios.post('https://www.qualoperadora.net', formData, { headers });
    const $ = cheerio.load(response.data);

    const spanText = $('div#resultado span').text().trim();

    if (!spanText) {
      return res.status(404).json({ error: 'Não foi possível encontrar informações para este número.' });
    }

    const partes = spanText.split(/\s+/);
    const operadora = partes[0];
    const estado = $('div#resultado span span').text().trim();
    const dispositivo = partes[partes.length - 1];

    return res.json({
      telefone: formatado,
      operadora,
      estado: estado || null,
      dispositivo
    });

  } catch (err) {
    console.error("Erro ao acessar qualoperadora.net:", err.message);
    return res.status(500).json({ error: 'Erro ao consultar o site da operadora. Tente novamente mais tarde.' });
  }
});

router.get('/operadora', async (req, res) => {
    const { numero } = req.query;

    console.log('Requisição recebida para número:', numero);

    // Validação do formato do número
    if (!numero || !/^\d{2}\d{5}-\d{4}$/.test(numero)) {
        console.error('Erro: Formato de número inválido');
        return res.status(400).json({ error: 'Formato de número inválido. Use o formato: 1199867-3120' });
    }

    // Extrai o DDD e o prefixo
    const ddd = numero.slice(0, 2);
    const prefixo = numero.slice(2, 7);
    console.log('DDD extraído:', ddd);
    console.log('Prefixo extraído:', prefixo);

    const url = `https://www.qualoperadora.org/prefixo/celular/${prefixo}`;
    console.log('URL gerada para consulta:', url);

    try {
        // Faz a requisição para o site e obtém o HTML
        const response = await axios.get(url);
        const html = response.data;
        console.log('Resposta HTML recebida com sucesso.');

        // Extrai a lista de operadoras dentro do <ul> usando regex para capturar bloco <ul>...</ul>
        const listRegex = /<ul>(.*?)<\/ul>/s;
        const listMatch = html.match(listRegex);
        
        if (listMatch && listMatch[1]) {
            const listContent = listMatch[1];
            console.log('Conteúdo da lista extraído com sucesso.');

            // Quebra a lista em itens de <li>
            const items = listContent.split('<li>');
            let operadoraEncontrada = null;

            items.forEach((item) => {
                if (item.includes(`(${ddd}) ${prefixo}`)) {
                    const operadoraRegex = /operadora\s(.*?)\scelular/i;
                    const operadoraMatch = item.match(operadoraRegex);
                    if (operadoraMatch && operadoraMatch[1]) {
                        operadoraEncontrada = operadoraMatch[1].trim();
                        console.log('Operadora encontrada:', operadoraEncontrada);
                    }
                }
            });

            if (operadoraEncontrada) {
                return res.json({ mensagem: `O número é da operadora ${operadoraEncontrada}` });
            } else {
                console.warn('Operadora não encontrada para o DDD e prefixo fornecidos.');
                return res.status(404).json({ error: 'Operadora não encontrada para o DDD e prefixo fornecidos.' });
            }
        } else {
            console.error('Erro: Estrutura de lista <ul> não encontrada no HTML.');
            return res.status(500).json({ error: 'Estrutura de resposta inesperada. Verifique o formato do HTML retornado.' });
        }
    } catch (error) {
        console.error('Erro ao consultar a operadora:', error.message);
        
        if (error.response) {
            console.error('Erro na resposta da requisição:', error.response.status);
            return res.status(500).json({ error: 'Erro ao consultar o site da operadora. Por favor, tente novamente mais tarde.' });
        } else if (error.request) {
            console.error('Erro na requisição, sem resposta:', error.request);
            return res.status(500).json({ error: 'Erro ao enviar a requisição para o site. Verifique a conexão de rede.' });
        } else {
            console.error('Erro desconhecido:', error.message);
            return res.status(500).json({ error: 'Erro inesperado ao consultar a operadora.' });
        }
    }
});
// Endpoint para baixar imagem do Pinterest
router.get('/pinimg', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'A URL do Pinterest é obrigatória' });
    }

    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        // Extraindo a URL da imagem (ajuste conforme necessário)
        const imageUrl = $('img[src$=".jpg"]').attr('src');

        if (!imageUrl) {
            return res.status(404).json({ error: 'Imagem não encontrada' });
        }

        return res.json({
            imageUrl,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});

// Endpoint para baixar vídeo do Pinterest
router.get('/pinvid', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'A URL do Pinterest é obrigatória' });
    }

    try {
        console.log(`Requisitando a URL: ${url}`);
        const response = await axios.get(url);
        console.log('Requisição bem-sucedida, status:', response.status);

        const html = response.data;
        const $ = cheerio.load(html);

        // Tentar extrair a URL do vídeo .m3u8
        const videoM3U8Url = $('video').attr('src');
        console.log('Tentando encontrar a URL do vídeo .m3u8...');

        if (!videoM3U8Url) {
            console.error('Vídeo .m3u8 não encontrado na página');
            return res.status(404).json({ error: 'Vídeo não encontrado' });
        }

        console.log('URL do vídeo .m3u8 encontrada:', videoM3U8Url);

        // Aqui, você pode usar a URL .m3u8 para streamar ou baixar o vídeo.
        // Para simplificação, você pode retornar a URL
        return res.json({
            videoM3U8Url,
        });
    } catch (error) {
        console.error('Erro ao processar a solicitação:', error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});



// Endpoint para baixar imagem do Pinterest
router.get('/pinimagem', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'A URL do Pinterest é obrigatória' });
    }

    try {
        console.log(`Requisitando a URL: ${url}`);
        const response = await axios.get(url);
        console.log('Requisição bem-sucedida, status:', response.status);

        const html = response.data;
        const $ = cheerio.load(html);

        // Extraindo a URL da imagem
        const pinImageUrl = $('img').attr('src');
        console.log('Tentando encontrar a URL da imagem...');

        if (!pinImageUrl) {
            console.error('Imagem não encontrada na página');
            return res.status(404).json({ error: 'Imagem não encontrada' });
        }

        console.log('URL da imagem encontrada:', pinImageUrl);

        // Enviando a imagem diretamente
        const imageResponse = await axios.get(pinImageUrl, { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg'); // Defina o tipo de conteúdo conforme necessário
        return res.send(imageResponse.data); // Enviando a imagem

    } catch (error) {
        console.error('Erro ao processar a solicitação:', error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});


// Endpoint para redirecionar para o vídeo do Pinterest
router.get('/pinvideo', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'A URL do Pinterest é obrigatória' });
    }

    try {
        console.log(`Requisitando a URL: ${url}`);
        const response = await axios.get(url);
        console.log('Requisição bem-sucedida, status:', response.status);

        const html = response.data;
        const $ = cheerio.load(html);

        // Extraindo a URL do vídeo .m3u8
        const pinVideoUrl = $('video').attr('src');
        console.log('Tentando encontrar a URL do vídeo .m3u8...');

        if (!pinVideoUrl) {
            console.error('Vídeo .m3u8 não encontrado na página');
            return res.status(404).json({ error: 'Vídeo não encontrado' });
        }

        console.log('URL do vídeo .m3u8 encontrada:', pinVideoUrl);

        // Redirecionando para a URL do vídeo .m3u8
        return res.redirect(pinVideoUrl);

    } catch (error) {
        console.error('Erro ao processar a solicitação:', error.message);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});
// Rota para buscar o HTML
router.get('/verhtml', async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.status(400).json({ error: 'A URL é necessária.' });
    }

    try {
        console.log(`Buscando HTML da URL: ${url}`);
        const response = await axios.get(url);
        const html = response.data;

        console.log(`HTML obtido com sucesso da URL: ${url}`);
        return res.json({ html });
    } catch (error) {
        console.error(`Erro ao buscar HTML: ${error.message}`);
        return res.status(500).json({ error: 'Erro ao buscar o HTML.' });
    }
});

// Rota para obter notícias do Fortaleza
router.get('/fortaleza', async (req, res) => {
    try {
        const news = await fetchFortalezaNews();
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar notícias.' });
    }
});

router.get('/fluminense', async (req, res) => {
    try {
        const noticias = await buscarNoticiasFluminense();
        res.json(noticias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/ceara', async (req, res) => {
    const url = 'https://www.cearasc.com/noticia/';

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const noticias = [];
        
        // Seleciona cada notícia e extrai as informações
        $('.noticia-item').each((index, element) => {
            const titulo = $(element).find('.titulo-noticia').text().trim();
            const link = 'https://www.cearasc.com' + $(element).attr('href');
            const dataNoticia = $(element).find('.data-noticia').text().trim();
            const categoria = $(element).find('.categoria-noticia').text().trim();
            const chamada = $(element).find('.chamada-lead').text().trim();
            const imgSrc = $(element).find('img').attr('src');

            noticias.push({
                titulo,
                link,
                dataNoticia,
                categoria,
                chamada,
                imgSrc: imgSrc ? `https://www.cearasc.com/${imgSrc}` : null
            });
        });

        res.json(noticias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar notícias do Ceará.' });
    }
});

router.get('/gremio', async (req, res) => {
    const url = 'https://gremio.net/noticias';

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const noticias = [];

        // Seleciona a notícia principal
        $('.noticia-grande').each((index, element) => {
            const titulo = $(element).find('h1').text().trim();
            const descricao = $(element).find('h2').text().trim();
            const dataNoticia = $(element).find('small').text().trim();
            const link = $(element).find('a.btn-primary').attr('href');
            const imgBackground = $(element).find('.col-md-5 div').css('background-image');

            const imgUrl = imgBackground
                ? imgBackground.slice(5, -2) // Remove 'url(' e ')'
                : null;

            noticias.push({
                titulo,
                descricao,
                dataNoticia,
                link: link ? `https://gremio.net${link}` : null,
                imgUrl: imgUrl ? `https://gremio.net/${imgUrl}` : null,
            });
        });

        res.json(noticias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar notícias do Grêmio.' });
    }
});


router.get('/internacional', async (req, res) => {
    const url = 'https://www.internacional.com.br/noticias';

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const noticias = [];

        // Seleciona as notícias da página
        $('li a.cards__BaseCard-l4vh3g-0').each((index, element) => {
            const titulo = $(element).find('h2.cards__Title-l4vh3g-1').text().trim();
            const categoria = $(element).find('span.cards__Tag-l4vh3g-2').text().trim();
            const dataNoticia = $(element).find('small.cards__Caption-l4vh3g-3 time').text().trim();
            const link = $(element).attr('href');
            const imgUrl = $(element).find('figure.cards__Thumb-l4vh3g-5').attr('src');

            noticias.push({
                titulo,
                categoria,
                dataNoticia,
                link: link ? `https://www.internacional.com.br${link}` : null,
                imgUrl: imgUrl || null,
            });
        });

        res.json(noticias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar notícias do Internacional.' });
    }
});

router.get('/atleticomg', async (req, res) => {
    const url = 'https://atletico.com.br/noticias/futebol/';

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const noticias = [];

        // Seleciona as notícias da página
        $('.arquivo-noticias-noticia a.noticia-card').each((index, element) => {
            const titulo = $(element).find('h2.noticia-card-titulo').text().trim();
            const categoria = $(element).find('span.noticia-card-versal').text().trim();
            const descricao = $(element).find('h3.noticia-card-chamada').text().trim();
            const link = $(element).attr('href');
            const imgUrl = $(element).find('div.noticia-card-thumb img').attr('src');

            noticias.push({
                titulo,
                categoria,
                descricao,
                link: link ? link.startsWith('http') ? link : `https://atletico.com.br${link}` : null,
                imgUrl: imgUrl ? `https://atletico.com.br/${imgUrl}` : null,
            });
        });

        res.json(noticias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar notícias do Atlético Mineiro.' });
    }
});


router.get('/times', async (req, res) => {
    const clube = req.query.clube; // Obtém o nome do clube da consulta
    if (!clube) {
        return res.status(400).json({ error: 'O parâmetro clube é obrigatório.' });
    }

    const url = `https://www.uol.com.br/esporte/futebol/times/${clube}/`;
    
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        
        // Extraindo informações (ajuste conforme necessário)
        const newsItems = [];
        $('.thumbnails-item').each((index, element) => {
            const title = $(element).find('.thumb-title').text();
            const link = $(element).find('a').attr('href');
            const date = $(element).find('.thumb-date').text();
            const imgSrc = $(element).find('img').attr('data-src');

            newsItems.push({ title, link, date, imgSrc });
        });

        return res.json(newsItems);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao buscar informações do clube.' });
    }
});


router.get('/botafogo', async (req, res) => {
    const url = 'https://www.uol.com.br/esporte/futebol/times/botafogo/';
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        
        const news = [];

        $('.thumbnails-item').each((index, element) => {
            const title = $(element).find('.thumb-title').text().trim();
            const date = $(element).find('.thumb-date').text().trim();
            const link = $(element).find('a').attr('href');
            const imageUrl = $(element).find('img').data('src');

            news.push({ title, date, link, imageUrl });
        });

        res.json(news); // Retorna as notícias em formato JSON
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Failed to fetch news' }); // Retorna um erro 500 em caso de falha
    }
});

router.get('/cruzeiro', async (req, res) => {
    const url = 'https://www.uol.com.br/esporte/futebol/times/cruzeiro/';

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const noticias = [];

        // Seleciona as notícias da página
        $('.thumbnails-item .thumbnails-wrapper a').each((index, element) => {
            const titulo = $(element).find('h3.thumb-title').text().trim();
            const data = $(element).find('time.thumb-date').text().trim();
            const link = $(element).attr('href');
            const imgUrl = $(element).find('.thumb-image img').data('src');

            noticias.push({
                titulo,
                data,
                link: link ? link.startsWith('http') ? link : `https://www.uol.com.br${link}` : null,
                imgUrl: imgUrl ? imgUrl : null,
            });
        });

        res.json(noticias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar notícias do Cruzeiro.' });
    }
});


// Rota GET para obter notícias do Corinthians
router.get('/corinthians', async (req, res) => {
    try {
        const noticias = await fetchCorinthiansNews(); // Chama a função para buscar as notícias
        res.json(noticias); // Retorna as notícias como resposta JSON
    } catch (error) {
        console.error('Erro ao buscar notícias do Corinthians:', error);
        res.status(500).json({ message: 'Erro ao buscar notícias do Corinthians' }); // Retorna um erro se ocorrer
    }
});


router.get('/ceara', async (req, res) => {
    const url = 'https://www.cearasc.com/noticia/';

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const noticias = [];
        
        // Seleciona cada notícia e extrai as informações
        $('.noticia-item').each((index, element) => {
            const titulo = $(element).find('.titulo-noticia').text().trim();
            const link = 'https://www.cearasc.com' + $(element).attr('href');
            const dataNoticia = $(element).find('.data-noticia').text().trim();
            const categoria = $(element).find('.categoria-noticia').text().trim();
            const chamada = $(element).find('.chamada-lead').text().trim();
            const imgSrc = $(element).find('img').attr('src');

            noticias.push({
                titulo,
                link,
                dataNoticia,
                categoria,
                chamada,
                imgSrc: imgSrc ? `https://www.cearasc.com/${imgSrc}` : null
            });
        });

        res.json(noticias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar notícias do Ceará.' });
    }
});


// Rota GET para buscar notícias do Flamengo
router.get('/flamengo', async (req, res) => {
    try {
        const noticias = await buscarNoticiasFlamengo();
        res.json(noticias); // Retorna as notícias em formato JSON
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar notícias do Flamengo' });
    }
});

router.get('/santos', async (req, res) => {
    try {
        const noticias = await buscarNoticiasSantos();
        res.json(noticias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Rota GET para buscar notícias do São Paulo FC
router.get('/saopaulo', async (req, res) => {
    try {
        const noticias = await fetchSaoPauloNews();
        res.json(noticias);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar notícias' });
    }
});


// Rota para obter o HTML de um site
router.get('/verhtml', async (req, res) => {
    const url = 'https://fortaleza1918.com.br/central-de-midia/';

    try {
        console.log(`Buscando HTML da URL: ${url}`);
        const response = await axios.get(url);
        const html = response.data;

        console.log(`HTML obtido com sucesso da URL: ${url}`);
        
        // Retornando o HTML como JSON
        res.json({ html });
    } catch (error) {
        console.error(`Erro ao buscar HTML da URL: ${url}`, error);
        res.status(500).json({ error: 'Erro ao buscar HTML' });
    }
});

// Rota para obter notícias do G1
router.get('/g1', async (req, res) => {
  try {
    const response = await G1();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar notícias do G1' });
  }
});
router.get('/folha', async (req, res) => {
    const url = 'https://www1.folha.uol.com.br/';
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        
        const news = [];

        // Captura as notícias mais lidas
        $('.c-most-read__list li').each((index, element) => {
            const link = $(element).find('a').attr('href');
            const title = $(element).text().trim();

            news.push({ title, link });
        });

        // Captura as notícias de cultura
        $('.c-section-title').each((index, element) => {
            const category = $(element).text().trim();
            $(element).nextAll('.c-headline').each((_, newsElement) => {
                const newsLink = $(newsElement).find('a').attr('href');
                const newsTitle = $(newsElement).find('.c-headline__title').text().trim();

                news.push({ title: newsTitle, link: newsLink, category });
            });
        });

        res.json(news); // Retorna as notícias em formato JSON
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Failed to fetch news' }); // Retorna um erro 500 em caso de falha
    }
});


router.get('/transcrever/audio', async (req, res) => {
    const { audio } = req.query;
    if (!audio) {
        return res.status(400).json({ error: 'Parâmetro "audio" é obrigatório' });
    }

    try {
        const response = await axios.get(`https://api.nexfuture.com.br/api/outros/aspose-transcribe?url=${audio}&diarization=true&is_multilingual=false`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao transcrever áudio', details: error.message });
    }
});

router.get('/transcrever/video', async (req, res) => {
    const { video } = req.query;
    if (!video) {
        return res.status(400).json({ error: 'Parâmetro "video" é obrigatório' });
    }

    try {
        const response = await axios.get(`https://api.nexfuture.com.br/api/outros/transcrever/youtube?query=${video}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao transcrever vídeo', details: error.message });
    }
});


router.get('/transcreve', async (req, res) => {
    const apiKey = '46343532cb9a48aba921a1404a81cfe6'; // Sua chave API da AssemblyAI
    const audioUrl = req.query.url; // Obtém a URL do áudio a partir dos parâmetros da query

    if (!audioUrl) {
        return res.status(400).json({ error: 'A URL do áudio é necessária como parâmetro.' });
    }

    try {
        // Fazer a requisição para transcrição
        const transcriptResponse = await axios.post('https://api.assemblyai.com/v2/transcript', {
            audio_url: audioUrl
        }, {
            headers: {
                'authorization': apiKey
            }
        });

        const transcriptId = transcriptResponse.data.id;

        // Verificando o status da transcrição
        let isCompleted = false;
        let transcriptText = '';

        // Loop até que a transcrição esteja completa
        while (!isCompleted) {
            // Esperar um segundo antes de verificar novamente
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Verificar o status da transcrição
            const statusResponse = await axios.get(`https://api.assemblyai.com/v2/transcript/${transcriptId}`, {
                headers: {
                    'authorization': apiKey
                }
            });

            if (statusResponse.data.status === 'completed') {
                isCompleted = true;
                transcriptText = statusResponse.data.text;
            } else if (statusResponse.data.status === 'failed') {
                return res.status(500).send('Erro na transcrição do áudio.');
            }
        }

        // Retornar o texto transcrito
        res.send(transcriptText);

    } catch (error) {
        res.status(500).json({ error: 'Erro ao transcrever o áudio.' });
    }
});


router.get('/oglobo', async (req, res) => {
    const url = 'https://oglobo.globo.com/';
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        
        const news = [];

        // Captura as colunas
        $('.franja-colunistas__item').each((index, element) => {
            const title = $(element).find('.franja-colunistas__title a').text().trim();
            const link = $(element).find('.franja-colunistas__title a').attr('href');
            const author = $(element).find('.franja-colunistas__hat').text().trim();

            news.push({ title, link, author });
        });

        // Captura as manchetes principais
        $('.container-sete-destaques__manchete-principal-content').each((index, element) => {
            const title = $(element).find('.container-sete-destaques__title').text().trim();
            const link = $(element).find('.container-sete-destaques__url').attr('href');
            const subtitle = $(element).find('.container-sete-destaques__subtitle').text().trim();

            news.push({ title, link, subtitle });
        });

        res.json(news); // Retorna as notícias em formato JSON
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Failed to fetch news' }); // Retorna um erro 500 em caso de falha
    }
});


router.get('/metropoles', async (req, res) => {
    const url = 'https://www.metropoles.com/';
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        
        const news = [];

        // Seleciona as notícias principais
        $('.NoticiaWrapper__Article-sc-1vgx9gu-1').each((index, element) => {
            const title = $(element).find('h4.noticia__titulo a').text().trim();
            const link = $(element).find('h4.noticia__titulo a').attr('href');
            const imageUrl = $(element).find('img.bloco-noticia__figure-imagem').attr('src');
            const category = $(element).find('.noticia__categoria a').text().trim();

            news.push({ title, link, imageUrl, category });
        });

        // Para as notícias relacionadas (se houver)
        $('.item-noticiaRelacionada').each((index, element) => {
            const relatedTitle = $(element).find('h3.eFqcJE a').text().trim();
            const relatedLink = $(element).find('h3.eFqcJE a').attr('href');

            news.push({ title: relatedTitle, link: relatedLink });
        });

        res.json(news); // Retorna as notícias em formato JSON
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Failed to fetch news' }); // Retorna um erro 500 em caso de falha
    }
});

// Rota para obter notícias do Poder360
router.get('/poder360', async (req, res) => {
  try {
    const response = await Poder360();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar notícias do Poder360' });
  }
});

// Rota para obter notícias da Jovem Pan
router.get('/jovempan', async (req, res) => {
  try {
    const response = await JovemPan();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar notícias da Jovem Pan' });
  }
});

// Rota para obter notícias do UOL
router.get('/uol', async (req, res) => {
  try {
    const response = await Uol();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar notícias do UOL' });
  }
});

// Rota para obter notícias da CNN Brasil
router.get('/cnnbrasil', async (req, res) => {
  try {
    const response = await CNNBrasil();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar notícias da CNN Brasil' });
  }
});

// Rota para obter notícias do Estadão
router.get('/estadao', async (req, res) => {
  try {
    const response = await Estadao();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar notícias do Estadão' });
  }
});

// Rota para obter notícias do Terra
router.get('/terra', async (req, res) => {
  try {
    const response = await Terra();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar notícias do Terra' });
  }
});

// Rota para obter notícias da Exame
router.get('/exame', async (req, res) => {
  try {
    const response = await Exame();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar notícias da Exame' });
  }
});

// Rota para obter notícias do Notícias ao Minuto
router.get('/aominuto', async (req, res) => {
  try {
    const response = await NoticiasAoMinuto();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar notícias do Notícias ao Minuto' });
  }
});

// Rota para obter notícias da Veja Abril
router.get('/vejaabril', async (req, res) => {
  try {
    const response = await VejaAbril();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar notícias da Veja Abril' });
  }
});

// Rota para obter notícias da BBC
router.get('/bbc', async (req, res) => {
  try {
    const response = await BBC();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar notícias da BBC' });
  }
});

// Rota para obter notícias da A Gazeta
router.get('/agazeta', async (req, res) => {
  try {
    const response = await AGazeta();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar notícias da A Gazeta' });
  }
});

// Rota para obter notícias do Vasco
router.get('/vasco', async (req, res) => {
  try {
    const response = await Vasco();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar notícias do Vasco' });
  }
});

// Rota para obter todas as notícias
router.get('/todas-noticias', async (req, res) => {
  try {
    const response = await TodaNoticias();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error: 'Erro ao buscar todas as notícias' });
  }
});
router.get('/tiktok', async (req, res) => {
  const query = req.query.query;
  try {
    const result = await tiktok2(query);
    res.json(result);
  } catch (error) {
    res.status(500).send('Error fetching TikTok data');
  }
});

// Rota para ChatGPT 
router.get('/chatgpt', async (req, res) => {
  const you_qus = req.query.texto; // Esperando um parâmetro de consulta com 'texto'
  
  if (!you_qus) {
    return res.status(400).json({ error: 'Texto não fornecido' });
  }
  
  console.log('Recebido pedido para ChatGPT com texto:', you_qus); // Log do texto recebido
  
  try {
    const result = await ChatGpt(you_qus);
    res.json(result); // Retorna o resultado como JSON
  } catch (error) {
    console.error(error); // Log do erro para depuração
    res.status(500).json({ error: 'Erro ao buscar dados do ChatGPT' });
  }
});
router.get('/facebook', async (req, res) => {
  const link = req.query.link;
  try {
    const result = await FacebookMp4(link);
    res.json(result);
  } catch (error) {
    res.status(500).send('Error fetching Facebook data');
  }
});


//+18
router.get('/amadorvideo', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 41);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AmadorVideo/${rnd}.mp4`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('.mp4').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/egrilvideo', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 14);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/EgrilVideo/%20${rnd}.mp4`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('mp4').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/alinefarias', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 65);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlineFaria/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/alineFox', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 60);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlineFox/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/alyciaribeiro', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 28);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlyciaRibeiro/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/amiichan', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 30);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Amiichan/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/aninhalopes', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 30);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AninhaLopes/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/babymatoso', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 36);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BabyMatoso/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/belledelphine', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 31);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BelleDelphine/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/brendatrindade', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 25);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BrendaTrindade/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/camibrito', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 30);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/CamiBrito/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/cclowniac', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 29);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Cclowniac/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/fehgalvao', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 32);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/FehGalvao/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/giovanna', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 34);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/GiovannaCampomar/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/isadora', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 30);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/ISADORA%20MARTINEZ/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/Isawaifu', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 21);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/IsaWaifu/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/laynuniz', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 25);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/LayNuniz/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/leticiashirayuki', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 28);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/LeticiaShirayuki/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/marinamui', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 27);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MarinaMui/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/marukarv', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 40);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MaruKarv/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/mcprincesa', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 32);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/McPrincesa/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/me1adinha', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 33);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Me1adinha/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/nath', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 23);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/NathBisterço/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/negabarbie', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 21);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/NegaBarbie/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/onlyfansvideo', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 47);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/OnlyfansVideo/%20${rnd}.mp4`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('mp4').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/polonesa', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 28);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/PolonesaDoHype/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/pornofoto', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 42);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/PornoFoto/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/pornovideo', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 45);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlineFaria/${rnd}.mp4`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('mp4').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/ruterocha', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 30);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/RuteRocha/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/vitacelestine', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 30);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/VitaCelestine/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/carniello', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 29);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/carniello/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/egril', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 36);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/egril/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/netersg', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 30);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/netersg/%20${rnd}.jpg`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('jpg').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
//gerar imagem by luan 

// Rota para gerar a imagem usando um parâmetro de consulta
router.get('/gerar-imagem', async (req, res) => {
    const { texto } = req.query; // texto que será enviado para a API da Hugging Face

    if (!texto) {
        return res.status(400).json({ error: 'Texto é obrigatório.' });
    }
    
    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev',
            { inputs: texto },
            {
                headers: {
                    'Authorization': 'Bearer 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',
                    'Content-Type': 'application/json'
                },
                responseType: 'arraybuffer' // Para obter a imagem como buffer
            }
        );

        // Cria um nome para o arquivo e o caminho
        const fileName = `imagem-${Date.now()}.png`;
        const filePath = path.join(__dirname, fileName);

        // Salva a imagem no servidor
        fs.writeFileSync(filePath, response.data);

        // Envia a imagem para o usuário
        res.download(filePath, fileName, (err) => {
            if (err) {
                console.error('Erro ao enviar a imagem:', err);
                res.status(500).json({ error: 'Erro ao enviar a imagem' });
            }

            // Remove a imagem do servidor após o download
            fs.unlinkSync(filePath);
        });
    } catch (error) {
        console.error('Erro ao chamar a API:', error.message);
        res.status(500).json({ error: 'Erro ao gerar a imagem' });
    }
});

//fim 

// play e playvideo by luan vulgo come primas 

const got = require('got');
const ytsr = require('yt-search');

// Cabeçalhos padrão
const DEFAULT_HEADERS = {};

// Função para buscar o ID do vídeo
async function getVideoId(videoName) {
    const { videos } = await ytsr(videoName);
    if (videos.length === 0) return null;
    return videos[0]?.videoId; // Retorna o primeiro videoId encontrado
}

// Função para análise do vídeo
async function youtubedl(url) {
    const form = {
        k_query: url,
        k_page: 'home',
        hl: 'en',
        q_auto: 0
    };

    try {
        const data = await got.post('https://www.y2mate.com/mates/analyzeV2/ajax', {
            headers: {
                ...DEFAULT_HEADERS,
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                cookie: '_ga=GA1.1.1058493269.1720585210; _ga_PSRPB96YVC=GS1.1.1720585209.1.1.1720585486.0.0.0',
                origin: 'https://www.y2mate.com'
            },
            form
        }).json();

        return {
            id: data.vid,
            title: data.title,
            thumbnail: `https://i.ytimg.com/vi/${data.vid}/0.jpg`,
            links: data.links
        };
    } catch (error) {
        console.error('Erro ao analisar vídeo:', error);
        throw new Error('Erro ao obter informações do vídeo.');
    }
}

// Função para converter o vídeo
async function convert(vid, k) {
    const form = { vid, k };
    try {
        const data = await got.post('https://www.y2mate.com/mates/convertV2/index', {
            headers: {
                ...DEFAULT_HEADERS,
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                cookie: '_ga=GA1.1.1058493269.1720585210; _ga_PSRPB96YVC=GS1.1.1720585209.1.1.1720585486.0.0.0',
                origin: 'https://www.y2mate.com'
            },
            form
        }).json();

        return data.dlink;
    } catch (error) {
        console.error('Erro ao converter vídeo:', error);
        throw new Error('Erro ao converter o vídeo.');
    }
}
router.get('/spotify2', async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).json({ status: false, message: "O nome da música é obrigatório!" });
        }

        // Busca a música pelo nome
        const searchResult = await searching(name);
        if (!searchResult.status) {
            return res.status(404).json(searchResult);
        }

        // Pega o primeiro resultado e gera o link de download
        const trackUrl = searchResult.data[0].url;
        const downloadResult = await spotifydl(trackUrl);

        // Força o download do áudio
        res.setHeader('Content-Type', 'audio/mpeg');
        res.setHeader('Content-Disposition', `attachment; filename="${name}.mp3"`);
        res.redirect(downloadResult.download); // Redireciona o usuário para o link de download direto

    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
});
//ytmp3 pela ulr
// Endpoint para baixar áudio a partir de uma URL
router.get('/linkmp3-v4', async (req, res) => {
    const { query } = req;
    const audioUrl = query.url; // Exemplo: /ytmp3?url=https://youtu.be/nome_do_audio

    if (!audioUrl) {
        return res.status(400).json({ error: 'A URL do áudio é obrigatória' });
    }

    try {
        const apiUrl = `https://api.giftedtech.web.id/api/download/dlmp3q?apikey=gifted&quality=128&url=${encodeURIComponent(audioUrl)}`;

        // Requisição à API para baixar o áudio
        const response = await axios.get(apiUrl);

        if (response.data.success) {
            const downloadUrl = response.data.result.download_url;

            // Redirecionar para o link de download do áudio
            return res.redirect(downloadUrl);
        } else {
            return res.status(500).json({ error: 'Erro ao baixar o áudio' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});

// Endpoint para baixar vídeo a partir de uma URL
router.get('/linkmp46', async (req, res) => {
    const { query } = req;
    const videoUrl = query.url; // Exemplo: /ytmp4?url=https://youtu.be/nome_do_video

    if (!videoUrl) {
        return res.status(400).json({ error: 'A URL do vídeo é obrigatória' });
    }

    try {
        const apiUrl = `https://api.giftedtech.web.id/api/download/dlmp4q?apikey=gifted&quality=128&url=${encodeURIComponent(videoUrl)}`;

        // Requisição à API para baixar o vídeo
        const response = await axios.get(apiUrl);

        if (response.data.success) {
            const downloadUrl = response.data.result.download_url;

            // Redirecionar para o link de download do vídeo
            return res.redirect(downloadUrl);
        } else {
            return res.status(500).json({ error: 'Erro ao baixar o vídeo' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});

//play para baixar musica pelo nome

router.get('/musica2', async (req, res) => {
    const { query } = req; // O nome da música será passado como parâmetro de consulta
    const musicName = query.name; // Exemplo: /play?nome=nome_da_musica

    if (!musicName) {
        return res.status(400).json({ error: 'Nome da música é obrigatório' });
    }

    try {
        // Buscar o vídeo no YouTube pelo nome da música
        const searchResults = await search(musicName);
        
        if (!searchResults || searchResults.videos.length === 0) {
            return res.status(404).json({ error: 'Nenhum vídeo encontrado' });
        }

        // Pegar o primeiro vídeo da lista de resultados
        const videoId = searchResults.videos[0].videoId; // Obtém o ID do vídeo
        const apiUrl = `https://api.giftedtech.web.id/api/download/dlmp3q?apikey=gifted&quality=128&url=https://youtu.be/${videoId}`;

        // Requisição à API para baixar o áudio
        const response = await axios.get(apiUrl);

        if (response.data.success) {
            const downloadUrl = response.data.result.download_url;

            // Redirecionar para o link de download
            return res.redirect(downloadUrl);
        } else {
            return res.status(500).json({ error: 'Erro ao baixar a música' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});

//rota para baixar video pelo nome
router.get('/clipe2', async (req, res) => {
    const { query } = req; // O nome da música será passado como parâmetro de consulta
    const musicName = query.name; // Exemplo: /playvideo?nome=nome_da_musica

    if (!musicName) {
        return res.status(400).json({ error: 'Nome da música é obrigatório' });
    }

    try {
        // Buscar o vídeo no YouTube pelo nome da música
        const searchResults = await search(musicName);
        
        if (!searchResults || searchResults.videos.length === 0) {
            return res.status(404).json({ error: 'Nenhum vídeo encontrado' });
        }

        // Pegar o primeiro vídeo da lista de resultados
        const videoId = searchResults.videos[0].videoId; // Obtém o ID do vídeo
        const apiUrl = `https://api.giftedtech.web.id/api/download/dlmp3q?apikey=gifted&quality=128&url=https://youtu.be/${videoId}`;

        // Requisição à API para baixar o vídeo
        const response = await axios.get(apiUrl);

        if (response.data.success) {
            const downloadUrl = response.data.result.download_url;

            // Redirecionar para o link de download
            return res.redirect(downloadUrl);
        } else {
            return res.status(500).json({ error: 'Erro ao baixar o vídeo' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});
//fim
// Rota para buscar e converter vídeo para MP3 e enviar como stream
router.get('/musica4', async (req, res) => {
    const videoName = req.query.name;

    console.log(`Recebido pedido para download do vídeo: ${videoName}`);

    try {
        const videoId = await getVideoId(videoName);
        if (!videoId) {
            console.log('Vídeo não encontrado');
            return res.status(404).send('Vídeo não encontrado');
        }

        const videoData = await youtubedl(`https://www.youtube.com/watch?v=${videoId}`);
        if (!videoData.links.mp3 || !videoData.links.mp3['mp3128']) {
            console.log('Link de MP3 não encontrado');
            return res.status(404).send('Link de MP3 não encontrado');
        }

        const k = videoData.links.mp3['mp3128'].k; // Captura a chave 'k' para a conversão
        const downloadLink = await convert(videoData.id, k);

        // Adiciona `+` ao final do link e realiza o download do MP3, enviando como stream
        const response = await got.stream(`${downloadLink}+`);
        res.setHeader('Content-Type', 'audio/mpeg'); // Ajuste o tipo de conteúdo conforme necessário
        response.pipe(res);

    } catch (error) {
        console.error('Erro no fluxo de download:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

router.get('/clipe4', async (req, res) => {
    const videoName = req.query.name;

    console.log(`Recebido pedido para download do clipe: ${videoName}`);

    try {
        const videoId = await getVideoId(videoName);
        if (!videoId) {
            console.log('Vídeo não encontrado');
            return res.status(404).send('Vídeo não encontrado');
        }

        console.log(`ID do vídeo encontrado: ${videoId}`);
        const videoData = await youtubedl(`https://www.youtube.com/watch?v=${videoId}`);
        
        console.log('Dados do vídeo:', videoData);
        const mp4Links = videoData.links.mp4;

        // Verifica os links MP4 e tenta encontrar a melhor qualidade com chave 'k'
        const melhoresQualidades = Object.keys(mp4Links).filter(key => mp4Links[key].k).map(Number).sort((a, b) => b - a);
        let selectedQuality = melhoresQualidades[0];

        // Caso a melhor qualidade não tenha chave 'k', tenta a segunda melhor ou usa o 'auto'
        if (!selectedQuality || !mp4Links[selectedQuality].k) {
            console.log('Melhor qualidade não tem chave "k", tentando a segunda melhor qualidade...');
            const secondBestQuality = melhoresQualidades[1] || 'auto'; // Se não houver segunda qualidade, vai para "auto"
            selectedQuality = secondBestQuality;
        }

        console.log(`Melhor qualidade selecionada: ${selectedQuality} - k: ${mp4Links[selectedQuality].k}`);

        // Obtém o link de conversão
        const k = mp4Links[selectedQuality].k;
        if (!k) {
            console.log('Chave de conversão não encontrada');
            return res.status(404).send('Chave de conversão não encontrada');
        }

        const downloadLink = await convert(videoData.id, k);

        console.log('Link de download:', downloadLink);

        // Adiciona `+` ao final do link e realiza o download do MP4, enviando como stream
        const response = await got.stream(`${downloadLink}+`);
        res.setHeader('Content-Type', 'video/mp4'); // Ajuste o tipo de conteúdo conforme necessário
        response.pipe(res);

    } catch (error) {
        console.error('Erro ao baixar vídeo:', error);
        res.status(500).send('Erro interno do servidor');
    }
});


// Rota para baixar MP3 com qualidade automática (melhor disponível) e enviar o arquivo
router.get('/linkmp3-v5', async (req, res) => {
    const url = req.query.url;

    try {
        const videoData = await youtubedl(url);
        if (!videoData.links.mp3 || Object.keys(videoData.links.mp3).length === 0) {
            console.log('Link de MP3 não encontrado');
            return res.status(404).send('Link de MP3 não encontrado');
        }

        console.log('Links MP3 encontrados:', videoData.links.mp3);
        
        // Verifica os links MP3 e tenta encontrar a melhor qualidade com chave 'k'
        const melhoresQualidades = Object.keys(videoData.links.mp3).filter(key => videoData.links.mp3[key].k).map(Number).sort((a, b) => b - a);
        let selectedQuality = melhoresQualidades[0];

        // Caso a melhor qualidade não tenha chave 'k', tenta a segunda melhor ou usa 'auto'
        if (!selectedQuality || !videoData.links.mp3[selectedQuality].k) {
            console.log('Melhor qualidade não tem chave "k", tentando a segunda melhor qualidade...');
            const secondBestQuality = melhoresQualidades[1] || 'auto'; // Se não houver segunda qualidade, vai para "auto"
            selectedQuality = secondBestQuality;
        }

        console.log(`Qualidade selecionada: ${selectedQuality} - k: ${videoData.links.mp3[selectedQuality].k}`);

        // Obtém o link de conversão
        const k = videoData.links.mp3[selectedQuality].k;
        if (!k) {
            console.log('Chave de conversão não encontrada');
            return res.status(404).send('Chave de conversão não encontrada');
        }

        const downloadLink = await convert(videoData.id, k);

        console.log('Link de download:', downloadLink);

        // Realiza o download do MP3 e envia como stream
        const response = await got.stream(`${downloadLink}+`);
        res.setHeader('Content-Type', 'audio/mp3'); // Ajuste o tipo de conteúdo para MP3
        response.pipe(res);

    } catch (error) {
        console.error('Erro ao baixar MP3:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Rota para baixar MP4 com qualidade automática (melhor disponível)
router.get('/linkmp4-v5', async (req, res) => {
    const url = req.query.url;

    try {
        const videoData = await youtubedl(url);
        if (!videoData.links.mp4 || Object.keys(videoData.links.mp4).length === 0) {
            console.log('Link de MP4 não encontrado');
            return res.status(404).send('Link de MP4 não encontrado');
        }

        console.log('Links MP4 encontrados:', videoData.links.mp4);

        // Verifica os links MP4 e tenta encontrar a melhor qualidade com chave 'k'
        const melhoresQualidades = Object.keys(videoData.links.mp4).filter(key => videoData.links.mp4[key].k).map(Number).sort((a, b) => b - a);
        let selectedQuality = melhoresQualidades[0];

        // Caso a melhor qualidade não tenha chave 'k', tenta a segunda melhor ou usa 'auto'
        if (!selectedQuality || !videoData.links.mp4[selectedQuality].k) {
            console.log('Melhor qualidade não tem chave "k", tentando a segunda melhor qualidade...');
            const secondBestQuality = melhoresQualidades[1] || 'auto'; // Se não houver segunda qualidade, vai para "auto"
            selectedQuality = secondBestQuality;
        }

        console.log(`Qualidade selecionada: ${selectedQuality} - k: ${videoData.links.mp4[selectedQuality].k}`);

        // Obtém o link de conversão
        const k = videoData.links.mp4[selectedQuality].k;
        if (!k) {
            console.log('Chave de conversão não encontrada');
            return res.status(404).send('Chave de conversão não encontrada');
        }

        const downloadLink = await convert(videoData.id, k);

        console.log('Link de download:', downloadLink);

        // Adiciona `+` ao final do link e realiza o download do MP4, enviando como stream
        const response = await got.stream(`${downloadLink}+`);
        res.setHeader('Content-Type', 'video/mp4'); // Ajuste o tipo de conteúdo conforme necessário
        response.pipe(res);

    } catch (error) {
        console.error('Erro ao baixar MP4:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

//fim 
// Função auxiliar para obter o buffer da imagem
async function getBuffer(url) {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    return response.data;
}

// Função auxiliar para enviar imagem e responder com a mensagem apropriada
async function sendImage(req, res, url, caption) {
    try {
        const buffer = await getBuffer(url);
        res.set('Content-Type', 'image/jpeg');
        res.send(buffer);
        // Simular o envio de uma mensagem de resposta, você pode ajustar isso conforme sua lógica de aplicação
        // Exemplo: res.send(caption);
    } catch (error) {
        res.status(500).send('Erro ao gerar a imagem.');
    }
}


router.get('/figurinhas', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 1899);
        const imageUrl = `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig%20(${rnd}).webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/figurinhas2', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 99);
        const imageUrl = `https://raw.githubusercontent.com/badDevelopper/figus2/refs/heads/main/fig/f%20(${rnd}).webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/ping', async (req, res) => {
    const startTime = Date.now(); // Captura o tempo no início da requisição

    // Simula um tempo de processamento, mas sem atraso artificial
    const responseTime = Date.now() - startTime; // Calcula o tempo de resposta em milissegundos

    console.log(`Tempo de resposta calculado: ${responseTime}ms`); // Log do tempo de resposta

    // Garante que o valor exibido nunca seja zero
    const displayTime = responseTime > 0 ? responseTime : 1;

    const picUrl = `https://ittkimse.sirv.com/images%20(4).jpeg?text.0.text=VELOCIDADE%20DO%20BOT&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${displayTime}ms&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100`;

    try {
        const buffer = await getBuffer(picUrl);
        res.set({ 'Content-Type': 'image/jpeg' });
        return res.send(buffer);
    } catch (error) {
        console.error('Erro ao processar a imagem:', error.message);
        return res.status(500).send({ status: false, message: 'Erro ao processar a imagem' });
    }
});

// Rota para o comando 'aplaca'
router.get('/aplaca', async (req, res) => {
    const text = req.query.text;
    if (!text || text.length > 20) return res.status(400).send('Texto inválido ou longo demais');

    const imageUrl = `https://553555.sirv.com/Images/IMG-20231205-WA0153.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-34%25&text.0.position.y=-4%25&text.0.size=37&text.0.color=f00000`;

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg'); // Ajuste o tipo de conteúdo conforme necessário
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Erro ao gerar a imagem.');
    }
});
// Rota para o comando 'lv'
router.get('/lv', async (req, res) => {
    const text = req.query.text;
    if (!text || text.length > 17) return res.status(400).send('Texto inválido ou longo demais');

    const imageUrl = `https://553555.sirv.com/Images/WhatsApp%20Image%202023-12-06%20at%2013.19.09.jpeg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-42%25&text.0.position.y=-36%25&text.0.size=21&text.0.color=ffffff&text.0.font.family=Playfair%20Display%20SC&text.0.font.weight=600&text.0.font.style=italic&text.0.background.opacity=100&text.0.outline.blur=100`;

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg'); // Ajuste o tipo de conteúdo conforme necessário
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Erro ao gerar a imagem.');
    }
});
// Rota para gerar imagem com texto personalizado '/placaloli'
router.get('/placaloli', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send("Texto não fornecido");
    if (text.length > 18) return res.status(400).send("O texto é longo, máximo 18 caracteres");

    const imageUrl = `https://nekobot.xyz/api/imagegen?type=kannagen&text=${encodeURIComponent(text)}`;

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/png'); // Ajuste o tipo de conteúdo conforme necessário
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Erro ao gerar a imagem.');
    }
});
// Rota para o comando '/luffy'
router.get('/luffy', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send("Texto não fornecido");
    if (text.length > 18) return res.status(400).send("O texto é longo, máximo 18 caracteres");

    const imageUrl = `https://553555.sirv.com/Images/IMG-20231207-WA0021.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-72%25&text.0.position.y=-42%25&text.0.size=17&text.0.color=000000&text.0.opacity=83&text.0.font.family=Ruda&text.0.font.style=italic&text.0.background.opacity=100&text.0.outline.blur=100`;

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg'); // Ajuste o tipo de conteúdo conforme necessário
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Erro ao gerar a imagem.');
    }
});

// Rota para o comando '/baratameme'
router.get('/baratameme', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send("Texto não fornecido");
    if (text.length > 18) return res.status(400).send("O texto é longo, máximo 18 caracteres");

    const imageUrl = `https://553555.sirv.com/Images/IMG-20231207-WA0041.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-45%25&text.0.position.y=-20%25&text.0.size=15&text.0.color=000000&text.0.font.family=Tinos&text.0.font.style=italic&text.0.background.opacity=42&text.0.outline.blur=33&text.0.outline.opacity=69`;

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg'); // Ajuste o tipo de conteúdo conforme necessário
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Erro ao gerar a imagem.');
    }
});
// Rota 'anime-texto' para gerar imagem com texto personalizado
router.get('/anime-texto', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send("Texto não fornecido");
    if (text.length > 18) return res.status(400).send("O texto é longo, máximo 18 caracteres");

    const imageUrl = `https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`;

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg'); // Ajuste o tipo de conteúdo conforme necessário
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Erro ao gerar a imagem.');
    }
});
// Rota 'cria' para gerar imagem com texto personalizado
router.get('/cria', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send("Texto não fornecido");
    if (text.length > 18) return res.status(400).send("O texto é longo, máximo 18 caracteres");

    const imageUrl = `https://lollityp.sirv.com/venom_api.jpg?text.0.text=${encodeURIComponent(text)}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`;

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg'); // Ajuste o tipo de conteúdo conforme necessário
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Erro ao gerar a imagem.');
    }
});
// Rota para o comando '/ata'
router.get('/ata', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send("Texto não fornecido");
    if (text.length > 18) return res.status(400).send("O texto é longo, máximo 18 caracteres");

    const imageUrl = `https://553555.sirv.com/Images/WhatsApp%20Image%202023-12-06%20at%2012.04.15.jpeg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-28%25&text.0.position.y=-75%25&text.0.size=21&text.0.color=ffffff&text.0.font.family=Monda&text.0.font.style=italic`;

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg'); // Ajuste o tipo de conteúdo conforme necessário
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Erro ao gerar a imagem.');
    }
});
// Rota para o comando 'plaq'
router.get('/plaq', async (req, res) => {
    const text = req.query.text;
    if (!text || text.length > 15) return res.status(400).send('Texto inválido. Max 15 caracteres.');

    const url = `https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${encodeURIComponent(text)}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`;
    const imageBuffer = await getBuffer(url);
    res.type('jpg');
    res.send(imageBuffer);
});

// Rota para o comando 'plaq2'
router.get('/plaq2', async (req, res) => {
    const text = req.query.text;
    if (!text || text.length > 10) return res.status(400).send('Texto inválido. Max 10 caracteres.');

    const url = `https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`;
    const imageBuffer = await getBuffer(url);
    res.type('jpg');
    res.send(imageBuffer);
});

// Rota para o comando 'plaq3'
router.get('/plaq3', async (req, res) => {
    const text = req.query.text;
    if (!text || text.length > 15) return res.status(400).send('Texto inválido. Max 15 caracteres.');

    const url = `https://umethroo.sirv.com/bunda3.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.gravity=center&text.0.position.x=-25%25&text.0.position.y=-17%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.font.style=italic`;
    const imageBuffer = await getBuffer(url);
    res.type('jpg');
    res.send(imageBuffer);
});

// Rota para o comando 'plaq4'
router.get('/plaq4', async (req, res) => {
    const text = req.query.text;
    if (!text || text.length > 15) return res.status(400).send('Texto inválido. Max 15 caracteres.');

    const url = `https://umethroo.sirv.com/peito1.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-48%25&text.0.position.y=-68%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`;
    const imageBuffer = await getBuffer(url);
    res.type('jpg');
    res.send(imageBuffer);
});

// Rota para o comando 'plaq5'
router.get('/plaq5', async (req, res) => {
    const text = req.query.text;
    if (!text || text.length > 15) return res.status(400).send('Texto inválido. Max 15 caracteres.');

    const url = `https://umethroo.sirv.com/9152e7a9-7d49-48ef-b8ac-2e6149fda0b2.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`;
    const imageBuffer = await getBuffer(url);
    res.type('jpg');
    res.send(imageBuffer);
});

// Rota para o comando 'plaq6'
router.get('/plaq6', async (req, res) => {
    const text = req.query.text;
    if (!text || text.length > 15) return res.status(400).send('Texto inválido. Max 15 caracteres.');

    const url = `https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`;
    const imageBuffer = await getBuffer(url);
    res.type('jpg');
    res.send(imageBuffer);
});

// Rota para o comando 'plaq7'
router.get('/plaq7', async (req, res) => {
    const text = req.query.text;
    if (!text || text.length > 15) return res.status(400).send('Texto inválido. Max 15 caracteres.');

    const url = `https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`;
    const imageBuffer = await getBuffer(url);
    res.type('jpg');
    res.send(imageBuffer);
});

router.get('/plaq8', async (req, res, next) => {
    const textoo = req.query.texto;
    const bala = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${textoo}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`);
    res.type('jpg');
    res.send(bala);
});

router.get('/plaq9', async (req, res, next) => {
    const textoo = req.query.texto;
    const bala = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${textoo}`);
    res.type('jpg');
    res.send(bala);
});

router.get('/plaq10', async (req, res, next) => {
    const textoo = req.query.texto;
    const bala = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${textoo}&text.0.outline.blur=63`);
    res.type('jpg');
    res.send(bala);
});

router.get('/plaq11', async (req, res, next) => {
    const textoo = req.query.texto;
    const bala = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${textoo}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`);
    res.type('jpg');
    res.send(bala);
});

router.get('/plaq12', async (req, res, next) => {
    const textoo = req.query.texto;
    const bala = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${textoo}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`);
    res.type('jpg');
    res.send(bala);
});

router.get('/plaq13', async (req, res, next) => {
    const textoo = req.query.texto;
    const bala = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${textoo}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`);
    res.type('jpg');
    res.send(bala);
});

router.get('/plaq14', async (req, res, next) => {
    const textoo = req.query.texto;
    const bala = await getBuffer(`https://blackzin.sirv.com/Plaq18/20220212_213215.jpg?text.0.text=${textoo}&text.0.position.gravity=northwest&text.0.position.x=43%25&text.0.position.y=18%25&text.0.size=15&text.0.color=000000&text.0.opacity=57&text.0.font.family=Vollkorn&text.0.font.weight=800&text.0.font.style=italic&text.0.background.color=000000&text.0.outline.blur=32&text.0.outline.opacity=46&text.1.text=Dark Domina bb%3F&text.1.position.gravity=center&text.1.position.x=10%25&text.1.position.y=30%25&text.1.size=20&text.1.color=000000&text.1.opacity=59&text.1.font.family=Playball&text.1.font.weight=700&text.1.outline.opacity=0`);
    res.type('jpg');
    res.send(bala);
});

router.get('/plaq15', async (req, res, next) => {
    const textoo = req.query.texto;
    const bala = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${textoo}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light20Two&text.0.outline.blur=15`);
    res.type('jpg');
    res.send(bala);
});

router.get('/plaq16', async (req, res, next) => {
    const textoo = req.query.texto;
    const bala = await getBuffer(`https://lculitas.sirv.com/ETw3FRnXgAI3Up_.jpg?text.0.text=${textoo}&text.0.position.gravity=center&text.0.align=left&text.0.size=46&text.0.color=221b1b&text.0.opacity=47&text.0.font.family=Architects%20Daughter&text.0.background.color=783852&text.0.background.opacity=5&text.0.outline.blur=58`);
    res.type('jpg');
    res.send(bala);
});
router.get('/bateria', async (req, res) => {
    const texto = req.query.texto;
    const porcentagem = req.query.porcentagem;
    
    if (!texto || !porcentagem) {
        return res.status(404).send({
            status: 404,
            message: 'Insira o parâmetro texto & porcentagem'
        });
    }
    
    const ttplink = `https://eruakorl.sirv.com/Bot%20dudinha/images%20(1).jpeg?text.0.text=BATERIA&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=24&text.0.color=ffffff&text.0.font.family=Teko&text.0.font.weight=600&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${porcentagem}%&text.1.position.gravity=center&text.1.size=22&text.1.color=2aff00&text.1.font.family=Teko&text.1.font.weight=600&text.1.background.opacity=100&text.1.outline.blur=100&text.2.text=${texto}&text.2.position.gravity=center&text.2.position.y=26%25&text.2.size=24&text.2.color=ffffff&text.2.font.family=Teko&text.2.font.weight=600&text.2.background.opacity=100&text.2.outline.blur=100`;

    try {
        const buffer = await getBuffer(ttplink);
        res.set({ 'Content-Type': 'image/png' });
        return res.send(buffer);
    } catch (error) {
        return res.status(500).send({ status: false, message: 'Erro ao processar a imagem' });
    }
});
// Rota /ttp
router.get('/ttp', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.status(404).send({
            status: 404,
            message: 'Insira o parâmetro texto'
        });
    }

    const ttplink = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${encodeURIComponent(texto)}&text.0.outline.blur=0&text.0.outline.opacity=0&text.0.font.family=Passion%20One`;
    
    try {
        const buffer = await getBuffer(ttplink);
        res.set({ 'Content-Type': 'image/webp' });
        return res.send(buffer);
    } catch (error) {
        return res.status(500).send({ status: false, message: 'Erro ao processar a imagem' });
    }
});

// Rota /ttp2
router.get('/ttp2', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({
            status: false,
            message: 'Cade o parâmetro texto??'
        });
    }

    const cores = ["f702ff", "ff0202", "00ff2e", "efff00", "00ecff", "3100ff", "ffb400", "ff00b0", "00ff95", "efff00"];
    const fontes = ["Days%20One", "Domine", "Exo", "Fredoka%20One", "Gentium%20Basic", "Gloria%20Hallelujah", "Great%20Vibes", "Orbitron", "PT%20Serif", "Pacifico"];
    const cor = cores[Math.floor(Math.random() * cores.length)];
    const fonte = fontes[Math.floor(Math.random() * fontes.length)];

    const sitee = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${encodeURIComponent(texto)}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${cor}&text.0.font.family=${fonte}&text.0.background.color=ff0000`;

    try {
        const buffer = await getBuffer(sitee);
        res.set({ 'Content-Type': 'image/jpeg' });
        return res.send(buffer);
    } catch (error) {
        return res.status(500).send({ status: false, message: 'Erro ao processar a imagem' });
    }
});

// Rota /ttp3
router.get('/ttp3', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({
            status: false,
            message: 'Cade o parâmetro texto??'
        });
    }

    const url = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${encodeURIComponent(texto)}&text.0.color=ffffff&text.0.background.color=0000ff&text.0.font.family=Changa%20One&text.0.outline.color=0000`;

    try {
        const buffer = await getBuffer(url);
        res.set({ 'Content-Type': 'image/png' });
        return res.send(buffer);
    } catch (error) {
        return res.status(500).send({ status: false, message: 'Erro ao processar a imagem' });
    }
});

async function fetchJson(url) {
    const response = await axios.get(url);
    return response.data; // Retorna os dados da resposta
}
router.get('/emojimix', async (req, res) => {
    const emoji1 = req.query.emoji1;
    const emoji2 = req.query.emoji2;

    if (!emoji1) return res.json({ status: false, message: "[!] parâmetros de entrada emoji1" });
    if (!emoji2) return res.json({ status: false, message: "[!] parâmetros de entrada emoji2" });

    let data = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
    res.json({
        status: true,
        resultado: data.results
    });
});

router.get('/emojimix2', async (req, res) => {
    const emoji1 = req.query.emoji;

    if (!emoji1) return res.json({ status: false, message: "[!] parâmetros de entrada emoji" });

    let emojii = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}`);
    res.json({
        status: true,
        resultado: emojii.results
    });
});

router.get('/emojimix3', async (req, res) => {
    const emoji1 = req.query.emoji1;
    const emoji2 = req.query.emoji2;

    if (!emoji1) return res.json({ status: false, mensagem: "[!] parâmetros de entrada emoji1" });
    if (!emoji2) return res.json({ status: false, mensagem: "[!] parâmetros de entrada emoji2" });

    let data = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
    let jadi = data.results[Math.floor(Math.random() * data.results.length)];

    if (!jadi) return res.json({ erro: "Erro no Servidor Interno." });
    for (let ress of data.results) {
        let resul = await getBuffer(ress.url);
        res.set({ 'Content-Type': 'image/png' });
        return res.send(resul);
    }
});



//Photooxy 
const KEY_FUT = 'live_9f96c55d1086375d07ad9c3fcb9a19'; // Substitua pela sua chave
// Rota para obter a artilharia do Brasileirão
router.get('/artilheiro', async (req, res) => {
  try {
    const response = await axios.get('https://api.api-futebol.com.br/v1/campeonatos/10/artilharia', {
      headers: {
        'Authorization': 'Bearer live_9f96c55d1086375d07ad9c3fcb9a19' 
      }
    });

    // Extrair dados da resposta
    const dados = response.data;

    // Função para formatar os dados em uma tabela
    const formatarTabela = (dados) => {
      let tabela = 'Time            | Gols | Atleta\n';
      tabela += '---------------------------------\n';

      dados.forEach(item => {
        const time = item.time.nome_popular.padEnd(15, ' ');
        const gols = item.gols.toString().padStart(4, ' ');
        const atleta = item.atleta.nome_popular ? item.atleta.nome_popular : 'Desconhecido';
        tabela += `${time} | ${gols} | ${atleta}\n`;
      });

      return tabela;
    };

    // Formatando a tabela
    const tabelaFormatada = formatarTabela(dados);

    // Enviando a resposta com a tabela formatada
    res.type('text/plain');
    res.send(tabelaFormatada);
  } catch (error) {
    console.error('Erro ao obter a artilharia:', error);
    res.status(500).send('Erro ao obter a artilharia');
  }
});
// Rota para listar a tabela do Brasileirão
router.get('/tabela', async (req, res) => {
  try {
    const response = await axios.get('https://api.api-futebol.com.br/v1/campeonatos/10/tabela', {
      headers: {
        Authorization: `Bearer ${KEY_FUT}`
      }
    });

    // Montar a tabela em um formato mais legível
    let tabela = 'Time               | P  | J  | V  | S \n'; // Cabeçalho da tabela alinhado
    tabela += '---------------------------------------\n'; // Linha de separação

    response.data.forEach(time => {
      // Adicionando os dados à tabela, formatando as colunas
      tabela += `${time.time.nome_popular.padEnd(18)} | ${time.pontos.toString().padStart(2)} | ${time.jogos.toString().padStart(2)} | ${time.vitorias.toString().padStart(2)} | ${time.saldo_gols.toString().padStart(2)}\n`;
    });

    // Respondendo com a tabela formatada
    res.set('Content-Type', 'text/plain');
    res.send(tabela);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados da tabela' });
  }
});
const { Maker } = require('./modulos/imagemaker.js');
// photooxyRouter.js
// photooxyRouter.js
router.get('/googlesg', async (req, res) => {
    const { texto, texto2, texto3 } = req.query;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito e os textos fornecidos
        const resultado = await photooxy("https://photooxy.com/other-design/make-google-suggestion-photos-238.html", [texto, texto2, texto3]);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar imagem Google Suggest:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/sweet-candy', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o texto doce:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/illuminated-metallic', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito metálico iluminado:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/carved-wood', async (req, res) => {
    const texto = req.query.texto;
 
    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito de madeira esculpida:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/night-sky', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar texto no céu noturno:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/butterfly', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito de borboleta e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar texto com efeito de borboleta:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/coffee-cup', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar texto na xícara de café:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/picture-of-love', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar a imagem de amor:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/steel', async (req, res) => {
    const { texto, texto2 } = req.query; // Correção aqui

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Verifique se `texto2` é opcional e trate isso conforme necessário
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/steel-text-effect-66.html", [texto, texto2]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        console.error(e); // Adicionei um log para depuração
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});

router.get('/marvel', async (req, res) => {
    const { texto, texto2 } = req.query; // Correção aqui

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Verifique se `texto2` é opcional e trate isso conforme necessário
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-marvel-style-logo-419.html", [texto, texto2]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        console.error(e); // Adicionei um log para depuração
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/america', async (req, res) => {
    const { texto, texto2 } = req.query; // Correção aqui

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Verifique se `texto2` é opcional e trate isso conforme necessário
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-a-cinematic-captain-america-text-effect-online-715.html", [texto, texto2]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        console.error(e); // Adicionei um log para depuração
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/space', async (req, res) => {
    const { texto, texto2 } = req.query; // Correção aqui

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Verifique se `texto2` é opcional e trate isso conforme necessário
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/latest-space-3d-text-effect-online-559.html", [texto, texto2]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        console.error(e); // Adicionei um log para depuração
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
// Rota para /pohub
router.get('/pohub', async (req, res) => {
    const { texto, texto2 } = req.query; // Captura os parâmetros da query

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Verifique se `texto2` é opcional e trate isso conforme necessário
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-pornhub-style-logos-online-free-549.html", [texto, texto2]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        console.error(e); // Adiciona um log para depuração
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});

// Rota para /vingadores
router.get('/vingadores', async (req, res) => {
    const { texto, texto2 } = req.query; // Captura os parâmetros da query

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Verifique se `texto2` é opcional e trate isso conforme necessário
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-logo-3d-style-avengers-online-427.html", [texto, texto2]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        console.error(e); // Adiciona um log para depuração
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/deadpool', async (req, res) => {
    const { texto, texto2 } = req.query; // Correção aqui

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Verifique se `texto2` é opcional e trate isso conforme necessário
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-text-effects-in-the-style-of-the-deadpool-logo-818.html", [texto, texto2]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        console.error(e); // Adicionei um log para depuração
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});

router.get('/praia', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-a-summery-sand-writing-text-effect-577.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/typography', async (req, res) => {
    const { texto, texto2 } = req.query; // Correção aqui

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Verifique se `texto2` é opcional e trate isso conforme necessário
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-online-typography-art-effects-with-multiple-layers-811.html", [texto, texto2]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        console.error(e); // Adicionei um log para depuração
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/dragon-ball', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/thor', async (req, res) => {
    const { texto, texto2 } = req.query; // Correção aqui

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Verifique se `texto2` é opcional e trate isso conforme necessário
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-thor-logo-style-text-effects-online-for-free-796.html", [texto, texto2]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        console.error(e); // Adicionei um log para depuração
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/graffiti', async (req, res) => {
    const { texto, texto2 } = req.query; // Correção aqui

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Verifique se `texto2` é opcional e trate isso conforme necessário
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/cute-girl-painting-graffiti-text-effect-667.html", [texto, texto2]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        console.error(e); // Adicionei um log para depuração
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/star-wars', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-a-star-wars-character-mascot-logo-online-707.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/glitch', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/royal', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/royal-text-effect-online-free-471.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/vingadores', async (req, res) => {
    const { texto, texto2 } = req.query; // Correção aqui

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Verifique se `texto2` é opcional e trate isso conforme necessário
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-logo-3d-style-avengers-online-427.html", [texto, texto2]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        console.error(e); // Adicionei um log para depuração
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/cloud', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-a-cloud-text-effect-in-the-sky-618.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/birthday', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/colorful-birthday-foil-balloon-text-effects-620.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/natal', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/christmas-snow-text-effect-online-631.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/matirix', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/matrix-text-effect-154.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/galaxy', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/galaxy-text-effect-new-258.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/snow', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/devil', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/anonymous', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/boom', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/flower-typography', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/art-effects/flower-typography-text-effect-164.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar a tipografia de flores:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/harry-potter', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o texto do Harry Potter:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/under-grass', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar a citação sob a grama:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/pubg', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito do PUBG e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar a imagem do PUBG:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/naruto', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito do Naruto e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar a imagem do Naruto:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/metallic', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito metálico e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito metálico:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/shadow-sky', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito sombra no céu e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito sombra no céu:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/flaming', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito flaming e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito flaming:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/efeitoneon', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito neon e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito neon:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/metalgold', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito metal gold e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito metal gold:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/cemiterio', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito cemitério e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito cemitério:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
    
router.get('/shadow', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito de fogo e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", texto);

        // Verifica se a imagem foi gerada com sucesso
        if (resultado.image) {
            // Retorna apenas a imageUrl no formato desejado
            return res.json({
                imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
            });
        } else {
            // Se não houver uma imagem, retorna um erro
            return res.json({ erro: 'Falha ao gerar a imagem.' });
        }
    } catch (e) {
        console.error("Erro ao gerar o efeito de fogo:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});       
router.get('/txtborboleta', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito de texto borboleta:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/cup', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito na caneca:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/harryp', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito Harry Potter:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/lobometal', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito lobo metal:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/neon2', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito neon:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/gameplay', async (req, res) => {
    const { texto, texto2 } = req.query; // Aceita apenas dois textos

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto || !texto2) {
        return res.json({ message: "Cadê os parâmetros texto e texto2?" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito e os textos fornecidos
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html", [texto, texto2]);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar imagem Gameplay:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/madeira', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito madeira:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/florwooden', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito de madeira e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito de madeira:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/coffecup2', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito da caneca de café e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito da caneca de café:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/coffecup', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito de caneca de café e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito da caneca de café:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/lovemsg3', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito de mensagem de amor e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito de mensagem de amor:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/lovemsg2', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito de grama e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito de grama:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/lovemsg', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito de mensagem de amor e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito de mensagem de amor:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/narutologo', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito de logo de Naruto e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o logo de Naruto:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/mascotegame', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-a-gaming-mascot-logo-free-560.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/mascoteavatar', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-logo-avatar-mascot-style-364.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/wingeffect', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/the-effect-of-galaxy-angel-wings-289.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});

router.get('/angelglx', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/wings-galaxy-206.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/lol', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const resultado = await photooxy("https://photooxy.com/league-of-kings/cool-league-of-kings-avatar-153.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito gameplay:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/gizquadro', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/writing-chalk-on-the-blackboard-30.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/blackpink', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});

router.get('/girlmascote', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/logogame', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-logo-team-logo-gaming-assassin-style-574.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/romantico', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito romântico e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito romântico:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/darkdragon', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito dragão sombrio e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/other-design/create-dark-metal-text-with-special-logo-160.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito dragão sombrio:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});

router.get('/fire', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito de fogo e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", texto);

        // Verifica se a imagem foi gerada com sucesso
        if (resultado.image) {
            // Retorna apenas a imageUrl no formato desejado
            return res.json({
                imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
            });
        } else {
            // Se não houver uma imagem, retorna um erro
            return res.json({ erro: 'Falha ao gerar a imagem.' });
        }
    } catch (e) {
        console.error("Erro ao gerar o efeito de fogo:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/smoke', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito de fumaça e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito de fumaça:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/papel', async (req, res) => {
    const texto = req.query.texto;

    // Verifica se o parâmetro 'texto' foi fornecido
    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Chama a função 'photooxy' passando a URL do efeito de papel queimado e o texto fornecido
        const resultado = await photooxy("https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html", texto);

        // Retorna apenas a imageUrl no formato desejado
        return res.json({
            imageUrl: resultado.image // Use a URL da imagem retornada pela sua função
        });
    } catch (e) {
        console.error("Erro ao gerar o efeito de papel:", e);
        return res.json({ erro: 'Erro no Servidor Interno', detalhes: e.message });
    }
});
router.get('/angelwing', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/hackneon', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/fpsmascote', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});

router.get('/equipemascote', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/make-team-logo-online-free-432.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/txtquadrinhos', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/3dsilver', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/goldtext', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/gold-text-effect-158.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/starballons', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/ffbanner', async (req, res) => {
    const { texto, texto2 } = req.query; // Correção aqui

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        // Verifique se `texto2` é opcional e trate isso conforme necessário
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html", [texto, texto2]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        console.error(e); // Adicionei um log para depuração
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/ffavatar', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-free-fire-avatar-online-572.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/frozen', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/halloween', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://en.ephoto360.com/halloween-fire-text-effect-online-369.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});

//fim do photoxy
// rota para baixar música do spotify 
router.get('/spotify', async (req, res) => {
    try {
        const { nome } = req.query;

        if (!nome) {
            return res.status(400).json({ status: false, message: "O nome da música é obrigatório!" });
        }

        // Busca a música pelo nome
        const searchResult = await searching(nome);
        if (!searchResult.status) {
            return res.status(404).json(searchResult);
        }

        // Pega o primeiro resultado e gera o link de download
        const trackUrl = searchResult.data[0].url;
        const downloadResult = await spotifydl(trackUrl);

        // Retorna as informações e o link de download
        res.status(200).json({
            status: true,
            trackInfo: searchResult.data[0],
            downloadLink: downloadResult.download
        });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
});


router.get("/insta", async (req, res) => {
    const { url } = req.query; // A URL é passada como parâmetro de consulta (query)

    if (!url) {
        return res.status(400).json({ error: "URL do Instagram é obrigatória" });
    }

    try {
        const result = await snapsave(url); // Chama sua função
        return res.json({ success: true, data: result });
    } catch (error) {
        console.error("Erro ao baixar o conteúdo:", error);
        return res.status(500).json({ success: false, error: "Erro ao processar a URL" });
    }
});
const downloadFile = async (url, filePath, res) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).send('Failed to fetch the resource');
    }

    const fileStream = fs.createWriteStream(filePath);
    response.body.pipe(fileStream);
    fileStream.on('finish', () => {
      res.download(filePath, (err) => {
        if (err) {
          console.error('Download failed:', err);
          res.status(500).send('Failed to download the file');
        } else {
          fs.unlink(filePath, () => {}); // Delete file after download
        }
      });
    });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

router.get('/igstalker', async (req, res) => {
  const conta = req.query.conta;
  
  try {
    const response = await axios.get(`https://api.vreden.my.id/api/instagram/users?query=${conta}`);
    
    if (response.data.status && response.data.result.users.length > 0) {
      const firstUser = response.data.result.users[0];
      res.json({
        username: firstUser.username,
        full_name: firstUser.full_name,
        profile_pic_url: firstUser.profile_pic_url,
        is_private: firstUser.is_private,
        is_verified: firstUser.is_verified
      });
    } else {
      res.status(404).json({ message: 'No user found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
});

router.get('/pin/foto', (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).send('Missing url parameter');
  }

  const filePath = path.join(__dirname, 'downloaded.jpg');
  downloadFile(url, filePath, res);
});

router.get('/pin/video', (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).send('Missing url parameter');
  }

  const filePath = path.join(__dirname, 'downloaded.mp4');
  downloadFile(url, filePath, res);
});


const apiId = 21844566;
const apiHash = 'ff82e94bfed22534a083c3aee236761a';
const stringSession = new StringSession('1AQAOMTQ5LjE1NC4xNzUuNTcBu6PFqVLLbiFdwrnZodLTYD+cJaR0zEZA3LBu/ADOYrX3h5NS1Mdu2+s2PvIlfkI7gC1OMkWaylptw3NfkQciqn6JhS6lhwFEZ2Vu5bZNbADkKU4dG86elaie2pmnMrporVqNL2MlMuM6JZNUyv7C22y96a2Hi46nX1tLWWgPdcPQ4AeT981MWMX3QkOYIc00HbKMZ5XlM3AmmMF+J6rYcq2aQ3AKl0gtYPqK5jQ4CzILfhr32mngEWr6HkqnvKVKAtGYe+Ne9Nb1IXa8soMVaK5J8iP37GeasfjuwUo/szjX9vb4xAFD/cv0QLyEnPbOJMYk+G0YCJzZhRuwO9K7w+o=');
const grupoChatId = -1002208588695;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let client;

(async () => {
  try {
    console.log("Loading interactive example...");
    client = new TelegramClient(stringSession, apiId, apiHash, {
      connectionRetries: 5,
    });

    await client.start({
      phoneNumber: async () =>
        new Promise((resolve) =>
          rl.question("por favor, me mande seu numero: ", resolve)
        ),
      password: async () =>
        new Promise((resolve) =>
          rl.question("por favor, me mande sua senha: ", resolve)
        ),
      phoneCode: async () =>
        new Promise((resolve) =>
          rl.question("por favor, me mande o codigo que chegou: ", resolve)
        ),
      onError: (err) => console.log(err),
    });
    console.log("foi conectado com sucesso");
    console.log(client.session.save()); // Salve esta string para evitar logins futuros

  } catch (err) {
    console.error('Erro ao iniciar o cliente Telegram:', err);
  }
})();

router.get('/attp', async (req, res, next) => {
    let texto = req.query.texto;
    let tipo = req.query.tipo || 'attp1';  // Parâmetro para determinar qual API usar (default é attp1)

    if (!texto) return res.json({ message: "Faltando o parâmetro texto" });

    // Verifica se o tipo é válido (attp1 até attp10)
    if (!['attp1', 'attp2', 'attp3', 'attp4', 'attp5', 'attp6', 'attp7', 'attp8', 'attp9', 'attp10'].includes(tipo)) {
        return res.json({ message: "Tipo inválido. Use 'attp1' até 'attp10'" });
    }

    try {
        // Monta a URL da API com o tipo e o texto
        let apiUrl = `https://api.iblgroup.cloud/api-iblcloud/${tipo}?texto=${texto}&apikey=TURBO_CONECT`;

        // Fazendo a requisição com axios e pegando os dados binários
        let response = await axios.get(apiUrl, { responseType: 'arraybuffer' });

        // Definindo o caminho onde o arquivo será salvo (na raiz do projeto)
        const filePath = path.join(__dirname, `${tipo}.webp`);

        // Escrevendo o arquivo na raiz do projeto
        fs.writeFileSync(filePath, response.data);

        // Enviando o arquivo como resposta
        res.sendFile(filePath);
    } catch (error) {
        console.error(error);  // Log para facilitar a depuração
        return res.json({ message: "Erro no servidor interno..." });
    }
});

router.get('/consultarcpf', async (req, res, next) => {
    let cpf = req.query.cpf;

    if (!cpf) return res.json({ message: "Faltando o parâmetro cpf" });

    try {
        // Requisição à API com o CPF fornecido
        let url = `https://api.iblgroup.cloud/ibl-premium/cpf1?q=${cpf}`;
        let response = await axios.get(url);

        // Verifica se a resposta contém a chave 'message'
        if (response.data.message) {
            // Formatar a resposta de maneira mais legível
            let dados = response.data.message.split("\n").map(line => line.trim()).filter(line => line !== "");
            res.json(dados);
        } else {
            res.json({ message: "Nenhum dado encontrado para este CPF" });
        }

    } catch (error) {
        console.error(error);  // Log para facilitar a depuração
        res.json({ message: "Erro ao consultar a API" });
    }
});

router.get('/cpf3', async (req, res) => {
    let cpf = req.query.q;

    if (!cpf) return res.json({ message: "Faltando o parâmetro cpf" });

    try {
        let url = `https://api.iblgroup.cloud/ibl-premium/cpf3?q=${cpf}`;
        let response = await axios.get(url);

        if (response.data.message) {
            let dados = response.data.message.split("\n").map(linha => linha.trim()).filter(l => l !== "");
            res.json(dados);
        } else {
            res.json({ message: "Nenhum dado encontrado para este CPF" });
        }

    } catch (error) {
        console.error(error);
        res.json({ message: "Erro ao consultar a API" });
    }
});

router.get('/cpf2', async (req, res) => {
    let cpf = req.query.q;

    if (!cpf) return res.json({ message: "Faltando o parâmetro cpf" });

    try {
        let url = `https://api.iblgroup.cloud/ibl-premium/cpf2?q=${cpf}`;
        let response = await axios.get(url);

        if (response.data.message) {
            let dados = response.data.message.split("\n").map(linha => linha.trim()).filter(l => l !== "");
            res.json(dados);
        } else {
            res.json({ message: "Nenhum dado encontrado para este CPF" });
        }

    } catch (error) {
        console.error(error);
        res.json({ message: "Erro ao consultar a API" });
    }
});

router.get('/numero', async (req, res) => {
    let telefone = req.query.q;

    if (!telefone) return res.json({ message: "Faltando o parâmetro telefone" });

    try {
        let url = `https://api.iblgroup.cloud/ibl-premium/telefone?q=${telefone}`;
        let response = await axios.get(url);

        if (response.data.message) {
            let dados = response.data.message.split("\n").map(linha => linha.trim()).filter(l => l !== "");
            res.json(dados);
        } else {
            res.json({ message: "Nenhum dado encontrado para este telefone" });
        }

    } catch (error) {
        console.error(error);
        res.json({ message: "Erro ao consultar a API" });
    }
});

router.get('/placa2', async (req, res) => {
    let placa = req.query.q;

    if (!placa) return res.json({ message: "Faltando o parâmetro placa" });

    try {
        let url = `https://api.iblgroup.cloud/ibl-premium/placa?q=${placa}`;
        let response = await axios.get(url);

        if (response.data.message) {
            let dados = response.data.message.split("\n").map(linha => linha.trim()).filter(l => l !== "");
            res.json(dados);
        } else {
            res.json({ message: "Nenhum dado encontrado para esta placa" });
        }

    } catch (error) {
        console.error(error);
        res.json({ message: "Erro ao consultar a API" });
    }
});

router.get('/nome-completo', async (req, res) => {
    let nome = req.query.q;

    if (!nome) return res.json({ message: "Faltando o parâmetro nome" });

    try {
        let url = `https://api.iblgroup.cloud/ibl-premium/nome?q=${encodeURIComponent(nome)}`;
        let response = await axios.get(url);

        if (response.data.message) {
            let dados = response.data.message.split("\n").map(linha => linha.trim()).filter(l => l !== "");
            res.json(dados);
        } else {
            res.json({ message: "Nenhum dado encontrado para este nome" });
        }

    } catch (error) {
        console.error(error);
        res.json({ message: "Erro ao consultar a API" });
    }
});

router.get('/email', async (req, res) => {
    let email = req.query.q;

    if (!email) return res.json({ message: "Faltando o parâmetro email" });

    try {
        let url = `https://api.iblgroup.cloud/ibl-premium/email?q=${encodeURIComponent(email)}`;
        let response = await axios.get(url);

        if (response.data.message) {
            let dados = response.data.message.split("\n").map(linha => linha.trim()).filter(l => l !== "");
            res.json(dados);
        } else {
            res.json({ message: "Nenhum dado encontrado para este e-mail" });
        }

    } catch (error) {
        console.error(error);
        res.json({ message: "Erro ao consultar a API" });
    }
});

router.get('/consultas', async (req, res) => {
  try {
    const type = req.query.type;
    if (!type) {
      console.log('Parâmetro type ausente na consulta');
      return res.json({ status: false, resultado: 'Cadê o parâmetro type?' });
    }

    const query = req.query.query;
    if (!query) {
      console.log('Parâmetro query ausente na consulta');
      return res.json({ status: false, resultado: 'Cadê o parâmetro query?' });
    }

    // Carregar o banco de dados
    let db;
    try {
      db = JSON.parse(fs.readFileSync('db.json'));
      console.log('Banco de dados carregado com sucesso');
    } catch (err) {
      console.error('Erro ao ler o banco de dados:', err);
      return res.json({ status: false, resultado: 'Erro ao ler o banco de dados' });
    }

    const validTypes = ['cpf', 'nome', 'telefone', 'placa', 'cep'];
    if (!validTypes.includes(type)) {
      console.log(`Tipo de consulta inválido: ${type}`);
      return res.json({ status: false, resultado: 'Tipo de consulta inválido' });
    }

    console.log(`[CONSULTA]: ${type} = ${query}`);

    if (db[type] && db[type][query]) {
      console.log('Resultado encontrado no banco de dados:', db[type][query]);
      return res.json({ status: true, resultado: db[type][query] });
    }

    try {
      // Envia a mensagem para o grupo com o comando de consulta
await client.sendMessage(grupoChatId, { message: `/${type.toUpperCase()} ${query}` });
console.log(`Mensagem de consulta enviada para o grupo ${grupoChatId}: /${type.toUpperCase()} ${query}`);
        
        const handleResponse = new Promise((resolve, reject) => {
  const eventHandler = async (event) => {
    try {
        const message = event.message;
        console.log('Nova mensagem recebida:', message);

        if (message && message.message && !message.message.includes("Consultando")) {
            // Ignora a mensagem de comando desconhecido
            if (
                message.message.includes("Comando desconhecido") ||
                message.message.includes("Obrigado por consultar") ||
                message.message.includes("Lembre-se que as consultas completas estão no site") ||
                message.message.includes("Pague somente pelo pv admin deste grupo") ||
                message.message.includes("as consultas completas estão apenas no melhor site") ||
                message.message.includes("Entre no site buscardados.com.br para completar a sua pesquisa de CPF") ||
                message.message.includes("as consultas completas estão apenas no melhor site") ||
                message.message.includes("As consultas completas estão apenas no melhor site: buscardados.com.br!") || // Nova mensagem a ignorar
                message.message.includes("Entre no site buscardados.com.br para completar a sua pesquisa de CPF.") || // Nova mensagem a ignorar
                message.message.includes("Exemplo de Uso: /nome lux")
            ) {

                
          console.log('Mensagem ignorada:', message.message);
          return;
        }

        // Remover o usuário da resposta e formatar os dados
        const resposta = message.message
          .replace(/° USUÁRIO:.*\n?/g, '') // Remove a linha do usuário
          .split('\n') // Divide o texto em linhas
          .filter(line => line.trim() !== '') // Remove linhas vazias
          .map(line => line.replace(/^° /, '')) // Remove o símbolo "° " do início de cada linha
          .reduce((resultado, line) => {
            const [key, value] = line.split(':').map(part => part.trim());
            if (key && value) {
              resultado[key.toLowerCase()] = value;
            }
            return resultado;
          }, {});

        console.log('Resposta formatada:', resposta);
        resolve(resposta);
        client.removeEventHandler(eventHandler);
        return;
      }
    } catch (err) {
      console.error('Erro ao processar nova mensagem:', err);
    }
  };

  client.addEventHandler(eventHandler, new NewMessage({}));

  setTimeout(() => {
    reject('Tempo de espera esgotado');
    client.removeEventHandler(eventHandler);
  }, 90000);
});

      try {
        const resultado = await handleResponse;
        console.log('Resposta recebida antes do timeout:', resultado);

        if (db[type]) {
          db[type][query] = resultado;
          fs.writeFileSync('db.json', JSON.stringify(db));
        }

        return res.json({
          status: true,
          resultado: resultado
        });
      } catch (error) {
        console.error('Erro ao receber a resposta:', error);
        return res.json({ status: false, resultado: 'Não foi possível fazer a consulta.' });
      }
    } catch (e) {
      console.error('Erro ao enviar a mensagem de consulta ou processar a resposta:', e);
      if (!res.headersSent) {
        return res.json({ status: false, resultado: 'Não foi possível fazer a consulta.' });
      }
    }
  } catch (err) {
    console.error('Erro na rota /consultas:', err);
    return res.json({ status: false, resultado: 'Erro interno do servidor.' });
  }
});

const idDoGrupoDeLikes = -1002208588695;

router.get('/likes', async (req, res) => {
  const id = req.query.id;
  const region = req.query.region || 'br';

  if (!id) {
    console.log('❌ Parâmetro id ausente');
    return res.json({ status: false, resultado: 'Cadê o parâmetro id?' });
  }

  console.log(`📩 Enviando likes para ID = ${id}`);

  const getUserInfo = async () => {
    try {
      const { data } = await axios.get(`https://system.ffgarena.cloud/api/info_avatar?uid=${id}&region=${region}`);
      return {
        liked: data.basicInfo?.liked || 0,
        nickname: data.basicInfo?.nickname || 'Desconhecido',
        level: data.basicInfo?.level || 0,
        avatar: data.avatars || ''
      };
    } catch (err) {
      console.error('❌ Erro na API:', err.message);
      return null;
    }
  };

  const infoAntes = await getUserInfo();
  if (!infoAntes) {
    return res.json({ status: false, resultado: 'Erro ao consultar informações do jogador antes do envio.' });
  }

  try {
    await client.sendMessage(idDoGrupoDeLikes, { message: `/likes ${id}` });
    console.log(`✅ Mensagem enviada: /like ${id}`);

    let infoDepois = null;

    for (let i = 0; i < 10; i++) {
      await new Promise(resolve => setTimeout(resolve, 2000)); // espera 2 segundos
      infoDepois = await getUserInfo();

      if (!infoDepois) {
        return res.json({ status: false, resultado: 'Erro ao consultar informações após envio.' });
      }

      if (infoDepois.liked > infoAntes.liked) break;
    }

    return res.json({
      status: true,
      resultado: {
        likesAntes: infoAntes.liked,
        likesDepois: infoDepois.liked,
        likesGanhos: infoDepois.liked - infoAntes.liked,
        nick: infoDepois.nickname,
        nivel: infoDepois.level,
        avatar: infoDepois.avatar,
        região: region
      }
    });

  } catch (err) {
    console.error('❌ Erro na rota /likes:', err.message);
    return res.json({ status: false, resultado: 'Erro ao tentar registrar os likes.' });
  }
});

router.get('/calcularxp', (req, res) => {
  const tabelaXP = [
    0, 48, 202, 544, 1012, 1844, 2792, 3800, 4870, 6004,
    7192, 8448, 9760, 11140, 12566, 14060, 15610, 17224, 18902, 20632,
    22424, 24278, 26192, 28166, 30200, 32294, 34448, 37804, 41274, 44870,
    48582, 53394, 58566, 64096, 69994, 76260, 83506, 91128, 99322, 108092,
    120144, 133266, 147472, 162760, 179126, 196572, 215368, 235316, 257010, 279860,
    304056, 348318, 394982, 444044, 495508, 549364, 633756, 721744, 813336, 908522,
    1041438, 1180352, 1325266, 1476184, 1634300, 1840946, 2056594, 2281242, 2514880, 2757530,
    3059506, 3372284, 3699456, 4041030, 4397002, 4829104, 5282204, 5756304, 6251404, 6767502,
    7381324, 8043154, 8752982, 9510808, 10316638, 11277190, 12291748, 13360304, 14482858, 15659418,
    17026708, 18453990, 19941280, 21488570, 23095858, 24763138, 26490428, 28277708, 30124996, 32032284
  ];

  const nivel = Number(req.query.nivel);

  if (isNaN(nivel) || nivel < 1 || nivel > 100) {
    return res.status(400).json({ error: 'Nível inválido. Informe um valor entre 1 e 100. Exemplo: /calcularxp?nivel=15' });
  }

  const xpNecessario = tabelaXP[nivel - 1]; // índice 0 = nível 1

  return res.json({
    nivel,
    xpNecessario
  });
});

// /xpff
router.get('/xpff', async (req, res) => {
  const id = req.query.id?.trim();
  console.log(`[XPFF] Recebido id: ${id}`);

  if (!id || !/^\d+$/.test(id)) {
    console.log('[XPFF] ID inválido');
    return res.status(400).json({ error: 'ID inválido. Exemplo: /xpff?id=123456' });
  }

  try {
    const { data } = await axios.post(
      'https://freefirejornal.com/ffstats/addxp.php',
      new URLSearchParams({ idjogador: id, turnstileToken: '' }).toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    console.log('[XPFF] Dados recebidos:', data);

    if (data.erro) {
      console.log('[XPFF] Erro retornado da API:', data.erro);
      return res.status(400).json({ error: data.erro });
    }
    if (data.sucesso) {
      console.log('[XPFF] Sucesso:', data.sucesso);
      return res.json({ success: true, message: data.sucesso });
    }

    res.json({
      success: true,
      nickname: data.nickname,
      regiao: data.regiao,
      xp_atual: data.xp_atual,
      nivel_atual: data.nivel_atual,
      xp_falta_proximo: data.xp_falta_proximo,
      xp_falta_nivel_100: data.xp_falta_nivel_100,
      perfil: data.urlperfil
    });
  } catch (err) {
    console.error('[XPFF] Erro ao buscar XP/Nível:', err);
    res.status(500).json({ error: 'Erro ao buscar XP/Nível.' });
  }
});

router.get('/datadaconta', async (req, res) => {
  const id = req.query.id?.trim();
  if (!id || !/^\d+$/.test(id)) {
    return res.status(400).json({ error: 'ID inválido. Exemplo: /datadaconta?id=123456' });
  }

  try {
    const { data } = await axios.post(
      'https://freefirejornal.com/freefire/datacriacao/checknovo2025.php',
      new URLSearchParams({ idjogador: id, lang: 'pt-br' }).toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    if (!data.datadaconta) {
      return res.status(404).json({ error: 'Nenhuma informação encontrada.' });
    }

    res.json({
      success: true,
      id,
      datacriacao: data.datadaconta,
      perfil: data.profileurl || null
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar data da conta.' });
  }
});


// /visitasff
router.get('/visitasff', async (req, res) => {
  const uid = req.query.id?.trim();
  console.log(`[VisitasFF] Recebido id: ${uid}`);

  if (!uid || !/^\d+$/.test(uid)) {
    return res.status(400).json({ error: 'ID inválido. Exemplo: /visitasff?id=123456' });
  }

  try {
    // Inicia o envio de visitas
    const { data } = await axios.post('https://freefirejornal.com/freefire/visitas/ganhar.php', 
      { id: uid }, 
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (!data.requestId) {
      return res.status(500).json({ error: 'ID do pedido não retornado.' });
    }

    const requestId = data.requestId;

    // Função para checar status com polling
    async function checkStatus(elapsed = 0) {
      if (elapsed >= 120) {
        throw new Error('Tempo esgotado! Tente novamente mais tarde.');
      }

      const statusRes = await axios.post(
        `https://freefirejornal.com/freefire/visitas/checar.php?time=${Date.now()}`,
        { requestId },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const statusData = statusRes.data;
      console.log(`[VisitasFF] Status:`, statusData);

      if (statusData.error || statusData.status === '404') {
        throw new Error('Conta não encontrada. Verifique o ID e tente novamente.');
      }

      if (statusData.status === 'completed') {
        return true;
      }

      // Ainda processando, espera 3s e tenta de novo
      await new Promise(resolve => setTimeout(resolve, 3000));
      return checkStatus(elapsed + 3);
    }

    await checkStatus();

    return res.json({
      success: true,
      message: '✅ Visitas enviadas com sucesso! Receba visitas novamente em 10 minutos!'
    });

  } catch (err) {
    console.error(`[VisitasFF] Erro:`, err.message || err);
    return res.status(500).json({ error: err.message || 'Erro ao processar visitas.' });
  }
});

router.get('/perfilff', async (req, res) => {
  const playerId = req.query.id;
  if (!playerId) {
    return res.status(400).json({ status: 'error', message: 'Parâmetro ?id= é obrigatório' });
  }

  const perfilUrl = `https://www.freefiremania.com.br/perfil/${playerId}.html`;
  const skinUrl = `https://www.freefiremania.com.br/paginas/dados-jogador-api-roupas.php?tag=${playerId}`;

  try {
    // Buscar HTML do perfil
    const { data: html } = await axios.get(perfilUrl);
    const $ = cheerio.load(html);

    // Extrair bio pelo atributo data-original-bio
    const bio = $('#bioContent').attr('data-original-bio') || null;

    // Função auxiliar para extrair texto depois do <strong>
    const getLiValue = (label) => {
      const li = $(`li strong:contains("${label}")`).first().parent();
      if (!li) return null;
      // Pega só o texto dos nós tipo texto, sem filhos <small> etc
      const text = li.contents().filter((_, el) => el.type === 'text').text().trim();
      return text || null;
    };

    // Extrai dados básicos
    const nome = $('.perfil-container .nome').text().trim() || null;
    const guilda_nome = $('.perfil-container .guilda').text().trim() || null;
    const avatar = $('.perfil-container img.avatar').attr('src');
    const banner = $('.perfil-container img.banner-fundo').attr('src');

    const id = getLiValue('ID:') || playerId;
    const data_criacao = getLiValue('Conta criada em:');
    const ultimo_login = getLiValue('Último login em:');
    const versao = getLiValue('Versão do jogo:');
    const likes_text = getLiValue('Likes:');
    const passe_booyah = getLiValue('Passe Booyah:');
    const regiao = getLiValue('Região:');
    const guilda = guilda_nome === 'Sem guilda' ? null : guilda_nome;

    // Extrair level e experiência separados
    const levelLi = $('li strong:contains("Level:")').first().parent();
    const level = levelLi.contents()
      .filter((_, el) => el.type === 'text')
      .text().trim() || null;

    const expMatch = levelLi.find('small').text().match(/Exp:\s*([\d.]+)/);
    const experiencia = expMatch ? expMatch[1].replace(/\./g, '') : null;

    // Extrai likes (apenas números)
    const likes = likes_text ? likes_text.replace(/\D/g, '') : null;

    // Extrai roupas (skins)
    let roupas = [];
    try {
      const { data: skinHtml } = await axios.get(skinUrl);
      const $$ = cheerio.load(skinHtml);

      $$('div.d-flex.flex-wrap.justify-content-start img').each((_, el) => {
        const src = $$(el).attr('src');
        if (src) {
          const urlCompleta = src.startsWith('http')
            ? src
            : 'https://www.freefiremania.com.br/' + src.replace(/^\/+/, '');
          roupas.push(urlCompleta);
        }
      });
    } catch (e) {
      console.warn('[perfilff] ⚠️ Erro ao buscar roupas:', e.message);
      roupas = false;
    }

    // Retorna JSON final
    return res.json({
      status: 'success',
      perfil: {
        id,
        nome,
        nick: nome,
        guilda,
        level,
        experiencia,
        bio,
        avatar: avatar ? 'https://www.freefiremania.com.br/' + avatar.replace(/^\/+/, '') : null,
        banner: banner ? 'https://www.freefiremania.com.br/' + banner.replace(/^\/+/, '') : null,
        roupas,
        data_criacao,
        ultimo_login,
        versao,
        likes,
        passe_booyah,
        regiao,
      }
    });

  } catch (err) {
    console.error('[perfilff] ❌ Erro:', err.message);
    return res.status(500).json({ status: 'error', message: 'Erro ao buscar o perfil no site' });
  }
});

router.get('/guildaff', async (req, res) => {
  const guildId = req.query.id;

  if (!guildId) {
    console.warn('[guildaff] ❌ Parâmetro ?id= ausente');
    return res.status(400).json({ status: 'error', message: 'Parâmetro ?id= é obrigatório' });
  }

  const url = `https://www.freefiremania.com.br/guilda-ff/${guildId}.html`;
  console.log(`[guildaff] 🔍 Buscando: ${url}`);

  try {
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);
    console.log('[guildaff] ✅ Página carregada');

    const getText = (label) => {
      const li = $(`li:contains("${label}")`).first();
      return li.length ? li.text().split(':').slice(1).join(':').trim() : null;
    };

    const nome = getText('Nome');
    const id_guilda = getText('ID da Guilda');
    const data_criacao = getText('Data de Criação');
    const regiao = getText('Região');
    const slogan = getText('Slogan');
    const nivel = getText('Nível da Guilda');
    const capacidade = getText('Capacidade');
    const membros = getText('Membros Atuais');
    const capitao_texto = getText('Capitão');
    const verificada = getText('Verificada');
    const inatividade = getText('Inatividade');
    const recrutamento = getText('Tipo de Recrutamento');

    const capitao = {
      id: capitao_texto?.match(/\d+/)?.[0] || null,
      link: $('a[href*="/perfil/"]').first().attr('href') || null
    };

    // Vice-capitães
    const vice_capitaes = [];
    $('section:contains("Vice-Capitães") ul.list-group li').each((_, el) => {
      const link = $(el).find('a').attr('href');
      const id = $(el).text().match(/\d+/)?.[0];
      if (id) {
        vice_capitaes.push({ id, link });
      }
    });

    // Etiquetas
    const etiquetas = [];
    $('h4:contains("Etiquetas")').next('ul').find('li').each((_, el) => {
      etiquetas.push($(el).text().trim());
    });

    // Idade da guilda
    const idade_descricao = $('section.bg-warning p').text().trim();

    const resultado = {
      status: 'success',
      guilda: {
        id: guildId,
        nome,
        id_guilda,
        data_criacao,
        regiao,
        slogan,
        nivel,
        capacidade,
        membros,
        capitao,
        vice_capitaes,
        verificada,
        inatividade,
        recrutamento,
        etiquetas,
        idade_descricao
      }
    };

    console.log('[guildaff] 🟢 Sucesso:', resultado.guilda.nome || 'Guilda encontrada');
    return res.json(resultado);
  } catch (error) {
    console.error('[guildaff] ❌ Erro ao buscar dados da guilda:', error.message);
    return res.status(500).json({ status: 'error', message: 'Erro ao buscar a guilda no site' });
  }
});
// /primeff
router.get('/primeff', async (req, res) => {
  const id = req.query.id?.trim();
  console.log(`[PrimeFF] Recebido id: ${id}`);

  if (!id || !/^\d+$/.test(id)) {
    console.log('[PrimeFF] ID inválido');
    return res.status(400).json({ error: 'ID inválido. Exemplo: /primeff?id=123456' });
  }

  try {
    const { data } = await axios.post(
      'https://freefirejornal.com/ffstats/prime.php',
      new URLSearchParams({ idjogador: id }).toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    console.log('[PrimeFF] Dados recebidos:', data);

    if (data.error) {
      console.log('[PrimeFF] Erro retornado da API:', data.error);
      return res.status(400).json({ error: data.error });
    }

    // Remove o campo ultima_vez da resposta
    res.json({
      success: true,
      id,
      addconta: data.addconta || null,
      privilegios: Array.isArray(data.privilegios) ? data.privilegios : []
    });
  } catch (err) {
    console.error('[PrimeFF] Erro ao verificar status Prime:', err);
    res.status(500).json({ error: 'Erro ao verificar status Prime.' });
  }
});

router.get('/infoff', async (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'O parâmetro "id" é obrigatório.' });
    }

    try {
        const response = await axios.get(`https://system.ffgarena.cloud/api/info_avatar?uid=${id}&region=br`);

        // Verifica se retornou erro
        if (response.data.error) {
            return res.status(404).json({
                error: response.data.error,
                message: response.data.message || 'Jogador não encontrado.'
            });
        }

        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao buscar informações do jogador.',
            details: error.message
        });
    }
});


router.get('/infoff3', async (req, res) => { try { const id = req.query.id; if (!id) { console.log('Parâmetro id ausente na requisição'); return res.json({ status: false, resultado: 'Cadê o parâmetro id?' }); }

console.log(`[INFOID]: ID = ${id}`);

try {
  // Envia a mensagem para o grupo com o comando Get +id
  await client.sendMessage(grupoChatId, { message: `Get ${id}` });
  console.log(`Mensagem de infoid enviada para o grupo ${grupoChatId}: Get ${id}`);

  const handleResponse = new Promise((resolve, reject) => {
    const eventHandler = async (event) => {
      try {
        const message = event.message;
        console.log('Nova mensagem recebida:', message);

        if (message && message.message) {
          const resposta = message.message;
          resolve({ status: true, resultado: resposta });
          client.removeEventHandler(eventHandler);
        }
      } catch (err) {
        console.error('Erro ao processar nova mensagem:', err);
      }
    };

    client.addEventHandler(eventHandler, new NewMessage({}));

    setTimeout(() => {
      reject({ status: false, resultado: 'Tempo de espera esgotado' });
      client.removeEventHandler(eventHandler);
    }, 30000); // Tempo máximo de espera: 30 segundos
  });

  try {
    const resultado = await handleResponse;
    console.log('Resposta recebida antes do timeout:', resultado);
    return res.json(resultado);
  } catch (error) {
    console.error('Erro ao receber a resposta:', error);
    return res.json({ status: false, resultado: 'Não foi possível obter a informação.' });
  }
} catch (e) {
  console.error('Erro ao enviar a mensagem de infoid ou processar a resposta:', e);
  if (!res.headersSent) {
    return res.json({ status: false, resultado: 'Erro ao tentar obter a informação.' });
  }
}

} catch (err) { console.error('Erro na rota /infoid:', err); return res.json({ status: false, resultado: 'Erro interno do servidor.' }); } });


router.get('/visitasff2', async (req, res) => { try { const id = req.query.id; if (!id) { console.log('Parâmetro id ausente na requisição'); return res.json({ status: false, resultado: 'Cadê o parâmetro id?' }); }

console.log(`[VISITAS]: ID = ${id}`);

try {
  await client.sendMessage(grupoChatId, { message: '/visit' });
  console.log('Mensagem enviada: /visit');

  const handleResponse = new Promise((resolve, reject) => {
    let step = 0;

    const eventHandler = async (event) => {
      try {
        const message = event.message?.message;
        console.log('Nova mensagem recebida:', message);

        if (!message) return;

        if (step === 0 && message.includes('Por favor, envie o UID do jogador')) {
          await client.sendMessage(grupoChatId, { message: id });
          console.log(`UID enviado: ${id}`);
          step++;
        } else if (step === 1 && message.includes('Agora, envie a quantidade de visitas')) {
          await client.sendMessage(grupoChatId, { message: '300' });
          console.log('Quantidade de visitas enviada: 300');
          step++;
        } else if (step === 2 && message.includes('✅ Sucesso!')) {
          console.log('Visitas enviadas com sucesso:', message);
          resolve({ status: true, resultado: message });
          client.removeEventHandler(eventHandler);
        }
      } catch (err) {
        console.error('Erro ao processar nova mensagem:', err);
      }
    };

    client.addEventHandler(eventHandler, new NewMessage({}));

    setTimeout(() => {
      reject({ status: false, resultado: 'Tempo de espera esgotado' });
      client.removeEventHandler(eventHandler);
    }, 30000);
  });

  try {
    const resultado = await handleResponse;
    console.log('Resposta recebida antes do timeout:', resultado);
    return res.json(resultado);
  } catch (error) {
    console.error('Erro ao receber a resposta:', error);
    return res.json({ status: false, resultado: 'Não foi possível registrar as visitas.' });
  }
} catch (e) {
  console.error('Erro ao enviar mensagens ou processar resposta:', e);
  if (!res.headersSent) {
    return res.json({ status: false, resultado: 'Erro ao tentar registrar as visitas.' });
  }
}

} catch (err) { console.error('Erro na rota /visitasid:', err); return res.json({ status: false, resultado: 'Erro interno do servidor.' }); } });



// Rota /infoff
router.get('/infoff2', async (req, res) => {
  const id = req.query.id;

  if (!id) {
    return res.status(400).json({ error: 'Parâmetro "id" é obrigatório' });
  }

  try {
    const response = await axios.get(`https://kryptorinfo.squareweb.app/api/player_info`, {
      params: {
        uid: id,
        region: 'br'
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados da API externa', details: error.message });
  }
});


// Função para buscar wallpapers
async function wallpaper3(query) {
    return new Promise((resolve, reject) => {
        axios.get('https://www.wallpaperflare.com/search?wallpaper=' + query, {
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "_ga=GA1.2.863074474.1624987429; _gid=GA1.2.857771494.1624987429; __gads=ID=84d12a6ae82d0a63-2242b0820eca0058:T=1624987427:RT=1624987427:S=ALNI_MaJYaH0-_xRbokdDkQ0B49vSYgYcQ"
            }
        })
        .then(({ data }) => {
            const $ = cheerio.load(data);
            const result = [];
            $('#gallery > li > figure > a').each(function (a, b) {
                const imgSrc = $(b).find('img').attr('data-src');
                if (imgSrc) {
                    result.push(imgSrc);
                }
            });
            console.log(`Imagens encontradas: ${result.length}`);
            resolve(result);
        })
        .catch(error => {
            console.error('Erro ao buscar wallpapers:', error);
            reject({ status: 'err', message: error.message });
        });
    });
}

// Rota para obter o wallpaper
router.get('/foto', async (req, res) => {
    const { query } = req.query;
    if (!query) return res.json({ status: false, message: 'Cadê o parâmetro: query' });

    try {
        console.log(`Buscando wallpapers para: ${query}`);
        const result = await wallpaper3(query);

        if (result.length === 0) {
            console.log('Nenhum wallpaper encontrado.');
            return res.status(404).json({ status: false, message: 'Nenhum wallpaper encontrado' });
        }

        const resultado1 = result[Math.floor(Math.random() * result.length)];
        console.log(`URL do wallpaper selecionado: ${resultado1}`);

        const imageBuffer = await getImageBuffer(resultado1);
        res.type('png');
        res.send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: 'Erro interno ao processar a solicitação.' });
    }
});

router.get('/email', async (req, res) => {
    try {
        const email = req.query.email;

        if (!email) {
            console.log('Parâmetro email ausente na requisição');
            return res.json({ status: false, resultado: 'Cadê o parâmetro email?' });
        }

        console.log(`[EMAIL]: ${email}`);

        try {
            // Envia a mensagem para o grupo no Telegram com o comando /email <email>
            const sentMessage = await client.sendMessage(grupoChatId, { message: `/email ${email}` });
            console.log(`Mensagem enviada para o grupo ${grupoChatId}: /email ${email}`);

            // Espera 7 segundos antes de processar
            await new Promise(resolve => setTimeout(resolve, 7000));

            console.log('Iniciando a escuta da edição da mensagem.');

            const handleEditedResponse = new Promise((resolve, reject) => {
                const eventHandler = async (event) => {
                    try {
                        const message = event.message;
                        console.log('Nova mensagem recebida:', message);

                        // Verifica se a mensagem recebida tem o mesmo ID da mensagem original
                        if (message && message.id === sentMessage.id) {
                            const resposta = message.message;
                            resolve({ status: true, resultado: resposta });
                            client.removeEventHandler(eventHandler);
                        }
                    } catch (err) {
                        console.error('Erro ao processar mensagem editada:', err);
                    }
                };

                // Usa `NewMessage` para detectar edições, pois no gram-js não há `EditedMessage`
                client.addEventHandler(eventHandler, new NewMessage({}));

                setTimeout(() => {
                    reject({ status: false, resultado: 'Tempo de espera esgotado para a edição da mensagem' });
                    client.removeEventHandler(eventHandler);
                }, 30000); // Tempo máximo de espera: 30 segundos
            });

            try {
                const resultado = await handleEditedResponse;
                console.log('Resposta final recebida antes do timeout:', resultado);
                return res.json(resultado);
            } catch (error) {
                console.error('Erro ao receber a resposta editada:', error);
                return res.json({ status: false, resultado: 'Não foi possível obter a resposta final.' });
            }

        } catch (e) {
            console.error('Erro ao enviar a mensagem para o Telegram:', e);
            return res.json({ status: false, resultado: 'Erro ao tentar enviar a informação para o Telegram.' });
        }

    } catch (err) {
        console.error('Erro na rota /email:', err);
        return res.json({ status: false, resultado: 'Erro interno do servidor.' });
    }
});

// Função para buscar áudio no MyInstants
async function myinstants(query) {
    const user = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
    const html = await axios.get('https://www.myinstants.com/pt/search/?name=' + encodeURIComponent(query), {
        headers: {
            'user-Agent': user,
            'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
        }
    }).then(response => response.data);

    const $ = cheerio.load(html);
    const results = [];
    $('#instants_container > .instants.result-page > .instant').each((i, elem) => {
        const title = $(elem).find('button.small-button').attr('title').replace("Tocar o som de ", '');
        const audio = "https://www.myinstants.com" + $(elem).find('button.small-button').attr('onclick').split("play('")[1].split("',")[0];
        results.push({ title, audio });
    });
    return results;
}



// Define a rota para buscar áudios
router.get('/audiomeme', async (req, res) => {
    const { query } = req.query;
    
    if (!query) {
        return res.status(400).json({ status: false, message: 'O parâmetro query é obrigatório.' });
    }
    
    try {
        const results = await myinstants(query);
        return res.json({ status: true, results });
    } catch (error) {
        console.error('Erro ao buscar áudio:', error);
        return res.status(500).json({ status: false, message: 'Erro no servidor interno.' });
    }
});

router.get('/horoscopo/:signo', async (req, res) => {
    const signo = req.params.signo.toLowerCase();
    const url = `https://joaobidu.com.br/horoscopo-do-dia/horoscopo-do-dia-para-${signo}/`;

    try {
        // Fetch HTML
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        // Extract horoscope
        const horoscopo = $('.zoxrel.left > p').first().text().trim();

        // Extract Palpite and Cor
        const palpiteText = $('.zoxrel.left').text().match(/Palpite do dia: ([\d\s,]+)/);
        const corText = $('.zoxrel.left').text().match(/Cor do dia: (\w+)/);
        const palpite = palpiteText ? palpiteText[1].trim() : "Não disponível";
        const cor = corText ? corText[1].trim() : "Não disponível";

        // Function to extract text by label
        const extractInfo = (label) => {
            const labelElement = $(`h3:contains(${label}) b`);
            const text = labelElement.length > 0 ? labelElement.parent()[0].nextSibling.nodeValue.trim() : "Não disponível";
            return text || "Não disponível";
        };

        // Extract additional information
        const elemento = extractInfo('Elemento:');
        const regente = extractInfo('Regente:');
        const flor = extractInfo('Flor:');
        const metal = extractInfo('Metal:');
        const pedra = extractInfo('Pedra:');
        const amuletos = extractInfo('Amuletos:');
        const perfume = extractInfo('Perfume:');
        const anjo = extractInfo('Anjo:');
        const orixa = extractInfo('Orixá:');
        const santoProtetor = extractInfo('Santo Protetor:');

        // Respond with JSON
        res.json({
            signo: signo,
            horoscopo: horoscopo || "Não disponível",
            palpite,
            cor,
            elemento,
            regente,
            flor,
            metal,
            pedra,
            amuletos,
            perfume,
            anjo,
            orixa,
            santoProtetor
        });

    } catch (error) {
        console.error("Erro ao buscar informações do horóscopo:", error.message);

        // Respond with a more detailed error message
        res.status(500).json({
            error: "Erro ao buscar informações do horóscopo.",
            details: error.message
        });
    }
});

router.get('/printsite', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) return res.json({ status: false, message: 'Faltando parâmetro url' });

        const printsiteLink = `https://api.bronxyshost.com.br/api-bronxys/print_de_site?url=${encodeURIComponent(url)}&apikey=tiomaker8930`;
        const response = await axios.get(printsiteLink, { responseType: 'arraybuffer' });

        res.set('Content-Type', 'image/png'); // Ajuste o tipo conforme o formato da imagem
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        console.error('Erro ao obter print do site:', error);
        res.status(500).send('Erro ao obter print do site');
    }
});



// Rota GET para traduzir textos
router.get('/traduzir', async (req, res) => {
    const { texto, langFrom = 'en', langTo = 'pt' } = req.query;

    if (!texto) {
        return res.status(400).json({ error: 'Parâmetro "texto" é obrigatório.' });
    }

    try {
        // Requisição à API MyMemory para tradução
        const response = await axios.get('https://api.mymemory.translated.net/get', {
            params: {
                q: texto,
                langpair: `${langFrom}|${langTo}`
            }
        });

        const translation = response.data.responseData.translatedText;
        res.json({ original: texto, translation });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao traduzir o texto.' });
    }
});


router.get('/figu_emoji', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 102);
        const imageUrl = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/Figurinha-emoji/${rnd}.webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/figu_flork2', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 102);
        const imageUrl = `https://raw.githubusercontent.com/Scheyot2/anya-bot/master/Figurinhas/figu_flork/${rnd}.webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/figu_aleatorio', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 8051);
        const imageUrl = `https://raw.githubusercontent.com/badDevelopper/Testfigu/master/fig (${rnd}).webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/figu_memes', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 109);
        const imageUrl = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/Figurinha-memes/${rnd}.webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/figu_anime', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 109);
        const imageUrl = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-anime/${rnd}.webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/figu_coreana', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 43);
        const imageUrl = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-coreana/${rnd}.webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/figu_bebe', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 17);
        const imageUrl = `https://raw.githubusercontent.com/badDevelopper/Apis/master/pack/figbebe/${rnd}.webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/figu_desenho', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 50);
        const imageUrl = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-desenho/${rnd}.webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/figu_animais', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 50);
        const imageUrl = `https://raw.githubusercontent.com/badDevelopper/Apis/master/pack/figanimais/${rnd}.webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/figu_engracada', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 25);
        const imageUrl = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-engracadas/${rnd}.webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/figu_raiva', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 25);
        const imageUrl = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-raiva/${rnd}.webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});

router.get('/figu_roblox', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 25);
        const imageUrl = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-roblox/${rnd}.webp`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('webp').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});



router.get('/filme', async (req, res) => {
    try {
        const { nome } = req.query;
        if (!nome) return res.json({ status: false, message: 'Faltando parâmetro nome' });

        const movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(nome)}&language=pt`);
        const movie = movieInfo.data.results[0];
        const ImageMovieLink = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

        res.json({
            status: 'online',
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
        console.error(e);
        res.status(500).json({
            status: false,
            message: 'Erro ao processar a solicitação',
            error: e.message
        });
    }
});


router.get('/serie', async (req, res) => {
    try {
        const { nome } = req.query;
        if (!nome) return res.json({ status: false, message: 'Faltando parâmetro nome' });

        const serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(nome)}&language=pt`);
        const serie = serieInfo.data.results[0];
        const ImageSerieLink = `https://image.tmdb.org/t/p/original${serie.backdrop_path}`;

        res.json({
            status: 'online',
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
        console.error(e);
        res.status(500).json({
            status: false,
            message: 'Erro ao processar a solicitação',
            error: e.message
        });
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

router.get('/fundodatela', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ status: false, mensagem: 'O parâmetro "query" é obrigatório.' });
  }

  try {
    const response = await axios.get(`https://https://api.nexfuture.com.br/api/pesquisa/wallpaper?query=${query}`);

    if (response.data.status) {
      // Filtrar apenas URLs válidas
      const validUrls = response.data.resultado.filter(url => url !== null);
      res.json({ status: true, resultado: validUrls });
    } else {
      res.json({ status: false, mensagem: 'Nenhum resultado encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    res.status(500).json({ status: false, mensagem: 'Erro interno do servidor.' });
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

router.get('/twitter', async (req, res) => {
  try {
    const link = req.query.link;
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


router.get('/mercadolivre2', async (req, res) => {
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

router.get('/animesfire', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: "Por favor, forneça o nome do anime para pesquisa." });
    }

    async function buscarAnimesFire(nomeAnime) {
        try {
            const url = `https://animefire.net/pesquisar/${encodeURI(nomeAnime.toLowerCase().replaceAll(' ', '-'))}`;
            
            const response = await axios.get(url, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Mobile Safari/537.36",
                    "Cookie": "a=JvTevu353yc2390gXtq7FVvF7TfRZfos; sid=3bFGrp0wysJs82nHdQTevzpY8Xl-bSKaFx9B-Ez1AlV%2CXuoQsG9hEJ4N8-oSzG7n;"
                }
            });

            const $ = cheerio.load(response.data);
            const dados = [];

            $('article[class="card cardUltimosEps"]').each((i, e) => {
                const imagem = $(e).find('img').attr('data-src');
                const imagemAltaQualidade = imagem ? imagem.replace('/thumb/', '/') : null;

                dados.push({
                    titulo: $(e).find('h3').text(),
                    imagem: imagemAltaQualidade,
                    link: $(e).find('a').attr('href')
                });
            });

            if (dados.length === 0) {
                throw new Error("Nenhum anime encontrado. Tente novamente com outro nome.");
            }

            return dados;
        } catch (error) {
            throw new Error(`Erro ao buscar no AnimesFire: ${error.message}`);
        }
    }

    try {
        const resultado = await buscarAnimesFire(query);
        res.json({ status: "sucesso", resultado });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



router.get('/aptoide', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: "Por favor, forneça o nome do aplicativo para pesquisa." });
    }

    async function buscarAptoide(nomeApp) {
        try {
            const aptoideResponse = await axios.get(`https://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(nomeApp)}&trusted=true`);

            if (aptoideResponse.data.datalist.total === 0) {
                throw new Error("Nenhum aplicativo encontrado para essa pesquisa.");
            }

            const appData = aptoideResponse.data.datalist.list[0];
            const appSize = (appData.size / 1048576).toFixed(1);

            const linkDownload = `https://tinyurl.com/api-create.php?url=${appData.file.path_alt}`;
            
            return {
                nome: appData.name,
                tamanho: `${appSize} MB`,
                desenvolvedor: appData.store.name,
                downloads: appData.stats.downloads,
                link: linkDownload,
                imagem: appData.graphic || null
            };

        } catch (error) {
            throw new Error(`Erro ao buscar no Aptoide: ${error.message}`);
        }
    }

    try {
        const resultado = await buscarAptoide(query);
        res.json({ status: "sucesso", resultado });
    } catch (error) {
        res.status(500).json({ error: error.message });
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
router.get('/igstalk2', async (req, res) => {
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
// Endpoint para baixar áudio a partir de uma URL
router.get('/ytmp3-v2', async (req, res) => {
    const { query } = req;
    const audioUrl = query.url; // Exemplo: /ytmp3?url=https://youtu.be/nome_do_audio

    if (!audioUrl) {
        return res.status(400).json({ error: 'A URL do áudio é obrigatória' });
    }

    try {
        const apiUrl = `https://api.giftedtech.web.id/api/download/ytmp3?apikey=gifted&url=${encodeURIComponent(audioUrl)}`;

        // Requisição à API para baixar o áudio
        const response = await axios.get(apiUrl);

        if (response.data.success) {
            const downloadUrl = response.data.result.download_url;

            // Redirecionar para o link de download do áudio
            return res.redirect(downloadUrl);
        } else {
            return res.status(500).json({ error: 'Erro ao baixar o áudio' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});

// Endpoint para baixar vídeo a partir de uma URL
router.get('/ytmp4-v2', async (req, res) => {
    const { query } = req;
    const videoUrl = query.url; // Exemplo: /ytmp4?url=https://youtu.be/nome_do_video

    if (!videoUrl) {
        return res.status(400).json({ error: 'A URL do vídeo é obrigatória' });
    }

    try {
        const apiUrl = `https://api.giftedtech.web.id/api/download/ytmp4?apikey=gifted&url=${encodeURIComponent(videoUrl)}`;

        // Requisição à API para baixar o vídeo
        const response = await axios.get(apiUrl);

        if (response.data.success) {
            const downloadUrl = response.data.result.download_url;

            // Redirecionar para o link de download do vídeo
            return res.redirect(downloadUrl);
        } else {
            return res.status(500).json({ error: 'Erro ao baixar o vídeo' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});

//play para baixar musica pelo nome

router.get('/play4', async (req, res) => {
    const { query } = req; // O nome da música será passado como parâmetro de consulta
    const musicName = query.nome; // Exemplo: /play?nome=nome_da_musica

    if (!musicName) {
        return res.status(400).json({ error: 'Nome da música é obrigatório' });
    }

    try {
        // Buscar o vídeo no YouTube pelo nome da música
        const searchResults = await search(musicName);
        
        if (!searchResults || searchResults.videos.length === 0) {
            return res.status(404).json({ error: 'Nenhum vídeo encontrado' });
        }

        // Pegar o primeiro vídeo da lista de resultados
        const videoId = searchResults.videos[0].videoId; // Obtém o ID do vídeo
        const apiUrl = `https://api.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=https://youtu.be/${videoId}`;

        // Requisição à API para baixar o áudio
        const response = await axios.get(apiUrl);

        if (response.data.success) {
            const downloadUrl = response.data.result.download_url;

            // Redirecionar para o link de download
            return res.redirect(downloadUrl);
        } else {
            return res.status(500).json({ error: 'Erro ao baixar a música' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
});

//rota para baixar video pelo nome
router.get('/playvideo4', async (req, res) => {
    const { query } = req; // O nome da música será passado como parâmetro de consulta
    const musicName = query.nome; // Exemplo: /playvideo?nome=nome_da_musica

    if (!musicName) {
        return res.status(400).json({ error: 'Nome da música é obrigatório' });
    }

    try {
        // Buscar o vídeo no YouTube pelo nome da música
        const searchResults = await search(musicName);
        
        if (!searchResults || searchResults.videos.length === 0) {
            return res.status(404).json({ error: 'Nenhum vídeo encontrado' });
        }

        // Pegar o primeiro vídeo da lista de resultados
        const videoId = searchResults.videos[0].videoId; // Obtém o ID do vídeo
        const apiUrl = `https://api.giftedtech.web.id/api/download/dlmp4?apikey=gifted&url=https://youtu.be/${videoId}`;

        // Requisição à API para baixar o vídeo
        const response = await axios.get(apiUrl);

        if (response.data.success) {
            const downloadUrl = response.data.result.download_url;

            // Redirecionar para o link de download
            return res.redirect(downloadUrl);
        } else {
            return res.status(500).json({ error: 'Erro ao baixar o vídeo' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação' });
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
router.get('/explanadas', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'explanadas.json');

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
        const rnd = Math.floor(Math.random() * 20);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/nsfw/gif/masturbation/%20${rnd}.gif`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('gif').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
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
router.get('/akiyama', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'akiyama.json');

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

router.get('/ana', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'ana.json');

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
router.get('/anjing', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'anjing.json');

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

router.get('/asuna', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'asuna.json');

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

router.get('/ayuzawa', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'ayuzawa.json');

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

router.get('/blackpink', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'blackpink.json');

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

router.get('/bdsm2', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'bdsm.json');

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

router.get('/blowjob2', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'blowjob.json');

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

router.get('/cecan', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'cecan.json');

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
router.get('/chiho', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'chiho.json');

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

router.get('/chitoge', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'chitoge.json');

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

router.get('/cogan', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'cogan.json');

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

router.get('/cuckold', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'cuckold.json');

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
router.get('/doraemom', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'doraemom.json');

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
router.get('/eba', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'eba.json');

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


router.get('/gangbang2', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'gangbang.json');

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
router.get('/gremory', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'gremory.json');

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

router.get('/hekel', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'hekel.json');

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
router.get('/hestia', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'hestia.json');

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
router.get('/inori', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'inori.json');

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
router.get('/isuzu', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'isuzu.json');

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
router.get('/jeni', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'jeni.json');

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
router.get('/jiso', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'jiso.json');

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
router.get('/justina', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'justina.json');

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
router.get('/kaga', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'kaga.json');

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
router.get('/kagura', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'kagura.json');

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
router.get('/kakashi', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'kakashi.json');

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
router.get('/kaori', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'kaori.json');

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
router.get('/kartun', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'kartun.json');

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
router.get('/katakata', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'katakata.json');

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
router.get('/kaneki', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'kaneki.json');

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
router.get('/kotori', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'kotori.json');

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
router.get('/kpop', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'kpop.json');

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
router.get('/kucing', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'kucing.json');

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
router.get('/kurumi', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'kurumi.json');

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
router.get('/lisa', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'lisa.json');

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
router.get('/megumin', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'megumin.json');

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
router.get('/miku', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'miku.json');

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
router.get('/mobil', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'mobil.json');

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
router.get('/montor', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'montor.json');

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
router.get('/mountain', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'mountain.json');

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
router.get('/naruto', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'naruto.json');

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
router.get('/nekonime', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'nekonime.json');

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
router.get('/pentol', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'pentol.json');

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
router.get('/profil', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'profil.json');

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
router.get('/programing', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'programing.json');

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
router.get('/pugb', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'pugb.json');

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
router.get('/ryujin', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'ryujin.json');

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
router.get('/shina', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'shina.json');

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
router.get('/shinka', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'shinka.json');

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
router.get('/shinomiya', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'shinomiya.json');

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

router.get('/shizuka', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'shizuka.json');

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
router.get('/tatasurya', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'tatasurya.json');

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
router.get('/tejina', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'tejina.json');

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
router.get('/toukachan', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'toukachan.json');

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
router.get('/yotsuba', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'yotsuba.json');

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
router.get('/yulibocil', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'yulibocil.json');

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
router.get('/yuki', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'yuki.json');

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
router.get('/yuri', async (req, res) => {
    try {
        // Caminho para o arquivo JSON contendo as imagens
        const filePath = path.join(__dirname, 'dados', 'yuri.json');

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

router.get('/bsdm', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 22);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/nsfw/gif/bsdm/%20${rnd}.gif`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('gif').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/blowjob', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 2);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/nsfw/gif/blowjob/%20${rnd}.gif`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('gif').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/gangbang', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 20);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/nsfw/gif/gangbang/%20${rnd}.gif`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('gif').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/glasses', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 20);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/nsfw/gif/glasses/%20${rnd}.gif`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('gif').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/panties', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 20);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/nsfw/gif/panties/%20${rnd}.gif`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('gif').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/orgy', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 19);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/nsfw/gif/orgy/%20${rnd}.gif`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('gif').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
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
        const rnd = Math.floor(Math.random() * 20);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/nsfw/gif/tentacles/%20${rnd}.gif`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('gif').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
    }
});
router.get('/foot', async (req, res) => {
    try {
        const rnd = Math.floor(Math.random() * 17);
        const imageUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/nsfw/gif/foot/%20${rnd}.gif`;
        const imageBuffer = await getImageBuffer(imageUrl);
        res.type('gif').send(imageBuffer);
    } catch (error) {
        console.error('Erro no endpoint:', error);
        res.status(500).json({ status: false, mensagem: "Erro interno ao processar a solicitação." });
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



