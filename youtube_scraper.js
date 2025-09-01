// youtube_scraper.js
// Permite usar @vreden/youtube_scraper em CommonJS
module.exports = (async () => {
  const mod = await import("@vreden/youtube_scraper");
  return mod.default || mod; // garante compatibilidade
})();
