const express = require('express');
let router = express.Router();

const marvel = [
    {title: "Iron Man", link: "Marvel/Movies/Iron-Man", smallImg: "https://img.vxdn.net/poster/200/iron-man-1710.jpg", bigImg: "https://img.vxdn.net/cover/1440/iron-man-1710.jpg", src: "https://player.voxzer.org/view/91c3c1e7c333d79ff15b05e0", desc: "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.", genre: "Action, Adventure, Sci-Fi"}, {title: "Iron Man 2", link: "Marvel/Movies/Iron-Man2", smallImg: "https://img.vxdn.net/poster/200/iron-man-2-1711.jpg", bigImg: "https://img.vxdn.net/cover/1440/iron-man-2-1711.jpg", src: "https://player.voxzer.org/view/4c87622b04f6855d0c4d75e0", desc: "Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies.", genre: "Action, Adventure, Sci-Fi"}, {title: "Iron Man 3", link: "Marvel/Movies/Iron-Man3", smallImg: "https://img.vxdn.net/poster/200/iron-man-3-1712.jpg", bigImg: "https://img.vxdn.net/cover/1440/iron-man-3-1712.jpg", src: "https://vidembed.net/streaming.php?id=ODc5MA&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "Tony Stark encounters a formidable foe called the Mandarin. After failing to defeat his enemy, Tony embarks on a journey of self-discovery as he fights against the powerful Mandarin.", genre: "Action, Adventure, Sci-Fi",},
    {title: "The Incredible Hulk", link: "Marvel/Movies/Incredible-Hulk", smallImg: "https://img.vxdn.net/poster/200/the-incredible-hulk-3342.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-incredible-hulk-3342.jpg", src: "https://player.voxzer.org/view/a937612b04f68557cc4c95e0", desc: "Dr Bruce Banner subjects himself to high levels of gamma radiation which triggers his transformation into a huge green creature, the Hulk, whenever he experiences negative emotions such as anger.", genre: "Action, Sci-Fi"},
    {title: "Thor", link: "Marvel/Movies/Thor", smallImg: "https://img.vxdn.net/poster/200/thor-3351.jpg", bigImg: "https://img.vxdn.net/cover/1440/thor-3351.jpg", src: "https://player.voxzer.org/view/02906f0d0714b6fb5ac4a5e0", desc: "Thor is exiled by his father, Odin, the King of Asgard, to the Earth to live among mortals. When he lands on Earth, his trusted weapon Mjolnir is discovered and captured by S.H.I.E.L.D.", genre: "Fantasy, Action"}, {title: "Thor: The Dark World", link: "Marvel/Movies/Thor-The-Dark-World", smallImg: "https://img.vxdn.net/poster/200/thor-the-dark-world-1843.jpg", bigImg: "https://img.vxdn.net/cover/1440/thor-the-dark-world-1843.jpg", src: "https://vidembed.net/streaming.php?id=ODY3Ng&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "Thor sets out on a journey to defeat Malekith, the leader of the Dark Elves when he returns to Asgard to retrieve a dangerous weapon and fulfill his desire of destroying the Nine Realms.", genre: "Fantasy, Action"}, {title: "Thor: Ragnarok", link: "Marvel/Movies/Thor-Ragnarok", smallImg: "https://img.vxdn.net/poster/200/thor-ragnarok-22466.jpg", bigImg: "https://img.vxdn.net/cover/1440/thor-ragnarok-22466.jpg", src: "https://player.voxzer.org/view/fa5ee7b9f52338a0215a15e0", desc: "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.", genre: "Fantasy, Action, Sci-Fi"},
    {title: "Captain America: The First Avenger", link: "Marvel/Movies/Captain-America", smallImg: "https://img.vxdn.net/poster/200/captain-america-the-first-avenger-3352.jpg", bigImg: "https://img.vxdn.net/cover/1440/captain-america-the-first-avenger-3352.jpg", src: "https://player.voxzer.org/view/e7f7612b04f68550ec4cf5e0", desc: "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation.", genre: "Action, Adventure"}, {title: "Captain America: The Winter Soldier", link: "Marvel/Movies/Captain-America-Winter-Soldier", smallImg: "https://img.vxdn.net/poster/200/captain-america-the-winter-soldier-1632.jpg", bigImg: "https://img.vxdn.net/cover/1440/captain-america-the-winter-soldier-1632.jpg", src: "https://vidembed.net/streaming.php?id=NDUw&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "Friction arises between the Avengers when one group supports the government's decision to implement a law to control their powers while the other opposes it.", genre: "Action, Adventure"}, {title: "Captain America: Civil War", link: "Marvel/Movies/Captain-America-Civil-War", smallImg: "https://img.vxdn.net/poster/200/captain-america-civil-war-latino-audio-11797.jpg", bigImg: "https://img.vxdn.net/cover/1440/captain-america-civil-war-latino-audio-11797.jpg", src: "https://vidembed.net/streaming.php?id=NDUw&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "Friction arises between the Avengers when one group supports the government's decision to implement a law to control their powers while the other opposes it.", genre: "Action, Adventure"},
    {title: "Avengers", link: "Marvel/Movies/Avengers", smallImg: "https://img.vxdn.net/poster/200/the-avengers-1717.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-avengers-1717.jpg", src: "https://player.voxzer.org/view/1b57642b04f68556cc5005e0", desc: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.", genre: "Action, Adventure, Sci-Fi"}, {title: "Avengers: Age of Ultron", link: "Marvel/Movies/Avengers-Age-Of-Ultron", smallImg: "https://img.vxdn.net/poster/200/avengers-age-of-ultron-4632.jpg", bigImg: "https://img.vxdn.net/cover/1440/avengers-age-of-ultron-4632.jpg", src: "https://player.voxzer.org/view/ceb7692b04f685561c57e5e0", desc: "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.", genre: "Action, Adventure, Sci-Fi"}, {title: "Avengers: Infinity War", link: "Marvel/Movies/Avengers-Infinity-War", smallImg: "https://img.vxdn.net/poster/200/avengers-infinity-war-24689.jpg", bigImg: "https://img.vxdn.net/cover/1440/avengers-infinity-war-24689.jpg", src: "https://player.voxzer.org/view/9307602b04f685581c4b05e0", desc: "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.", genre: "Action, Adventure, Sci-Fi"}, {title: "Avengers: Endgame", link: "Marvel/Movies/Avengers-Endgame", smallImg: "https://img.vxdn.net/poster/200/avengers-endgame-28501.jpg", bigImg: "https://img.vxdn.net/cover/1440/avengers-endgame-28501.jpg", src: "https://player.voxzer.org/view/08c76a2b04f685544c5835e0", desc: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.", genre: "Action, Adventure, Sci-Fi"},
    {title: "Guardians of the Galaxy", link: "Marvel/Movies/GotG", smallImg: "https://img.vxdn.net/poster/200/guardians-of-the-galaxy-1608.jpg", bigImg: "https://img.vxdn.net/cover/1440/guardians-of-the-galaxy-1608.jpg", src: "https://player.voxzer.org/view/9007622b04f6855d4c4dd5e0", desc: "Peter escapes from the planet Morag with a valuable orb that Ronan the Accuser wants. He eventually forms a group with unwilling heroes to stop Ronan.", genre: "Action, Adventure, Sci-Fi"}, {title: "Guardians of the Galaxy Vol. 2", link: "Marvel/Movies/GotG2", smallImg: "https://img.vxdn.net/poster/200/guardians-of-the-galaxy-vol-2-20525.jpg", bigImg: "https://img.vxdn.net/cover/1440/guardians-of-the-galaxy-vol-2-20525.jpg", src: "https://player.voxzer.org/view/7bc7672b04f685564c54b5e0", desc: "After a successful mission, Quill and his team of galactic defenders meet Ego, a man claiming to be Quill's father. However, they soon learn some disturbing truths about Ego.", genre: "Action, Adventure, Sci-Fi"},
    {title: "Ant-Man", link: "Marvel/Movies/Ant-Man", smallImg: "https://img.vxdn.net/poster/200/ant-man-4408.jpg", bigImg: "https://img.vxdn.net/cover/1440/ant-man-4408.jpg", src: "https://player.voxzer.org/view/a597662b04f6855e5c5385e0", desc: "Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements.", genre: "Action, Sci-Fi, Drama"}, {title: "Ant-Man and the Wasp", link: "Marvel/Movies/Ant-Man-And-The-Wasp", smallImg: "https://img.vxdn.net/poster/200/ant-man-and-the-wasp-25534.jpg", bigImg: "https://img.vxdn.net/cover/1440/ant-man-and-the-wasp-25534.jpg", src: "https://player.voxzer.org/view/ee67602b04f6855d3c4b85e0", desc: "Despite being under house arrest, Scott Lang, along with the Wasp, sets out to help Dr Hank Pym to enter the quantum realm as they face new enemies along the way.", genre: "Action, Sci-Fi"},
    {title: "Doctor Strange", link: "Marvel/Movies/Doctor-Strange", smallImg: "https://img.vxdn.net/poster/200/doctor-strange-17530.jpg", bigImg: "https://img.vxdn.net/cover/1440/doctor-strange-17530.jpg", src: "https://player.voxzer.org/view/ec27602b04f6855a7c4b85e0", desc: "In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage.",  genre: "Action, Fantasy"},
    {title: "Spider-Man: Homecoming", link: "Marvel/Movies/Spider-Man-Homecoming", smallImg: "https://img.vxdn.net/poster/200/spider-man-homecoming-21248.jpg", bigImg: "https://img.vxdn.net/cover/1440/spider-man-homecoming-21248.jpg", src: "https://player.voxzer.org/view/b667692b04f685553c57c5e0", desc: "Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.", genre: "Action, Adventure"}, {title: "Spider-Man: Far From Home", link: "Marvel/Movies/Spider-Man-Far-From-Home", smallImg: "https://img.vxdn.net/poster/200/spider-man-far-from-home-28904.jpg", bigImg: "https://img.vxdn.net/cover/1440/spider-man-far-from-home-28904.jpg", src: "https://player.voxzer.org/view/aab3c1e7c333d79ff15b25e0", desc: "Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.", genre: "Action, Adventure"},
    {title: "Black Panther", link: "Marvel/Movies/Black-Panther", smallImg: "https://img.vxdn.net/poster/200/black-panther-23800.jpg", bigImg: "https://img.vxdn.net/cover/1440/black-panther-23800.jpg", src: "https://player.voxzer.org/view/0d4ee8b9f52338a9515a25e0", desc: "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.", genre: "Action, Adventure, Sci-Fi"},
    {title: "Captain Marvel", link: "Marvel/Movies/Captain-Marvel", smallImg: "https://img.vxdn.net/poster/200/captain-marvel-28165.jpg", bigImg: "https://img.vxdn.net/cover/1440/captain-marvel-28165.jpg", src: "https://player.voxzer.org/view/8656add4d760606e488f55e6", desc: "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent.", genre: "Action, Adventure, Sci-Fi"},
    {title: "Deadpool", link: "Marvel/Movies/Deadpool", smallImg: "https://img.vxdn.net/poster/200/deadpool-9802.jpg", bigImg: "https://img.vxdn.net/cover/1440/deadpool-9802.jpg", src: "https://player.voxzer.org/view/b410690d0714b6f2ba5bf5e0", desc: "Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.", genre: "Action, Comedy"}, {title: "Deadpool 2", link: "Marvel/Movies/Deadpool2", smallImg: "https://img.vxdn.net/poster/200/deadpool-2-24922.jpg", bigImg: "https://img.vxdn.net/cover/1440/deadpool-2-24922.jpg", src: "https://player.voxzer.org/view/e0f7652b04f6855ebc5275e0", desc: "Deadpool protects a young mutant Russell from the authorities and gets thrown in prison. However, he escapes and forms a team of mutants to prevent a time-travelling mercenary from killing Russell", genre: "Action, Comedy"},
    {title: "Spider-Man", link: "Marvel/Movies/Spider-Man", smallImg: "https://img.vxdn.net/poster/200/spider-man-3337.jpg", bigImg: "https://img.vxdn.net/cover/1440/spider-man-3337.jpg", src: "https://player.voxzer.org/view/8467662b04f68550ac5365e0", desc: "Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil maniac.", genre: "Action, Sci-Fi"}, {title: "Spider-Man 2", link: "Marvel/Movies/Spider-Man2", smallImg: "https://img.vxdn.net/poster/200/spider-man-2-3338.jpg", bigImg: "https://img.vxdn.net/cover/1440/spider-man-2-3338.jpg", src: "https://vidembed.net/streaming.php?id=NzM5MQ", desc: "Peter Parker is dissatisfied with life when he loses his job, the love of his life, Mary Jane, and his powers. Amid all the chaos, he must fight Doctor Octavius who threatens to destroy New York City.", genre: "Action, Sci-Fi"}, {title: "Spider-Man 3", link: "Marvel/Movies/Spider-Man3", smallImg: "https://img.vxdn.net/poster/200/spider-man-3-3339.jpg", bigImg: "https://img.vxdn.net/cover/1440/spider-man-3-3339.jpg", src: "https://player.voxzer.org/view/1ea7612b04f685524c4bd5e0", desc: "Peter Parker becomes one with a symbiotic alien that bolsters his Spider-Man avatar and affects his psyche. He also has to deal with Sandman and maintain a fragmented relationship with Mary Jane.", genre: "Action, Sci-Fi"},
    {title: "The Amazing Spider-Man", link: "Marvel/Movies/The-Amazing-Spider-Man", smallImg: "https://img.vxdn.net/poster/200/the-amazing-spider-man-1753.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-amazing-spider-man-1753.jpg", src: "https://player.voxzer.org/view/28b7662b04f68551ec52e5e0", desc: "Peter Parker, an outcast high school student, gets bitten by a radioactive spider and attains superpowers. Soon, he is forced to use his abilities to fight a monstrous foe.", genre: "Action, Sci-Fi"}, {title: "The Amazing Spider-Man 2", link: "Marvel/Movies/The-Amazing-Spider-Man2", smallImg: "https://img.vxdn.net/poster/200/the-amazing-spider-man-2-1754.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-amazing-spider-man-2-1754.jpg", src: "https://vidembed.net/streaming.php?id=ODc1MA&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "Spider-Man embarks on a mission to protect his loved ones when OsCorp, owned by his childhood friend Harry Osborn, unleashes a slew of genetically-modified villains against him", genre: "Action, Sci-Fi"},
    {title: "WandaVision", link: "Marvel/Shows/WandaVision", smallImg: "https://img.vxdn.net/poster/200/WandaVision-1-101990.jpg", bigImg: "https://img.vxdn.net/cover/1440/WandaVision-1-101990.jpg", desc: "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.", genre: "Sitcom", eps: ["https://player.voxzer.org/view/5828bc0dcc3288e5ab3e7600", "https://player.voxzer.org/view/6308bc0dcc3288e24b561601", "https://player.voxzer.org/view/62e8bc0dcc3288e23b561601", "https://player.voxzer.org/view/62c8bc0dcc3288e21b561601", "https://player.voxzer.org/view/783c8f237d18b8b720ea8601", "https://player.voxzer.org/view/7fdc8f237d18b8bee07f0602", "https://vidembed.net/streaming.php?id=MzM3MTg3&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://player.voxzer.org/view/89bc8f237d18b8ba90ba8603", "https://vidembed.net/streaming.php?id=MzM3NzY1&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw=="]},
    {title: "Venom", link: "Marvel/Movies/Venom", smallImg: "https://img.vxdn.net/poster/200/venom-26447.jpg", bigImg: "https://img.vxdn.net/cover/1440/venom-26447.jpg", src: "https://vidembed.net/streaming.php?id=MjI1MDEw&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "While trying to take down Carlton, the CEO of Life Foundation, Eddie, a journalist, investigates experiments of human trials. Unwittingly, he gets merged with a symbiotic alien with lethal abilities.", genre: "Action, Sci-Fi"},
    {title: "Venom: Let There Be Carnage", link: "Marvel/Movies/Venom-LTBC", smallImg: "https://img.vxdn.net/poster/200/venom-let-there-be-carnage-1630851645.jpg", bigImg: "https://img.vxdn.net/cover/1440/venom-let-there-be-carnage-1630851645.jpg", src: "https://player.voxzer.org/view/991bb3acd406009389caf619", desc: "Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror.", genre: "Action, Adventure"},
    {title: "The Falcon and the Winter Soldier", link: "Marvel/Shows/The-Falcon-And-The-Winter-Soldier", smallImg: "https://img.vxdn.net/poster/200/The-Falcon-Winter-Soldier-1-12101099.jpg", bigImg: "https://img.vxdn.net/cover/1440/The-Falcon-Winter-Soldier-1-12101099.jpg", desc: "Falcon and the Winter Soldier are a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.", genre: "Action, Sci-Fi", eps: ["https://vidembed.net/streaming.php?id=MzM4NTIy&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://vidembed.net/streaming.php?id=MzM4ODYz&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://vidembed.net/streaming.php?id=MzM5MTMx&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://vidembed.net/streaming.php?id=MzM5NTQ5&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://vidembed.net/streaming.php?id=MzM5OTkx&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", "https://vidembed.net/streaming.php?id=MzQwODMx&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw=="]},
    {title: "Loki", link: "Marvel/Shows/Loki", smallImg: "https://img.vxdn.net/poster/200/loki-season-1-1622988489.jpg", bigImg: "https://img.vxdn.net/cover/1440/loki-season-1-1622988489.jpg", desc: `Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of "Avengers: Endgame."`, genre: "Action, Superhero, Crime, Fantasy", eps: ["https://player.voxzer.org/view/4605572f915e4c0ce721c60c", "https://player.voxzer.org/view/4cc5572f915e4c07e7b5b60c", "https://player.voxzer.org/view/5265572f915e4c00174a260d", "https://player.voxzer.org/view/5b05572f915e4c04e7cb360d", "https://player.voxzer.org/view/6045572f915e4c00e75f360e", "https://player.voxzer.org/view/6885572f915e4c0a4704a60f"]},
    {title: "Black Widow", link: "Marvel/Movies/Black-Widow", smallImg: "https://img.vxdn.net/poster/200/black-widow-1622988647.jpg", bigImg: "https://img.vxdn.net/cover/1440/black-widow-1622988647.jpg", src: "https://player.voxzer.org/view/65a5572f915e4c0717b2c60e", desc: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.", genre: "Action, Superhero, Adventure, Sci-Fi"},
    {title: "What If...?", link: "Marvel/Shows/What-If", smallImg: "https://img.vxdn.net/poster/200/what-if-season-1-1630851147.jpg", bigImg: "https://img.vxdn.net/cover/1440/what-if-season-1-1630851147.jpg", desc: "Reimagining noteworthy events in the Marvel Cinematic Universe and creating a multiverse of infinite possibilities.", genre: "Superhero", eps: ["https://vidembed.cc/streaming.php?id=MzQ4MDE3&title=What+If...%3F+-+Season+1+Episode+1+-+What+If%E2%80%A6+Captain+Carter+Were+The+First+Avenger%3F&typesub=SUB&sub=L3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS0xL3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS0xLnZ0dA==&cover=Y292ZXIvd2hhdC1pZi1zZWFzb24tMS5wbmc=", "https://vidembed.cc/streaming.php?id=MzQ4Mzg4&title=What+If...%3F+-+Season+1+Episode+2+-+%09What+If%E2%80%A6+T%27Challa+Became+a+Star-Lord%3F&typesub=SUB&sub=L3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS0yL3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS0yLnZ0dA==&cover=Y292ZXIvd2hhdC1pZi1zZWFzb24tMS5wbmc=", "https://vidembed.cc/streaming.php?id=MzQ4Nzc5&title=What+If...%3F+-+Season+1+Episode+3+-+What+If...+The+World+Lost+its+Mightiest+Heroes%3F&typesub=SUB&sub=L3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS0zL3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS0zLnZ0dA==&cover=Y292ZXIvd2hhdC1pZi1zZWFzb24tMS5wbmc=", "https://vidembed.cc/streaming.php?id=MzQ5MTg2&title=What+If...%3F+-+Season+1+Episode+4+-+What+If%E2%80%A6+Doctor+Strange+Lost+His+Heart+Instead+of+His+Hands%3F&typesub=SUB&sub=L3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS00L3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS00LnZ0dA==&cover=Y292ZXIvd2hhdC1pZi1zZWFzb24tMS5wbmc=", "https://vidembed.cc/streaming.php?id=MzQ5NjIw&title=What+If...%3F+-+Season+1+Episode+5+-+What+If...+Zombies%3F%21&typesub=SUB&sub=L3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS01L3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS01LnZ0dA==&cover=Y292ZXIvd2hhdC1pZi1zZWFzb24tMS5wbmc=", "https://vidembed.cc/streaming.php?id=MzQ5OTMy&title=What+If...%3F+-+Season+1+Episode+6+-+What+If%E2%80%A6+Killmonger+Rescued+Tony+Stark%3F&typesub=SUB&sub=L3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS02L3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS02LnZ0dA==&cover=Y292ZXIvd2hhdC1pZi1zZWFzb24tMS5wbmc=", "https://vidembed.cc/streaming.php?id=MzUwMzg2&title=What+If...%3F+-+Season+1+Episode+7+-+What+If...+Thor+Were+an+Only+Child%3F&typesub=SUB&sub=L3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS03LXdoYXQtaWYtdGhvci13ZXJlLWFuLW9ubHktY2hpbGQvd2hhdC1pZi1zZWFzb24tMS1lcGlzb2RlLTctd2hhdC1pZi10aG9yLXdlcmUtYW4tb25seS1jaGlsZC52dHQ=&cover=Y292ZXIvd2hhdC1pZi1zZWFzb24tMS5wbmc=", "https://vidembed.cc/streaming.php?id=MzUwODAx&title=What+If...%3F+-+Season+1+Episode+8+-+What+If...+Ultron+Won%3F&typesub=SUB&sub=L3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS04L3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS04LnZ0dA==&cover=Y292ZXIvd2hhdC1pZi1zZWFzb24tMS5wbmc=", "https://vidembed.cc/streaming.php?id=MzUxMTY3&title=What+If...%3F+-+Season+1+Episode+9+-+What+If...+The+Watcher+Broke+His+Oath%3F&typesub=SUB&sub=L3doYXQtaWYtc2Vhc29uLTEtZXBpc29kZS05LXdoYXQtaWYtdGhlLXdhdGNoZXItYnJva2UtaGlzLW9hdGgvd2hhdC1pZi1zZWFzb24tMS1lcGlzb2RlLTktd2hhdC1pZi10aGUtd2F0Y2hlci1icm9rZS1oaXMtb2F0aC52dHQ=&cover=Y292ZXIvd2hhdC1pZi1zZWFzb24tMS5wbmc="]},
    {title: "Shang-Chi and the Legend of the Ten Rings", link: "Marvel/Movies/Shang-Chi-LTR", smallImg: "https://img.vxdn.net/poster/200/shang-chi-and-the-legend-of-the-ten-rings-1627222843.jpg", bigImg: "https://img.vxdn.net/cover/1440/shang-chi-and-the-legend-of-the-ten-rings-1627222843.jpg", src: "https://vidembed.io/streaming.php?id=MzQ5Mjg5&title=Shang-Chi+and+the+Legend+of+the+Ten+Rings&typesub=SUB&sub=L3NoYW5nLWNoaS1hbmQtdGhlLWxlZ2VuZC1vZi10aGUtdGVuLXJpbmdzL3NoYW5nLWNoaS1hbmQtdGhlLWxlZ2VuZC1vZi10aGUtdGVuLXJpbmdzLnYxNy52dHQ=&cover=Y292ZXIvc2hhbmctY2hpLWFuZC10aGUtbGVnZW5kLW9mLXRoZS10ZW4tcmluZ3MucG5n", desc: "Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization.", genre: "Action, Fantasy"}

]

router.get('/', (req, res) => {
    res.send(marvel);
});

router.get('/Shows/:id', (req, res) => {
    try {
        const foundIndex = marvel.findIndex((item) => {
            return item.link === `Marvel/Shows/${req.params.id}`
        });
    
        res.render('shows', {
            title: marvel[foundIndex].title,
            img: marvel[foundIndex].bigImg,
            desc: marvel[foundIndex].desc,
            genre: marvel[foundIndex].genre,
            eps: marvel[foundIndex].eps,
            seasons: marvel[foundIndex].seasons ? marvel[foundIndex].seasons : null
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

router.get('/Movies/:id', (req, res) => {
    try {
        const foundIndex = marvel.findIndex((item) => {
            return item.link === `Marvel/Movies/${req.params.id}`
        });
    
        res.render('movies', {
            title: marvel[foundIndex].title,
            src: marvel[foundIndex].src,
            img: marvel[foundIndex].bigImg,
            desc: marvel[foundIndex].desc,
            genre: marvel[foundIndex].genre
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

module.exports = {router: router, marvel: marvel};