const express = require('express');
let router = express.Router();

router.get('/The-Witcher', (req, res) => {
    res.render('shows', {
        title: "The Witcher",
        img: "https://assets.hardwarezone.com/img/2019/06/netflix-witcher.jpg",
        desc: "The Witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
        genre: "Action, Fantasy",
        eps: ["https://player.voxzer.org/view/1b40710d0714b6f35adbb5e0", "https://player.voxzer.org/view/2ee0700d0714b6fd3ad985e0", "https://player.voxzer.org/view/9b60700d0714b6f7eada85e0", "https://player.voxzer.org/view/8730710d0714b6feaadcb5e0", "https://player.voxzer.org/view/5770710d0714b6facadc35e0", "https://player.voxzer.org/view/72c0700d0714b6fb1ada25e0", "https://player.voxzer.org/view/a1506f0d0714b6f38ad845e0", "https://player.voxzer.org/view/5960700d0714b6f13ad9f5e0"]
    });
});

router.get('/Sex-Education', (req, res) => {
    res.render('shows', {
        title: "Sex Education",
        img: "https://img.vxdn.net/cover/1440/sex-education-season-1-27675.jpg",
        desc: "Socially awkward high school student Otis may not have much experience in the lovemaking department, but he gets good guidance on the topic in his personal sex ed course -- living with mom Jean, who is a sex therapist. Being surrounded by manuals, videos and tediously open conversations about sex, Otis has become a reluctant expert on the subject. When his classmates learn about his home life, Otis decides to use his insider knowledge to improve his status at school, so he teams with whip-smart bad girl Maeve to set up an underground sex therapy clinic to deal with their classmates' problems. But through his analysis of teenage sexuality, Otis realizes that he may need some therapy of his own.",
        genre: "Drama",
        eps: ["https://player.voxzer.org/view/73e06f0d0714b6f10ac625e0", "https://player.voxzer.org/view/1850710d0714b6fc6adba5e0", "https://vidcloud9.com/streaming.php?id=MjM0ODYx", "https://vidcloud9.com/streaming.php?id=MjM0ODYy", "https://vidcloud9.com/streaming.php?id=MjM0ODYz", "https://vidcloud9.com/streaming.php?id=MjM0ODY0", "https://vidcloud9.com/streaming.php?id=MjM0ODY1", "https://vidcloud9.com/streaming.php?id=MjM0ODY2"],
        seasons: ["/Sex-Education", "/Sex-Education2"]
    });
});

router.get('/Sex-Education2', (req, res) => {
    res.render('shows', {
        title: "Sex Education S2",
        img: "https://img.vxdn.net/cover/1440/Sex-Education-2-100383.jpg",
        desc: "Socially awkward high school student Otis may not have much experience in the lovemaking department, but he gets good guidance on the topic in his personal sex ed course -- living with mom Jean, who is a sex therapist. Being surrounded by manuals, videos and tediously open conversations about sex, Otis has become a reluctant expert on the subject. When his classmates learn about his home life, Otis decides to use his insider knowledge to improve his status at school, so he teams with whip-smart bad girl Maeve to set up an underground sex therapy clinic to deal with their classmates' problems. But through his analysis of teenage sexuality, Otis realizes that he may need some therapy of his own.",
        genre: "Drama",
        eps: ["https://vidcloud9.com/streaming.php?id=MzA2NjY5", "https://vidcloud9.com/streaming.php?id=MzA2Njcw", "https://vidcloud9.com/streaming.php?id=MzA2Njcx", "https://vidcloud9.com/streaming.php?id=MzA2Njcy", "https://vidcloud9.com/streaming.php?id=MzA2Njcz", "https://vidcloud9.com/streaming.php?id=MzA2Njc0", "https://vidcloud9.com/streaming.php?id=MzA2Njc1", "https://vidcloud9.com/streaming.php?id=MzA2Njc2"],
        seasons: ["/Sex-Education", "/Sex-Education2"]
    });
});

router.get('/Bird-Box', (req, res) => {
    res.render('dynamic', {
        title: "Bird Box",
        src: "https://player.voxzer.org/view/4420730d0714b6f00aef05e0",
        img: "https://img.vxdn.net/cover/1440/bird-box-27241.jpg",
        desc: "When a mysterious force decimates the population, only one thing is certain -- if you see it, you die. The survivors must now avoid coming face to face with an entity that takes the form of their worst fears. Searching for hope and a new beginning, a woman and her children embark on a dangerous journey through the woods and down a river to find the one place that may offer sanctuary. To make it, they'll have to cover their eyes from the evil that chases them -- and complete the trip blindfolded.",
        genre: "Horror"
    });
});

router.get('/Queens-Gambit', (req, res) => {
    res.render('shows', {
        title: "The Queen's Gambit",
        img: "https://images.123movieshub.tc/2020/10/5N5dSOrysuquExvn8Gpp5jMEf6u.jpg",
        desc: "The Queen's Gambit is a 2020 American coming-of-age period drama miniseries based on Walter Tevis's 1983 novel of the same name. The title refers to 'Queen's Gambit', a chess opening. It was written and directed by Scott Frank, who created it with Allan Scott.",
        genre: "Drama",
        eps: ["https://firesonic.sc/streaming.php?id=MzMwNzk4", "https://firesonic.sc/streaming.php?id=MzMwNzk5", "https://firesonic.sc/streaming.php?id=MzMwODAw", "https://firesonic.sc/streaming.php?id=MzMwODAx", "https://firesonic.sc/streaming.php?id=MzMwODAy", "https://firesonic.sc/streaming.php?id=MzMwODAz6", "https://firesonic.sc/streaming.php?id=MzMwODA0"],
    });
});

module.exports = router;