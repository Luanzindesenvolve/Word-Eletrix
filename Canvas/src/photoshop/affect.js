const Jimp = require("jimp");

module.exports = async (image) => {
    if (!image) throw new Error("Parâmetro <image> não definido!");
    
    let base = await Jimp.read("https://i.imgur.com/0dyCAZL.png");
    let img = await Jimp.read(image);
    
    img.resize(200, 157);
    base.composite(img, 180, 383);
    
    let raw = await base.getBufferAsync(Jimp.MIME_PNG);
    return raw;
};
