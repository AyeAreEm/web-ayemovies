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
]

router.get('/', (req, res) => {
    res.send(starWars);
});

router.get('/Shows/:id', (req, res) => {
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
});

router.get('/Movies/:id', (req, res) => {
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
});

module.exports = {router: router, starWars: starWars};