const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.render('index');
});

// const all = ["iron man", "iron man 2", "iron man 3", "incredible hulk", "thor", "thor dark world", "thor ragnarok", "captain america", "captain america winter soldier", "captain america civil war", "kung fu panda", "kung fu panda 2", "kung fu panda 3", "shrek", "shrek 2", "shrek the third", "shrek forever after", "spider-man into the spider-verse", "big hero 6", "how to train your dragon", "how to train your dragon 2", "how to train your dragon the hidden world"]

// MCU Movies
app.get('/Iron-Man', (req, res) => {
    res.render('dynamic', {
        title: "Iron Man",
        src: "https://player.voxzer.org/view/91c3c1e7c333d79ff15b05e0",
        img: "https://img.vxdn.net/cover/1440/iron-man-1710.jpg",
        desc: "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.",
        genre: "Action, Adventure, Sci-Fi",
    })
});

app.get('/Iron-Man2', (req, res) => {
    res.render('dynamic', {
        title: "Iron Man 2",
        src: "https://player.voxzer.org/view/4c87622b04f6855d0c4d75e0",
        img: "https://img.vxdn.net/cover/1440/iron-man-2-1711.jpg",
        desc: "Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies.",
        genre: "Action, Adventure, Sci-Fi",
    })
});

app.get('/Iron-Man3', (req, res) => {
    res.render('dynamic', {
        title: "Iron Man 3",
        src: "https://vidcloud.msk.ru/embed4/y9324l5uhoia5?i=8613ac97fa6ea10bf9f20dba222ce8a5&el=1613442",
        img: "https://img.vxdn.net/cover/1440/iron-man-3-1712.jpg",
        desc: "Tony Stark encounters a formidable foe called the Mandarin. After failing to defeat his enemy, Tony embarks on a journey of self-discovery as he fights against the powerful Mandarin.",
        genre: "Action, Adventure, Sci-Fi",
    })
});

app.get('/Incredible-Hulk', (req, res) => {
    res.render('dynamic', {
        title: "The Incredible Hulk",
        src: "https://player.voxzer.org/view/a937612b04f68557cc4c95e0",
        img: "https://img.vxdn.net/cover/1440/the-incredible-hulk-3342.jpg",
        desc: "Dr Bruce Banner subjects himself to high levels of gamma radiation which triggers his transformation into a huge green creature, the Hulk, whenever he experiences negative emotions such as anger.",
        genre: "Action, Sci-Fi",
    });
});

app.get('/Thor', (req, res) => {
    res.render('dynamic', {
        title: "Thor",
        src: "https://player.voxzer.org/view/02906f0d0714b6fb5ac4a5e0",
        img: "https://img.vxdn.net/cover/1440/thor-3351.jpg",
        desc: "Thor is exiled by his father, Odin, the King of Asgard, to the Earth to live among mortals. When he lands on Earth, his trusted weapon Mjolnir is discovered and captured by S.H.I.E.L.D.",
        genre: "Fantasy, Action",
    });
});

app.get('/Thor-The-Dark-World', (req, res) => {
    res.render('dynamic', {
        title: "Thor: The Dark World",
        src: "https://vidcloud.msk.ru/embed4/bm9u6miohenke?i=8613ac97fa6ea10bf9f20dba222ce8a5&el=1615644",
        img: "https://img.vxdn.net/cover/1440/thor-the-dark-world-1843.jpg",
        desc: "Thor sets out on a journey to defeat Malekith, the leader of the Dark Elves when he returns to Asgard to retrieve a dangerous weapon and fulfill his desire of destroying the Nine Realms.",
        genre: "Fantasy, Action",
    });
});

app.get('/Thor-Ragnarok', (req, res) => {
    res.render('dynamic', {
        title: "Thor: Ragnarok",
        src: "https://player.voxzer.org/view/fa5ee7b9f52338a0215a15e0",
        img: "https://img.vxdn.net/cover/1440/thor-ragnarok-22466.jpg",
        desc: "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.",
        genre: "Fantasy, Action, Sci-Fi",
    });
});

