const express = require('express');
let router = express.Router();

router.get('/Man-Of-Steel', (req, res) => {
    res.render('dynamic', {
        title: "Man of Steel",
        src: "https://player.voxzer.org/view/c8506d0d0714b6f66ac1c5e0",
        img: "https://img.vxdn.net/cover/1440/man-of-steel-2164.jpg",
        desc: "Clark learns about the source of his abilities and his real home when he enters a Kryptonian ship in the Artic. However, an old enemy follows him to Earth in search of a codex and brings destruction.",
        genre: "Action, Sci-Fi"
    });
});

router.get('/Batman-V-Superman', (req, res) => {
    res.render('dynamic', {
        title: "Batman v Superman: Dawn of Justice",
        src: "https://vidcloud9.com/streaming.php?id=MTM0OA",
        img: "https://img.vxdn.net/cover/1440/batman-v-superman-dawn-of-justice-11024.jpg",
        desc: "Bruce Wayne, a billionaire, believes that Superman is a threat to humanity after his battle in Metropolis. Thus, he decides to adopt his mantle of Batman and defeat him once and for all.",
        genre: "Action, Sci-Fi"
    });
});

router.get('/Suicide-Squad', (req, res) => {
    res.render('dynamic', {
        title: "Suicide Squad",
        src: "https://player.voxzer.org/view/e027652b04f6855ddc5275e0",
        img: "https://img.vxdn.net/cover/1440/suicide-squad--15185.jpg",
        desc: "Amanda Waller assembles a team of imprisoned supervillains to execute dangerous black ops missions. When an ancient witch threatens to destroy mankind the squad is sent to stop her.",
        genre: "Action, Sci-Fi"
    });
});

router.get('/Wonder-Woman', (req, res) => {
    res.render('dynamic', {
        title: "Wonder Woman",
        src: "https://player.voxzer.org/view/5da7672b04f6855bec5485e0",
        img: "https://img.vxdn.net/cover/1440/wonder-woman-20963.jpg",
        desc: "Princess Diana of an all-female Amazonian race rescues US pilot Steve. Upon learning of a war, she ventures into the world of men to stop Ares, the god of war, from destroying mankind.",
        genre: "Action, Fantasy"
    });
});

router.get('/Wonder-Woman-1984', (req, res) => {
    res.render('dynamic', {
        title: "Wonder Woman 1984",
        src: "https://player.voxzer.org/view/85be4b3e1593fac3236f25fe",
        img: "https://img.vxdn.net/cover/1440/wonder-woman-1984-101915.jpg",
        desc: "Diana Prince lives quietly among mortals in the vibrant, sleek 1980s -- an era of excess driven by the pursuit of having it all. Though she's come into her full powers, she maintains a low profile by curating ancient artifacts, and only performing heroic acts incognito. But soon, Diana will have to muster all of her strength, wisdom and courage as she finds herself squaring off against Maxwell Lord and the Cheetah, a villainess who possesses superhuman strength and agility.",
        genre: "Action, Fantasy"
    });
});

router.get('/Justice-League', (req, res) => {
    res.render('dynamic', {
        title: "Justice League",
        src: "https://vidnext.net/streaming.php?id=MTMwNjkw",
        img: "https://img.vxdn.net/cover/1440/justice-league-22756.jpg",
        desc: "Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy.",
        genre: "Action, Adventure"
    });
});

router.get('/Aquaman', (req, res) => {
    res.render('dynamic', {
        title: "Aquaman",
        src: "https://vidnext.net/streaming.php?id=MjMwNTM3",
        img: "https://img.vxdn.net/cover/1440/aquaman-27124.jpg",
        desc: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures. He goes on a quest to retrieve the legendary Trident of Atlan and protect the water world.",
        genre: "Action, Adventure"
    });
});

router.get('/Shazam!', (req, res) => {
    res.render('dynamic', {
        title: "Shazam!",
        src: "https://player.voxzer.org/view/0607652b04f6855e0c5145e0",
        img: "https://img.vxdn.net/cover/1440/shazam-28369.jpg",
        desc: "After being abandoned at a fair, Billy constantly searches for his mother. His life, however, takes a huge turn when he inherits the superpowers of a powerful wizard.",
        genre: "Action, Comedy"
    });
});

router.get('/Birds-Of-Prey', (req, res) => {
    res.render('dynamic', {
        title: "Birds of Prey",
        src: "https://player.voxzer.org/view/747f97023ea48b6ab775a5e7",
        img: "https://img.vxdn.net/cover/1440/birds-of-prey-100453.jpg",
        desc: "After being thrown out in the streets by Joker, Harley struggles to pick herself up. However, Harley teams up with Huntress, Black Canary and Renee Montoya to defeat a gangster and protect a girl.",
        genre: "Action, Comedy"
    });
});

router.get('/Joker', (req, res) => {
    res.render('dynamic', {
        title: "Joker",
        src: "https://player.voxzer.org/view/3b406a0d0714b6feaaba25e0",
        img: "https://img.vxdn.net/cover/1440/Joker-2019-29553.jpg",
        desc: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
        genre: "Crime, Drama"
    });
});

module.exports = router;