const express = require('express');
let router = express.Router();

const netflix = [
    {title: "The Witcher", link: "Netflix/The-Witcher", smallImg: "https://img.vxdn.net/poster/200/The-Witcher-1-100248.jpg", bigImg: "https://assets.hardwarezone.com/img/2019/06/netflix-witcher.jpg", desc: "The Witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.", genre: "Action, Fantasy", eps: ["https://player.voxzer.org/view/1b40710d0714b6f35adbb5e0", "https://player.voxzer.org/view/2ee0700d0714b6fd3ad985e0", "https://player.voxzer.org/view/9b60700d0714b6f7eada85e0", "https://player.voxzer.org/view/8730710d0714b6feaadcb5e0", "https://player.voxzer.org/view/5770710d0714b6facadc35e0", "https://player.voxzer.org/view/72c0700d0714b6fb1ada25e0", "https://player.voxzer.org/view/a1506f0d0714b6f38ad845e0", "https://player.voxzer.org/view/5960700d0714b6f13ad9f5e0"]},
    {title: "Sex Education", link: "Netflix/Sex-Education", smallImg: "https://img.vxdn.net/poster/200/sex-education-season-1-27675.jpg", bigImg: "https://img.vxdn.net/cover/1440/sex-education-season-1-27675.jpg", desc: "Socially awkward high school student Otis may not have much experience in the lovemaking department, but he gets good guidance on the topic in his personal sex ed course -- living with mom Jean, who is a sex therapist. Being surrounded by manuals, videos and tediously open conversations about sex, Otis has become a reluctant expert on the subject. When his classmates learn about his home life, Otis decides to use his insider knowledge to improve his status at school, so he teams with whip-smart bad girl Maeve to set up an underground sex therapy clinic to deal with their classmates' problems. But through his analysis of teenage sexuality, Otis realizes that he may need some therapy of his own.", genre: "Drama", eps: ["https://player.voxzer.org/view/73e06f0d0714b6f10ac625e0", "https://player.voxzer.org/view/1850710d0714b6fc6adba5e0", "https://vidcloud9.com/streaming.php?id=MjM0ODYx", "https://vidcloud9.com/streaming.php?id=MjM0ODYy", "https://vidcloud9.com/streaming.php?id=MjM0ODYz", "https://vidcloud9.com/streaming.php?id=MjM0ODY0", "https://vidcloud9.com/streaming.php?id=MjM0ODY1", "https://vidcloud9.com/streaming.php?id=MjM0ODY2"], seasons: ["/Netflix/Sex-Education", "/Netflix/Sex-Education2"]},
    {title: "Sex Education S2", link: "Netflix/Sex-Education2", bigImg: "https://img.vxdn.net/cover/1440/Sex-Education-2-100383.jpg", desc: "Socially awkward high school student Otis may not have much experience in the lovemaking department, but he gets good guidance on the topic in his personal sex ed course -- living with mom Jean, who is a sex therapist. Being surrounded by manuals, videos and tediously open conversations about sex, Otis has become a reluctant expert on the subject. When his classmates learn about his home life, Otis decides to use his insider knowledge to improve his status at school, so he teams with whip-smart bad girl Maeve to set up an underground sex therapy clinic to deal with their classmates' problems. But through his analysis of teenage sexuality, Otis realizes that he may need some therapy of his own.", genre: "Drama", eps: ["https://vidcloud9.com/streaming.php?id=MzA2NjY5", "https://vidcloud9.com/streaming.php?id=MzA2Njcw", "https://vidcloud9.com/streaming.php?id=MzA2Njcx", "https://vidcloud9.com/streaming.php?id=MzA2Njcy", "https://vidcloud9.com/streaming.php?id=MzA2Njcz", "https://vidcloud9.com/streaming.php?id=MzA2Njc0", "https://vidcloud9.com/streaming.php?id=MzA2Njc1", "https://vidcloud9.com/streaming.php?id=MzA2Njc2"], seasons: ["/Netflix/Sex-Education", "/Netflix/Sex-Education2"], display: false},
    {title: "Bird Box", link: "Netflix/Bird-Box", smallImg: "https://img.vxdn.net/poster/200/bird-box-27241.jpg", bigImg: "https://img.vxdn.net/cover/1440/bird-box-27241.jpg", src: "https://player.voxzer.org/view/4420730d0714b6f00aef05e0", desc: "When a mysterious force decimates the population, only one thing is certain -- if you see it, you die. The survivors must now avoid coming face to face with an entity that takes the form of their worst fears. Searching for hope and a new beginning, a woman and her children embark on a dangerous journey through the woods and down a river to find the one place that may offer sanctuary. To make it, they'll have to cover their eyes from the evil that chases them -- and complete the trip blindfolded.", genre: "Horror"},
    {title: "The Queen's Gambit", link: "Netflix/Queens-Gambit", smallImg: "https://images.123movieshub.tc/2020/10/qIITtEn253x1x7UTVb4g288xcxI.jpg", bigImg: "https://images.123movieshub.tc/2020/10/5N5dSOrysuquExvn8Gpp5jMEf6u.jpg", desc: "The Queen's Gambit is a 2020 American coming-of-age period drama miniseries based on Walter Tevis's 1983 novel of the same name. The title refers to 'Queen's Gambit', a chess opening. It was written and directed by Scott Frank, who created it with Allan Scott.", genre: "Drama", eps: ["https://firesonic.sc/streaming.php?id=MzMwNzk4", "https://firesonic.sc/streaming.php?id=MzMwNzk5", "https://firesonic.sc/streaming.php?id=MzMwODAw", "https://firesonic.sc/streaming.php?id=MzMwODAx", "https://firesonic.sc/streaming.php?id=MzMwODAy", "https://firesonic.sc/streaming.php?id=MzMwODAz6", "https://firesonic.sc/streaming.php?id=MzMwODA0"]},
    {title: "Stranger Things", link: "Netflix/Stranger-Things", smallImg: "https://img.vxdn.net/poster/200/stranger-things-season-1-14070.jpg", bigImg: "https://img.vxdn.net/cover/1440/stranger-things-season-1-14070.jpg", desc: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.", genre: "Supernatural, Drama, Horror Fiction", eps: ["https://player.voxzer.org/view/9da37ad68d354fec1714f5e1", "https://vidcloud9.com/streaming.php?id=NzYxOTU", "https://vidcloud9.com/streaming.php?id=NzYxOTY", "https://vidcloud9.com/streaming.php?id=NzYxOTc", "https://vidcloud9.com/streaming.php?id=NzYxOTg", "https://vidcloud9.com/streaming.php?id=NzYxOTk", "https://vidcloud9.com/streaming.php?id=NzYyMDA", "https://vidcloud9.com/streaming.php?id=NzYyMDE"], seasons: ["/Netflix/Stranger-Things", "/Netflix/Stranger-Things2", "/Netflix/Stranger-Things3"]},
    {title: "Stranger Things S2", link: "Netflix/Stranger-Things2", bigImg: "https://img.vxdn.net/cover/1440/stranger-things-season-2-22384.jpg", desc: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.", genre: "Supernatural, Drama, Horror Fiction", eps: ["https://vidcloud9.com/streaming.php?id=MTIyNzM4", "https://vidcloud9.com/streaming.php?id=MTIyNzM5", "https://vidcloud9.com/streaming.php?id=MTIyNzQw", "https://vidcloud9.com/streaming.php?id=MTIyNzQx", "https://vidcloud9.com/streaming.php?id=MTIyNzQy", "https://vidcloud9.com/streaming.php?id=MTIyNzQz", "https://vidcloud9.com/streaming.php?id=MTIyNzQ0", "https://vidcloud9.com/streaming.php?id=MTIyNzQ1", "https://vidcloud9.com/streaming.php?id=MTIyNzQ2"], seasons: ["/Netflix/Stranger-Things", "/Netflix/Stranger-Things2", "/Netflix/Stranger-Things3"], display: false},
    {title: "Stranger Things S3", link: "Netflix/Stranger-Things3", bigImg: "https://img.vxdn.net/cover/1440/stranger-things-3-28926.jpg", desc: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.", genre: "Supernatural, Drama, Horror Fiction", eps: ["https://player.voxzer.org/view/2777612b04f6855e9c4bd5e0", "https://player.voxzer.org/view/93806c0d0714b6f21abef5e0", "https://player.voxzer.org/view/9e27652b04f68551dc5225e0", "https://player.voxzer.org/view/2407632b04f6855ccc4ea5e0", "https://player.voxzer.org/view/4cc7672b04f685549c5475e0", "https://player.voxzer.org/view/a3f7602b04f685505c4b25e0", "https://player.voxzer.org/view/1fa06b0d0714b6fedabb85e0", "https://vidnext.net/streaming.php?id=MjY5Njgy"], seasons: ["/Netflix/Stranger-Things", "/Netflix/Stranger-Things2", "/Netflix/Stranger-Things3"], display: false}
]

router.get('/The-Witcher', (req, res) => {
    const foundIndex = netflix.findIndex((item) => {
        return item.title === "The Witcher"
    });

    res.render('shows', {
        title: netflix[foundIndex].title,
        img: netflix[foundIndex].bigImg,
        desc: netflix[foundIndex].desc,
        genre: netflix[foundIndex].genre,
        eps: netflix[foundIndex].eps
    });
});

router.get('/Sex-Education', (req, res) => {
    const foundIndex = netflix.findIndex((item) => {
        return item.title === "Sex Education"
    });

    res.render('shows', {
        title: netflix[foundIndex].title,
        img: netflix[foundIndex].bigImg,
        desc: netflix[foundIndex].desc,
        genre: netflix[foundIndex].genre,
        eps: netflix[foundIndex].eps,
        seasons: netflix[foundIndex].seasons
    });
});

router.get('/Sex-Education2', (req, res) => {
    const foundIndex = netflix.findIndex((item) => {
        return item.title === "Sex Education S2"
    });

    res.render('shows', {
        title: netflix[foundIndex].title,
        img: netflix[foundIndex].bigImg,
        desc: netflix[foundIndex].desc,
        genre: netflix[foundIndex].genre,
        eps: netflix[foundIndex].eps,
        seasons: netflix[foundIndex].seasons
    });
});

router.get('/Bird-Box', (req, res) => {
    const foundIndex = netflix.findIndex((item) => {
        return item.title === "Bird Box"
    });

    res.render('dynamic', {
        title: netflix[foundIndex].title,
        src: netflix[foundIndex].src,
        img: netflix[foundIndex].bigImg,
        desc: netflix[foundIndex].desc,
        genre: netflix[foundIndex].genre
    });
});

router.get('/Queens-Gambit', (req, res) => {
    const foundIndex = netflix.findIndex((item) => {
        return item.title === "The Queen's Gambit"
    });

    res.render('shows', {
        title: netflix[foundIndex].title,
        img: netflix[foundIndex].bigImg,
        desc: netflix[foundIndex].desc,
        genre: netflix[foundIndex].genre,
        eps: netflix[foundIndex].eps,
    });
});

router.get('/Stranger-Things', (req, res) => {
    const foundIndex = netflix.findIndex((item) => {
        return item.title === "Stranger Things"
    });
    
    res.render('shows', {
        title: netflix[foundIndex].title,
        img: netflix[foundIndex].bigImg,
        desc: netflix[foundIndex].desc,
        genre: netflix[foundIndex].genre,
        eps: netflix[foundIndex].eps,
        seasons: netflix[foundIndex].seasons
    });
});

router.get('/Stranger-Things2', (req, res) => {
    const foundIndex = netflix.findIndex((item) => {
        return item.title === "Stranger Things S2"
    });

    res.render('shows', {
        title: netflix[foundIndex].title,
        img: netflix[foundIndex].bigImg,
        desc: netflix[foundIndex].desc,
        genre: netflix[foundIndex].genre,
        eps: netflix[foundIndex].eps,
        seasons: netflix[foundIndex].seasons
    });
});

router.get('/Stranger-Things3', (req, res) => {
    const foundIndex = netflix.findIndex((item) => {
        return item.title === "Stranger Things S3"
    });
    
    res.render('shows', {
        title: netflix[foundIndex].title,
        img: netflix[foundIndex].bigImg,
        desc: netflix[foundIndex].desc,
        genre: netflix[foundIndex].genre,
        eps: netflix[foundIndex].eps,
        seasons: netflix[foundIndex].seasons
    });
});

module.exports = {router: router, netflix: netflix};