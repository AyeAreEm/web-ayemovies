const express = require('express');
let router = express.Router();

router.get('/Kung-Fu-Panda', (req, res) => {
    res.render('dynamic', {
        title: "Kung Fu Panda",
        src: "https://player.voxzer.org/view/92c76a2b04f6855f9c58e5e0",
        img: "https://fanart.tv/fanart/movies/9502/moviethumb/kung-fu-panda-54c14183a8693.jpg",
        desc: "When Po the Panda, a kung fu enthusiast, gets selected as the Dragon Warrior, he decides to team up with the Furious Five and destroy the evil forces that threaten the Valley of Peace.",
        genre: "Animation, Action, Comedy",
    });
});

router.get('/Kung-Fu-Panda2', (req, res) => {
    res.render('dynamic', {
        title: "Kung Fu Panda 2",
        src: "https://player.voxzer.org/view/6f17602b04f685554c4ad5e0",
        img: "https://img.vxdn.net/cover/1440/kung-fu-panda-2-2248.jpg",
        desc: "Dragon Warrior Po takes it upon himself to foil the plans of murderous peacock Shen who intends to conquer China and destroy kung fu. For this, Po has to unveil the mystery of his own past.",
        genre: "Animation, Action, Comedy",
    });
});

router.get('/Kung-Fu-Panda3', (req, res) => {
    res.render('dynamic', {
        title: "Kung Fu Panda 3",
        src: "https://vidnext.net/streaming.php?id=MzE2NA",
        img: "https://img.vxdn.net/cover/1440/kung-fu-panda-3-9053.jpg",
        desc: "The Dragon Warrior, Po, has to deal with challenges galore when circumstances compel him to train a bunch of awkward pandas in martial arts so that they can trounce Kai, a wicked supernatural warrior.",
        genre: "Animation, Action, Comedy",
    });
});

router.get('/Shrek', (req, res) => {
    res.render('dynamic', {
        title: "Shrek",
        src: "https://player.voxzer.org/view/4ba06f0d0714b6f43ac555e0",
        img: "https://img.vxdn.net/cover/1440/shrek-4608.jpg",
        desc: "Shrek, an ogre, embarks on a journey with a donkey to rescue Princess Fiona from a vile lord and regain his swamp.",
        genre: "Animation, Adventure, Comedy",
    });
});

router.get('/Shrek2', (req, res) => {
    res.render('dynamic', {
        title: "Shrek 2",
        src: "https://player.voxzer.org/view/6697612b04f685587c4c35e0",
        img: "https://img.vxdn.net/cover/1440/shrek-2-4609.jpg",
        desc: "When Shrek and Fiona return from their honeymoon, her parents, the rulers of Far Far Away, invite them over. But as the king does not like Shrek, he enlists a fairy to keep him away from his daughter.",
        genre: "Animation, Adventure, Comedy",
    });
});

router.get('/Shrek3', (req, res) => {
    res.render('dynamic', {
        title: "Shrek 3",
        src: "https://player.voxzer.org/view/5a906d0d0714b6f7cac0c5e0",
        img: "https://img.vxdn.net/cover/1440/shrek-the-third-4610.jpg",
        desc: "After Shrek's father-in-law King Harold becomes sick, Shrek is the next in line to take over. However, he tries to make Artie the king and takes help from Donkey and Puss in Boots.",
        genre: "Animation, Adventure, Comedy",
    });
});

router.get('/Shrek4', (req, res) => {
    res.render('dynamic', {
        title: "Shrek Forever After",
        src: "https://vidnext.net/streaming.php?id=NjQ3Ng",
        img: "https://img.vxdn.net/cover/1440/shrek-forever-after-4611.jpg",
        desc: "When Shrek realises that no one fears him, Rumpel offers him a shady deal. Thereafter, Shrek gets cast in an alternate reality where everybody is afraid of him but Fiona does not remember him.",
        genre: "Animation, Adventure, Comedy",
    });
});

router.get('/Spider-Man-Into-the-Spider-Verse', (req, res) => {
    res.render('dynamic', {
        title: "Spider-Man: Into the Spider-Verse",
        src: "https://player.voxzer.org/view/8646add4d760606e388f55e6",
        img: "https://img.vxdn.net/cover/1440/spider-man-into-the-spider-verse-27208.jpg",
        desc: "After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.",
        genre: "Animation, Action, Adventure",
    });
});

router.get('/Big-Hero-6', (req, res) => {
    res.render('dynamic', {
        title: "Big Hero 6",
        src: "https://vidnext.net/streaming.php?id=ODQ4OQ",
        img: "https://img.vxdn.net/cover/1440/big-hero-6-2043.jpg",
        desc: "Hiro, a robotics prodigy, joins hands with Baymax in order to avenge his brother's death. They then team up with Hiro's friends to form a team of high-tech heroes.",
        genre: "Animation, Action, Adventure, Comedy, Family",
    });
});

