const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.render('index');
});

// const all = ["iron man", "iron man 2", "iron man 3", "incredible hulk", "thor", "thor dark world", "thor ragnarok", "captain america", "captain america winter soldier", "captain america civil war", "avengers", "avengers age of ultron", "avengers infinity war", "avengers endgame", "guardians of the galaxy", "guardians of the galaxy vol. 2", "ant-man", "ant-man and the wasp", "doctor strange", "spider-man homecoming", "spider-man far from home", "black panther", "captain marvel", "kung fu panda", "kung fu panda 2", "kung fu panda 3", "shrek", "shrek 2", "shrek the third", "shrek forever after", "spider-man into the spider-verse", "big hero 6", "how to train your dragon", "how to train your dragon 2", "how to train your dragon the hidden world"]

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
        title: "Ant-Man",
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
        title: "How To Train Your Dragon 3",
        src: "https://player.voxzer.org/view/c1900b023ea48b6907b3c5e7",
        img: "https://img.vxdn.net/cover/1440/how-to-train-your-dragon-the-hidden-world-27688.jpg",
        desc: "Hiccup aims to unite the vikings and the dragons in order to bring peace on the island of Berk. However, he must stop the evil Grimmel and his devious plans to wipe out all dragons.",
        genre: "Family, Adventure, Fantasy",
    });
});

const port = process.env.PORT || 3000;
app.listen(port);