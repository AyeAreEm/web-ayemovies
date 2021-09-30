const express = require('express');
let router = express.Router();

const dc = [
    {title: "Man of Steel", link: "DC/Movies/Man-Of-Steel", smallImg: "https://img.vxdn.net/poster/200/man-of-steel-2164.jpg", bigImg: "https://img.vxdn.net/cover/1440/man-of-steel-2164.jpg", src: "https://player.voxzer.org/view/c8506d0d0714b6f66ac1c5e0", desc: "Clark learns about the source of his abilities and his real home when he enters a Kryptonian ship in the Artic. However, an old enemy follows him to Earth in search of a codex and brings destruction.", genre: "Action, Sci-Fi"},
    {title: "Batman v Superman: Dawn of Justice", link: "DC/Movies/Batman-V-Superman", smallImg: "https://img.vxdn.net/poster/200/batman-v-superman-dawn-of-justice-11024.jpg", bigImg: "https://img.vxdn.net/cover/1440/batman-v-superman-dawn-of-justice-11024.jpg", src: "https://vidembed.net/streaming.php?id=MTM0OA&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "Bruce Wayne, a billionaire, believes that Superman is a threat to humanity after his battle in Metropolis. Thus, he decides to adopt his mantle of Batman and defeat him once and for all.", genre: "Action, Sci-Fi"},
    {title: "Suicide Squad", link: "DC/Movies/Suicide-Squad", smallImg: "https://img.vxdn.net/poster/200/suicide-squad--15185.jpg", bigImg: "https://img.vxdn.net/cover/1440/suicide-squad--15185.jpg", src: "https://player.voxzer.org/view/e027652b04f6855ddc5275e0", desc: "Amanda Waller assembles a team of imprisoned supervillains to execute dangerous black ops missions. When an ancient witch threatens to destroy mankind the squad is sent to stop her.", genre: "Action, Sci-Fi"},
    {title: "The Suicide Squad", link: "DC/Movies/The-Suicide-Squad", smallImg: "https://img.vxdn.net/poster/200/the-suicide-squad-1627222720.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-suicide-squad-1627222720.jpg", src: "https://player.voxzer.org/view/7dc5572f915e4c06d7d44610", desc: "Assemble a team of the world's most dangerous, incarcerated Super Villains, provide them with the most powerful arsenal at the government's disposal, and send them off on a mission to defeat an enigmatic, insuperable entity. U.S. intelligence officer Amanda Waller has determined only a secretly convened group of disparate, despicable individuals with next to nothing to lose will do. However, once they realize they weren't picked to succeed but chosen for their patent culpability when they inevitably fail, will the Suicide Squad resolve to die trying, or decide it's every man for himself?", genre: "Action, Adventure, Superhero"},
    {title: "Wonder Woman", link: "DC/Movies/Wonder-Woman", smallImg: "https://img.vxdn.net/poster/200/wonder-woman-20963.jpg", bigImg: "https://img.vxdn.net/cover/1440/wonder-woman-20963.jpg", src: "https://player.voxzer.org/view/5da7672b04f6855bec5485e0", desc: "Princess Diana of an all-female Amazonian race rescues US pilot Steve. Upon learning of a war, she ventures into the world of men to stop Ares, the god of war, from destroying mankind.", genre: "Action, Fantasy"}, {title: "Wonder Woman 1984", link: "DC/Movies/Wonder-Woman-1984", smallImg: "https://img.vxdn.net/poster/200/wonder-woman-1984-101915.jpg", bigImg: "https://img.vxdn.net/cover/1440/wonder-woman-1984-101915.jpg", src: "https://player.voxzer.org/view/85be4b3e1593fac3236f25fe", desc: "Diana Prince lives quietly among mortals in the vibrant, sleek 1980s -- an era of excess driven by the pursuit of having it all. Though she's come into her full powers, she maintains a low profile by curating ancient artifacts, and only performing heroic acts incognito. But soon, Diana will have to muster all of her strength, wisdom and courage as she finds herself squaring off against Maxwell Lord and the Cheetah, a villainess who possesses superhuman strength and agility.", genre: "Action, Fantasy"},
    {title: "Justice League", link: "DC/Movies/Justice-League", smallImg: "https://img.vxdn.net/poster/200/justice-league-22756.jpg", bigImg: "https://img.vxdn.net/cover/1440/justice-league-22756.jpg", src: "https://vidembed.net/streaming.php?id=MTMwNjkw&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy.", genre: "Action, Adventure"},
    {title: "Zack Snyder's Justice League", link: "DC/Movies/Zack-Snyders-Justice-League", smallImg: "https://img.vxdn.net/poster/200/zack-snyder-s-justice-league-12101097.jpg", bigImg: "https://img.vxdn.net/cover/1440/zack-snyder-s-justice-league-12101097.jpg", src: "https://vidembed.net/streaming.php?id=MzM4NDM1&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists newfound ally Diana Prince to face an even greater threat. Together, Batman and Wonder Woman work quickly to recruit a team to stand against this newly awakened enemy. Despite the formation of an unprecedented league of heroes -- Batman, Wonder Woman, Aquaman, Cyborg and the Flash -- it may be too late to save the planet from an assault of catastrophic proportions.", genre: "Action, Adventure, Fantasy, Superhero"},
    {title: "Aquaman", link: "DC/Movies/Aquaman", smallImg: "https://img.vxdn.net/poster/200/aquaman-27124.jpg", bigImg: "https://img.vxdn.net/cover/1440/aquaman-27124.jpg", src: "https://vidembed.net/streaming.php?id=MjMwNTM3&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures. He goes on a quest to retrieve the legendary Trident of Atlan and protect the water world.", genre: "Action, Adventure"},
    {title: "Shazam!", link: "DC/Movies/Shazam!", smallImg: "https://img.vxdn.net/poster/200/shazam-28369.jpg", bigImg: "https://img.vxdn.net/cover/1440/shazam-28369.jpg", src: "https://player.voxzer.org/view/0607652b04f6855e0c5145e0", desc: "After being abandoned at a fair, Billy constantly searches for his mother. His life, however, takes a huge turn when he inherits the superpowers of a powerful wizard.", genre: "Action, Comedy"},
    {title: "Harley Quinn: Birds of Prey", link: "DC/Movies/Birds-Of-Prey", smallImg: "https://img.vxdn.net/poster/200/birds-of-prey-100453.jpg", bigImg: "https://img.vxdn.net/cover/1440/birds-of-prey-100453.jpg", src: "https://player.voxzer.org/view/747f97023ea48b6ab775a5e7", desc: "After being thrown out in the streets by Joker, Harley struggles to pick herself up. However, Harley teams up with Huntress, Black Canary and Renee Montoya to defeat a gangster and protect a girl.", genre: "Action, Comedy"},
    {title: "Joker", link: "DC/Movies/Joker", smallImg: "https://img.vxdn.net/poster/200/Joker-2019-29553.jpg", bigImg: "https://img.vxdn.net/cover/1440/Joker-2019-29553.jpg", src: "https://player.voxzer.org/view/3b406a0d0714b6feaaba25e0", desc: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.", genre: "Crime, Drama"},
    {title: "Batman Begins", link: "DC/Movies/Batman-Begins", smallImg: "https://resizing.flixster.com/gG9jEpn7NVg5pYWwQidlxiBJ3HA=/206x305/v2/https://flxt.tmsimg.com/NowShowing/48435/48435_aa.jpg", bigImg: "https://img.vxdn.net/cover/1440/batman-begins-2071.jpg", src: "https://player.voxzer.org/view/818069b87f066523cc5585e2", desc: "After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.", genre: "Action, Adventure"},
    {title: "The Dark Knight", link: "DC/Movies/The-Dark-Knight", smallImg: "https://img.vxdn.net/poster/200/batman-the-dark-knight-2070.jpg", bigImg: "https://img.vxdn.net/cover/1440/batman-the-dark-knight-2070.jpg", src: "https://player.voxzer.org/view/17f76b2b04f68554fc59a5e0", desc: "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.", genre: "Action, Adventure"},
    {title: "The Dark Knight Rises", link: "DC/Movies/The-Dark-Knight-Rises", smallImg: "https://img.vxdn.net/poster/200/batman-the-dark-knight-rises-8430.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-dark-knight-rises-2069.jpg", src: "https://player.voxzer.org/view/e637602b04f685516c4b85e0", desc: "Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again.", genre: "Action, Thriller"}
]

router.get('/', (req, res) => {
    res.send(dc);
});

router.get('/Shows/:id', (req, res) => {
    try {
        const foundIndex = dc.findIndex((item) => {
            return item.link === `DC/Shows/${req.params.id}`
        });
    
        res.render('shows', {
            title: dc[foundIndex].title,
            img: dc[foundIndex].bigImg,
            desc: dc[foundIndex].desc,
            genre: dc[foundIndex].genre,
            eps: dc[foundIndex].eps,
            seasons: dc[foundIndex].seasons ? dc[foundIndex].seasons : null
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

router.get('/Movies/:id', (req, res) => {
    try {
        const foundIndex = dc.findIndex((item) => {
            return item.link === `DC/Movies/${req.params.id}`
        });
    
        res.render('movies', {
            title: dc[foundIndex].title,
            src: dc[foundIndex].src,
            img: dc[foundIndex].bigImg,
            desc: dc[foundIndex].desc,
            genre: dc[foundIndex].genre
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

module.exports = {router: router, dc: dc};