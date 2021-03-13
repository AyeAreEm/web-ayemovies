const express = require('express');
let router = express.Router();

router.get('/Iron-Man', (req, res) => {
    res.render('dynamic', {
        title: "Iron Man",
        src: "https://player.voxzer.org/view/91c3c1e7c333d79ff15b05e0",
        img: "https://img.vxdn.net/cover/1440/iron-man-1710.jpg",
        desc: "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.",
        genre: "Action, Adventure, Sci-Fi",
    })
});

router.get('/Iron-Man2', (req, res) => {
    res.render('dynamic', {
        title: "Iron Man 2",
        src: "https://player.voxzer.org/view/4c87622b04f6855d0c4d75e0",
        img: "https://img.vxdn.net/cover/1440/iron-man-2-1711.jpg",
        desc: "Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies.",
        genre: "Action, Adventure, Sci-Fi",
    })
});

router.get('/Iron-Man3', (req, res) => {
    res.render('dynamic', {
        title: "Iron Man 3",
        src: "https://vidnext.net/streaming.php?id=ODc5MA",
        img: "https://img.vxdn.net/cover/1440/iron-man-3-1712.jpg",
        desc: "Tony Stark encounters a formidable foe called the Mandarin. After failing to defeat his enemy, Tony embarks on a journey of self-discovery as he fights against the powerful Mandarin.",
        genre: "Action, Adventure, Sci-Fi",
    })
});

router.get('/Incredible-Hulk', (req, res) => {
    res.render('dynamic', {
        title: "The Incredible Hulk",
        src: "https://player.voxzer.org/view/a937612b04f68557cc4c95e0",
        img: "https://img.vxdn.net/cover/1440/the-incredible-hulk-3342.jpg",
        desc: "Dr Bruce Banner subjects himself to high levels of gamma radiation which triggers his transformation into a huge green creature, the Hulk, whenever he experiences negative emotions such as anger.",
        genre: "Action, Sci-Fi",
    });
});

router.get('/Thor', (req, res) => {
    res.render('dynamic', {
        title: "Thor",
        src: "https://player.voxzer.org/view/02906f0d0714b6fb5ac4a5e0",
        img: "https://img.vxdn.net/cover/1440/thor-3351.jpg",
        desc: "Thor is exiled by his father, Odin, the King of Asgard, to the Earth to live among mortals. When he lands on Earth, his trusted weapon Mjolnir is discovered and captured by S.H.I.E.L.D.",
        genre: "Fantasy, Action",
    });
});

router.get('/Thor-The-Dark-World', (req, res) => {
    res.render('dynamic', {
        title: "Thor: The Dark World",
        src: "https://vidnext.net/streaming.php?id=ODY3Ng",
        img: "https://img.vxdn.net/cover/1440/thor-the-dark-world-1843.jpg",
        desc: "Thor sets out on a journey to defeat Malekith, the leader of the Dark Elves when he returns to Asgard to retrieve a dangerous weapon and fulfill his desire of destroying the Nine Realms.",
        genre: "Fantasy, Action",
    });
});

router.get('/Thor-Ragnarok', (req, res) => {
    res.render('dynamic', {
        title: "Thor: Ragnarok",
        src: "https://player.voxzer.org/view/fa5ee7b9f52338a0215a15e0",
        img: "https://img.vxdn.net/cover/1440/thor-ragnarok-22466.jpg",
        desc: "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.",
        genre: "Fantasy, Action, Sci-Fi",
    });
});

router.get('/Captain-America', (req, res) => {
    res.render('dynamic', {
        title: "Captain America: The First Avenger",
        src: "https://player.voxzer.org/view/e7f7612b04f68550ec4cf5e0",
        img: "https://img.vxdn.net/cover/1440/captain-america-the-first-avenger-3352.jpg",
        desc: "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation.",
        genre: "Action, Adventure",
    });
});

router.get('/Captain-America-Winter-Soldier', (req, res) => {
    res.render('dynamic', {
        title: "Captain America: The Winter Soldier",
        src: "https://vidnext.net/streaming.php?id=ODgyOQ",
        img: "https://img.vxdn.net/cover/1440/captain-america-the-winter-soldier-1632.jpg",
        desc: "As Steve Rogers adapts to the complexities of a contemporary world, he joins Natasha Romanoff and Sam Wilson in his mission to uncover the secret behind a deadly, mysterious assassin.",
        genre: "Action, Adventure",
    });
});

