const express = require('express');
const netflixRoute = require('./routes/netflix');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use("/netflix", netflixRoute);

const marvel = [
    {title: "Iron Man", link: "Iron-Man", image: "https://img.vxdn.net/poster/200/iron-man-1710.jpg"}, {title: "Iron Man 2", link: "Iron-Man2", image: "https://img.vxdn.net/poster/200/iron-man-2-1711.jpg"}, {title: "Iron Man 3", link: "Iron-Man3", image: "https://img.vxdn.net/poster/200/iron-man-3-1712.jpg"},
    {title: "The Incredible Hulk", link: "Incredible-Hulk", image: "https://img.vxdn.net/poster/200/the-incredible-hulk-3342.jpg"},
    {title: "Thor", link: "Thor", image: "https://img.vxdn.net/poster/200/thor-3351.jpg"}, {title: "Thor: The Dark World", link: "Thor-The-Dark-World", image: "https://img.vxdn.net/poster/200/thor-the-dark-world-1843.jpg"}, {title: "Thor: Ragnarok", link: "Thor-Ragnarok", image: "https://img.vxdn.net/poster/200/thor-ragnarok-22466.jpg"},
    {title: "Captain America: The First Avenger", link: "Captain-America", image: "https://img.vxdn.net/poster/200/captain-america-the-first-avenger-3352.jpg"}, {title: "Captain America: The Winter Soldier", link: "Captain-America-Winter-Soldier", image: "https://img.vxdn.net/poster/200/captain-america-the-winter-soldier-1632.jpg"}, {title: "Captain America: Civil War", link: "Captain-America-Civil-War", image: "https://img.vxdn.net/poster/200/captain-america-civil-war-latino-audio-11797.jpg"},
    {title: "Avengers", link: "Avengers", image: "https://img.vxdn.net/poster/200/the-avengers-1717.jpg"}, {title: "Avengers: Age of Ultron", link: "Avengers-Age-Of-Ultron", image: "https://img.vxdn.net/poster/200/avengers-age-of-ultron-4632.jpg"}, {title: "Avengers: Infinity War", link: "Avengers-Infinity-War", image: "https://img.vxdn.net/poster/200/avengers-infinity-war-24689.jpg"}, {title: "Avengers: Endgame", link: "Avengers-Endgame", image: "https://img.vxdn.net/poster/200/avengers-endgame-28501.jpg"},
    {title: "Guardians of the Galaxy", link: "GotG", image: "https://img.vxdn.net/poster/200/guardians-of-the-galaxy-1608.jpg"}, {title: "Guardians of the Galaxy Vol. 2", link: "GotG2", image: "https://img.vxdn.net/poster/200/guardians-of-the-galaxy-vol-2-20525.jpg"},
    {title: "Ant-Man", link: "Ant-Man", image: "https://img.vxdn.net/poster/200/ant-man-4408.jpg"}, {title: "Ant-Man and the Wasp", link: "Ant-Man-And-The-Wasp", image: "https://img.vxdn.net/poster/200/ant-man-and-the-wasp-25534.jpg"},
    {title: "Doctor Strange", link: "Doctor-Strange", image: "https://img.vxdn.net/poster/200/doctor-strange-17530.jpg"},
    {title: "Spider-Man: Homecoming", link: "Spider-Man-Homecoming", image: "https://img.vxdn.net/poster/200/spider-man-homecoming-21248.jpg"}, {title: "Spider-Man: Far From Home", link: "Spider-Man-Far-From-Home", image: "https://img.vxdn.net/poster/200/spider-man-far-from-home-28904.jpg"},
    {title: "Black Panther", link: "Black-Panther", image: "https://img.vxdn.net/poster/200/black-panther-23800.jpg"},
    {title: "Captain Marvel", link: "Captain-Marvel", image: "https://img.vxdn.net/poster/200/captain-marvel-28165.jpg"},
    {title: "Deadpool", link: "Deadpool", image: "https://img.vxdn.net/poster/200/deadpool-9802.jpg"}, {title: "Deadpool 2", link: "Deadpool2", image: "https://img.vxdn.net/poster/200/deadpool-2-24922.jpg"},
    {title: "Spider-Man", link: "Spider-Man", image: "https://img.vxdn.net/poster/200/spider-man-3337.jpg"}, {title: "Spider-Man 2", link: "Spider-Man2", image: "https://img.vxdn.net/poster/200/spider-man-2-3338.jpg"}, {title: "Spider-Man 3", link: "Spider-Man3", image: "https://img.vxdn.net/poster/200/spider-man-3-3339.jpg"},
    {title: "The Amazing Spider-Man", link: "The-Amazing-Spider-Man", image: "https://img.vxdn.net/poster/200/the-amazing-spider-man-1753.jpg"}, {title: "The Amazing Spider-Man 2", link: "The-Amazing-Spider-Man2", image: "https://img.vxdn.net/poster/200/the-amazing-spider-man-2-1754.jpg"}
]

