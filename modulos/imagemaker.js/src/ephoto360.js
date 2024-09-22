const request = require('request');
const cheerio = require('cheerio');

function Ephoto360(url, text, headers) {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: "GET",
            followAllRedirects: true,
            headers: headers.ephoto
        }, function (err, res, body) {
            if (err) return reject({ success: false });
            
            try {
                const $ = cheerio.load(body);
                let servidor = $('#build_server').val();
                let servidorId = $('#build_server_id').val();
                let token = $('#token').val();
                
                let types = [];
                $('.item-input.select_option_wrapper >  label').each((i, elem) => {
                    types.push($(elem).find('input').val());
                });
                
                let form = {
                    'autocomplete0': '',
                    'radio0[radio]': types.length ? types[Math.floor(Math.random() * types.length)] : '',
                    'text': [...text],
                    'submit': 'GO',
                    'token': token,
                    'build_server': servidor,
                    'build_server_id': Number(servidorId)
                };

                request({
                    url: url,
                    method: "POST",
                    followAllRedirects: true,
                    headers: headers.ephoto,
                    form: form
                }, function (err, res, body) {
                    if (err) return reject({ success: false });

                    try {
                        const $ = cheerio.load(body);
                        request({
                            url: 'https://en.ephoto360.com/effect/create-image',
                            method: 'POST',
                            headers: headers.ephoto,
                            form: JSON.parse($('#form_value_input').val())
                        }, function (err, res, body) {
                            if (err) return reject({ success: false });

                            try {
                                let parse = JSON.parse(body);
                                resolve({
                                    success: true,
                                    imageUrl: servidor + parse.image,
                                    session_id: parse.session_id
                                });
                            } catch (e) {
                                reject({ success: false });
                            }
                        });
                    } catch (e) {
                        reject({ success: false });
                    }
                });
            } catch (e) {
                reject({ success: false });
            }
        });
    });
}

module.exports = { Ephoto360 };