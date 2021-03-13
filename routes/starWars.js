const express = require('express');
let router = express.Router();

router.get('/A-New-Hope', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: A New Hope",
        src: "https://player.voxzer.org/view/f6d75f2b04f685570c4a25e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-episode-iv-a-new-hope-2229.jpg",
        desc: "After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

router.get('/The-Empire-Strikes-Back', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: The Empire Strikes Back",
        src: "https://player.voxzer.org/view/dec7682b04f685505c56a5e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-episode-v-the-empire-strikes-back-2233.jpg",
        desc: "Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

router.get('/Return-Of-The-Jedi', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: Return of the Jedi",
        src: "https://player.voxzer.org/view/613ee8b9f52338aa415a95e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-episode-vi-return-of-the-jedi-2238.jpg",
        desc: "Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

router.get('/The-Phantom-Menace', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: The Phantom Menace",
        src: "https://player.voxzer.org/view/403ee8b9f52338ae415a65e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-episode-i-the-phantom-menace-1915.jpg",
        desc: "Jedi Knights Qui-Gon Jinn and Obi-Wan Kenobi set out to stop the Trade Federation from invading Naboo. While travelling, they come across a gifted boy, Anakin, and learn that the Sith have returned.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

router.get('/Attack-Of-The-Clones', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: Attack of the Clones",
        src: "https://player.voxzer.org/view/2df7682b04f6855d4c55a5e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-episode-ii-attack-of-the-clones-1916.jpg",
        desc: "While pursuing an assassin, Obi Wan uncovers a sinister plot to destroy the Republic. With the fate of the galaxy hanging in the balance, the Jedi must defend the galaxy against the evil Sith.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

router.get('/Revenge-Of-The-Sith', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: Revenge of the Sith",
        src: "https://player.voxzer.org/view/8637602b04f685567c4af5e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-episode-iii-revenge-of-the-sith-2197.jpg",
        desc: "Anakin joins forces with Obi-Wan and sets Palpatine free from the evil clutches of Count Doku. However, he falls prey to Palpatine and the Jedis' mind games and gives into temptation.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

router.get('/The-Force-Awakens', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: The Force Awakens",
        src: "https://player.voxzer.org/view/da30710d0714b6f09add75e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-the-force-awakens-7292.jpg",
        desc: "A new order threatens to destroy the New Republic. Finn, Rey and Poe, backed by the Resistance and the Republic, must find a way to stop them and find Luke, the last surviving Jedi.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

router.get('/The-Last-Jedi', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: The Last Jedi",
        src: "https://player.voxzer.org/view/0e47602b04f68559ec4a45e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-the-last-jedi-23033.jpg",
        desc: "Rey seeks to learn the ways of the Jedi under Luke Skywalker, its remaining member, to reinvigorate the Resistance's war against the First Order.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

router.get('/The-Rise-Of-Skywalker', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: The Rise of Skywalker",
        src: "https://player.voxzer.org/view/84be8f023ea48b6dd71d75e7",
        img: "https://img.vxdn.net/cover/1440/star-wars-the-rise-of-skywalker-100243.jpg",
        desc: "The revival of Emperor Palpatine resurrects the battle between the Resistance and the First Order while the Jedi's legendary conflict with the Sith Lord comes to a head.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

module.exports = router;