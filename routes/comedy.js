const express = require('express');
let router = express.Router();

const comedy = [
    {title: "White Chicks", link: "Comedy/Movies/White-Chicks", smallImg: "https://img.vxdn.net/poster/200/white-chicks-8465.jpg", bigImg: "https://img.vxdn.net/cover/1440/white-chicks-8465.jpg", src: "https://player.voxzer.org/view/e1b0720d0714b6f16aee95e0", desc: "Two disgraced FBI agents, Kevin Copeland and Marcus Copeland, are assigned a new case where they must protect Tiffany and Brittany Wilson, two cruise line heiresses, from getting abducted.", genre: "Comedy, Crime"},
    {title: "Tower Heist", link: "Comedy/Movies/Tower-Heist", smallImg: "https://img.vxdn.net/poster/200/tower-heist-5731.jpg", bigImg: "https://img.vxdn.net/cover/1440/tower-heist-5731.jpg", src: "https://vidnext.net/streaming.php?id=NTUwNQ==", desc: "A group of hardworking men fall prey to a scam conspired by a wealthy businessman. Furious and desperate for revenge, they come together and plan a heist against him.", genre: "Comedy, Crime"},
    {title: "Tag", link: "Comedy/Movies/Tag", smallImg: "https://img.vxdn.net/poster/200/tag-25489.jpg", bigImg: "https://img.vxdn.net/cover/1440/tag-25489.jpg", src: "https://player.voxzer.org/view/ee806b0d0714b6f35abd75e0", desc: "A group of five friends, who have been playing the game of tag for 30 years, decide to play one last game before the wedding of their undefeated player.", genre: "Comedy"},
    {title: "Central Intelligence", link: "Comedy/Movies/Central-Intelligence", smallImg: "https://img.vxdn.net/poster/200/central-intelligence-13381.jpg", bigImg: "https://img.vxdn.net/cover/1440/central-intelligence-13381.jpg", src: "https://player.voxzer.org/view/9337682b04f685589c5635e0", desc: "Accountant Calvin Joyner's life changes drastically after Bob Stone, his classmate in high school, drags him into a dubious covert operation.", genre: "Comedy, Action"},
    {title: "Why Him?", link: "Comedy/Movies/Why-Him?", smallImg: "https://img.vxdn.net/poster/200/why-him-18815.jpg", bigImg: "https://img.vxdn.net/cover/1440/why-him-18815.jpg", src: "https://vidnext.net/streaming.php?id=Nzc3MDg=", desc: "While his lover's parents are visiting him at his mansion, Laird asks her father, Ned, for his assent to marry her. Disgusted by his behaviour and display of wealth, Ned tries to stop him.", genre: "Comedy, Romance"},
    
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