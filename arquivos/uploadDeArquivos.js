const fs = require('fs')

fs.createReadStream('./assest/salsicha.jpg')
    .pipe(fs.createWriteStream('./assest/salsicha-stream.jpg'))
    .on('finish', () => console.log('imagem foi escrica com sucesso'))