router.get('/How-To-Train-Your-Dragon', (req, res) => {
    res.render('dynamic', {
        title: "How To Train Your Dragon",
        src: "https://vidnext.net/streaming.php?id=ODc1NA",
        img: "https://img.vxdn.net/cover/1440/how-to-train-your-dragon-1750.jpg",
        desc: "Hiccup, a Viking, must kill a dragon to mark his passage into manhood and be initiated into his tribe. However, he ends up doing the exact opposite by befriending a deadly dragon, Night Fury.",
        genre: "Family, Adventure, Fantasy, Animation",
    });
});

router.get('/How-To-Train-Your-Dragon2', (req, res) => {
    res.render('dynamic', {
        title: "How To Train Your Dragon 2",
        src: "https://player.voxzer.org/view/d3706c0d0714b6f92abf85e0",
        img: "https://img.vxdn.net/cover/1440/how-to-train-your-dragon-2-1751.jpg",
        desc: "Hiccup and Toothless are faced with the threat of Drago, a dragon trapper, bent on capturing and dominating over all dragons. However, they are determined to defeat him and restore peace on Berk.",
        genre: "Family, Adventure, Fantasy, Animation",
    });
});

router.get('/How-To-Train-Your-Dragon3', (req, res) => {
    res.render('dynamic', {
        title: "How To Train Your Dragon: The Hidden World",
        src: "https://vidnext.net/streaming.php?id=MjM1MjY0",
        img: "https://img.vxdn.net/cover/1440/how-to-train-your-dragon-the-hidden-world-27688.jpg",
        desc: "Hiccup aims to unite the vikings and the dragons in order to bring peace on the island of Berk. However, he must stop the evil Grimmel and his devious plans to wipe out all dragons.",
        genre: "Family, Adventure, Fantasy, Animation",
    });
});

router.get('/Megamind', (req, res) => {
    res.render('dynamic', {
        title: "Megamind",
        src: "https://player.voxzer.org/view/0967632b04f685572c4e85e0",
        img: "https://img.vxdn.net/cover/1440/megamind-2469.jpg",
        desc: "A supervillain named Megamind defeats and kills his enemy. Out of boredom he creates a superhero who becomes evil, forcing Megamind to turn into a hero.",
        genre: "Family, Comedy, Animation",
    });
});

router.get('/Rick-And-Morty', (req, res) => {
    res.render('shows', {
        title: "Rick And Morty",
        img: "https://img.vxdn.net/cover/1440/rick-and-morty-season-1-9011.jpg",
        desc: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.",
        genre: "Sitcom, Comedy, Animation",
        eps: ["https://player.voxzer.org/view/e6e0710d0714b6fbcadd85e0", "https://player.voxzer.org/view/0ea0740d0714b6fcfaefd5e0", "https://player.voxzer.org/view/8c90720d0714b6f0eaee35e0", "https://vidcloud9.com/streaming.php?id=MjMzNjc", "https://vidcloud9.com/streaming.php?id=MjMzNjg", "https://player.voxzer.org/view/05176a2b04f685500c5835e0", "https://player.voxzer.org/view/1650730d0714b6fcdaeec5e0", "https://vidcloud9.com/streaming.php?id=MjMzNzE", "https://vidcloud9.com/streaming.php?id=MjMzNzI", "https://vidcloud9.com/streaming.php?id=MjMzNzM", "https://vidcloud9.com/streaming.php?id=MjMzNzQ"],
        seasons: ["/Rick-And-Morty", "/Rick-And-Morty2", "/Rick-And-Morty3", "/Rick-And-Morty4"]
    });
});

router.get('/Rick-And-Morty2', (req, res) => {
    res.render('shows', {
        title: "Rick And Morty S2",
        img: "https://img.vxdn.net/cover/1440/rick-and-morty-season-2-5636.jpg",
        desc: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.",
        genre: "Sitcom, Comedy, Animation",
        eps: ["https://vidcloud9.com/streaming.php?id=MzkyNzI", "https://vidcloud9.com/streaming.php?id=MzkyNzM", "https://vidcloud9.com/streaming.php?id=MzkyNzQ", "https://vidcloud9.com/streaming.php?id=MzkyNzU", "https://vidcloud9.com/streaming.php?id=MzkyNzY", "https://vidcloud9.com/streaming.php?id=MzkyNzc", "https://vidcloud9.com/streaming.php?id=MzkyNzg", "https://player.voxzer.org/view/06d7652b04f6855eec5145e0", "https://vidcloud9.com/streaming.php?id=MzkyODA", "https://vidcloud9.com/streaming.php?id=MzkyODE"],
        seasons: ["/Rick-And-Morty", "/Rick-And-Morty2", "/Rick-And-Morty3", "/Rick-And-Morty4"]
    });
});

