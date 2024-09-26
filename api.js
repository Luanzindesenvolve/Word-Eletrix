const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const search = require('yt-search');
const yt = require('ytdl-core');
const criador = 'World Ecletix';
const cors = require('cors');
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
  wikimedia,
  snapsave,
  searching, 
  spotifydl
} = require('./config.js'); // arquivo que ele puxa as funções 


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

// Rota para o comando 'aplaca'
router.get('/aplaca', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send(`${prefix}aplaca e digite o seu nome`);
    if (text.length > 20) return res.status(400).send('O texto é longo, até 20 caracteres');

    const url = `https://553555.sirv.com/Images/IMG-20231205-WA0153.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-34%25&text.0.position.y=-4%25&text.0.size=37&text.0.color=f00000`;
    await sendImage(req, res, url, ' *Plaquinha feita*');
});

// Rota para o comando 'frankyplaq'
router.get('/frankyplaq', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send(`${prefix}frankyplaq e digite o seu nome`);
    if (text.length > 17) return res.status(400).send('O texto é longo, até 17 caracteres');

    const url = `https://553555.sirv.com/Images/1200x675.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-72%25&text.0.position.y=-5%25&text.0.size=14&text.0.color=ffffff&text.0.font.family=Alice`;
    await sendImage(req, res, url, ' *Plaquinha feita COM SUCESSO*');
});

// Rota para o comando 'ata'
router.get('/ata', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send(`${prefix}ata e digite o seu nome`);
    if (text.length > 18) return res.status(400).send('O texto é longo, até 18 caracteres');

    const url = `https://553555.sirv.com/Images/WhatsApp%20Image%202023-12-06%20at%2012.04.15.jpeg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-28%25&text.0.position.y=-75%25&text.0.size=21&text.0.color=ffffff&text.0.font.family=Monda&text.0.font.style=italic`;
    await sendImage(req, res, url, ' *Plaquinha feita COM SUCESSO*');
});