const dc = [
    {title: "Man of Steel", link: "Man-Of-Steel", image: "https://img.vxdn.net/poster/200/man-of-steel-2164.jpg"},
    {title: "Batman v Superman: Dawn of Justice", link: "Batman-V-Superman", image: "https://img.vxdn.net/poster/200/batman-v-superman-dawn-of-justice-11024.jpg"},
    {title: "Suicide Squad", link: "Suicide-Squad", image: "https://img.vxdn.net/poster/200/suicide-squad--15185.jpg"},
    {title: "Wonder Woman", link: "Wonder-Woman", image: "https://img.vxdn.net/poster/200/wonder-woman-20963.jpg"},
    {title: "Wonder Woman 1984", link: "Wonder-Woman-1984", image: "https://img.vxdn.net/poster/200/wonder-woman-1984-101915.jpg"},
    {title: "Justice League", link: "Justice-League", image: "https://img.vxdn.net/poster/200/justice-league-22756.jpg"},
    {title: "Aquaman", link: "Aquaman", image: "https://img.vxdn.net/poster/200/aquaman-27124.jpg"},
    {title: "Shazam!", link: "Shazam!", image: "https://img.vxdn.net/poster/200/shazam-28369.jpg"},
    {title: "Harley Quinn: Birds of Prey", link: "Birds-Of-Prey", image: "https://img.vxdn.net/poster/200/birds-of-prey-100453.jpg"},
    {title: "Joker", link: "Joker", image: "https://img.vxdn.net/poster/200/Joker-2019-29553.jpg"}
]

const netflix = [
    {title: "The Witcher", link: "Netflix/The-Witcher", image: "https://img.vxdn.net/poster/200/The-Witcher-1-100248.jpg"},
    {title: "Sex Educatioe", link: "Netflix/Sex-Education", image: "https://img.vxdn.net/poster/200/sex-education-season-1-27675.jpg"},
    {title: "Bird Box", link: "Netflix/Bird-Box", image: "https://img.vxdn.net/poster/200/bird-box-27241.jpg"},,
    {title: "The Queen's Gambit", link: "Netflix/Queens-Gambit", image: "https://images.123movieshub.tc/2020/10/qIITtEn253x1x7UTVb4g288xcxI.jpg"}
]

