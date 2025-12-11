const express = require('express');
const app = express();
const path = require('path');
const data = require('./data.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("Yooooooooo");
});

app.get('/albums', (req, res) => {
    res.render('albums', data); // data contains { albums: [...] }
});

app.get('/albums/:id', (req, res) => {
    const albumId = parseInt(req.params.id);
    const album = data.albums.find(a => a.id === albumId);

    if (!album) {
        return res.status(404).send("Album not found");
    }
    res.render('album', { album });
});

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!");
});