// ytdl.js
// Wrapper para usar @hiudyy/ytdl em projeto CommonJS

module.exports = (async () => {
  const mod = await import("@distube/ytdl-core");
  // alguns pacotes exportam em .default, outros direto
  return mod.default || mod;
})();
