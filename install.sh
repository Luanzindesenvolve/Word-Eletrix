#!/bin/bash

# Atualiza os pacotes do sistema
echo "Atualizando pacotes do sistema..."
sudo apt-get update -y

# Instalando as dependências necessárias para Playwright
echo "Instalando dependências para o Playwright..."
sudo apt-get install -y \
  libnss3 \
  libatk1.0-0 \
  libatk-bridge2.0-0 \
  libxss1 \
  libgdk-pixbuf2.0-0 \
  libx11-xcb1 \
  libgbm1 \
  libasound2 \
  libxcomposite1 \
  libxrandr2

# Confirmação de que as dependências foram instaladas
echo "Dependências instaladas com sucesso!"

# Caso queira instalar o Node.js e o Playwright diretamente no script
# Instalando Node.js
echo "Instalando o Node.js..."
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalando Playwright
echo "Instalando Playwright..."
npm install playwright

echo "Instalação completa!