const starWars = [
    {title: "Star Wars: The Phantom Menace", link: "Star-Wars-The-Phantom-Menace", image: "https://img.vxdn.net/poster/200/star-wars-episode-i-the-phantom-menace-1915.jpg"}, {title: "Star Wars: Attack of the Clones", link: "Star-Wars-Attack-Of-The-Clones", image: "https://img.vxdn.net/poster/200/star-wars-episode-ii-attack-of-the-clones-1916.jpg"}, {title: "Star Wars: Revenge of the Sith", link: "Star-Wars-Revenge-Of-The-Sith", image: "https://img.vxdn.net/poster/200/star-wars-episode-iii-revenge-of-the-sith-2197.jpg"}, {title: "Star Wars: A New Hope", link: "Star-Wars-A-New-Hope", image: "https://img.vxdn.net/poster/200/star-wars-episode-iv-a-new-hope-2229.jpg"}, {title: "Star Wars: The Empire Strikes Back", link: "Star-Wars-The-Empire-Strikes-Back", image: "https://img.vxdn.net/poster/200/star-wars-episode-v-the-empire-strikes-back-2233.jpg"}, {title: "Star Wars: Return of the Jedi", link: "Star-Wars-Return-Of-The-Jedi", image: "https://img.vxdn.net/poster/200/star-wars-episode-vi-return-of-the-jedi-2238.jpg"}, {title: "Star Wars: The Force Awakens", link: "Star-Wars-The-Force-Awakens", image: "https://img.vxdn.net/poster/200/star-wars-the-force-awakens-7292.jpg"}, {title: "Star Wars: The Last Jedi", link: "Star-Wars-The-Last-Jedi", image: "https://img.vxdn.net/poster/200/star-wars-the-last-jedi-23033.jpg"}, {title: "Star Wars: The Rise of Skywalker", link: "Star-Wars-The-Rise-Of-Skywalker", image: "https://img.vxdn.net/poster/200/star-wars-the-rise-of-skywalker-100243.jpg"},
]

const animation = [
    {title: "Kung Fu Panda", link: "Kung-Fu-Panda", image: "https://img.vxdn.net/poster/200/kung-fu-panda-2420.jpg"}, {title: "Kung Fu Panda 2", link: "Kung-Fu-Panda2", image: "https://img.vxdn.net/poster/200/kung-fu-panda-2-2248.jpg"}, {title: "Kung Fu Panda 3", link: "Kung-Fu-Panda3", image: "https://img.vxdn.net/poster/200/kung-fu-panda-3-9053.jpg"},
    {title: "Shrek", link: "Shrek", image: "https://img.vxdn.net/poster/200/shrek-4608.jpg"}, {title: "Shrek 2", link: "Shrek2", image: "https://img.vxdn.net/poster/200/shrek-2-4609.jpg"}, {title: "Shrek the Third", link: "Shrek3", image: "https://img.vxdn.net/poster/200/shrek-the-third-4610.jpg"}, {title: "Shrek Forever After", link: "Shrek4", image: "https://img.vxdn.net/poster/200/shrek-forever-after-4611.jpg"},
    {title: "Spider-Man: Into the Spider-Verse", link: "Spider-Man-Into-the-Spider-Verse", image: "https://img.vxdn.net/poster/200/spider-man-into-the-spider-verse-27208.jpg"},
    {title: "Big Hero 6", link: "Big-Hero-6", image: "https://img.vxdn.net/poster/200/big-hero-6-2043.jpg"},
    {title: "How To Train Your Dragon", link: "How-To-Train-Your-Dragon", image: "https://img.moviesjoy.to/resize/188x288/ec/35/ec359f4bfd201710f78d41d381c9eeda/ec359f4bfd201710f78d41d381c9eeda.jpg"}, {title: "How To Train Your Dragon 2", link: "How-To-Train-Your-Dragon2", image: "https://img.moviesjoy.to/resize/188x288/72/3a/723adc6446687ea09ff1ae657c64ce0b/723adc6446687ea09ff1ae657c64ce0b.jpg"}, {title: "How To Train Your Dragon: The Hidden World", link: "How-To-Train-Your-Dragon3", image: "https://img.vxdn.net/poster/200/how-to-train-your-dragon-the-hidden-world-27688.jpg"},
    {title: "Megamind", link: "Megamind", image: "https://img.vxdn.net/poster/200/megamind-2469.jpg"},
    {title: "Rick And Morty", link: "Rick-And-Morty", image: "https://img.vxdn.net/poster/200/rick-and-morty-season-1-9011.jpg"},
    {title: "Rio", link: "Rio", image: "https://img.vxdn.net/poster/200/rio-2057.jpg"}, {title: "Rio", link: "Rio2", image: "https://img.vxdn.net/poster/200/rio-2-2060.jpg"},
    {title: "Mr. Peabody & Sherman", link: "Mr-Peabody-And-Sherman", image: "https://img.vxdn.net/poster/200/mr-peabody-sherman-1960.jpg"},
    {title: "Despicable Me", link: "Despicable-Me", image: "https://img.vxdn.net/poster/200/despicable-me-4327.jpg"}, {title: "Despicable Me 2", link: "Despicable-Me2", image: "https://img.vxdn.net/poster/200/despicable-me-2-4328.jpg"}, {title: "Despicable Me 3", link: "Despicable-Me3", image: "https://img.vxdn.net/poster/200/despicable-me-3-21195.jpg"}
]

