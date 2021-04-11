const express = require('express');
let router = express.Router();

const sciFi = [
    {title: "Men In Black", link: "Sci-Fi/Movies/Men-In-Black", smallImg: "http://gonewiththetwins.com/new/wp-content/uploads/2015/04/meninblack_blue.jpg", bigImg: "https://img.vxdn.net/cover/1440/men-in-black-2296.jpg", src: "https://player.voxzer.org/view/e667652b04f685567c5285e0", desc: "K and J, (the men in black) are the scum-fighting super-agents; their latest mission is to save the world from a total intergalactic disaster.", genre: "Sci-Fi, Action, Comedy"},
    {title: "Men In Black 2", link: "Sci-Fi/Movies/Men-In-Black2", smallImg: "https://img.vxdn.net/poster/200/men-in-black-2-2297.jpg", bigImg: "https://img.vxdn.net/cover/1440/men-in-black-2-2297.jpg", src: "https://vidcloud9.com/streaming.php?id=ODI1MA=", desc: "Agent J learns about Serleena, a shapeshifting alien, who is searching for the Light of Zartha on Earth. He seeks help from his now-retired former partner, Agent K, to find the Light before Serleena.", genre: "Sci-Fi, Action, Comedy"},
    {title: "Men In Black 3", link: "Sci-Fi/Movies/Men-In-Black3", smallImg: "https://img.vxdn.net/poster/200/men-in-black-3-2298.jpg", bigImg: "https://img.vxdn.net/cover/1440/men-in-black-3-2298.jpg", src: "https://player.voxzer.org/view/36c7602b04f68554cc4a85e0", desc: "When Boris, an alien criminal, escapes a high-security prison, it is up to Agent J to bring him back. He goes back in time and finds a younger Agent K to help him in his quest.", genre: "Sci-Fi, Action, Comedy"},
    {title: "Men in Black: International", link: "Sci-Fi/Movies/Men-In-Black-International", smallImg: "https://img.vxdn.net/poster/200/men-in-black-international-28803.jpg", bigImg: "https://img.vxdn.net/cover/1440/men-in-black-international-28803.jpg", src: "https://player.voxzer.org/view/a817612b04f68556ec4c95e0", desc: "Agent M, a probationary member of the MIB, teams up with Agent H and uncovers a sinister plot that reveals a traitor in the organisation aiding an alien invasion.", genre: "Sci-Fi, Action, Comedy"},
    {title: "Jurassic Park", link: "Sci-Fi/Movies/Jurassic-Park", smallImg: "https://img.vxdn.net/poster/200/jurassic-park-2058.jpg", bigImg: "https://img.vxdn.net/cover/1440/jurassic-park-2058.jpg", src: "https://player.voxzer.org/view/66406e0d0714b6fccac335e0", desc: "John Hammond, an entrepreneur, opens a wildlife park containing cloned dinosaurs. However, a breakdown of the island's security system causes the creatures to escape and bring about chaos.", genre: "Sci-Fi, Action, Adventure"},
    {title: "Jurassic Park 2: The Lost World", link: "Sci-Fi/Movies/Jurassic-Park2-The-Lost-World", smallImg: "https://img.vxdn.net/poster/200/jurassic-park-ii-the-lost-world-2059.jpg", bigImg: "https://img.vxdn.net/cover/1440/jurassic-park-ii-the-lost-world-2059.jpg", src: "https://player.voxzer.org/view/5f57622b04f685597c4d95e0", desc: "John Hammond along with few other members try to explore the Jurassic Park's second site. However, things get complicated when the dinosaurs go wild and everyone is forced to run for their lives.", genre: "Sci-Fi, Action, Adventure"},
    {title: "Jurassic Park 3", link: "Sci-Fi/Jurassic-Park3", smallImg: "https://img.vxdn.net/poster/200/jurassic-park-iii-2771.jpg", bigImg: "https://img.vxdn.net/cover/1440/jurassic-park-iii-2771.jpg", src: "https://player.voxzer.org/view/24676a2b04f6855a4c5855e0", desc: "Paul and Amanda Kirby, a wealthy couple, offer research funding to Alan Grant, a doctor, on the condition that he accompanies them to find their missing son on a deadly island.", genre: "Sci-Fi, Action, Adventure"},
    {title: "Jurassic World", link: "Sci-Fi/Jurassic-World", smallImg: "https://img.vxdn.net/poster/200/jurassic-world-2015-3765.jpg", bigImg: "https://img.vxdn.net/cover/1440/jurassic-world-2015-3765.jpg", src: "https://player.voxzer.org/view/9b406c0d0714b6f54abf05e0", desc: "A theme park showcasing genetically-engineered dinosaurs turns into a nightmare for its tourists when one of the dinosaurs escapes its enclosure. An ex-military animal expert steps up to save the day.", genre: "Sci-Fi, Action, Adventure"},
    {title: "Jurassic World: Fallen Kingdom", link: "Sci-Fi/Jurassic-World-Fallen-Kingdom", smallImg: "https://img.vxdn.net/poster/200/jurassic-world-fallen-kingdom-25222.jpg", bigImg: "https://img.vxdn.net/cover/1440/jurassic-world-fallen-kingdom-25222.jpg", src: "https://player.voxzer.org/view/78a06d0d0714b6fcaac105e0", desc: "After a volcano eruption proves to be a threat for the dinosaurs, Owen and Claire reach the defunct Jurassic World, a theme park, to save the animals from extinction.", genre: "Sci-Fi, Action, Adventure"},
    
]

router.get('/', (req, res) => {
    res.send(sciFi);
});

router.get('/Shows/:id', (req, res) => {
    try {
        const foundIndex = sciFi.findIndex((item) => {
            return item.link === `Sci-Fi/Shows/${req.params.id}`
        });
    
        res.render('shows', {
            title: sciFi[foundIndex].title,
            img: sciFi[foundIndex].bigImg,
            desc: sciFi[foundIndex].desc,
            genre: sciFi[foundIndex].genre,
            eps: sciFi[foundIndex].eps,
            seasons: sciFi[foundIndex].seasons ? sciFi[foundIndex].seasons : null
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

router.get('/Movies/:id', (req, res) => {
    try {
        const foundIndex = sciFi.findIndex((item) => {
            return item.link === `Sci-Fi/Movies/${req.params.id}`
        });
    
        res.render('movies', {
            title: sciFi[foundIndex].title,
            src: sciFi[foundIndex].src,
            img: sciFi[foundIndex].bigImg,
            desc: sciFi[foundIndex].desc,
            genre: sciFi[foundIndex].genre
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

module.exports = {router: router, sciFi: sciFi};