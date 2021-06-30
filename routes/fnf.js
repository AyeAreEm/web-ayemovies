const express = require('express');
let router = express.Router();

const fnf = [
    {title: "The Fast And The Furious", link: "Fnf/Movies/The-Fast-And-The-Furious", smallImg: "https://img.vxdn.net/poster/200/the-fast-and-the-furious-1688.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-fast-and-the-furious-1688.jpg", src: "https://player.voxzer.org/view/1ac7672b04f6855f7c5425e0", desc: "A spate of high-speed robberies in LA brings street racer Dominic Toretto and his crew under the LAPD scanner. FBI agent Brian goes undercover and befriends Toretto in a bid to investigate the matter.", genre: "Action, Adventure"},
    {title: "2 Fast 2 Furious", link: "Fnf/Movies/2-Fast-2-Furious", smallImg: "https://img.vxdn.net/poster/200/2-fast-2-furious-1659.jpg", bigImg: "https://img.vxdn.net/cover/1440/2-fast-2-furious-1659.jpg", src: "https://player.voxzer.org/view/7527682b04f6855f6c5605e0", desc: "Brian, a former officer, partners with Roman Pierce, his ex-convict friend. As a part of a deal with the FBI, Brian and Roman have to bring down Verone, a drug lord, to erase their criminal record.", genre: "Action, Crime, Adventure"},
    {title: "The Fast And The Furious: Tokyo Drift", link: "Fnf/Movies/The-Fast-And-The-Furious-Tokyo-Drift", smallImg: "https://img.vxdn.net/poster/200/the-fast-and-the-furious-tokyo-drift-1660.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-fast-and-the-furious-tokyo-drift-1660.jpg", src: "https://player.voxzer.org/view/f507642b04f685563c5135e0", desc: "In order to avoid jail time, an errant car racer is sent to live with his father in Tokyo. However, he finds himself in trouble once again when he becomes a major competitor in drifting.", genre: "Action, Crime, Adventure"},
    {title: "Fast & Furious", link: "Fnf/Movies/Fast-&-Furious", smallImg: "https://img.vxdn.net/poster/200/fast-and-furious-4-1661.jpg", bigImg: "https://img.vxdn.net/cover/1440/fast-and-furious-4-1661.jpg", src: "https://player.voxzer.org/view/1fa7622b04f6855edc4d35e0", desc: "Dominic Toretto, an ex-convict, and an FBI agent, Brian O'Connor, wish to take down heroin importer, Arturo Braga. However, they must team up and overcome their distrust to be successful.", genre: "Action, Crime, Adventure, Thriller"},
    {title: "Fast Five", link: "Fnf/Movies/Fast-Five", smallImg: "https://img.vxdn.net/poster/200/fast-five-1689.jpg", bigImg: "https://img.vxdn.net/cover/1440/fast-five-1689.jpg", src: "https://player.voxzer.org/view/49d06a0d0714b6f1baba45e0", desc: "Dom and Brian travel from one country to another, trying to throw the authorities off their scent. Now they have to bring their team together one more time while being chased by a federal agent.", genre: "Action, Crime, Heist"},
    {title: "Fast & Furious 6", link: "Fnf/Movies/Fast-&-Furious-6", smallImg: "https://img.vxdn.net/poster/200/fast-furious-6-1654.jpg", bigImg: "https://img.vxdn.net/cover/1440/fast-furious-6-1654.jpg", src: "https://player.voxzer.org/view/bc20690d0714b6fd8a5bf5e0", desc: "Hobbs is tasked with catching a team of mercenary drivers who manage to evade him every time. However, he enlists the help of Dominic and his team in exchange for full pardons for their past crimes.", genre: "Action, Crime, Adventure, Thriller"},
    {title: "Fast & Furious 7", link: "Fnf/Movies/Fast-&-Furious-7", smallImg: "https://img.vxdn.net/poster/200/fast-and-furious-7-1714.jpg", bigImg: "https://img.vxdn.net/cover/1440/fast-and-furious-7-1714.jpg", src: "https://player.voxzer.org/view/9bf7652b04f6855e5c5215e0", desc: "Dominic and his family are caught in a quagmire when Shaw's brother seeks bloody revenge. They must not only deal with their enemy but also save a crucial programme from falling into the wrong hands.", genre: "Action, Crime, Adventure, Thriller"},
    {title: "The Fate of the Furious", link: "Fnf/Movies/The-Fate-Of-The-Furious", smallImg: "https://img.vxdn.net/poster/200/the-fate-of-the-furious-20324.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-fate-of-the-furious-20324.jpg", src: "https://vidembed.net/streaming.php?id=ODQ4NjU=&title=Fast+and+Furious+8%3A+The+Fate+of+the+Furious&cover=Y292ZXIvdGhlLWZhdGUtb2YtdGhlLWZ1cmlvdXMtaGluZGktYXVkaW8ucG5n", desc: "Dom encounters a mysterious woman, Cipher, who gets him involved in the world of terrorism. The crew has to reunite to stop Cipher and save the man who brought them together as a family.", genre: "Action, Crime, Adventure, Thriller"},
];

router.get('/', (req, res) => {
    res.send(fnf);
});

router.get('/Shows/:id', (req, res) => {
    try {
        const foundIndex = fnf.findIndex((item) => {
            return item.link === `Fnf/Shows/${req.params.id}`
        });
    
        res.render('shows', {
            title: fnf[foundIndex].title,
            img: fnf[foundIndex].bigImg,
            desc: fnf[foundIndex].desc,
            genre: fnf[foundIndex].genre,
            eps: fnf[foundIndex].eps,
            seasons: fnf[foundIndex].seasons ? fnf[foundIndex].seasons : null
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

router.get('/Movies/:id', (req, res) => {
    try {
        const foundIndex = fnf.findIndex((item) => {
            return item.link === `Fnf/Movies/${req.params.id}`
        });

        res.render('movies', {
            title: fnf[foundIndex].title,
            src: fnf[foundIndex].src,
            img: fnf[foundIndex].bigImg,
            desc: fnf[foundIndex].desc,
            genre: fnf[foundIndex].genre
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

module.exports = {router: router, fnf: fnf};