const axios = require("axios");
const cheerio = require("cheerio");
const request = require('request');

function decodeHtmlEntities(text) {
  const htmlEntitiesMap = {
    '&period;': '.',
    '&quest;': '?',
    '&colon;': ':',
    '&comma;': ',',
    '&excl;': '!',
    '&apos;': '\'',
    '&quot;': '"',
    '&amp;': '&'
  };

  return text.replace(/&period;|&quest;|&colon;|&comma;|&excl;|&apos;|&quot;|&amp;/g, (match) => htmlEntitiesMap[match]);
}

// Função para formatar a data
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }) + ' ' + date.toLocaleTimeString('pt-BR');
}

// Função para formatar a duração
function formatDuration(duration) {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = parseInt(match[1], 10) || 0;
  const minutes = parseInt(match[2], 10) || 0;
  const seconds = parseInt(match[3], 10) || 0;
  const totalMinutes = hours * 60 + minutes + seconds / 60;
  return totalMinutes.toFixed(2) + ' minutos';
}

async function XvideosDL(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const scriptContent = $('script[type="application/ld+json"]').html();
    const videoData = JSON.parse(scriptContent);
    const formattedData = {
      name: decodeHtmlEntities(videoData.name),
      description: decodeHtmlEntities(videoData.description),
      thumbnail: videoData.thumbnailUrl,
      uploadDate: formatDate(videoData.uploadDate),
      duration: formatDuration(videoData.duration),
      videoUrl: videoData.contentUrl
    };
    return formattedData;
  } catch (error) {
    console.error('Erro no scrapping de dados:', error);
    return null; //caso dê erro vai retornar null/vazio
  }
}

async function XvideosSearch(termo) {
  const urlBase = "https://www.xvideos.com";
  const searchTerm = termo.split(' ').join('+');
  const url = `${urlBase}?k=${searchTerm}`;
  try {
   const { data } = await axios.get(url);
   const $ = cheerio.load(data);
   const videos = [];
   $(".mozaique .thumb-block").each((i, elem) => {
      const title = $(elem).find('.title a').attr('title');
      const profile = $(elem).find('.profile-name a .name').text();
      const duration = $(elem).find('.duration').first().text().trim();
      const views = $(elem).find('.metadata .views').text().trim().split(' ')[0];
      const videoLink = urlBase + $(elem).find('.title a').attr('href');
      videos.push({title, profile, duration, views, link: videoLink});
    });
    return videos
  } catch (error) {
    console.error('Erro na pesquisa do Xvideos:', error);
    return null;
  }
}

async function XnxxDL(URL) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = $('meta[property="og:title"]').attr('content');
      const duration = $('meta[property="og:duration"]').attr('content');
      const image = $('meta[property="og:image"]').attr('content');
      const videoType = $('meta[property="og:video:type"]').attr('content');
      const videoWidth = $('meta[property="og:video:width"]').attr('content');
      const videoHeight = $('meta[property="og:video:height"]').attr('content');
      const info = $('span.metadata').text();
      const videoScript = $('#video-player-bg > script:nth-child(6)').html();
      const files = {
        low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
        high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
        HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
        thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
        thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
        thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
        thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1]};
      resolve({title, URL, duration, image, videoType, videoWidth, videoHeight, info, files});
    }).catch((err) => reject({code: 503, error: err}));
  });
};

async function XnxxSearch(query) {
  return new Promise((resolve, reject) => {
    const baseurl = 'https://www.xnxx.com';
    fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = [];
      const url = [];
      const desc = [];
      const results = [];
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb').each(function(c, d) {
          url.push(baseurl + $(d).find('a').attr('href').replace('/THUMBNUM/', '/'));
        });
      });
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb-under').each(function(c, d) {
          desc.push($(d).find('p.metadata').text());
          $(d).find('a').each(function(e, f) {
            title.push($(f).attr('title'));
          });
        });
      });
      for (let i = 0; i < title.length; i++) {
        results.push({title: title[i], info: desc[i], link: url[i]});
      }
      resolve(results);
    }).catch((err) => reject({code: 503, status: false, result: err}));
  });
};

async function dicionarioNome(nome) {
    try {
        const url = `https://www.dicionariodenomesproprios.com.br/${encodeURIComponent(nome)}`;
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        // Verificar se a página existe
        const pageTitle = $('.content-title.mt-20-md').text();
        if (pageTitle.includes('Página Não Encontrada') || $('.content-main.content-main--corp').length) {
            return 'Nome não encontrado no dicionário.';
        }
        const imageUrl = $('.content-img').attr('src');
        const significado = $('#significado').text().trim();
        const origem = $('#origem a').text().trim();
        const nomesRelacionados = $('.nomes-relacionados li').map((i, el) => $(el).text().trim()).get().join(', ');
        const locaisComNome = $('.origem-related').first().text().trim();
        const genero = $('.origem-related').eq(1).text().trim().split('\n')[0];
        const derivacoes = $('.origem-related').last().find('a').text().trim();
            return {imageUrl, significado, origem, nomesRelacionados, locaisComNome, genero, derivacoes};
    } catch (error) {
        return 'Nome não encontrado ou erro no scrapping de dados';
    }
}

async function rastrearEncomendas(id) {
  try {
    const url = `https://www.muambator.com.br/pacotes/${id}/detalhes/`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const milestones = [];
    $('.milestones li').each((i, element) => {
        const timeCount = $(element).find('small').text().trim() || "Sem informação do tempo que o objeto foi postado no Correios...";
        const datePost = $(element).find('.out').text().trim() || "Ocorreu um erro ao raspar a data e horário de postagem";
        const description = $(element).find('strong').text().trim() || "Sem descrição do local aonde foi realizada a postagem.";        
            milestones.push({datePost, description, timeCount});
    });
    return milestones;
  } catch (error) {
    console.error("Erro ao raspar informações de rastreamento:", error);
    return {message: "Ouve um erro ao raspar informações sobre o rastreamento do pedido"};
  }
}

