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

// initialization
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//routes
app.use(require('./routes/index.routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));