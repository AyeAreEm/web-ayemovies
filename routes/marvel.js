const express = require('express');
let router = express.Router();

const marvel = [
    {title: "Iron Man", link: "Marvel/Iron-Man", smallImg: "https://img.vxdn.net/poster/200/iron-man-1710.jpg", bigImg: "https://img.vxdn.net/cover/1440/iron-man-1710.jpg", src: "https://player.voxzer.org/view/91c3c1e7c333d79ff15b05e0", desc: "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.", genre: "Action, Adventure, Sci-Fi"}, {title: "Iron Man 2", link: "Marvel/Iron-Man2", smallImg: "https://img.vxdn.net/poster/200/iron-man-2-1711.jpg", bigImg: "https://img.vxdn.net/cover/1440/iron-man-2-1711.jpg", src: "https://player.voxzer.org/view/4c87622b04f6855d0c4d75e0", desc: "Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies.", genre: "Action, Adventure, Sci-Fi"}, {title: "Iron Man 3", link: "Marvel/Iron-Man3", smallImg: "https://img.vxdn.net/poster/200/iron-man-3-1712.jpg", bigImg: "https://img.vxdn.net/cover/1440/iron-man-3-1712.jpg", src: "https://vidnext.net/streaming.php?id=ODc5MA", desc: "Tony Stark encounters a formidable foe called the Mandarin. After failing to defeat his enemy, Tony embarks on a journey of self-discovery as he fights against the powerful Mandarin.", genre: "Action, Adventure, Sci-Fi",},
    {title: "The Incredible Hulk", link: "Marvel/Incredible-Hulk", smallImg: "https://img.vxdn.net/poster/200/the-incredible-hulk-3342.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-incredible-hulk-3342.jpg", src: "https://player.voxzer.org/view/a937612b04f68557cc4c95e0", desc: "Dr Bruce Banner subjects himself to high levels of gamma radiation which triggers his transformation into a huge green creature, the Hulk, whenever he experiences negative emotions such as anger.", genre: "Action, Sci-Fi"},
    {title: "Thor", link: "Marvel/Thor", smallImg: "https://img.vxdn.net/poster/200/thor-3351.jpg", bigImg: "https://img.vxdn.net/cover/1440/thor-3351.jpg", src: "https://player.voxzer.org/view/02906f0d0714b6fb5ac4a5e0", desc: "Thor is exiled by his father, Odin, the King of Asgard, to the Earth to live among mortals. When he lands on Earth, his trusted weapon Mjolnir is discovered and captured by S.H.I.E.L.D.", genre: "Fantasy, Action"}, {title: "Thor: The Dark World", link: "Marvel/Thor-The-Dark-World", smallImg: "https://img.vxdn.net/poster/200/thor-the-dark-world-1843.jpg", bigImg: "https://img.vxdn.net/cover/1440/thor-the-dark-world-1843.jpg", src: "https://vidnext.net/streaming.php?id=ODY3Ng", desc: "Thor sets out on a journey to defeat Malekith, the leader of the Dark Elves when he returns to Asgard to retrieve a dangerous weapon and fulfill his desire of destroying the Nine Realms.", genre: "Fantasy, Action"}, {title: "Thor: Ragnarok", link: "Marvel/Thor-Ragnarok", smallImg: "https://img.vxdn.net/poster/200/thor-ragnarok-22466.jpg", bigImg: "https://img.vxdn.net/cover/1440/thor-ragnarok-22466.jpg", src: "https://player.voxzer.org/view/fa5ee7b9f52338a0215a15e0", desc: "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.", genre: "Fantasy, Action, Sci-Fi"},
    {title: "Captain America: The First Avenger", link: "Marvel/Captain-America", smallImg: "https://img.vxdn.net/poster/200/captain-america-the-first-avenger-3352.jpg", bigImg: "https://img.vxdn.net/cover/1440/captain-america-the-first-avenger-3352.jpg", src: "https://player.voxzer.org/view/e7f7612b04f68550ec4cf5e0", desc: "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation.", genre: "Action, Adventure"}, {title: "Captain America: The Winter Soldier", link: "Marvel/Captain-America-Winter-Soldier", smallImg: "https://img.vxdn.net/poster/200/captain-america-the-winter-soldier-1632.jpg", bigImg: "https://img.vxdn.net/cover/1440/captain-america-the-winter-soldier-1632.jpg", src: "https://vidcloud9.com/streaming.php?id=NDUw", desc: "Friction arises between the Avengers when one group supports the government's decision to implement a law to control their powers while the other opposes it.", genre: "Action, Adventure"}, {title: "Captain America: Civil War", link: "Marvel/Captain-America-Civil-War", smallImg: "https://img.vxdn.net/poster/200/captain-america-civil-war-latino-audio-11797.jpg", bigImg: "https://img.vxdn.net/cover/1440/captain-america-civil-war-latino-audio-11797.jpg", src: "https://vidcloud9.com/streaming.php?id=NDUw", desc: "Friction arises between the Avengers when one group supports the government's decision to implement a law to control their powers while the other opposes it.", genre: "Action, Adventure"},
    {title: "Avengers", link: "Marvel/Avengers", smallImg: "https://img.vxdn.net/poster/200/the-avengers-1717.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-avengers-1717.jpg", src: "https://player.voxzer.org/view/1b57642b04f68556cc5005e0", desc: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.", genre: "Action, Adventure, Sci-Fi"}, {title: "Avengers: Age of Ultron", link: "Marvel/Avengers-Age-Of-Ultron", smallImg: "https://img.vxdn.net/poster/200/avengers-age-of-ultron-4632.jpg", bigImg: "https://img.vxdn.net/cover/1440/avengers-age-of-ultron-4632.jpg", src: "https://player.voxzer.org/view/ceb7692b04f685561c57e5e0", desc: "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.", genre: "Action, Adventure, Sci-Fi"}, {title: "Avengers: Infinity War", link: "Marvel/Avengers-Infinity-War", smallImg: "https://img.vxdn.net/poster/200/avengers-infinity-war-24689.jpg", bigImg: "https://img.vxdn.net/cover/1440/avengers-infinity-war-24689.jpg", src: "https://player.voxzer.org/view/9307602b04f685581c4b05e0", desc: "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.", genre: "Action, Adventure, Sci-Fi"}, {title: "Avengers: Endgame", link: "Marvel/Avengers-Endgame", smallImg: "https://img.vxdn.net/poster/200/avengers-endgame-28501.jpg", bigImg: "https://img.vxdn.net/cover/1440/avengers-endgame-28501.jpg", src: "https://player.voxzer.org/view/08c76a2b04f685544c5835e0", desc: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.", genre: "Action, Adventure, Sci-Fi"},
    {title: "Guardians of the Galaxy", link: "Marvel/GotG", smallImg: "https://img.vxdn.net/poster/200/guardians-of-the-galaxy-1608.jpg", bigImg: "https://img.vxdn.net/cover/1440/guardians-of-the-galaxy-1608.jpg", src: "https://player.voxzer.org/view/9007622b04f6855d4c4dd5e0", desc: "Peter escapes from the planet Morag with a valuable orb that Ronan the Accuser wants. He eventually forms a group with unwilling heroes to stop Ronan.", genre: "Action, Adventure, Sci-Fi"}, {title: "Guardians of the Galaxy Vol. 2", link: "Marvel/GotG2", smallImg: "https://img.vxdn.net/poster/200/guardians-of-the-galaxy-vol-2-20525.jpg", bigImg: "https://img.vxdn.net/cover/1440/guardians-of-the-galaxy-vol-2-20525.jpg", src: "https://player.voxzer.org/view/7bc7672b04f685564c54b5e0", desc: "After a successful mission, Quill and his team of galactic defenders meet Ego, a man claiming to be Quill's father. However, they soon learn some disturbing truths about Ego.", genre: "Action, Adventure, Sci-Fi"},
    {title: "Ant-Man", link: "Marvel/Ant-Man", smallImg: "https://img.vxdn.net/poster/200/ant-man-4408.jpg", bigImg: "https://img.vxdn.net/cover/1440/ant-man-4408.jpg", src: "https://player.voxzer.org/view/a597662b04f6855e5c5385e0", desc: "Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements.", genre: "Action, Sci-Fi, Drama"}, {title: "Ant-Man and the Wasp", link: "Marvel/Ant-Man-And-The-Wasp", smallImg: "https://img.vxdn.net/poster/200/ant-man-and-the-wasp-25534.jpg", bigImg: "https://img.vxdn.net/cover/1440/ant-man-and-the-wasp-25534.jpg", src: "https://player.voxzer.org/view/ee67602b04f6855d3c4b85e0", desc: "Despite being under house arrest, Scott Lang, along with the Wasp, sets out to help Dr Hank Pym to enter the quantum realm as they face new enemies along the way.", genre: "Action, Sci-Fi"},
    {title: "Doctor Strange", link: "Marvel/Doctor-Strange", smallImg: "https://img.vxdn.net/poster/200/doctor-strange-17530.jpg", bigImg: "https://img.vxdn.net/cover/1440/doctor-strange-17530.jpg", src: "https://player.voxzer.org/view/ec27602b04f6855a7c4b85e0", desc: "In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage.",  genre: "Action, Fantasy"},
    {title: "Spider-Man: Homecoming", link: "Marvel/Spider-Man-Homecoming", smallImg: "https://img.vxdn.net/poster/200/spider-man-homecoming-21248.jpg", bigImg: "https://img.vxdn.net/cover/1440/spider-man-homecoming-21248.jpg", src: "https://player.voxzer.org/view/b667692b04f685553c57c5e0", desc: "Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.", genre: "Action, Adventure"}, {title: "Spider-Man: Far From Home", link: "Marvel/Spider-Man-Far-From-Home", smallImg: "https://img.vxdn.net/poster/200/spider-man-far-from-home-28904.jpg", bigImg: "https://img.vxdn.net/cover/1440/spider-man-far-from-home-28904.jpg", src: "https://player.voxzer.org/view/aab3c1e7c333d79ff15b25e0", desc: "Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.", genre: "Action, Adventure"},
    {title: "Black Panther", link: "Marvel/Black-Panther", smallImg: "https://img.vxdn.net/poster/200/black-panther-23800.jpg", bigImg: "https://img.vxdn.net/cover/1440/black-panther-23800.jpg", src: "https://player.voxzer.org/view/0d4ee8b9f52338a9515a25e0", desc: "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.", genre: "Action, Adventure, Sci-Fi"},
    {title: "Captain Marvel", link: "Marvel/Captain-Marvel", smallImg: "https://img.vxdn.net/poster/200/captain-marvel-28165.jpg", bigImg: "https://img.vxdn.net/cover/1440/captain-marvel-28165.jpg", src: "https://player.voxzer.org/view/8656add4d760606e488f55e6", desc: "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent.", genre: "Action, Adventure, Sci-Fi"},
    {title: "Deadpool", link: "Marvel/Deadpool", smallImg: "https://img.vxdn.net/poster/200/deadpool-9802.jpg", bigImg: "https://img.vxdn.net/cover/1440/deadpool-9802.jpg", src: "https://player.voxzer.org/view/b410690d0714b6f2ba5bf5e0", desc: "Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.", genre: "Action, Comedy"}, {title: "Deadpool 2", link: "Marvel/Deadpool2", smallImg: "https://img.vxdn.net/poster/200/deadpool-2-24922.jpg", bigImg: "https://img.vxdn.net/cover/1440/deadpool-2-24922.jpg", src: "https://player.voxzer.org/view/e0f7652b04f6855ebc5275e0", desc: "Deadpool protects a young mutant Russell from the authorities and gets thrown in prison. However, he escapes and forms a team of mutants to prevent a time-travelling mercenary from killing Russell", genre: "Action, Comedy"},
    {title: "Spider-Man", link: "Marvel/Spider-Man", smallImg: "https://img.vxdn.net/poster/200/spider-man-3337.jpg", bigImg: "https://img.vxdn.net/cover/1440/spider-man-3337.jpg", src: "https://player.voxzer.org/view/8467662b04f68550ac5365e0", desc: "Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil maniac.", genre: "Action, Sci-Fi"}, {title: "Spider-Man 2", link: "Marvel/Spider-Man2", smallImg: "https://img.vxdn.net/poster/200/spider-man-2-3338.jpg", bigImg: "https://img.vxdn.net/cover/1440/spider-man-2-3338.jpg", src: "https://vidcloud9.com/streaming.php?id=NzM5MQ", desc: "Peter Parker is dissatisfied with life when he loses his job, the love of his life, Mary Jane, and his powers. Amid all the chaos, he must fight Doctor Octavius who threatens to destroy New York City.", genre: "Action, Sci-Fi"}, {title: "Spider-Man 3", link: "Marvel/Spider-Man3", smallImg: "https://img.vxdn.net/poster/200/spider-man-3-3339.jpg", bigImg: "https://img.vxdn.net/cover/1440/spider-man-3-3339.jpg", src: "https://player.voxzer.org/view/1ea7612b04f685524c4bd5e0", desc: "Peter Parker becomes one with a symbiotic alien that bolsters his Spider-Man avatar and affects his psyche. He also has to deal with Sandman and maintain a fragmented relationship with Mary Jane.", genre: "Action, Sci-Fi"},
    {title: "The Amazing Spider-Man", link: "Marvel/The-Amazing-Spider-Man", smallImg: "https://img.vxdn.net/poster/200/the-amazing-spider-man-1753.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-amazing-spider-man-1753.jpg", src: "https://player.voxzer.org/view/28b7662b04f68551ec52e5e0", desc: "Peter Parker, an outcast high school student, gets bitten by a radioactive spider and attains superpowers. Soon, he is forced to use his abilities to fight a monstrous foe.", genre: "Action, Sci-Fi"}, {title: "The Amazing Spider-Man 2", link: "Marvel/The-Amazing-Spider-Man2", smallImg: "https://img.vxdn.net/poster/200/the-amazing-spider-man-2-1754.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-amazing-spider-man-2-1754.jpg", src: "https://vidcloud9.com/streaming.php?id=ODc1MA", desc: "Spider-Man embarks on a mission to protect his loved ones when OsCorp, owned by his childhood friend Harry Osborn, unleashes a slew of genetically-modified villains against him", genre: "Action, Sci-Fi"},
    {title: "WandaVision", link: "Marvel/WandaVision", smallImg: "https://img.vxdn.net/poster/200/WandaVision-1-101990.jpg", bigImg: "https://img.vxdn.net/cover/1440/WandaVision-1-101990.jpg", desc: "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.", genre: "Sitcom", eps: ["https://player.voxzer.org/view/5828bc0dcc3288e5ab3e7600", "https://player.voxzer.org/view/6308bc0dcc3288e24b561601", "https://player.voxzer.org/view/62e8bc0dcc3288e23b561601", "https://player.voxzer.org/view/62c8bc0dcc3288e21b561601", "https://player.voxzer.org/view/783c8f237d18b8b720ea8601", "https://player.voxzer.org/view/7fdc8f237d18b8bee07f0602", "https://vidnext.net/streaming.php?id=MzM3MTg3", "https://player.voxzer.org/view/89bc8f237d18b8ba90ba8603", "https://vidnext.net/streaming.php?id=MzM3NzY1"]}
]

router.get('/Iron-Man', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Iron Man"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    })
});