const dafontSearch = async (query) => {
   const base = `https://www.dafont.com`
      const res = await axios.get(`${base}/search.php?q=${query}`)
      const $ = cheerio.load(res.data)
      const hasil = []
         const total = $('div.dffont2').text().replace(` fonts on DaFont for ${query}`, '') 
      $('div').find('div.container > div > div.preview').each(function(a, b) {
      $('div').find('div.container > div > div.lv1left.dfbg').each(function(c, d) { 
      $('div').find('div.container > div > div.lv1right.dfbg').each(function(e, f) { 
        let link = `${base}/` + $(b).find('a').attr('href')
       let titulo = $(d).text() 
       let estilo = $(f).text() 
         hasil.push({
             fonte: titulo, 
             style: estilo, 
             total: total,
             linkFonte: link 
           }) 
      }) 
   }) 
}) 
return hasil
}

const dafontDownload = async (link) => {
   const des = await axios.get(link)
      const sup = cheerio.load(des.data)
         let estilo = sup('div').find('div.container > div > div.lv1right.dfbg').text() 
         let titulo = sup('div').find('div.container > div > div.lv1left.dfbg').text() 
           try {
             isi = sup('div').find('div.container > div > span').text().split('.ttf')
             fileName = sup('div').find('div.container > div > span').eq(0).text().replace('ttf' , 'zip')
           } catch {
             isi = sup('div').find('div.container > div > span').text().split('.otf')
             fileName = sup('div').find('div.container > div > span').eq(0).text().replace('otf' , 'zip')
    }
         let download = 'http:' + sup('div').find('div.container > div > div.dlbox > a').attr('href')
   return {estilo, titulo, fileName, download}
}

function xvideosPorno(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://xvideosporno.blog.br/?s=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.postbox").each((_, say) => {
    var titulo = $(say).find("a").attr('title');
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img").attr('src');
    var duração = $(say).find("time.duration-top").text().trim();
    var qualidade = $(say).find("b.hd-top").text().trim();
    postagem.push({titulo: titulo, img: img, duração: duração, qualidade: qualidade, link: link});
  })
    resolve(postagem)
  }).catch(reject)
  });
}

async function pensador(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://www.pensador.com/busca.php?q=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.thought-card.mb-20").each((_, say) => {
    var frase = $(say).find("p").text().trim(); 
    var compartilhamentos = $(say).find("div.total-shares").text().trim(); 
    var autor = $(say).find("a").text().split("\n")[0];
    var imagem = $(say).find("div.sg-social-hidden.sg-social").attr('data-media');
    postagem.push({image: imagem, frase: frase, compartilhamentos: compartilhamentos});
    })
      resolve(postagem)
  }).catch(reject)
 });
}

async function buscarMenoresPrecos(produto) {
  const urlBase = 'https://www.tudocelular.com/?sName=';
  const produtoFormatado = produto.split(' ').join('+');
  const urlCompleta = urlBase + produtoFormatado;
  try {
      const response = await axios.get(urlCompleta);
      const html = response.data;
      const $ = cheerio.load(html);
      const linkProduto = $('a.item_movil').attr('href');
      console.log("Link do produto: ", linkProduto);
      // Aguarde 5 segundos antes de fazer a próxima requisição.
         return await buscarDetalhesProduto(linkProduto);

  } catch (error) {
      console.error('Erro na requisição ou Scrapping:', error);
  }
}

async function buscarDetalhesProduto(urlProduto) {
  try {
      const response = await axios.get(urlProduto);
      const htmlDetalhes = response.data;
      const $ = cheerio.load(htmlDetalhes);
      const semPromocoes = $('.price-alert-head-text').length > 0 || $('#comments > div:nth-child(2) > div > div > form > div:nth-child(5) > button').length > 0;
      if (semPromocoes) {
          return {error: "Não encontrado promoções para este produto."};
      }
      const nomeProduto = $('h2').text().trim();
      const imagemProduto = $('#sect_container aside img').attr('src');
      const descricaoProduto = $('.modeldesc').text().trim();
      const subtituloCompra = $('#comments div h4').text().trim();
      const menoresPrecos = [];
      $('#comments div').each((i, elem) => {
          if (i > 0) { // Ignorar o primeiro elemento que é o cabeçalho
              const nome = $(elem).find('a').eq(1).text().trim();
              let preco = $(elem).find('strong').text().trim();
              preco = preco.split('R$')[1] ? 'R$' + preco.split('R$')[1].trim() : preco;
              const linkCompra = $(elem).find('a.green_button').attr('href');

              if (nome !== 'VER OFERTA' && nome && preco && linkCompra) {
                  menoresPrecos.push({nome, preco, linkCompra});
              }
          }
      });
      if (menoresPrecos.length === 0) {
         return {error: 'Não foram encontrados produtos com preços disponíveis.'};
      }
        return {
              nomeProduto, 
              imagemProduto, 
              descricaoProduto, 
              linkCelular: urlProduto,
              subtituloCompra, 
              menoresPrecos
          };
  } catch (error) {
      console.error('Erro no scrapping dos detalhes:', error);
  }
}

module.exports = { rastrearEncomendas, dafontDownload, dafontSearch, xvideosPorno, pensador, dicionarioNome, XvideosSearch, XvideosDL, buscarMenoresPrecos, XnxxDL, XnxxSearch };
