<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Likes FF</title>
  <style>
    body {
      background-image: url('./fundos/likesff.jpg');
      background-size: cover;
      background-position: center;
      height: 100vh;
      font-family: Arial, sans-serif;
      color: white;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h1 {
      font-size: 60px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .form-container {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 30px;
      border-radius: 10px;
      text-align: center;
      max-width: 400px;
      width: 100%;
    }

    input[type="text"] {
      width: 100%;
      padding: 10px;
      font-size: 18px;
      margin-bottom: 20px;
      border: none;
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 0.8);
      color: black;
    }

    button {
      width: 100%;
      padding: 15px;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #45a049;
    }

    .message {
      margin-top: 20px;
      font-size: 20px;
      font-weight: bold;
      display: none;
    }

    .api-info {
      margin-top: 20px;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 15px;
      border-radius: 10px;
      text-align: left;
      display: none;
      width: 100%;
      max-width: 400px;
    }

    .footer {
      position: absolute;
      bottom: 20px;
      font-size: 14px;
      color: white;
      text-align: center;
    }
  </style>
</head>
<body>

  <h1>Likes FF</h1>

  <div class="form-container">
    <input type="text" id="userId" placeholder="Digite o ID do usuário" />
    <button onclick="enviarLikes()">Enviar</button>
    <div class="message" id="message"></div>
    <div class="api-info" id="apiInfo"></div>
  </div>

  <div class="footer">
    by @luanzn_fe
  </div>

  <script>
  function enviarLikes() {
    const userId = document.getElementById('userId').value;
    const messageElement = document.getElementById('message');
    const apiInfoElement = document.getElementById('apiInfo');

    if (!userId) {
      alert('Por favor, insira um ID válido!');
      return;
    }

    messageElement.style.display = 'none';
    apiInfoElement.style.display = 'none';

    fetch(`https://api.nowgarena.com/api/send_likes?uid=${userId}&key=projetoswq`)
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          messageElement.style.color = 'green';
          messageElement.textContent = '✅ Likes enviados com sucesso!';
          messageElement.style.display = 'block';
        } else {
          // Tratamento específico para quando o UID já recebeu likes
          const match = data.resultado.match(/Tente novamente em (\d+) horas e (\d+) minutos/);
          if (match) {
            const horas = match[1];
            const minutos = match[2];
            messageElement.style.color = 'red';
            messageElement.textContent = `⏳ Esse ID já recebeu likes nas últimas 24 horas. Tente novamente em ${horas}h e ${minutos}min.`;
          } else {
            messageElement.style.color = 'red';
            messageElement.textContent = '❌ Erro ao enviar likes! Verifique o ID.';
          }
          messageElement.style.display = 'block';
        }
      })
      .catch(() => {
        messageElement.style.color = 'red';
        messageElement.textContent = '⚠️ Erro ao conectar com a API. Tente novamente mais tarde.';
        messageElement.style.display = 'block';
      });
  }
</script>

  <audio autoplay loop>
    <source src="./musicas/likesff.mp3" type="audio/mpeg">
    Seu navegador não suporta áudio HTML5.
  </audio>
</body>
</html>
