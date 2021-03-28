const express = require('express');
let router = express.Router();

const crime = [
    {title: "Sherlock", link: "Crime/Shows/Sherlock", smallImg: "https://img.vxdn.net/poster/200/sherlock-season-1-3993.jpg", bigImg: "https://img.vxdn.net/cover/1440/sherlock-season-1-3993.jpg", desc: "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.", genre: "Crime, Mystery", eps: ["https://vidcloud9.com/streaming.php?id=NDMyMTQ", "https://vidcloud9.com/streaming.php?id=NDMyMTU", "https://vidcloud9.com/streaming.php?id=NDMyMTY"], seasons: ["/Crime/Shows/Sherlock", "/Crime/Shows/Sherlock2", "/Crime/Shows/Sherlock3", "/Cimre/Shows/Sherlock4"]},
    {title: "Sherlock S2", link: "Crime/Shows/Sherlock2", bigImg: "https://img.vxdn.net/cover/1440/sherlock-season-2-3994.jpg", desc: "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.", genre: "Crime, Mystery", eps: ["https://vidcloud9.com/streaming.php?id=NDMyMTE", "https://vidcloud9.com/streaming.php?id=NDMyMTI", "https://vidcloud9.com/streaming.php?id=NDMyMTM"], seasons: ["/Crime/Shows/Sherlock", "/Crime/Shows/Sherlock2", "/Crime/Shows/Sherlock3", "/Cimre/Shows/Sherlock4"], display: false},
    {title: "Sherlock S3", link: "Crime/Shows/Sherlock3", bigImg: "https://img.vxdn.net/cover/1440/sherlock-season-3-3995.jpg", desc: "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.", genre: "Crime, Mystery", eps: ["https://vidcloud9.com/streaming.php?id=NDMyMDg", "https://vidcloud9.com/streaming.php?id=NDMyMDk", "https://vidcloud9.com/streaming.php?id=NDMyMTA"], seasons: ["/Crime/Shows/Sherlock", "/Crime/Shows/Sherlock2", "/Crime/Shows/Sherlock3", "/Cimre/Shows/Sherlock4"], display: false},
    {title: "Sherlock S4", link: "Crime/Shows/Sherlock4", bigImg: "https://townsquare.media/site/442/files/2016/12/sherlock-s4-poster-pic.jpg", desc: "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.", genre: "Crime, Mystery", eps: ["https://vidcloud9.com/streaming.php?id=Nzc0ODg", "https://vidcloud9.com/streaming.php?id=Nzc3Mjc", "https://vidcloud9.com/streaming.php?id=Nzc5NDg"], seasons: ["/Crime/Shows/Sherlock", "/Crime/Shows/Sherlock2", "/Crime/Shows/Sherlock3", "/Cimre/Shows/Sherlock4"], display: false},
    {title: "Cherry", link: "Crime/Movies/Cherry", smallImg: "https://img.vxdn.net/poster/200/cherry-102237.jpg", bigImg: "https://img.vxdn.net/cover/1440/cherry-102237.jpg", src: "https://vidnext.net/streaming.php?id=MzM4MTI2", desc: "Cherry (Tom Holland) drifts from college dropout to army medic in Iraq-anchored only by his one true love, Emily (Ciara Bravo). But after returning from the war with PTSD, his life spirals into drugs", genre: "Crime, Drama"}
    
];

router.get('/', (req, res) => {
    res.send(crime);
});

router.get('/Shows/:id', (req, res) => {
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
});

router.get('/Movies/:id', (req, res) => {
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
});

module.exports = {router: router, crime: crime};