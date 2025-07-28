const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input"); // biblioteca para entrada interativa

const apiId = 21844566;
const apiHash = 'ff82e94bfed22534a083c3aee236761a';
const stringSession = new StringSession('');

(async () => {
  console.log("Iniciando cliente Telegram...");

  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });

  try {
    await client.start({
      phoneNumber: async () => await input.text("📱 Digite seu número (com DDI): "),
      password: async () => await input.text("🔒 Digite sua senha 2FA (se tiver): "),
      phoneCode: async () => await input.text("📨 Digite o código enviado por SMS: "),
      onError: (err) => console.log("Erro:", err),
    });

    console.log("✅ Cliente Telegram conectado com sucesso!");
    console.log("💾 Salve essa nova StringSession:");
    console.log(client.session.save());

  } catch (err) {
    console.error("❌ Erro ao conectar:", err);
  }
})();