router.get('/Iron-Man2', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Iron Man 2"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    })
});

router.get('/Iron-Man3', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Iron Man 3"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    })
});

router.get('/Incredible-Hulk', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Incredible Hulk"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Thor', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Thor"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Thor-The-Dark-World', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Thor: The Dark World"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Thor-Ragnarok', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Thor: Ragnarok"
    });
    
    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Captain-America', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Captain America: The First Avenger"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Captain-America-Winter-Soldier', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Captain America: The Winter Soldier"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Captain-America-Civil-War', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Captain America: Civil War"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Avengers', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Avengers"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Avengers-Age-Of-Ultron', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Avengers: Age of Ultron"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Avengers-Infinity-War', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Avengers: Infinity War"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Avengers-Endgame', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Avengers: Endgame"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/GotG', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Guardians of the Galaxy"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/GotG2', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Guardians of the Galaxy Vol. 2"
    });
    
    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get("/Ant-Man", (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Ant-Man"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get("/Ant-Man-And-The-Wasp", (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Ant-Man and the Wasp"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Doctor-Strange', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Doctor Strange"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Spider-Man-Homecoming', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Spider-Man: Homecoming"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Spider-Man-Far-From-Home', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Spider-Man: Far From Home"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Black-Panther', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Black Panther"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Captain-Marvel', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Captain Marvel"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Deadpool', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Deadpool"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Deadpool2', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Deadpool 2"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Spider-Man', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Spider-Man"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Spider-Man2', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Spider-Man 2"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/Spider-Man3', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "Spider-Man 3"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/The-Amazing-Spider-Man', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "The Amazing Spider-Man"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/The-Amazing-Spider-Man2', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "The Amazing Spider-Man 2"
    });

    res.render('dynamic', {
        title: marvel[foundIndex].title,
        src: marvel[foundIndex].src,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre
    });
});

router.get('/WandaVision', (req, res) => {
    const foundIndex = marvel.findIndex((item) => {
        return item.title === "WandaVision"
    });

    res.render('shows', {
        title: marvel[foundIndex].title,
        img: marvel[foundIndex].bigImg,
        desc: marvel[foundIndex].desc,
        genre: marvel[foundIndex].genre,
        eps: marvel[foundIndex].eps
    });
});

module.exports = {router: router, marvel: marvel};