const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('views'));

const allLink = [
    // Marvel Movies
    {title: "Iron Man", link: "/Iron-Man"}, {title: "Iron Man 2", link: "/Iron-Man2"}, {title: "Iron Man 3", link: "/Iron-Man3"},
    {title: "The Incredible Hulk", link: "/Incredible-Hulk"},
    {title: "Thor", link: "/Thor"}, {title: "Thor: The Dark World", link: "/Thor-The-Dark-World"}, {title: "Thor: Ragnarok", link: "/Thor-Ragnarok"},
    {title: "Captain America: The First Avenger", link: "/Captain-America"}, {title: "Captain America: The Winter Soldier", link: "/Captain-America-Winter-Soldier"}, {title: "Captain America: Civil War", link: "/Captain-America-Civil-War"},
    {title: "Avengers", link: "/Avengers"}, {title: "Avengers: Age of Ultron", link: "/Avengers-Age-Of-Ultron"}, {title: "Avengers: Infinity War", link: "/Avengers-Infinity-War"}, {title: "Avengers: Endgame", link: "/Avengers-Endgame"},
    {title: "Guardians of the Galaxy", link: "/GotG"}, {title: "Guardians of the Galaxy Vol. 2", link: "/GotG2"},
    {title: "Ant-Man", link: "/Ant-Man"}, {title: "Ant-Man and the Wasp", link: "/Ant-Man-And-The-Wasp"},
    {title: "Doctor Strange", link: "/Doctor-Strange"},
    {title: "Spider-Man: Homecoming", link: "/Spider-Man-Homecoming"}, {title: "Spider-Man: Far From Home", link: "/Spider-Man-Far-From-Home"},
    {title: "Black Panther", link: "/Black-Panther"},
    {title: "Captain Marvel", link: "/Captain-Marvel"},
    // NetFlix Originals
    {title: "The Witcher", link: "/The-Witcher"},
    {title: "Sex Education", link: "/Sex-Education"},
    // Star Wars
    {title: "Star Wars: The Phantom Menace", link: "/Star-Wars-The-Phantom-Menace"}, {title: "Star Wars: Attack of the Clones", link: "/Star-Wars-Attack-Of-The-Clones"}, {title: "Star Wars: Revenge of the Sith", link: "/Star-Wars-Revenge-Of-The-Sith"}, {title: "Star Wars: A New Hope", link: "/Star-Wars-A-New-Hope"}, {title: "Star Wars: The Empire Strikes Back", link: "/Star-Wars-The-Empire-Strikes-Back"}, {title: "Star Wars: Return of the Jedi", link: "/Star-Wars-Return-Of-The-Jedi"}, {title: "Star Wars: The Force Awakens", link: "/Star-Wars-The-Force-Awakens"}, {title: "Star Wars: The Last Jedi", link: "/Star-Wars-The-Last-Jedi"}, {title: "Star Wars: The Rise of Skywalker", link: "/Star-Wars-The-Rise-Of-Skywalker"},
    // Animated Movies
    {title: "Kung Fu Panda", link: "/Kung-Fu-Panda"}, {title: "Kung Fu Panda 2", link: "/Kung-Fu-Panda2"}, {title: "Kung Fu Panda 3", link: "/Kung-Fu-Panda3"},
    {title: "Shrek", link: "/Shrek"}, {title: "Shrek 2", link: "/Shrek2"}, {title: "Shrek the Third", link: "/Shrek3"}, {title: "Shrek Forever After", link: "/Shrek4"},
    {title: "Spider-Man: Into the Spider-Verse", link: "/Spider-Man-Into-the-Spider-Verse"},
    {title: "Big Hero 6", link: "/Big-Hero-6"},
    {title: "How To Train Your Dragon", link: "/How-To-Train-Your-Dragon"}, {title: "How To Train Your Dragon 2", link: "/How-To-Train-Your-Dragon2"}, {title: "How To Train Your Dragon: The Hidden World", link: "/How-To-Train-Your-Dragon3"}
];

app.get('/', (req, res) => {
    res.render('index', {all: allLink});
});

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
        src: "https://vidnext.net/streaming.php?id=ODc5MA",
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
        src: "https://vidnext.net/streaming.php?id=ODY3Ng",
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
        src: "https://vidnext.net/streaming.php?id=ODgyOQ",
        img: "https://img.vxdn.net/cover/1440/captain-america-the-winter-soldier-1632.jpg",
        desc: "As Steve Rogers adapts to the complexities of a contemporary world, he joins Natasha Romanoff and Sam Wilson in his mission to uncover the secret behind a deadly, mysterious assassin.",
        genre: "Action, Adventure",
    });
});