app.get('/Captain-America', (req, res) => {
    res.render('dynamic', {
        title: "Captain America: The First Avenger",
        src: "https://player.voxzer.org/view/e7f7612b04f68550ec4cf5e0",
        img: "https://img.vxdn.net/cover/1440/captain-america-the-first-avenger-3352.jpg",
        desc: "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation.",
        genre: "Action, Adventure",
    });
});

app.get('/Captain-America-Winter-Soldier', (req, res) => {
    res.render('dynamic', {
        title: "Captain America: The Winter Soldier",
        src: "https://vidcloud.msk.ru/embed4/qn6vuxvsi4ea4?i=8613ac97fa6ea10bf9f20dba222ce8a5&el=1613346",
        img: "https://img.vxdn.net/cover/1440/captain-america-the-winter-soldier-1632.jpg",
        desc: "As Steve Rogers adapts to the complexities of a contemporary world, he joins Natasha Romanoff and Sam Wilson in his mission to uncover the secret behind a deadly, mysterious assassin.",
        genre: "Action, Adventure",
    });
});

app.get('/Captain-America-Civil-War', (req, res) => {
    res.render('dynamic', {
        title: "Captain America: Civil War",
        src: "https://vidcloud.msk.ru/embed4/846ozpql66k66?i=8613ac97fa6ea10bf9f20dba222ce8a5&el=1613343",
        img: "https://img.vxdn.net/cover/1440/captain-america-civil-war-latino-audio-11797.jpg",
        desc: "Friction arises between the Avengers when one group supports the government's decision to implement a law to control their powers while the other opposes it.",
        genre: "Action, Adventure",
    });
});

// Animated Movies
app.get('/Kung-Fu-Panda', (req, res) => {
    res.render('dynamic', {
        title: "Kung Fu Panda",
        src: "https://player.voxzer.org/view/92c76a2b04f6855f9c58e5e0",
        img: "https://fanart.tv/fanart/movies/9502/moviethumb/kung-fu-panda-54c14183a8693.jpg",
        desc: "When Po the Panda, a kung fu enthusiast, gets selected as the Dragon Warrior, he decides to team up with the Furious Five and destroy the evil forces that threaten the Valley of Peace.",
        genre: "Animation, Action, Comedy",
    });
});

app.get('/Kung-Fu-Panda2', (req, res) => {
    res.render('dynamic', {
        title: "Kung Fu Panda 2",
        src: "https://player.voxzer.org/view/6f17602b04f685554c4ad5e0",
        img: "https://img.vxdn.net/cover/1440/kung-fu-panda-2-2248.jpg",
        desc: "Dragon Warrior Po takes it upon himself to foil the plans of murderous peacock Shen who intends to conquer China and destroy kung fu. For this, Po has to unveil the mystery of his own past.",
        genre: "Animation, Action, Comedy",
    });
});

app.get('/Kung-Fu-Panda3', (req, res) => {
    res.render('dynamic', {
        title: "Kung Fu Panda 3",
        src: "https://vidcloud.msk.ru/embed4/l9lftawgdjewz?i=8613ac97fa6ea10bf9f20dba222ce8a5&el=1613457",
        img: "https://img.vxdn.net/cover/1440/kung-fu-panda-3-9053.jpg",
        desc: "The Dragon Warrior, Po, has to deal with challenges galore when circumstances compel him to train a bunch of awkward pandas in martial arts so that they can trounce Kai, a wicked supernatural warrior.",
        genre: "Animation, Action, Comedy",
    });
});

app.get('/Shrek', (req, res) => {
    res.render('dynamic', {
        title: "Shrek",
        src: "https://player.voxzer.org/view/4ba06f0d0714b6f43ac555e0",
        img: "https://img.vxdn.net/cover/1440/shrek-4608.jpg",
        desc: "Shrek, an ogre, embarks on a journey with a donkey to rescue Princess Fiona from a vile lord and regain his swamp.",
        genre: "Animation, Adventure, Comedy",
    });
});

app.get('/Shrek2', (req, res) => {
    res.render('dynamic', {
        title: "Shrek 2",
        src: "https://player.voxzer.org/view/6697612b04f685587c4c35e0",
        img: "https://img.vxdn.net/cover/1440/shrek-2-4609.jpg",
        desc: "When Shrek and Fiona return from their honeymoon, her parents, the rulers of Far Far Away, invite them over. But as the king does not like Shrek, he enlists a fairy to keep him away from his daughter.",
        genre: "Animation, Adventure, Comedy",
    });
});

