const express = require('express');
let router = express.Router();

const crime = [
    {title: "Sherlock", link: "Crime/Shows/Sherlock", smallImg: "https://img.vxdn.net/poster/200/sherlock-season-1-3993.jpg", bigImg: "https://img.vxdn.net/cover/1440/sherlock-season-1-3993.jpg", desc: "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.", genre: "Crime, Mystery", eps: ["https://vidembed.net/streaming.php?id=NDMyMTQ&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://vidembed.net/streaming.php?id=NDMyMTU&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://vidembed.net/streaming.php?id=NDMyMTY&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw=="], seasons: ["/Crime/Shows/Sherlock", "/Crime/Shows/Sherlock2", "/Crime/Shows/Sherlock3", "/Crime/Shows/Sherlock4"]},
    {title: "Sherlock S2", link: "Crime/Shows/Sherlock2", bigImg: "https://img.vxdn.net/cover/1440/sherlock-season-2-3994.jpg", desc: "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.", genre: "Crime, Mystery", eps: ["https://vidembed.net/streaming.php?id=NDMyMTE&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://vidembed.net/streaming.php?id=NDMyMTI&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://vidembed.net/streaming.php?id=NDMyMTM&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw=="], seasons: ["/Crime/Shows/Sherlock", "/Crime/Shows/Sherlock2", "/Crime/Shows/Sherlock3", "/Crime/Shows/Sherlock4"], display: false},
    {title: "Sherlock S3", link: "Crime/Shows/Sherlock3", bigImg: "https://img.vxdn.net/cover/1440/sherlock-season-3-3995.jpg", desc: "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.", genre: "Crime, Mystery", eps: ["https://vidembed.net/streaming.php?id=NDMyMDg&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://vidembed.net/streaming.php?id=NDMyMDk&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://vidembed.net/streaming.php?id=NDMyMTA&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw=="], seasons: ["/Crime/Shows/Sherlock", "/Crime/Shows/Sherlock2", "/Crime/Shows/Sherlock3", "/Crime/Shows/Sherlock4"], display: false},
    {title: "Sherlock S4", link: "Crime/Shows/Sherlock4", bigImg: "https://townsquare.media/site/442/files/2016/12/sherlock-s4-poster-pic.jpg", desc: "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.", genre: "Crime, Mystery", eps: ["https://vidembed.net/streaming.php?id=Nzc0ODg&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://vidembed.net/streaming.php?id=Nzc3Mjc&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://vidembed.net/streaming.php?id=Nzc5NDg&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw=="], seasons: ["/Crime/Shows/Sherlock", "/Crime/Shows/Sherlock2", "/Crime/Shows/Sherlock3", "/Crime/Shows/Sherlock4"], display: false},
    {title: "Cherry", link: "Crime/Movies/Cherry", smallImg: "https://img.vxdn.net/poster/200/cherry-102237.jpg", bigImg: "https://img.vxdn.net/cover/1440/cherry-102237.jpg", src: "https://vidembed.net/streaming.php?id=MzM4MTI2&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "Cherry (Tom Holland) drifts from college dropout to army medic in Iraq-anchored only by his one true love, Emily (Ciara Bravo). But after returning from the war with PTSD, his life spirals into drugs", genre: "Crime, Drama"},
    {title: "Ocean's Eleven", link: "Crime/Movies/Oceans-Eleven", smallImg: "https://img.vxdn.net/poster/200/oceans-eleven-4591.jpg", bigImg: "https://img.vxdn.net/cover/1440/oceans-eleven-4591.jpg", src: "https://player.voxzer.org/view/92f3c1e7c333d790d15b15e0", desc: "Danny Ocean, a gangster, assembles a group of eleven people in an effort to steal money from three popular casinos in Las Vegas owned by his rival, Terry Benedict.", genre: "Crime, Comedy"},
    {title: "Ocean's Twelve", link: "Crime/Movies/Oceans-Twelve", smallImg: "https://img.vxdn.net/poster/200/oceans-twelve-6086.jpg", bigImg: "https://img.vxdn.net/cover/1440/oceans-twelve-6086.jpg", src: "https://vidembed.net/streaming.php?id=NTIyMw=&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "Within two weeks, Danny Ocean and his associates must return the money they swindled from a Las Vegas casino tycoon, Terry Benedict, or Terry will kill them.", genre: "Crime, Comedy"},
    {title: "Ocean's Thirteen", link: "Crime/Movies/Oceans-Thirteen", smallImg: "https://img.vxdn.net/poster/200/oceans-thirteen-6123.jpg", bigImg: "https://img.vxdn.net/cover/1440/oceans-thirteen-6123.jpg", src: "https://player.voxzer.org/view/a9d7692b04f685542c57b5e0", desc: "Danny and his gang of thieves have to pull off their most risky heist to defend one of their own. However, they are going to need more than luck to break the ruthless Willy and his casino.", genre: "Crime, Comedy"},
    {title: "Ocean's Eight", link: "Crime/Movies/Oceans-Eight", smallImg: "https://img.vxdn.net/poster/200/oceans-8-25237.jpg", bigImg: "https://img.vxdn.net/cover/1440/oceans-8-25237.jpg", src: "https://player.voxzer.org/view/76a7612b04f6855f1c4c45e0", desc: "Debbie Ocean is released from jail after serving a prison sentence. She assembles a special crew of seven women to steal a diamond necklace, worth 150 million dollars, from the Met Gala.", genre: "Crime, Comedy"},
    {title: "Game Night", link: "Crime/Movies/Game-Night", smallImg: "https://img.vxdn.net/poster/200/game-night-23897.jpg", bigImg: "https://img.vxdn.net/cover/1440/game-night-23897.jpg", src: "https://player.voxzer.org/view/2167622b04f685509c4d45e0", desc: "When Max and Annie play a harmless murder mystery game with Max's brother Brooks and some friends, things begin to take surprising twists and turns as not all is what it seems to be.", genre: "Crime, Mystery, Comedy"},
    {title: "21 Bridges", link: "Crime/Movies/21-Bridges", smallImg: "https://img.vxdn.net/poster/200/21-Bridges-100171.jpg", bigImg: "https://img.vxdn.net/cover/1440/21-Bridges-100171.jpg", src: "https://player.voxzer.org/view/afc0e3b87f0665273c7e15e3", desc: "Andre, an aggressive police officer, determines to put an end to two war-veterans-turned-killers after they shoot down a few officers during a heist.", genre: "Crime, Action, Mystery"},
    {title: "Now You See Me", link: "Crime/Movies/Now-You-See-Me", smallImg: "https://img.vxdn.net/poster/200/now-you-see-me-4018.jpg", bigImg: "https://img.vxdn.net/cover/1440/now-you-see-me-4018.jpg", src: "https://player.voxzer.org/view/a3606a0d0714b6f31abab5e0", desc: "Four street magicians, Daniel, Merritt, Henley and Jack, ransack a huge amount of money belonging to insurance baron Arthur Tressler while being chased by FBI agent Dylan and Interpol agent Alma.", genre: "Crime, Mystery, Action"},
    {title: "Now You See Me 2", link: "Crime/Movies/Now-You-See-Me2", smallImg: "https://img.vxdn.net/poster/200/now-you-see-me-2-13124.jpg", bigImg: "https://img.vxdn.net/cover/1440/now-you-see-me-2-13124.jpg", src: "https://vidembed.net/streaming.php?id=NTUyNTA=&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "The Four Horsemen, a group of illusionists, find themselves in Macau, China, planning to pull off a heist on the orders of a devious tech genius.", genre: "Crime, Adventure, Action"},
    {title: "Peaky Blinders", link: "Crime/Shows/Peaky-Blinders", smallImg: "https://img.vxdn.net/poster/200/peaky-blinders-season-1-4224.jpg", bigImg: "https://img.vxdn.net/cover/1440/peaky-blinders-season-1-4224.jpg", desc: "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.", genre: "Crime, Drama, Thriller", eps: ["https://player.voxzer.org/view/7d47662b04f685564c5355e0", "https://player.voxzer.org/view/ebd7652b04f6855e4c5285e0", "https://player.voxzer.org/view/d4b7692b04f6855dbc57e5e0", "https://player.voxzer.org/view/3277692b04f68551fc5715e0", "https://player.voxzer.org/view/5047672b04f68559bc5475e0", "https://player.voxzer.org/view/f847682b04f685523c56c5e0"], seasons: ["/Crime/Shows/Peaky-Blinders", "/Crime/Shows/Peaky-Blinders2", "/Crime/Shows/Peaky-Blinders3", "/Crime/Shows/Peaky-Blinders4", "/Crime/Shows/Peaky-Blinders5"]},
    {title: "Peaky Blinders S2", link: "Crime/Shows/Peaky-Blinders2", bigImg: "https://img.vxdn.net/cover/1440/peaky-blinders-season-2-4225.jpg", desc: "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.", genre: "Crime, Drama, Thriller", eps: ["https://player.voxzer.org/view/ec73c1e7c333d796d15b85e0", "https://player.voxzer.org/view/f287652b04f68556ec5295e0", "https://player.voxzer.org/view/2afee8b9f52338a2515a55e0", "https://vidcloud9.com/streaming.php?id=NDI0MDM=", "https://player.voxzer.org/view/2657622b04f685578c4d45e0", "https://player.voxzer.org/view/0a27652b04f685541c5155e0"], seasons: ["/Crime/Shows/Peaky-Blinders", "/Crime/Shows/Peaky-Blinders2", "/Crime/Shows/Peaky-Blinders3", "/Crime/Shows/Peaky-Blinders4", "/Crime/Shows/Peaky-Blinders5"], display: false},
    {title: "Peaky Blinders S3", link: "Crime/Shows/Peaky-Blinders3", bigImg: "https://img.vxdn.net/cover/1440/peaky-blinders-season-3-12173.jpg", desc: "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.", genre: "Crime, Drama, Thriller", eps: ["https://player.voxzer.org/view/46d7662b04f6855b5c5305e0", "https://player.voxzer.org/view/fb37652b04f68552fc52a5e0", "https://player.voxzer.org/view/1eeee8b9f52338a1415a45e0", "https://player.voxzer.org/view/ef07622b04f685527c4e65e0", "https://player.voxzer.org/view/dd27672b04f6855ccc5535e0", "https://player.voxzer.org/view/29306f0d0714b6f3eac505e0"], seasons: ["/Crime/Shows/Peaky-Blinders", "/Crime/Shows/Peaky-Blinders2", "/Crime/Shows/Peaky-Blinders3", "/Crime/Shows/Peaky-Blinders4", "/Crime/Shows/Peaky-Blinders5"], display: false},
    {title: "Peaky Blinders S4", link: "Crime/Shows/Peaky-Blinders4", bigImg: "https://img.vxdn.net/cover/1440/peaky-blinders-season-4-22662.jpg", desc: "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.", genre: "Crime, Drama, Thriller", eps: ["https://player.voxzer.org/view/1c5ee8b9f52338add15a35e0", "https://player.voxzer.org/view/4757602b04f6855c3c4a95e0", "https://player.voxzer.org/view/f153c1e7c333d79d715b85e0", "https://player.voxzer.org/view/9b27652b04f6855d7c5215e0", "https://vidcloud9.com/streaming.php?id=MTQwMTE0", "https://player.voxzer.org/view/c397662b04f68557cc53b5e0"], seasons: ["/Crime/Shows/Peaky-Blinders", "/Crime/Shows/Peaky-Blinders2", "/Crime/Shows/Peaky-Blinders3", "/Crime/Shows/Peaky-Blinders4", "/Crime/Shows/Peaky-Blinders5"], display: false},
    {title: "Peaky Blinders S5", link: "Crime/Shows/Peaky-Blinders5", bigImg: "https://img.vxdn.net/cover/1440/Peaky-blinders-5-100012.jpg", desc: "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.", genre: "Crime, Drama, Thriller", eps: ["https://player.voxzer.org/view/fd47642b04f68551ac5145e0", "https://vidcloud9.com/streaming.php?id=Mjc5Nzk0", "https://player.voxzer.org/view/e897672b04f6855d3c5545e0", "https://player.voxzer.org/view/2ee7632b04f6855b9c4eb5e0", "https://player.voxzer.org/view/ded7642b04f685565c5115e0", "https://player.voxzer.org/view/b6906e0d0714b6f8cac3f5e0"], seasons: ["/Crime/Shows/Peaky-Blinders", "/Crime/Shows/Peaky-Blinders2", "/Crime/Shows/Peaky-Blinders3", "/Crime/Shows/Peaky-Blinders4", "/Crime/Shows/Peaky-Blinders5"], display: false}

];

router.get('/', (req, res) => {
    res.send(crime);
});

router.get('/Shows/:id', (req, res) => {
    try {
        const foundIndex = crime.findIndex((item) => {
            return item.link === `Crime/Shows/${req.params.id}`
        });
    
        res.render('shows', {
            title: crime[foundIndex].title,
            img: crime[foundIndex].bigImg,
            desc: crime[foundIndex].desc,
            genre: crime[foundIndex].genre,
            eps: crime[foundIndex].eps,
            seasons: crime[foundIndex].seasons ? crime[foundIndex].seasons : null
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

router.get('/Movies/:id', (req, res) => {
    try {
        const foundIndex = crime.findIndex((item) => {
            return item.link === `Crime/Movies/${req.params.id}`
        });
    
        res.render('movies', {
            title: crime[foundIndex].title,
            src: crime[foundIndex].src,
            img: crime[foundIndex].bigImg,
            desc: crime[foundIndex].desc,
            genre: crime[foundIndex].genre
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

module.exports = {router: router, crime: crime};