app.get('/', (req, res) => {
    res.render('index', {
        marvel: marvel,
        dc: dc,
        netflix: netflix,
        starWars: starWars,
        animation: animation
    });
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

app.get('/Deadpool', (req, res) => {
    res.render('dynamic', {
        title: "Deadpool",
        src: "https://player.voxzer.org/view/b410690d0714b6f2ba5bf5e0",
        img: "https://img.vxdn.net/cover/1440/deadpool-9802.jpg",
        desc: "Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.",
        genre: "Action, Comedy"
    });
});

app.get('/Deadpool2', (req, res) => {
    res.render('dynamic', {
        title: "Deadpool 2",
        src: "https://player.voxzer.org/view/e0f7652b04f6855ebc5275e0",
        img: "https://img.vxdn.net/cover/1440/deadpool-2-24922.jpg",
        desc: "Deadpool protects a young mutant Russell from the authorities and gets thrown in prison. However, he escapes and forms a team of mutants to prevent a time-travelling mercenary from killing Russell",
        genre: "Action, Comedy"
    });
});

app.get('/Spider-Man', (req, res) => {
    res.render('dynamic', {
        title: "Spider-Man",
        src: "https://player.voxzer.org/view/8467662b04f68550ac5365e0",
        img: "https://img.vxdn.net/cover/1440/spider-man-3337.jpg",
        desc: "Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil maniac.",
        genre: "Action, Sci-Fi"
    });
});

app.get('/Spider-Man2', (req, res) => {
    res.render('dynamic', {
        title: "Spider-Man 2",
        src: "https://vidcloud9.com/streaming.php?id=NzM5MQ",
        img: "https://img.vxdn.net/cover/1440/spider-man-2-3338.jpg",
        desc: "Peter Parker is dissatisfied with life when he loses his job, the love of his life, Mary Jane, and his powers. Amid all the chaos, he must fight Doctor Octavius who threatens to destroy New York City.",
        genre: "Action, Sci-Fi"
    });
});

app.get('/Spider-Man3', (req, res) => {
    res.render('dynamic', {
        title: "Spider-Man 3",
        src: "https://player.voxzer.org/view/1ea7612b04f685524c4bd5e0",
        img: "https://img.vxdn.net/cover/1440/spider-man-3-3339.jpg",
        desc: "Peter Parker becomes one with a symbiotic alien that bolsters his Spider-Man avatar and affects his psyche. He also has to deal with Sandman and maintain a fragmented relationship with Mary Jane.",
        genre: "Action, Sci-Fi"
    });
});

app.get('/The-Amazing-Spider-Man', (req, res) => {
    res.render('dynamic', {
        title: "The Amazing Spider-Man",
        src: "https://player.voxzer.org/view/28b7662b04f68551ec52e5e0",
        img: "https://img.vxdn.net/cover/1440/the-amazing-spider-man-1753.jpg",
        desc: "Peter Parker, an outcast high school student, gets bitten by a radioactive spider and attains superpowers. Soon, he is forced to use his abilities to fight a monstrous foe.",
        genre: "Action, Sci-Fi"
    });
});

app.get('/The-Amazing-Spider-Man2', (req, res) => {
    res.render('dynamic', {
        title: "The Amazing Spider-Man 2",
        src: "https://vidcloud9.com/streaming.php?id=ODc1MA",
        img: "https://img.vxdn.net/cover/1440/the-amazing-spider-man-2-1754.jpg",
        desc: "Spider-Man embarks on a mission to protect his loved ones when OsCorp, owned by his childhood friend Harry Osborn, unleashes a slew of genetically-modified villains against him",
        genre: "Action, Sci-Fi"
    });
});

// DC
app.get('/Man-Of-Steel', (req, res) => {
    res.render('dynamic', {
        title: "Man of Steel",
        src: "https://player.voxzer.org/view/c8506d0d0714b6f66ac1c5e0",
        img: "https://img.vxdn.net/cover/1440/man-of-steel-2164.jpg",
        desc: "Clark learns about the source of his abilities and his real home when he enters a Kryptonian ship in the Artic. However, an old enemy follows him to Earth in search of a codex and brings destruction.",
        genre: "Action, Sci-Fi"
    });
});

app.get('/Batman-V-Superman', (req, res) => {
    res.render('dynamic', {
        title: "Batman v Superman: Dawn of Justice",
        src: "https://vidcloud9.com/streaming.php?id=MTM0OA",
        img: "https://img.vxdn.net/cover/1440/batman-v-superman-dawn-of-justice-11024.jpg",
        desc: "Bruce Wayne, a billionaire, believes that Superman is a threat to humanity after his battle in Metropolis. Thus, he decides to adopt his mantle of Batman and defeat him once and for all.",
        genre: "Action, Sci-Fi"
    });
});

app.get('/Suicide-Squad', (req, res) => {
    res.render('dynamic', {
        title: "Suicide Squad",
        src: "https://player.voxzer.org/view/e027652b04f6855ddc5275e0",
        img: "https://img.vxdn.net/cover/1440/suicide-squad--15185.jpg",
        desc: "Amanda Waller assembles a team of imprisoned supervillains to execute dangerous black ops missions. When an ancient witch threatens to destroy mankind the squad is sent to stop her.",
        genre: "Action, Sci-Fi"
    });
});

app.get('/Wonder-Woman', (req, res) => {
    res.render('dynamic', {
        title: "Wonder Woman",
        src: "https://player.voxzer.org/view/5da7672b04f6855bec5485e0",
        img: "https://img.vxdn.net/cover/1440/wonder-woman-20963.jpg",
        desc: "Princess Diana of an all-female Amazonian race rescues US pilot Steve. Upon learning of a war, she ventures into the world of men to stop Ares, the god of war, from destroying mankind.",
        genre: "Action, Fantasy"
    });
});

app.get('/Wonder-Woman-1984', (req, res) => {
    res.render('dynamic', {
        title: "Wonder Woman 1984",
        src: "https://player.voxzer.org/view/85be4b3e1593fac3236f25fe",
        img: "https://img.vxdn.net/cover/1440/wonder-woman-1984-101915.jpg",
        desc: "Diana Prince lives quietly among mortals in the vibrant, sleek 1980s -- an era of excess driven by the pursuit of having it all. Though she's come into her full powers, she maintains a low profile by curating ancient artifacts, and only performing heroic acts incognito. But soon, Diana will have to muster all of her strength, wisdom and courage as she finds herself squaring off against Maxwell Lord and the Cheetah, a villainess who possesses superhuman strength and agility.",
        genre: "Action, Fantasy"
    });
});

app.get('/Justice-League', (req, res) => {
    res.render('dynamic', {
        title: "Justice League",
        src: "https://vidnext.net/streaming.php?id=MTMwNjkw",
        img: "https://img.vxdn.net/cover/1440/justice-league-22756.jpg",
        desc: "Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy.",
        genre: "Action, Adventure"
    });
});

app.get('/Aquaman', (req, res) => {
    res.render('dynamic', {
        title: "Aquaman",
        src: "https://vidnext.net/streaming.php?id=MjMwNTM3",
        img: "https://img.vxdn.net/cover/1440/aquaman-27124.jpg",
        desc: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures. He goes on a quest to retrieve the legendary Trident of Atlan and protect the water world.",
        genre: "Action, Adventure"
    });
});

app.get('/Shazam!', (req, res) => {
    res.render('dynamic', {
        title: "Shazam!",
        src: "https://player.voxzer.org/view/0607652b04f6855e0c5145e0",
        img: "https://img.vxdn.net/cover/1440/shazam-28369.jpg",
        desc: "After being abandoned at a fair, Billy constantly searches for his mother. His life, however, takes a huge turn when he inherits the superpowers of a powerful wizard.",
        genre: "Action, Comedy"
    });
});

app.get('/Birds-Of-Prey', (req, res) => {
    res.render('dynamic', {
        title: "Birds of Prey",
        src: "https://player.voxzer.org/view/747f97023ea48b6ab775a5e7",
        img: "https://img.vxdn.net/cover/1440/birds-of-prey-100453.jpg",
        desc: "After being thrown out in the streets by Joker, Harley struggles to pick herself up. However, Harley teams up with Huntress, Black Canary and Renee Montoya to defeat a gangster and protect a girl.",
        genre: "Action, Comedy"
    });
});

app.get('/Joker', (req, res) => {
    res.render('dynamic', {
        title: "Joker",
        src: "https://player.voxzer.org/view/3b406a0d0714b6feaaba25e0",
        img: "https://img.vxdn.net/cover/1440/Joker-2019-29553.jpg",
        desc: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
        genre: "Crime, Drama"
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
        src: "https://vidnext.net/streaming.php?id=ODQ4OQ",
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
        genre: "Family, Adventure, Fantasy, Animation",
    });
});

app.get('/How-To-Train-Your-Dragon2', (req, res) => {
    res.render('dynamic', {
        title: "How To Train Your Dragon 2",
        src: "https://player.voxzer.org/view/d3706c0d0714b6f92abf85e0",
        img: "https://img.vxdn.net/cover/1440/how-to-train-your-dragon-2-1751.jpg",
        desc: "Hiccup and Toothless are faced with the threat of Drago, a dragon trapper, bent on capturing and dominating over all dragons. However, they are determined to defeat him and restore peace on Berk.",
        genre: "Family, Adventure, Fantasy, Animation",
    });
});

app.get('/How-To-Train-Your-Dragon3', (req, res) => {
    res.render('dynamic', {
        title: "How To Train Your Dragon: The Hidden World",
        src: "https://vidnext.net/streaming.php?id=MjM1MjY0",
        img: "https://img.vxdn.net/cover/1440/how-to-train-your-dragon-the-hidden-world-27688.jpg",
        desc: "Hiccup aims to unite the vikings and the dragons in order to bring peace on the island of Berk. However, he must stop the evil Grimmel and his devious plans to wipe out all dragons.",
        genre: "Family, Adventure, Fantasy, Animation",
    });
});

app.get('/Megamind', (req, res) => {
    res.render('dynamic', {
        title: "Megamind",
        src: "https://player.voxzer.org/view/0967632b04f685572c4e85e0",
        img: "https://img.vxdn.net/cover/1440/megamind-2469.jpg",
        desc: "A supervillain named Megamind defeats and kills his enemy. Out of boredom he creates a superhero who becomes evil, forcing Megamind to turn into a hero.",
        genre: "Family, Comedy, Animation",
    });
});

app.get('/Rick-And-Morty', (req, res) => {
    res.render('shows', {
        title: "Rick And Morty",
        img: "https://img.vxdn.net/cover/1440/rick-and-morty-season-1-9011.jpg",
        desc: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.",
        genre: "Sitcom, Comedy, Animation",
        eps: ["https://player.voxzer.org/view/e6e0710d0714b6fbcadd85e0", "https://player.voxzer.org/view/0ea0740d0714b6fcfaefd5e0", "https://player.voxzer.org/view/8c90720d0714b6f0eaee35e0", "https://vidcloud9.com/streaming.php?id=MjMzNjc", "https://vidcloud9.com/streaming.php?id=MjMzNjg", "https://player.voxzer.org/view/05176a2b04f685500c5835e0", "https://player.voxzer.org/view/1650730d0714b6fcdaeec5e0", "https://vidcloud9.com/streaming.php?id=MjMzNzE", "https://vidcloud9.com/streaming.php?id=MjMzNzI", "https://vidcloud9.com/streaming.php?id=MjMzNzM", "https://vidcloud9.com/streaming.php?id=MjMzNzQ"],
        seasons: ["/Rick-And-Morty", "/Rick-And-Morty2", "/Rick-And-Morty3", "/Rick-And-Morty4"]
    });
});

app.get('/Rick-And-Morty2', (req, res) => {
    res.render('shows', {
        title: "Rick And Morty S2",
        img: "https://img.vxdn.net/cover/1440/rick-and-morty-season-2-5636.jpg",
        desc: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.",
        genre: "Sitcom, Comedy, Animation",
        eps: ["https://vidcloud9.com/streaming.php?id=MzkyNzI", "https://vidcloud9.com/streaming.php?id=MzkyNzM", "https://vidcloud9.com/streaming.php?id=MzkyNzQ", "https://vidcloud9.com/streaming.php?id=MzkyNzU", "https://vidcloud9.com/streaming.php?id=MzkyNzY", "https://vidcloud9.com/streaming.php?id=MzkyNzc", "https://vidcloud9.com/streaming.php?id=MzkyNzg", "https://player.voxzer.org/view/06d7652b04f6855eec5145e0", "https://vidcloud9.com/streaming.php?id=MzkyODA", "https://vidcloud9.com/streaming.php?id=MzkyODE"],
        seasons: ["/Rick-And-Morty", "/Rick-And-Morty2", "/Rick-And-Morty3", "/Rick-And-Morty4"]
    });
});

app.get('/Rick-And-Morty3', (req, res) => {
    res.render('shows', {
        title: "Rick And Morty S3",
        img: "https://img.vxdn.net/cover/1440/rick-and-morty-season-3-20109.jpg",
        desc: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.",
        genre: "Sitcom, Comedy, Animation",
        eps: ["https://player.voxzer.org/view/0427682b04f685533c5575e0", "https://player.voxzer.org/view/70c7682b04f685595c5605e0", "https://player.voxzer.org/view/eb60690d0714b6fa7ab9c5e0", "https://player.voxzer.org/view/77a7602b04f68550fc4ae5e0", "https://player.voxzer.org/view/0417612b04f6855c5c4ba5e0", "https://player.voxzer.org/view/66506b0d0714b6f2aabc35e0", "https://player.voxzer.org/view/18806e0d0714b6f44ac285e0", "https://player.voxzer.org/view/efb0690d0714b6ffeab9c5e0", "https://vidcloud9.com/streaming.php?id=MTE0ODEx", "https://player.voxzer.org/view/6407632b04f685558c4f05e0"],
        seasons: ["/Rick-And-Morty", "/Rick-And-Morty2", "/Rick-And-Morty3", "/Rick-And-Morty4"]
    });
});

app.get('/Rick-And-Morty4', (req, res) => {
    res.render('shows', {
        title: "Rick And Morty S4",
        img: "https://releasedate.me/wp-content/uploads/2018/10/rick-and-morty-poster.jpg",
        desc: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.",
        genre: "Sitcom, Comedy, Animation",
        eps: ["https://vidcloud9.com/streaming.php?id=MjkyODE1", "https://player.voxzer.org/view/0b706e0d0714b6f56ac265e0", "https://player.voxzer.org/view/03006d0d0714b6fa3abff5e0", "https://player.voxzer.org/view/c4e7652b04f685576c5255e0", "https://player.voxzer.org/view/e1106a0d0714b6f14abb05e0", "https://player.voxzer.org/view/ee7eee3ef9933bd18eff85ea", "https://player.voxzer.org/view/a1c1a83ef9933bd27e8da5eb", "https://player.voxzer.org/view/50b9778636a0afa1e52265ec", "https://player.voxzer.org/view/19b058d3c451722bc1b845ec", "https://player.voxzer.org/view/4986225485b2fe48bd4c85ed"],
        seasons: ["/Rick-And-Morty", "/Rick-And-Morty2", "/Rick-And-Morty3", "/Rick-And-Morty4"]
    });
});

app.get('/Rio', (req, res) => {
    res.render('dynamic', {
        title: "Rio",
        src: "https://player.voxzer.org/view/bfd7652b04f685506c5255e0",
        img: "https://img.vxdn.net/cover/1440/rio-2057.jpg",
        desc: "A bookshop owner, Linda, nurtures Blu, a macaw, after smugglers lose him in Minnesota. When she takes him to Rio, to help review his dying species, Blu is again abducted by a few smugglers.",
        genre: "Family, Comedy, Animation",
    });
});

app.get('/Rio2', (req, res) => {
    res.render('dynamic', {
        title: "Rio2",
        src: "https://vidcloud9.com/streaming.php?id=ODQ3Mw",
        img: "https://img.vxdn.net/cover/1440/rio-2-2060.jpg",
        desc: "After moving out of Rio de Janeiro, Blu, Jewel and their children try to cope with the new surroundings in the Amazon. But Blu encounters the revengeful Nigel who further complicates the situation.",
        genre: "Family, Comedy, Animation",
    });
});

app.get('/Mr-Peabody-And-Sherman', (req, res) => {
    res.render('dynamic', {
        title: "Mr. Peabody & Sherman",
        src: "https://player.voxzer.org/view/4ff06c0d0714b6f61abe55e0",
        img: "https://img.vxdn.net/cover/1440/mr-peabody-sherman-1960.jpg",
        desc: "A talking dog, Mr. Peabody, embarks on a life dedicated to science, technology and athletics after being rejected by a potential owner. He adopts a son, Sherman.",
        genre: "Family, Comedy, Animation, Adventure",
    });
});

app.get('/Despicable-Me', (req, res) => {
    res.render('dynamic', {
        title: "Despicable Me",
        src: "https://player.voxzer.org/view/c260710d0714b6fe1add35e0",
        img: "https://img.vxdn.net/cover/1440/despicable-me-4327.jpg",
        desc: "Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.",
        genre: "Family, Comedy, Animation",
    });
});

app.get('/Despicable-Me2', (req, res) => {
    res.render('dynamic', {
        title: "Despicable Me 2",
        src: "https://vidcloud9.com/streaming.php?id=NjY5Mg",
        img: "https://img.vxdn.net/cover/1440/despicable-me-2-4328.jpg",
        desc: "When a new criminal comes to town, the Anti-Villain League decides to hire Gru in order to fight him off. While Gru initially refuses, he eventually agrees after his aide goes back to his evil ways.",
        genre: "Family, Comedy, Animation",
    });
});

app.get('/Despicable-Me3', (req, res) => {
    res.render('dynamic', {
        title: "Despicable Me 3",
        src: "https://player.voxzer.org/view/7d97672b04f68558dc54b5e0",
        img: "https://img.vxdn.net/cover/1440/despicable-me-3-21195.jpg",
        desc: "Gru meets his long-lost twin brother Dru, after getting fired from the Anti-Villain League. However, the siblings find themselves at loggerheads with a child actor-turned-villain.",
        genre: "Family, Comedy, Animation",
    });
});

const port = process.env.PORT || 3000;
app.listen(port);