// Rota para o comando 'figurinhas'
router.get('/figurinhas', async (req, res) => {
    const quantity = parseInt(req.query.quantity, 10);
    if (isNaN(quantity) || quantity <= 0) return res.status(400).send(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 7`);
    if (quantity >= 100) return res.status(400).send("Coloque abaixo de 100...");

    // Simulando o envio de figurinhas (a lógica de envio pode precisar ser ajustada conforme sua implementação)
    for (let i = 0; i < quantity; i++) {
        const rnd = Math.floor(Math.random() * 8051);
        const url = `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp`;
        const buffer = await getBuffer(url);
        res.write(buffer);
        await new Promise(resolve => setTimeout(resolve, 680)); // Simulando atraso
    }
    res.end();
});

// Rota 'plaqu' para gerar imagem com texto personalizado
router.get('/plaqu', async (req, res) => {
    const { text } = req.query;

    if (!text) return res.status(400).send('Cadê o texto?');
    if (text.length > 25) return res.status(400).send('O texto é longo.');

    const bufferUrl = `https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${encodeURIComponent(text)}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`;

    try {
        const buffer = await getBuffer(bufferUrl);
        res.set('Content-Type', 'image/jpeg');
        res.send(buffer);
    } catch (error) {
        res.status(500).send('Erro ao gerar a imagem.');
    }
});


// Função auxiliar para gerar a URL da imagem
function getImageUrl(type, text) {
    switch (type) {
        case 'luffy':
            return `https://553555.sirv.com/Images/IMG-20231207-WA0021.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-72%25&text.0.position.y=-42%25&text.0.size=17&text.0.color=000000&text.0.opacity=83&text.0.font.family=Ruda&text.0.font.style=italic&text.0.background.opacity=100&text.0.outline.blur=100`;
        case 'baratameme':
            return `https://553555.sirv.com/Images/IMG-20231207-WA0041.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-45%25&text.0.position.y=-20%25&text.0.size=15&text.0.color=000000&text.0.font.family=Tinos&text.0.font.style=italic&text.0.background.opacity=42&text.0.outline.blur=33&text.0.outline.opacity=69`;
        case 'lv':
            return `https://553555.sirv.com/Images/WhatsApp%20Image%202023-12-06%20at%2013.19.09.jpeg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-42%25&text.0.position.y=-36%25&text.0.size=21&text.0.color=ffffff&text.0.font.family=Playfair%20Display%20SC&text.0.font.weight=600&text.0.font.style=italic&text.0.background.opacity=100&text.0.outline.blur=100`;
        default:
            throw new Error('Tipo de imagem não reconhecido');
    }
}

// Rota para o comando 'luffy'
router.get('/luffy', (req, res) => {
    const text = req.query.text;
    if (!text || text.length > 18) return res.status(400).send('Texto inválido ou longo demais');
    const url = getImageUrl('luffy', text);
    res.json({ image: { url }, caption: ' *Plaquinha feita COM SUCESSO*' });
});

// Rota para o comando 'baratameme'
router.get('/baratameme', (req, res) => {
    const text = req.query.text;
    if (!text || text.length > 18) return res.status(400).send('Texto inválido ou longo demais');
    const url = getImageUrl('baratameme', text);
    res.json({ image: { url }, caption: ' *Plaquinha feita COM SUCESSO*' });
});

// Rota para o comando 'lv'
router.get('/lv', (req, res) => {
    const text = req.query.text;
    if (!text || text.length > 17) return res.status(400).send('Texto inválido ou longo demais');
    const url = getImageUrl('lv', text);
    res.json({ image: { url }, caption: ' *Plaquinha feita COM SUCESSO*' });
});

// Exemplo de middleware para lidar com tempo de resposta
router.get('/ping', async (req, res) => {
  let timestampe = Date.now();
  let r = (Date.now() / 1000) - req.query.messageTimestamp;
  let uptime = process.uptime();
  let picc;

  try {
    picc = await loli.profilePictureUrl(req.query.chat, "image");
  } catch (e) {
    picc = `https://ittkimse.sirv.com/images%20(4).jpeg?text.0.text=VELOCIDADE%20DO%20BOT&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${String(r.toFixed(3))}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100`;
  }

  let thumbInfo = `
    ⏱️ *Velocidade de resposta:*  ${String(r.toFixed(3))}\n\n
    ⏰ *Tempo online: ${Math.floor(uptime)}s*\n\n
    💻 *Sistema operacional:* Linux\n
    🌀 *Versão: 4.19.0-23-amd64*
  `;

  res.json({
    image: picc,
    info: thumbInfo
  });
});

// Exemplo de rota para gerar imagem com texto
router.get('/placaloli', async (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).send("Texto não fornecido");

  if (text.length > 18) return res.status(400).send("O texto é longo, máximo 18 caracteres");

  const buffer = `https://nekobot.xyz/api/imagegen?type=kannagen&text=${text}`;
  res.json({ image: buffer, caption: 'Plaquinha feita COM SUCESSO' });
});

// Exemplo de rota para enviar uma imagem do Luffy com texto personalizado
router.get('/luffy', async (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).send("Texto não fornecido");

  if (text.length > 18) return res.status(400).send("O texto é longo, máximo 18 caracteres");

  const buffer = `https://553555.sirv.com/Images/IMG-20231207-WA0021.jpg?text.0.text=${text}&text.0.position.x=-72%25&text.0.position.y=-42%25&text.0.size=17&text.0.color=000000&text.0.opacity=83&text.0.font.family=Ruda&text.0.font.style=italic&text.0.background.opacity=100&text.0.outline.blur=100`;
  res.json({ image: buffer, caption: 'Plaquinha feita COM SUCESSO' });
});

// Outras rotas podem ser configuradas de forma semelhante



// Rota para o comando 'plaq'
router.get('/plaq', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send(`${prefix}plaq e digite o seu nome`);
    if (text.length > 15) return res.status(400).send('O texto é longo, até 15 caracteres');

    const url = `https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${encodeURIComponent(text)}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`;
    await sendImage(req, res, url, ' *Plaquinha feita*');
});

// Rota 'anime1' para gerar imagem com texto personalizado
router.get('/anime-texto', async (req, res) => {
    const { text } = req.query;
    if (!text) return res.status(400).send("Texto não fornecido");
    if (text.length > 18) return res.status(400).send("O texto é longo, máximo 18 caracteres");

    const buffer = `https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${text}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`;
    
    res.json({
        image: buffer,
        caption: 'Plaquinha feita COM SUCESSO'
    });
});

