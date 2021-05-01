const express = require('express');
let router = express.Router();

const comedy = [
    {title: "White Chicks", link: "Comedy/Movies/White-Chicks", smallImg: "https://img.vxdn.net/poster/200/white-chicks-8465.jpg", bigImg: "https://img.vxdn.net/cover/1440/white-chicks-8465.jpg", src: "https://player.voxzer.org/view/e1b0720d0714b6f16aee95e0", desc: "Two disgraced FBI agents, Kevin Copeland and Marcus Copeland, are assigned a new case where they must protect Tiffany and Brittany Wilson, two cruise line heiresses, from getting abducted.", genre: "Comedy, Crime"},
    {title: "Tower Heist", link: "Comedy/Movies/Tower-Heist", smallImg: "https://img.vxdn.net/poster/200/tower-heist-5731.jpg", bigImg: "https://img.vxdn.net/cover/1440/tower-heist-5731.jpg", src: "https://vidnext.net/streaming.php?id=NTUwNQ==", desc: "A group of hardworking men fall prey to a scam conspired by a wealthy businessman. Furious and desperate for revenge, they come together and plan a heist against him.", genre: "Comedy, Crime"},
    
];

router.get('/', (req, res) => {
    res.send(comedy);
});

router.get('/Shows/:id', (req, res) => {
    try {
        const foundIndex = comedy.findIndex((item) => {
            return item.link === `Comedy/Shows/${req.params.id}`
        });
    
        res.render('shows', {
            title: comedy[foundIndex].title,
            img: comedy[foundIndex].bigImg,
            desc: comedy[foundIndex].desc,
            genre: comedy[foundIndex].genre,
            eps: comedy[foundIndex].eps,
            seasons: comedy[foundIndex].seasons ? comedy[foundIndex].seasons : null
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

router.get('/Movies/:id', (req, res) => {
    try {
        const foundIndex = comedy.findIndex((item) => {
            return item.link === `Comedy/Movies/${req.params.id}`
        });
    
        res.render('movies', {
            title: comedy[foundIndex].title,
            src: comedy[foundIndex].src,
            img: comedy[foundIndex].bigImg,
            desc: comedy[foundIndex].desc,
            genre: comedy[foundIndex].genre
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

module.exports = {router: router, comedy: comedy};