router.get('/Rick-And-Morty3', (req, res) => {
    res.render('shows', {
        title: "Rick And Morty S3",
        img: "https://img.vxdn.net/cover/1440/rick-and-morty-season-3-20109.jpg",
        desc: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.",
        genre: "Sitcom, Comedy, Animation",
        eps: ["https://player.voxzer.org/view/0427682b04f685533c5575e0", "https://player.voxzer.org/view/70c7682b04f685595c5605e0", "https://player.voxzer.org/view/eb60690d0714b6fa7ab9c5e0", "https://player.voxzer.org/view/77a7602b04f68550fc4ae5e0", "https://player.voxzer.org/view/0417612b04f6855c5c4ba5e0", "https://player.voxzer.org/view/66506b0d0714b6f2aabc35e0", "https://player.voxzer.org/view/18806e0d0714b6f44ac285e0", "https://player.voxzer.org/view/efb0690d0714b6ffeab9c5e0", "https://vidcloud9.com/streaming.php?id=MTE0ODEx", "https://player.voxzer.org/view/6407632b04f685558c4f05e0"],
        seasons: ["/Rick-And-Morty", "/Rick-And-Morty2", "/Rick-And-Morty3", "/Rick-And-Morty4"]
    });
});

router.get('/Rick-And-Morty4', (req, res) => {
    res.render('shows', {
        title: "Rick And Morty S4",
        img: "https://releasedate.me/wp-content/uploads/2018/10/rick-and-morty-poster.jpg",
        desc: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.",
        genre: "Sitcom, Comedy, Animation",
        eps: ["https://vidcloud9.com/streaming.php?id=MjkyODE1", "https://player.voxzer.org/view/0b706e0d0714b6f56ac265e0", "https://player.voxzer.org/view/03006d0d0714b6fa3abff5e0", "https://player.voxzer.org/view/c4e7652b04f685576c5255e0", "https://player.voxzer.org/view/e1106a0d0714b6f14abb05e0", "https://player.voxzer.org/view/ee7eee3ef9933bd18eff85ea", "https://player.voxzer.org/view/a1c1a83ef9933bd27e8da5eb", "https://player.voxzer.org/view/50b9778636a0afa1e52265ec", "https://player.voxzer.org/view/19b058d3c451722bc1b845ec", "https://player.voxzer.org/view/4986225485b2fe48bd4c85ed"],
        seasons: ["/Rick-And-Morty", "/Rick-And-Morty2", "/Rick-And-Morty3", "/Rick-And-Morty4"]
    });
});

router.get('/Rio', (req, res) => {
    res.render('dynamic', {
        title: "Rio",
        src: "https://player.voxzer.org/view/bfd7652b04f685506c5255e0",
        img: "https://img.vxdn.net/cover/1440/rio-2057.jpg",
        desc: "A bookshop owner, Linda, nurtures Blu, a macaw, after smugglers lose him in Minnesota. When she takes him to Rio, to help review his dying species, Blu is again abducted by a few smugglers.",
        genre: "Family, Comedy, Animation",
    });
});

router.get('/Rio2', (req, res) => {
    res.render('dynamic', {
        title: "Rio2",
        src: "https://vidcloud9.com/streaming.php?id=ODQ3Mw",
        img: "https://img.vxdn.net/cover/1440/rio-2-2060.jpg",
        desc: "After moving out of Rio de Janeiro, Blu, Jewel and their children try to cope with the new surroundings in the Amazon. But Blu encounters the revengeful Nigel who further complicates the situation.",
        genre: "Family, Comedy, Animation",
    });
});

router.get('/Mr-Peabody-And-Sherman', (req, res) => {
    res.render('dynamic', {
        title: "Mr. Peabody & Sherman",
        src: "https://player.voxzer.org/view/4ff06c0d0714b6f61abe55e0",
        img: "https://img.vxdn.net/cover/1440/mr-peabody-sherman-1960.jpg",
        desc: "A talking dog, Mr. Peabody, embarks on a life dedicated to science, technology and athletics after being rejected by a potential owner. He adopts a son, Sherman.",
        genre: "Family, Comedy, Animation, Adventure",
    });
});

router.get('/Despicable-Me', (req, res) => {
    res.render('dynamic', {
        title: "Despicable Me",
        src: "https://player.voxzer.org/view/c260710d0714b6fe1add35e0",
        img: "https://img.vxdn.net/cover/1440/despicable-me-4327.jpg",
        desc: "Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.",
        genre: "Family, Comedy, Animation",
    });
});

router.get('/Despicable-Me2', (req, res) => {
    res.render('dynamic', {
        title: "Despicable Me 2",
        src: "https://vidcloud9.com/streaming.php?id=NjY5Mg",
        img: "https://img.vxdn.net/cover/1440/despicable-me-2-4328.jpg",
        desc: "When a new criminal comes to town, the Anti-Villain League decides to hire Gru in order to fight him off. While Gru initially refuses, he eventually agrees after his aide goes back to his evil ways.",
        genre: "Family, Comedy, Animation",
    });
});

router.get('/Despicable-Me3', (req, res) => {
    res.render('dynamic', {
        title: "Despicable Me 3",
        src: "https://player.voxzer.org/view/7d97672b04f68558dc54b5e0",
        img: "https://img.vxdn.net/cover/1440/despicable-me-3-21195.jpg",
        desc: "Gru meets his long-lost twin brother Dru, after getting fired from the Anti-Villain League. However, the siblings find themselves at loggerheads with a child actor-turned-villain.",
        genre: "Family, Comedy, Animation",
    });
});

module.exports = router;