app.get('/Captain-America-Civil-War', (req, res) => {
    res.render('dynamic', {
        title: "Captain America: Civil War",
        src: "https://vidcloud9.com/streaming.php?id=NDUw",
        img: "https://img.vxdn.net/cover/1440/captain-america-civil-war-latino-audio-11797.jpg",
        desc: "Friction arises between the Avengers when one group supports the government's decision to implement a law to control their powers while the other opposes it.",
        genre: "Action, Adventure",
    });
});

app.get('/Avengers', (req, res) => {
    res.render('dynamic', {
        title: "Avengers",
        src: "https://player.voxzer.org/view/1b57642b04f68556cc5005e0",
        img: "https://img.vxdn.net/cover/1440/the-avengers-1717.jpg",
        desc: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

app.get('/Avengers-Age-Of-Ultron', (req, res) => {
    res.render('dynamic', {
        title: "Avengers: Age of Ultron",
        src: "https://player.voxzer.org/view/ceb7692b04f685561c57e5e0",
        img: "https://img.vxdn.net/cover/1440/avengers-age-of-ultron-4632.jpg",
        desc: "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

app.get('/Avengers-Infinity-War', (req, res) => {
    res.render('dynamic', {
        title: "Avengers: Infinity War",
        src: "https://player.voxzer.org/view/9307602b04f685581c4b05e0",
        img: "https://img.vxdn.net/cover/1440/avengers-infinity-war-24689.jpg",
        desc: "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

app.get('/Avengers-Endgame', (req, res) => {
    res.render('dynamic', {
        title: "Avengers: Endgame",
        src: "https://player.voxzer.org/view/08c76a2b04f685544c5835e0",
        img: "https://img.vxdn.net/cover/1440/avengers-endgame-28501.jpg",
        desc: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

app.get('/GotG', (req, res) => {
    res.render('dynamic', {
        title: "Guardians of the Galaxy",
        src: "https://player.voxzer.org/view/9007622b04f6855d4c4dd5e0",
        img: "https://img.vxdn.net/cover/1440/guardians-of-the-galaxy-1608.jpg",
        desc: "Peter escapes from the planet Morag with a valuable orb that Ronan the Accuser wants. He eventually forms a group with unwilling heroes to stop Ronan.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

app.get('/GotG2', (req, res) => {
    res.render('dynamic', {
        title: "Guardians of the Galaxy Vol. 2",
        src: "https://player.voxzer.org/view/7bc7672b04f685564c54b5e0",
        img: "https://img.vxdn.net/cover/1440/guardians-of-the-galaxy-vol-2-20525.jpg",
        desc: "After a successful mission, Quill and his team of galactic defenders meet Ego, a man claiming to be Quill's father. However, they soon learn some disturbing truths about Ego.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

app.get("/Ant-Man", (req, res) => {
    res.render('dynamic', {
        title: "Ant-Man",
        src: "https://player.voxzer.org/view/a597662b04f6855e5c5385e0",
        img: "https://img.vxdn.net/cover/1440/ant-man-4408.jpg",
        desc: "Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements.",
        genre: "Action, Sci-Fi, Drama"
    });
});

app.get("/Ant-Man-And-The-Wasp", (req, res) => {
    res.render('dynamic', {
        title: "Ant-Man and the Wasp",
        src: "https://player.voxzer.org/view/ee67602b04f6855d3c4b85e0",
        img: "https://img.vxdn.net/cover/1440/ant-man-and-the-wasp-25534.jpg",
        desc: "Despite being under house arrest, Scott Lang, along with the Wasp, sets out to help Dr Hank Pym to enter the quantum realm as they face new enemies along the way.",
        genre: "Action, Sci-Fi"
    });
});

app.get('/Doctor-Strange', (req, res) => {
    res.render('dynamic', {
        title: "Doctor Strange",
        src: "https://player.voxzer.org/view/ec27602b04f6855a7c4b85e0",
        img: "https://img.vxdn.net/cover/1440/doctor-strange-17530.jpg",
        desc: "In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage.",
        genre: "Action, Fantasy"
    });
});

app.get('/Spider-Man-Homecoming', (req, res) => {
    res.render('dynamic', {
        title: "Spider-Man: Homecoming",
        src: "https://player.voxzer.org/view/b667692b04f685553c57c5e0",
        img: "https://img.vxdn.net/cover/1440/spider-man-homecoming-21248.jpg",
        desc: "Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",
        genre: "Action, Adventure"
    });
});

app.get('/Spider-Man-Far-From-Home', (req, res) => {
    res.render('dynamic', {
        title: "Spider-Man: Far From Home",
        src: "https://player.voxzer.org/view/aab3c1e7c333d79ff15b25e0",
        img: "https://img.vxdn.net/cover/1440/spider-man-far-from-home-28904.jpg",
        desc: "Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.",
        genre: "Action, Adventure"
    });
});

app.get('/Black-Panther', (req, res) => {
    res.render('dynamic', {
        title: "Black Panther",
        src: "https://player.voxzer.org/view/0d4ee8b9f52338a9515a25e0",
        img: "https://img.vxdn.net/cover/1440/black-panther-23800.jpg",
        desc: "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

app.get('/Captain-Marvel', (req, res) => {
    res.render('dynamic', {
        title: "Captain Marvel",
        src: "https://player.voxzer.org/view/8656add4d760606e488f55e6",
        img: "https://img.vxdn.net/cover/1440/captain-marvel-28165.jpg",
        desc: "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent.",
        genre: "Action, Adventure, Sci-Fi"
    });
});

// Netflix Origins
app.get('/The-Witcher', (req, res) => {
    res.render('shows', {
        title: "The Witcher",
        img: "https://assets.hardwarezone.com/img/2019/06/netflix-witcher.jpg",
        desc: "The Witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
        genre: "Action, Fantasy",
        eps: ["https://player.voxzer.org/view/1b40710d0714b6f35adbb5e0", "https://player.voxzer.org/view/2ee0700d0714b6fd3ad985e0", "https://player.voxzer.org/view/9b60700d0714b6f7eada85e0", "https://player.voxzer.org/view/8730710d0714b6feaadcb5e0", "https://player.voxzer.org/view/5770710d0714b6facadc35e0", "https://player.voxzer.org/view/72c0700d0714b6fb1ada25e0", "https://player.voxzer.org/view/a1506f0d0714b6f38ad845e0", "https://player.voxzer.org/view/5960700d0714b6f13ad9f5e0"]
    });
});

app.get('/Sex-Education', (req, res) => {
    res.render('shows', {
        title: "Sex Education",
        img: "https://img.vxdn.net/cover/1440/sex-education-season-1-27675.jpg",
        desc: "Socially awkward high school student Otis may not have much experience in the lovemaking department, but he gets good guidance on the topic in his personal sex ed course -- living with mom Jean, who is a sex therapist. Being surrounded by manuals, videos and tediously open conversations about sex, Otis has become a reluctant expert on the subject. When his classmates learn about his home life, Otis decides to use his insider knowledge to improve his status at school, so he teams with whip-smart bad girl Maeve to set up an underground sex therapy clinic to deal with their classmates' problems. But through his analysis of teenage sexuality, Otis realizes that he may need some therapy of his own.",
        genre: "Drama",
        eps: ["https://player.voxzer.org/view/73e06f0d0714b6f10ac625e0", "https://player.voxzer.org/view/1850710d0714b6fc6adba5e0", "https://vidcloud9.com/streaming.php?id=MjM0ODYx", "https://vidcloud9.com/streaming.php?id=MjM0ODYy", "https://vidcloud9.com/streaming.php?id=MjM0ODYz", "https://vidcloud9.com/streaming.php?id=MjM0ODY0", "https://vidcloud9.com/streaming.php?id=MjM0ODY1", "https://vidcloud9.com/streaming.php?id=MjM0ODY2"]
    });
});

// Star Wars
app.get('/Star-Wars-A-New-Hope', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: A New Hope",
        src: "https://player.voxzer.org/view/f6d75f2b04f685570c4a25e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-episode-iv-a-new-hope-2229.jpg",
        desc: "After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

app.get('/Star-Wars-The-Empire-Strikes-Back', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: The Empire Strikes Back",
        src: "https://player.voxzer.org/view/dec7682b04f685505c56a5e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-episode-v-the-empire-strikes-back-2233.jpg",
        desc: "Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

app.get('/Star-Wars-Return-Of-The-Jedi', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: Return of the Jedi",
        src: "https://player.voxzer.org/view/613ee8b9f52338aa415a95e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-episode-vi-return-of-the-jedi-2238.jpg",
        desc: "Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

app.get('/Star-Wars-The-Phantom-Menace', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: The Phantom Menace",
        src: "https://player.voxzer.org/view/403ee8b9f52338ae415a65e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-episode-i-the-phantom-menace-1915.jpg",
        desc: "Jedi Knights Qui-Gon Jinn and Obi-Wan Kenobi set out to stop the Trade Federation from invading Naboo. While travelling, they come across a gifted boy, Anakin, and learn that the Sith have returned.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

app.get('/Star-Wars-Attack-Of-The-Clones', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: Attack of the Clones",
        src: "https://player.voxzer.org/view/2df7682b04f6855d4c55a5e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-episode-ii-attack-of-the-clones-1916.jpg",
        desc: "While pursuing an assassin, Obi Wan uncovers a sinister plot to destroy the Republic. With the fate of the galaxy hanging in the balance, the Jedi must defend the galaxy against the evil Sith.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

app.get('/Star-Wars-Revenge-Of-The-Sith', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: Revenge of the Sith",
        src: "https://player.voxzer.org/view/8637602b04f685567c4af5e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-episode-iii-revenge-of-the-sith-2197.jpg",
        desc: "Anakin joins forces with Obi-Wan and sets Palpatine free from the evil clutches of Count Doku. However, he falls prey to Palpatine and the Jedis' mind games and gives into temptation.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

app.get('/Star-Wars-The-Force-Awakens', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: The Force Awakens",
        src: "https://player.voxzer.org/view/da30710d0714b6f09add75e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-the-force-awakens-7292.jpg",
        desc: "A new order threatens to destroy the New Republic. Finn, Rey and Poe, backed by the Resistance and the Republic, must find a way to stop them and find Luke, the last surviving Jedi.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

app.get('/Star-Wars-The-Last-Jedi', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: The Last Jedi",
        src: "https://player.voxzer.org/view/0e47602b04f68559ec4a45e0",
        img: "https://img.vxdn.net/cover/1440/star-wars-the-last-jedi-23033.jpg",
        desc: "Rey seeks to learn the ways of the Jedi under Luke Skywalker, its remaining member, to reinvigorate the Resistance's war against the First Order.",
        genre: "Sci-Fi, Action, Adventure",
    });
});

app.get('/Star-Wars-The-Rise-Of-Skywalker', (req, res) => {
    res.render('dynamic', {
        title: "Star Wars: The Rise of Skywalker",
        src: "https://player.voxzer.org/view/84be8f023ea48b6dd71d75e7",
        img: "https://img.vxdn.net/cover/1440/star-wars-the-rise-of-skywalker-100243.jpg",
        desc: "The revival of Emperor Palpatine resurrects the battle between the Resistance and the First Order while the Jedi's legendary conflict with the Sith Lord comes to a head.",
        genre: "Sci-Fi, Action, Adventure",
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
        src: "https://vidnext.net/streaming.php?id=MzE2NA",
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
        src: "https://vidnext.net/streaming.php?id=NjQ3Ng",
        img: "https://img.vxdn.net/cover/1440/shrek-forever-after-4611.jpg",
        desc: "When Shrek realises that no one fears him, Rumpel offers him a shady deal. Thereafter, Shrek gets cast in an alternate reality where everybody is afraid of him but Fiona does not remember him.",
        genre: "Animation, Adventure, Comedy",
    });
});

app.get('/Spider-Man-Into-the-Spider-Verse', (req, res) => {
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
        src: "https://vidnext.net/streaming.php?id=ODc1NA",
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
        title: "How To Train Your Dragon: The Hidden World",
        src: "https://player.voxzer.org/view/c1900b023ea48b6907b3c5e7",
        img: "https://img.vxdn.net/cover/1440/how-to-train-your-dragon-the-hidden-world-27688.jpg",
        desc: "Hiccup aims to unite the vikings and the dragons in order to bring peace on the island of Berk. However, he must stop the evil Grimmel and his devious plans to wipe out all dragons.",
        genre: "Family, Adventure, Fantasy",
    });
});

const port = process.env.PORT || 3000;
app.listen(port);