// Rota 'cria' para gerar imagem com texto personalizado
router.get('/cria', async (req, res) => {
    const { text } = req.query;
    if (!text) return res.status(400).send("Texto não fornecido");
    if (text.length > 18) return res.status(400).send("O texto é longo, máximo 18 caracteres");

    const buffer = `https://lollityp.sirv.com/venom_api.jpg?text.0.text=${text}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`;

    res.json({
        image: buffer,
        caption: 'Plaquinha feita COM SUCESSO'
    });
});


// Rota para o comando 'plaq2'
router.get('/plaq2', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send(`${prefix}plaq2 e digite o seu nome`);
    if (text.length > 10) return res.status(400).send('O texto é longo, até 10 caracteres');

    const url = `https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`;
    await sendImage(req, res, url, ' *Plaquinha feita*');
});

// Rota para o comando 'plaq3'
router.get('/plaq3', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send(`${prefix}plaq3 e digite o seu nome`);
    if (text.length > 15) return res.status(400).send('O texto é longo, até 15 caracteres');

    const url = `https://umethroo.sirv.com/bunda3.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.gravity=center&text.0.position.x=-25%25&text.0.position.y=-17%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.font.style=italic`;
    await sendImage(req, res, url, ' *Plaquinha feita*');
});

// Rota para o comando 'plaq4'
router.get('/plaq4', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send(`${prefix}plaq4 e digite o seu nome`);
    if (text.length > 15) return res.status(400).send('O texto é longo, até 15 caracteres');

    const url = `https://umethroo.sirv.com/peito1.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-48%25&text.0.position.y=-68%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`;
    await sendImage(req, res, url, ' *Plaquinha feita*');
});

// Rota para o comando 'plaq5'
router.get('/plaq5', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send(`${prefix}plaq5 e digite o seu nome`);
    if (text.length > 15) return res.status(400).send('O texto é longo, até 15 caracteres');

    const url = `https://umethroo.sirv.com/9152e7a9-7d49-48ef-b8ac-2e6149fda0b2.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-70%25&text.0.position.y=-23%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=300`;
    await sendImage(req, res, url, ' *Plaquinha feita*');
});

// Rota para o comando 'plaq6'
router.get('/plaq6', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send(`${prefix}plaq6 e digite o seu nome`);
    if (text.length > 15) return res.status(400).send('O texto é longo, até 15 caracteres');

    const url = `https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`;
    await sendImage(req, res, url, ' *Plaquinha feita*');
});

// Rota para o comando 'plaq7'
router.get('/plaq7', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send(`${prefix}plaq7 e digite o seu nome`);
    if (text.length > 15) return res.status(400).send('O texto é longo, até 15 caracteres');

    const url = `https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${encodeURIComponent(text)}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`;
    await sendImage(req, res, url, ' *Plaquinha feita*');
});



//attp

// Função auxiliar para gerar a URL da figurinha
function getStickerUrl(type, text) {
    return `https://api-duda.onrender.com/api/${type}?texto=${encodeURIComponent(text)}&apikey=@alizindev`;
}

// Rota para o comando 'attp'
router.get('/attp', (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send('Texto não fornecido');
    const url = getStickerUrl('attp', text);
    res.json({ sticker: { url } });
});

// Rota para o comando 'attp2'
router.get('/attp2', (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send('Texto não fornecido');
    const url = getStickerUrl('attp10', text);
    res.json({ sticker: { url } });
});

// Rota para o comando 'attp3'
router.get('/attp3', (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send('Texto não fornecido');
    const url = getStickerUrl('attp6', text);
    res.json({ sticker: { url } });
});

// Rota para o comando 'attp4'
router.get('/attp4', (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send('Texto não fornecido');
    const url = getStickerUrl('attp3', text);
    res.json({ sticker: { url } });
});

// Rota para o comando 'attp5'
router.get('/attp5', (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).send('Texto não fornecido');
    const url = getStickerUrl('attp9', text);
    res.json({ sticker: { url } });
});


//fim do attp