app.get('/Shrek3', (req, res) => {
    res.render('dynamic', {
        title: "Shrek 3",
        src: "https://player.voxzer.org/view/5a906d0d0714b6f7cac0c5e0",
        img: "https://img.vxdn.net/cover/1440/shrek-the-third-4610.jpg",
        desc: "After Shrek's father-in-law King Harold becomes sick, Shrek is the next in line to take over. However, he tries to make Artie the king and takes help from Donkey and Puss in Boots.",
        genre: "Animation, Adventure, Comedy",
    });
});

app.get('/Shrek4', (req, res) => {
    res.render('dynamic', {
        title: "Shrek Forever After",
        src: "https://vidcloud.msk.ru/embed4/lpvazdk0702to?i=8613ac97fa6ea10bf9f20dba222ce8a5&el=1613504",
        img: "https://img.vxdn.net/cover/1440/shrek-forever-after-4611.jpg",
        desc: "When Shrek realises that no one fears him, Rumpel offers him a shady deal. Thereafter, Shrek gets cast in an alternate reality where everybody is afraid of him but Fiona does not remember him.",
        genre: "Animation, Adventure, Comedy",
    });
});

app.get('/Spider-Man:-Into-the-Spider-Verse', (req, res) => {
    res.render('dynamic', {
        title: "Spider-Man: Into the Spider-Verse",
        src: "https://player.voxzer.org/view/8646add4d760606e388f55e6",
        img: "https://img.vxdn.net/cover/1440/spider-man-into-the-spider-verse-27208.jpg",
        desc: "After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.",
        genre: "Animation, Action, Adventure",
    });
});

app.get('/Big-Hero-6', (req, res) => {
    res.render('dynamic', {
        title: "Big Hero 6",
        src: "https://player.voxzer.org/view/a6b7672b04f685516c54f5e0",
        img: "https://img.vxdn.net/cover/1440/big-hero-6-2043.jpg",
        desc: "Hiro, a robotics prodigy, joins hands with Baymax in order to avenge his brother's death. They then team up with Hiro's friends to form a team of high-tech heroes.",
        genre: "Animation, Action, Adventure, Comedy, Family",
    });
});

app.get('/How-To-Train-Your-Dragon', (req, res) => {
    res.render('dynamic', {
        title: "How To Train Your Dragon",
        src: "https://vidcloud.msk.ru/embed4/dz3nflp0yb6w0?i=8613ac97fa6ea10bf9f20dba222ce8a5&el=1615681",
        img: "https://img.vxdn.net/cover/1440/how-to-train-your-dragon-1750.jpg",
        desc: "Hiccup, a Viking, must kill a dragon to mark his passage into manhood and be initiated into his tribe. However, he ends up doing the exact opposite by befriending a deadly dragon, Night Fury.",
        genre: "Family, Adventure, Fantasy",
    });
});

app.get('/How-To-Train-Your-Dragon2', (req, res) => {
    res.render('dynamic', {
        title: "How To Train Your Dragon 2",
        src: "https://player.voxzer.org/view/d3706c0d0714b6f92abf85e0",
        img: "https://img.vxdn.net/cover/1440/how-to-train-your-dragon-2-1751.jpg",
        desc: "Hiccup and Toothless are faced with the threat of Drago, a dragon trapper, bent on capturing and dominating over all dragons. However, they are determined to defeat him and restore peace on Berk.",
        genre: "Family, Adventure, Fantasy",
    });
});

app.get('/How-To-Train-Your-Dragon3', (req, res) => {
    res.render('dynamic', {
        title: "How To Train Your Dragon 3",
        src: "https://player.voxzer.org/view/c1900b023ea48b6907b3c5e7",
        img: "https://img.vxdn.net/cover/1440/how-to-train-your-dragon-the-hidden-world-27688.jpg",
        desc: "Hiccup aims to unite the vikings and the dragons in order to bring peace on the island of Berk. However, he must stop the evil Grimmel and his devious plans to wipe out all dragons.",
        genre: "Family, Adventure, Fantasy",
    });
});

app.listen(3000);