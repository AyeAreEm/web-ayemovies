const express = require('express');
let router = express.Router();

const starWars = [
    {title: "Star Wars: The Phantom Menace", link: "Star-Wars/Movies/The-Phantom-Menace", smallImg: "https://img.vxdn.net/poster/200/star-wars-episode-i-the-phantom-menace-1915.jpg", bigImg: "https://img.vxdn.net/cover/1440/star-wars-episode-i-the-phantom-menace-1915.jpg", src: "https://player.voxzer.org/view/f6d75f2b04f685570c4a25e0", desc: "After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.", genre: "Sci-Fi, Action, Adventure"},
    {title: "Star Wars: Attack of the Clones", link: "Star-Wars/Movies/Attack-Of-The-Clones", smallImg: "https://img.vxdn.net/poster/200/star-wars-episode-ii-attack-of-the-clones-1916.jpg", bigImg: "https://img.vxdn.net/cover/1440/star-wars-episode-ii-attack-of-the-clones-1916.jpg", src: "https://player.voxzer.org/view/2df7682b04f6855d4c55a5e0", desc: "While pursuing an assassin, Obi Wan uncovers a sinister plot to destroy the Republic. With the fate of the galaxy hanging in the balance, the Jedi must defend the galaxy against the evil Sith.", genre: "Sco-Fi, Action, Adventure"},
    {title: "Star Wars: Revenge of the Sith", link: "Star-Wars/Movies/Revenge-Of-The-Sith", smallImg: "https://img.vxdn.net/poster/200/star-wars-episode-iii-revenge-of-the-sith-2197.jpg", bigImg: "https://img.vxdn.net/cover/1440/star-wars-episode-iii-revenge-of-the-sith-2197.jpg", src: "https://player.voxzer.org/view/8637602b04f685567c4af5e0", desc: "Anakin joins forces with Obi-Wan and sets Palpatine free from the evil clutches of Count Doku. However, he falls prey to Palpatine and the Jedis' mind games and gives into temptation.", genre: "Sci-Fi, Action, Adventure"},
    {title: "Star Wars: A New Hope", link: "Star-Wars/Movies/A-New-Hope", smallImg: "https://img.vxdn.net/poster/200/star-wars-episode-iv-a-new-hope-2229.jpg", bigImg: "https://img.vxdn.net/cover/1440/star-wars-episode-iv-a-new-hope-2229.jpg", src: "https://player.voxzer.org/view/f6d75f2b04f685570c4a25e0", desc: "After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.", genre: "Sci-Fi, Action, Adventure"},
    {title: "Star Wars: The Empire Strikes Back", link: "Star-Wars/Movies/The-Empire-Strikes-Back", smallImg: "https://img.vxdn.net/poster/200/star-wars-episode-v-the-empire-strikes-back-2233.jpg", bigImg: "https://img.vxdn.net/cover/1440/star-wars-episode-v-the-empire-strikes-back-2233.jpg", src: "https://player.voxzer.org/view/dec7682b04f685505c56a5e0", desc: "Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.", genre: "Sci-Fi, Action, Adventure"},
    {title: "Star Wars: Return of the Jedi", link: "Star-Wars/Movies/Return-Of-The-Jedi", smallImg: "https://img.vxdn.net/poster/200/star-wars-episode-vi-return-of-the-jedi-2238.jpg", bigImg: "https://img.vxdn.net/cover/1440/star-wars-episode-vi-return-of-the-jedi-2238.jpg", src: "https://player.voxzer.org/view/613ee8b9f52338aa415a95e0", desc: "Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.", genre: "Sci-Fi, Action, Adventure"},
    {title: "Star Wars: The Force Awakens", link: "Star-Wars/Movies/The-Force-Awakens", smallImg: "https://img.vxdn.net/poster/200/star-wars-the-force-awakens-7292.jpg", bigImg: "https://img.vxdn.net/cover/1440/star-wars-the-force-awakens-7292.jpg", src: "https://player.voxzer.org/view/da30710d0714b6f09add75e0", desc: "A new order threatens to destroy the New Republic. Finn, Rey and Poe, backed by the Resistance and the Republic, must find a way to stop them and find Luke, the last surviving Jedi.", genre: "Sci-Fi, Action, Adventure"},
    {title: "Star Wars: The Last Jedi", link: "Star-Wars/Movies/The-Last-Jedi", smallImg: "https://img.vxdn.net/poster/200/star-wars-the-last-jedi-23033.jpg", bigImg: "https://img.vxdn.net/cover/1440/star-wars-the-last-jedi-23033.jpg", src: "https://player.voxzer.org/view/0e47602b04f68559ec4a45e0", desc: "Rey seeks to learn the ways of the Jedi under Luke Skywalker, its remaining member, to reinvigorate the Resistance's war against the First Order.", genre: "Sci-Fi, Action, Adventure"},
    {title: "Star Wars: The Rise of Skywalker", link: "Star-Wars/Movies/The-Rise-Of-Skywalker", smallImg: "https://img.vxdn.net/poster/200/star-wars-the-rise-of-skywalker-100243.jpg", bigImg: "https://img.vxdn.net/cover/1440/star-wars-the-rise-of-skywalker-100243.jpg", src: "https://player.voxzer.org/view/84be8f023ea48b6dd71d75e7", desc: "The revival of Emperor Palpatine resurrects the battle between the Resistance and the First Order while the Jedi's legendary conflict with the Sith Lord comes to a head.", genre: "Sci-Fi, Action, Adventure"},
    {title: "The Mandalorian", link: "Star-Wars/Shows/The-Mandalorian", smallImg: "https://img.vxdn.net/poster/200/The-Mandalorian-1-100147.jpg", bigImg: "https://img.vxdn.net/c-max/1200/The-Mandalorian-1-100147.jpg", desc: "After the defeat of the Empire at the hands of Rebel forces, a lone bounty hunter operating in the Outer Rim, away from the dominion of the New Republic, goes on many surprising and risky adventures.", genre: "Sci-fi, Drama, Action, Adventure", eps: ["https://player.voxzer.org/view/9887672b04f6855e3c54d5e0", "https://player.voxzer.org/view/0e706d0d0714b6f5bac015e0", "https://player.voxzer.org/view/c5e06a0d0714b6fe7abad5e0", "https://player.voxzer.org/view/4f07672b04f685580c5475e0", "https://player.voxzer.org/view/5b5ab3ac1fc38f57d259e5e0", "https://vidcloud9.com/streaming.php?id=MzAwNDc5", "https://player.voxzer.org/view/88006b0d0714b6f0fabc85e0", "https://player.voxzer.org/view/dc306e0d0714b6f17ac455e0"], seasons: ["/Star-Wars/Shows/The-Mandalorian", "/Star-Wars/Shows/The-Mandalorian2"]},
    {title: "The Mandalorian S2", link: "Star-Wars/Shows/The-MandalorianS2", bigImg: "https://img.vxdn.net/c-max/1200/The-Mandalorian-1-100147.jpg", desc: "After the defeat of the Empire at the hands of Rebel forces, a lone bounty hunter operating in the Outer Rim, away from the dominion of the New Republic, goes on many surprising and risky adventures.", genre: "Sci-fi, Drama, Action, Adventure", eps: ["https://player.voxzer.org/view/9ed6f8891c21ab7277d7b5f9", "https://vidcloud9.com/streaming.php?id=MzMxNjU3", "https://player.voxzer.org/view/5f3e4b3e1593facec3ed05fa", "https://vidcloud9.com/streaming.php?id=MzMyNDE0", "https://player.voxzer.org/view/6d6e4b3e1593face631335fc", "https://vidcloud9.com/streaming.php?id=MzMzMDI4", "https://vidcloud9.com/streaming.php?id=MzMzNDIy", "https://vidcloud9.com/streaming.php?id=MzMzODE2"], seasons: ["/Star-Wars/Shows/The-Mandalorian", "/Star-Wars/Shows/The-Mandalorian2"], display: false}
]

router.get('/', (req, res) => {
    res.send(starWars);
});

router.get('/Shows/:id', (req, res) => {
    try {
        const foundIndex = starWars.findIndex((item) => {
            return item.link === `Star-Wars/Shows/${req.params.id}`
        });
    
        res.render('shows', {
            title: starWars[foundIndex].title,
            img: starWars[foundIndex].bigImg,
            desc: starWars[foundIndex].desc,
            genre: starWars[foundIndex].genre,
            eps: starWars[foundIndex].eps,
            seasons: starWars[foundIndex].seasons ? starWars[foundIndex].seasons : null
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

router.get('/Movies/:id', (req, res) => {
    try {
        const foundIndex = starWars.findIndex((item) => {
            return item.link === `Star-Wars/Movies/${req.params.id}`
        });
    
        res.render('movies', {
            title: starWars[foundIndex].title,
            src: starWars[foundIndex].src,
            img: starWars[foundIndex].bigImg,
            desc: starWars[foundIndex].desc,
            genre: starWars[foundIndex].genre
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

module.exports = {router: router, starWars: starWars};