router.get('/Captain-America-Civil-War', (req, res) => {
    res.render('dynamic', {
        title: "Captain America: Civil War",
        src: "https://vidcloud9.com/streaming.php?id=NDUw",
        img: "https://img.vxdn.net/cover/1440/captain-america-civil-war-latino-audio-11797.jpg",
        desc: "Friction arises between the Avengers when one group supports the government's decision to implement a law to control their powers while the other opposes it.",
        genre: "Action, Adventure",
    });
});

router.get('/Avengers', (req, res) => {
    res.render('dynamic', {
        title: "Avengers",
        src: "https://player.voxzer.org/view/1b57642b04f68556cc5005e0",
        img: "https://img.vxdn.net/cover/1440/the-avengers-1717.jpg",
        desc: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

router.get('/Avengers-Age-Of-Ultron', (req, res) => {
    res.render('dynamic', {
        title: "Avengers: Age of Ultron",
        src: "https://player.voxzer.org/view/ceb7692b04f685561c57e5e0",
        img: "https://img.vxdn.net/cover/1440/avengers-age-of-ultron-4632.jpg",
        desc: "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

router.get('/Avengers-Infinity-War', (req, res) => {
    res.render('dynamic', {
        title: "Avengers: Infinity War",
        src: "https://player.voxzer.org/view/9307602b04f685581c4b05e0",
        img: "https://img.vxdn.net/cover/1440/avengers-infinity-war-24689.jpg",
        desc: "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

router.get('/Avengers-Endgame', (req, res) => {
    res.render('dynamic', {
        title: "Avengers: Endgame",
        src: "https://player.voxzer.org/view/08c76a2b04f685544c5835e0",
        img: "https://img.vxdn.net/cover/1440/avengers-endgame-28501.jpg",
        desc: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

router.get('/GotG', (req, res) => {
    res.render('dynamic', {
        title: "Guardians of the Galaxy",
        src: "https://player.voxzer.org/view/9007622b04f6855d4c4dd5e0",
        img: "https://img.vxdn.net/cover/1440/guardians-of-the-galaxy-1608.jpg",
        desc: "Peter escapes from the planet Morag with a valuable orb that Ronan the Accuser wants. He eventually forms a group with unwilling heroes to stop Ronan.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

router.get('/GotG2', (req, res) => {
    res.render('dynamic', {
        title: "Guardians of the Galaxy Vol. 2",
        src: "https://player.voxzer.org/view/7bc7672b04f685564c54b5e0",
        img: "https://img.vxdn.net/cover/1440/guardians-of-the-galaxy-vol-2-20525.jpg",
        desc: "After a successful mission, Quill and his team of galactic defenders meet Ego, a man claiming to be Quill's father. However, they soon learn some disturbing truths about Ego.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

router.get("/Ant-Man", (req, res) => {
    res.render('dynamic', {
        title: "Ant-Man",
        src: "https://player.voxzer.org/view/a597662b04f6855e5c5385e0",
        img: "https://img.vxdn.net/cover/1440/ant-man-4408.jpg",
        desc: "Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements.",
        genre: "Action, Sci-Fi, Drama"
    });
});

router.get("/Ant-Man-And-The-Wasp", (req, res) => {
    res.render('dynamic', {
        title: "Ant-Man and the Wasp",
        src: "https://player.voxzer.org/view/ee67602b04f6855d3c4b85e0",
        img: "https://img.vxdn.net/cover/1440/ant-man-and-the-wasp-25534.jpg",
        desc: "Despite being under house arrest, Scott Lang, along with the Wasp, sets out to help Dr Hank Pym to enter the quantum realm as they face new enemies along the way.",
        genre: "Action, Sci-Fi"
    });
});

router.get('/Doctor-Strange', (req, res) => {
    res.render('dynamic', {
        title: "Doctor Strange",
        src: "https://player.voxzer.org/view/ec27602b04f6855a7c4b85e0",
        img: "https://img.vxdn.net/cover/1440/doctor-strange-17530.jpg",
        desc: "In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage.",
        genre: "Action, Fantasy"
    });
});

router.get('/Spider-Man-Homecoming', (req, res) => {
    res.render('dynamic', {
        title: "Spider-Man: Homecoming",
        src: "https://player.voxzer.org/view/b667692b04f685553c57c5e0",
        img: "https://img.vxdn.net/cover/1440/spider-man-homecoming-21248.jpg",
        desc: "Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",
        genre: "Action, Adventure"
    });
});

router.get('/Spider-Man-Far-From-Home', (req, res) => {
    res.render('dynamic', {
        title: "Spider-Man: Far From Home",
        src: "https://player.voxzer.org/view/aab3c1e7c333d79ff15b25e0",
        img: "https://img.vxdn.net/cover/1440/spider-man-far-from-home-28904.jpg",
        desc: "Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.",
        genre: "Action, Adventure"
    });
});

router.get('/Black-Panther', (req, res) => {
    res.render('dynamic', {
        title: "Black Panther",
        src: "https://player.voxzer.org/view/0d4ee8b9f52338a9515a25e0",
        img: "https://img.vxdn.net/cover/1440/black-panther-23800.jpg",
        desc: "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

router.get('/Captain-Marvel', (req, res) => {
    res.render('dynamic', {
        title: "Captain Marvel",
        src: "https://player.voxzer.org/view/8656add4d760606e488f55e6",
        img: "https://img.vxdn.net/cover/1440/captain-marvel-28165.jpg",
        desc: "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

router.get('/Deadpool', (req, res) => {
    res.render('dynamic', {
        title: "Deadpool",
        src: "https://player.voxzer.org/view/b410690d0714b6f2ba5bf5e0",
        img: "https://img.vxdn.net/cover/1440/deadpool-9802.jpg",
        desc: "Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.",
        genre: "Action, Comedy"
    });
});

router.get('/Deadpool2', (req, res) => {
    res.render('dynamic', {
        title: "Deadpool 2",
        src: "https://player.voxzer.org/view/e0f7652b04f6855ebc5275e0",
        img: "https://img.vxdn.net/cover/1440/deadpool-2-24922.jpg",
        desc: "Deadpool protects a young mutant Russell from the authorities and gets thrown in prison. However, he escapes and forms a team of mutants to prevent a time-travelling mercenary from killing Russell",
        genre: "Action, Comedy"
    });
});

router.get('/Spider-Man', (req, res) => {
    res.render('dynamic', {
        title: "Spider-Man",
        src: "https://player.voxzer.org/view/8467662b04f68550ac5365e0",
        img: "https://img.vxdn.net/cover/1440/spider-man-3337.jpg",
        desc: "Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil maniac.",
        genre: "Action, Sci-Fi"
    });
});

router.get('/Spider-Man2', (req, res) => {
    res.render('dynamic', {
        title: "Spider-Man 2",
        src: "https://vidcloud9.com/streaming.php?id=NzM5MQ",
        img: "https://img.vxdn.net/cover/1440/spider-man-2-3338.jpg",
        desc: "Peter Parker is dissatisfied with life when he loses his job, the love of his life, Mary Jane, and his powers. Amid all the chaos, he must fight Doctor Octavius who threatens to destroy New York City.",
        genre: "Action, Sci-Fi"
    });
});

router.get('/Spider-Man3', (req, res) => {
    res.render('dynamic', {
        title: "Spider-Man 3",
        src: "https://player.voxzer.org/view/1ea7612b04f685524c4bd5e0",
        img: "https://img.vxdn.net/cover/1440/spider-man-3-3339.jpg",
        desc: "Peter Parker becomes one with a symbiotic alien that bolsters his Spider-Man avatar and affects his psyche. He also has to deal with Sandman and maintain a fragmented relationship with Mary Jane.",
        genre: "Action, Sci-Fi"
    });
});

router.get('/The-Amazing-Spider-Man', (req, res) => {
    res.render('dynamic', {
        title: "The Amazing Spider-Man",
        src: "https://player.voxzer.org/view/28b7662b04f68551ec52e5e0",
        img: "https://img.vxdn.net/cover/1440/the-amazing-spider-man-1753.jpg",
        desc: "Peter Parker, an outcast high school student, gets bitten by a radioactive spider and attains superpowers. Soon, he is forced to use his abilities to fight a monstrous foe.",
        genre: "Action, Sci-Fi"
    });
});

router.get('/The-Amazing-Spider-Man2', (req, res) => {
    res.render('dynamic', {
        title: "The Amazing Spider-Man 2",
        src: "https://vidcloud9.com/streaming.php?id=ODc1MA",
        img: "https://img.vxdn.net/cover/1440/the-amazing-spider-man-2-1754.jpg",
        desc: "Spider-Man embarks on a mission to protect his loved ones when OsCorp, owned by his childhood friend Harry Osborn, unleashes a slew of genetically-modified villains against him",
        genre: "Action, Sci-Fi"
    });
});

module.exports = router;