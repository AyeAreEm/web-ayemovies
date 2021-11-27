const express = require('express');
let router = express.Router();

const anime = [
    {title: "One Punch Man", link: "Anime/Shows/One-Punch-Man", smallImg: "https://img.vxdn.net/poster/200/one-punch-man-season-1-7753.jpg", bigImg: "https://img.vxdn.net/cover/1440/one-punch-man-season-1-7753.jpg", desc: "One-Punch Man is a Japanese superhero franchise created by the artist ONE. It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge due to his overwhelming strength.", genre: "Anime, Action, Comedy", eps: ["https://gogoplay1.com/streaming.php?id=Njg2MDg=&title=One+Punch+Man+Episode+1", "https://gogoplay1.com/streaming.php?id=MTE3MTg0&title=One+Punch+Man+%28Dub%29+Episode+2", "https://gogoplay1.com/streaming.php?id=MTE3MTg1&title=One+Punch+Man+%28Dub%29+Episode+3", "https://gogoplay1.com/streaming.php?id=MTE3MTg2&title=One+Punch+Man+%28Dub%29+Episode+4", "https://gogoplay1.com/streaming.php?id=MTE3MTg3&title=One+Punch+Man+%28Dub%29+Episode+5", "https://gogoplay1.com/streaming.php?id=MTE3MTg4&title=One+Punch+Man+%28Dub%29+Episode+6", "https://gogoplay1.com/streaming.php?id=MTE3MTg5&title=One+Punch+Man+%28Dub%29+Episode+7", "https://gogoplay1.com/streaming.php?id=MTE3MTkw&title=One+Punch+Man+%28Dub%29+Episode+8", "https://gogoplay1.com/streaming.php?id=MTE3MTkx&title=One+Punch+Man+%28Dub%29+Episode+9", "https://gogoplay1.com/streaming.php?id=MTE3MTky&title=One+Punch+Man+%28Dub%29+Episode+10", "https://gogoplay1.com/streaming.php?id=MTE3MTkz&title=One+Punch+Man+%28Dub%29+Episode+11", "https://gogoplay1.com/streaming.php?id=MTE3MTk0&title=One+Punch+Man+%28Dub%29+Episode+12"], seasons: ["/Anime/Shows/One-Punch-Man", "/Anime/Shows/One-Punch-Man2"]},
    {title: "One Punch Man S2", link: "Anime/Shows/One-Punch-Man2", bigImg: "https://cdn.themovieseries.net/cover/one-punch-man-season-2.png", desc: "One-Punch Man is a Japanese superhero franchise created by the artist ONE. It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge due to his overwhelming strength.", genre: "Anime, Action, Comedy", eps: ["https://gogoplay1.com/streaming.php?id=MTE2OTU2&title=One+Punch+Man+2nd+Season+Episode+1", "https://gogoplay1.com/streaming.php?id=MTE3NjEx&title=One+Punch+Man+2nd+Season+Episode+2", "https://gogoplay1.com/streaming.php?id=MTE4NDM5&title=One+Punch+Man+2nd+Season+Episode+3", "https://gogoplay1.com/streaming.php?id=MTE4OTQ5&title=One+Punch+Man+2nd+Season+Episode+4", "https://gogoplay1.com/streaming.php?id=MTE5NDEx&title=One+Punch+Man+2nd+Season+Episode+5", "https://gogoplay1.com/streaming.php?id=MTE5OTMw&title=One+Punch+Man+2nd+Season+Episode+6", "https://gogoplay1.com/streaming.php?id=MTIwNjU2&title=One+Punch+Man+2nd+Season+Episode+7", "https://gogoplay1.com/streaming.php?id=MTIxMjg2&title=One+Punch+Man+2nd+Season+Episode+8", "https://gogoplay1.com/streaming.php?id=MTIyMzQ5&title=One+Punch+Man+2nd+Season+Episode+9", "https://gogoplay1.com/streaming.php?id=MTIyNzYy&title=One+Punch+Man+2nd+Season+Episode+10", "https://gogoplay1.com/streaming.php?id=MTIzMzEz&title=One+Punch+Man+2nd+Season+Episode+11", "https://gogoplay1.com/streaming.php?id=MTIzODM2&title=One+Punch+Man+2nd+Season+Episode+12"]}
];

router.get('/', (req, res) => {
    res.send(anime);
});

router.get('/Shows/:id', (req, res) => {
    try {
        const foundIndex = anime.findIndex((item) => {
            return item.link === `Anime/Shows/${req.params.id}`
        });
    
        res.render('shows', {
            title: anime[foundIndex].title,
            img: anime[foundIndex].bigImg,
            desc: anime[foundIndex].desc,
            genre: anime[foundIndex].genre,
            eps: anime[foundIndex].eps,
            seasons: anime[foundIndex].seasons ? anime[foundIndex].seasons : null
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

router.get('/Movies/:id', (req, res) => {
    try {
        const foundIndex = anime.findIndex((item) => {
            return item.link === `Anime/Movies/${req.params.id}`
        });
    
        res.render('movies', {
            title: anime[foundIndex].title,
            src: anime[foundIndex].src,
            img: anime[foundIndex].bigImg,
            desc: anime[foundIndex].desc,
            genre: anime[foundIndex].genre
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

module.exports = {router: router, anime: anime};