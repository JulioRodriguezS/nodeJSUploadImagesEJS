const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

const main = async () => {
    await app.listen(port, () => {
        console.log('listen on ', port);
    });    
}
main();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res, next) => {
    res.render('index')
})