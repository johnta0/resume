const fs = require('fs');
const pdf = require('html-pdf')

const html = fs.readFileSync('./public/index.html', 'utf-8');
const options = {
    'format': 'A4',
    'border': {
        'top': '1cm',
        'right': '3cm',
        'bottom': '2cm',
        'left': '3cm'
    }
};

pdf.create(html, options).toFile('./static/cv.pdf', (err, res) => { 
    if (err) return console.log(err);
    console.log(res);
});