//Photooxy 
const KEY_FUT = 'live_fcf4c164846e93042456febc882849'; // Substitua pela sua chave
// Rota para obter a artilharia do Brasileirão
router.get('/artilheiro', async (req, res) => {
  try {
    const response = await axios.get('https://api.api-futebol.com.br/v1/campeonatos/10/artilharia', {
      headers: {
        'Authorization': 'Bearer live_fcf4c164846e93042456febc882849' 
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
router.get('/googlesg', async (req, res) => {
    const { texto, texto2, texto3 } = req.query; // Correção aqui

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/other-design/make-google-suggestion-photos-238.html",  [texto, texto2, texto3]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/sweet-candy', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/illuminated-metallic', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/carved-wood', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.htm", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/night-sky', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/butterfly', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/coffee-cup', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/picture-of-love', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [`${texto}`]);
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

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/art-effects/flower-typography-text-effect-164.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/harry-potter', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/under-grass', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/pubg', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/naruto', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/metallic', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/shadow-sky', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/flaming', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/efeitoneon', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/metalgold', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/cemiterio', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/shadow', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/txtborboleta', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/cup', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/harryp', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/lobometal', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('neon2', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/gameplay', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/madeira', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/florwooden', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/coffecup2', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/coffecup', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/lovemsg3', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/lovemsg2', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/lovemsg', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/narutologo', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
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

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/fire', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});

router.get('/smoke', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
    }
});
router.get('/papel', async (req, res) => {
    const texto = req.query.texto;

    if (!texto) {
        return res.json({ message: "Cade o parametro texto" });
    }

    try {
        const data = await new Maker().Ephoto360("https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html", [`${texto}`]);
        res.json({
            status: true,
            resultado: data
        });
    } catch (e) {
        res.json({ erro: 'Erro no Servidor Interno' });
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
const stringSession = new StringSession('1AQAOMTQ5LjE1NC4xNzUuNTcBuwJituCYYSVCtcOdiVS/8v8aX5fUWeCBjsBqsaLnOPWDksVGFelyYFuhREFzFGImrWinAmV6T6lDf9RJJiCi+JAeRwk3Q/RUcLk1PWsIRpv+9NxQ46B2XWuZQn+KvQZvDPYY0VoRwSqxPQoWaaZqOPSdL70sVqyCFFVs9E/PDyqATXylJSTLRrv2G7GOgUERR6aUPbbUeZJSjklv/GWOZJHqXDvcXxTcCGO6kkXBDgJccItQT2FyoOQff0YwnVEQchVTrFhpkgLw5NrTSu9IYReMgOLyQ3T5bGZ6F5/mPj5WU/hVfwzihhjEiUTzkgXo7cia+0dg2LFr0F+VBXaY0qE=');
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
          rl.question("Please enter your number: ", resolve)
        ),
      password: async () =>
        new Promise((resolve) =>
          rl.question("Please enter your password: ", resolve)
        ),
      phoneCode: async () =>
        new Promise((resolve) =>
          rl.question("Please enter the code you received: ", resolve)
        ),
      onError: (err) => console.log(err),
    });
    console.log("You should now be connected.");
    console.log(client.session.save()); // Salve esta string para evitar logins futuros

  } catch (err) {
    console.error('Erro ao iniciar o cliente Telegram:', err);
  }
})();

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
      await client.sendMessage(grupoChatId, { message: `/${type} ${query}` });
      console.log(`Mensagem de consulta enviada para o grupo ${grupoChatId}: /${type} ${query}`);

      const handleResponse = new Promise((resolve, reject) => {
  const eventHandler = async (event) => {
    try {
      const message = event.message;
      console.log('Nova mensagem recebida:', message);

      if (message && message.message && !message.message.includes("Consultando")) {
        // Ignora a mensagem de comando desconhecido
        if (message.message.includes("Comando desconhecido")) {
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
router.get('/operadora/:numero', async (req, res) => {
    const numero = req.params.numero;

    if (!numero) {
        return res.status(400).json({ error: 'Número de telefone é necessário' });
    }

    try {
        // Fazer a requisição POST
        const response = await axios.post('http://consultanumero$_telein.com.br/sistema/consulta_numero.php', null, {
            params: {
                chave: 'senhasite',
                numero: numero
            }
        });

        // Processar a resposta HTML
        const $ = cheerio.load(response.data);

        // Extrair a operadora
        const operadora = $('#resultado').text().trim();

        if (!operadora) {
            return res.status(404).json({ error: 'Operadora não encontrada' });
        }

        res.json({ numero, operadora });
    } catch (error) {
        console.error('Erro ao buscar dados:', error.message);
        res.status(500).json({ error: 'Erro ao buscar dados: ' + error.message });
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



