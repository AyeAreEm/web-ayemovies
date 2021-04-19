const express = require('express');
let router = express.Router();

const animation = [
    {title: "Kung Fu Panda", link: "Animated/Movies/Kung-Fu-Panda", smallImg: "https://img.vxdn.net/poster/200/kung-fu-panda-2420.jpg", bigImg: "https://fanart.tv/fanart/movies/9502/moviethumb/kung-fu-panda-54c14183a8693.jpg", src: "https://player.voxzer.org/view/92c76a2b04f6855f9c58e5e0", desc: "When Po the Panda, a kung fu enthusiast, gets selected as the Dragon Warrior, he decides to team up with the Furious Five and destroy the evil forces that threaten the Valley of Peace.", genre: "Animation, Action, Comedy"}, {title: "Kung Fu Panda 2", link: "Animated/Movies/Kung-Fu-Panda2", smallImg: "https://img.vxdn.net/poster/200/kung-fu-panda-2-2248.jpg", bigImg: "https://img.vxdn.net/cover/1440/kung-fu-panda-2-2248.jpg", src: "https://player.voxzer.org/view/6f17602b04f685554c4ad5e0", desc: "Dragon Warrior Po takes it upon himself to foil the plans of murderous peacock Shen who intends to conquer China and destroy kung fu. For this, Po has to unveil the mystery of his own past.", genre: "Animation, Action, Comedy"}, {title: "Kung Fu Panda 3", link: "Animated/Movies/Kung-Fu-Panda3", smallImg: "https://img.vxdn.net/poster/200/kung-fu-panda-3-9053.jpg", bigImg: "https://img.vxdn.net/cover/1440/kung-fu-panda-3-9053.jpg", src: "https://vidnext.net/streaming.php?id=MzE2NA", desc: "The Dragon Warrior, Po, has to deal with challenges galore when circumstances compel him to train a bunch of awkward pandas in martial arts so that they can trounce Kai, a wicked supernatural warrior.", genre: "Animation, Action, Comedy"},
    {title: "Shrek", link: "Animated/Movies/Shrek", smallImg: "https://img.vxdn.net/poster/200/shrek-4608.jpg", bigImg: "https://img.vxdn.net/cover/1440/shrek-4608.jpg", src: "https://player.voxzer.org/view/4ba06f0d0714b6f43ac555e0", desc: "Shrek, an ogre, embarks on a journey with a donkey to rescue Princess Fiona from a vile lord and regain his swamp.", genre: "Animation, Adventure, Comedy"}, {title: "Shrek 2", link: "Animated/Movies/Shrek2", smallImg: "https://img.vxdn.net/poster/200/shrek-2-4609.jpg", bigImg: "https://img.vxdn.net/cover/1440/shrek-2-4609.jpg", src: "https://player.voxzer.org/view/6697612b04f685587c4c35e0", desc: "When Shrek and Fiona return from their honeymoon, her parents, the rulers of Far Far Away, invite them over. But as the king does not like Shrek, he enlists a fairy to keep him away from his daughter.", genre: "Animation, Adventure, Comedy"}, {title: "Shrek the Third", link: "Animated/Movies/Shrek3", smallImg: "https://img.vxdn.net/poster/200/shrek-the-third-4610.jpg", bigImg: "https://img.vxdn.net/cover/1440/shrek-the-third-4610.jpg", src: "https://player.voxzer.org/view/5a906d0d0714b6f7cac0c5e0", desc: "After Shrek's father-in-law King Harold becomes sick, Shrek is the next in line to take over. However, he tries to make Artie the king and takes help from Donkey and Puss in Boots.", genre: "Animation, Adventure, Comedy"}, {title: "Shrek Forever After", link: "Animated/Movies/Shrek4", smallImg: "https://img.vxdn.net/poster/200/shrek-forever-after-4611.jpg", bigImg: "https://img.vxdn.net/cover/1440/shrek-forever-after-4611.jpg", src: "https://vidnext.net/streaming.php?id=NjQ3Ng", desc: "When Shrek realises that no one fears him, Rumpel offers him a shady deal. Thereafter, Shrek gets cast in an alternate reality where everybody is afraid of him but Fiona does not remember him.", genre: "Animation, Adventure, Comedy"},
    {title: "Spider-Man: Into the Spider-Verse", link: "Animated/Movies/Spider-Man-Into-the-Spider-Verse", smallImg: "https://img.vxdn.net/poster/200/spider-man-into-the-spider-verse-27208.jpg", bigImg: "https://img.vxdn.net/cover/1440/spider-man-into-the-spider-verse-27208.jpg", src: "https://player.voxzer.org/view/8646add4d760606e388f55e6", desc: "After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.", genre: "Animation, Action, Adventure"},
    {title: "Big Hero 6", link: "Animated/Movies/Big-Hero-6", smallImg: "https://img.vxdn.net/poster/200/big-hero-6-2043.jpg", bigImg: "https://img.vxdn.net/cover/1440/big-hero-6-2043.jpg", src: "https://vidnext.net/streaming.php?id=ODQ4OQ", desc: "Hiro, a robotics prodigy, joins hands with Baymax in order to avenge his brother's death. They then team up with Hiro's friends to form a team of high-tech heroes.", genre: "Animation, Action, Adventure, Comedy, Family"},
    {title: "How To Train Your Dragon", link: "Animated/Movies/How-To-Train-Your-Dragon", smallImg: "https://img.vxdn.net/poster/200/how-to-train-your-dragon-1750.jpg", bigImg: "https://img.vxdn.net/cover/1440/how-to-train-your-dragon-1750.jpg", src: "https://vidnext.net/streaming.php?id=ODc1NA", desc: "Hiccup, a Viking, must kill a dragon to mark his passage into manhood and be initiated into his tribe. However, he ends up doing the exact opposite by befriending a deadly dragon, Night Fury.", genre: "Family, Adventure, Fantasy, Animation"}, {title: "How To Train Your Dragon 2", link: "Animated/Movies/How-To-Train-Your-Dragon2", smallImg: "https://img.vxdn.net/poster/200/how-to-train-your-dragon-2-1751.jpg", bigImg: "https://img.vxdn.net/cover/1440/how-to-train-your-dragon-2-1751.jpg", src: "https://player.voxzer.org/view/d3706c0d0714b6f92abf85e0", desc: "Hiccup and Toothless are faced with the threat of Drago, a dragon trapper, bent on capturing and dominating over all dragons. However, they are determined to defeat him and restore peace on Berk.", genre: "Family, Adventure, Fantasy, Animation",}, {title: "How To Train Your Dragon: The Hidden World", link: "Animated/Movies/How-To-Train-Your-Dragon3", smallImg: "https://img.vxdn.net/poster/200/how-to-train-your-dragon-the-hidden-world-27688.jpg", bigImg: "https://img.vxdn.net/cover/1440/how-to-train-your-dragon-the-hidden-world-27688.jpg", src: "https://vidnext.net/streaming.php?id=MjM1MjY0", desc: "Hiccup aims to unite the vikings and the dragons in order to bring peace on the island of Berk. However, he must stop the evil Grimmel and his devious plans to wipe out all dragons.", genre: "Family, Adventure, Fantasy, Animation"},
    {title: "Megamind", link: "Animated/Movies/Megamind", smallImg: "https://img.vxdn.net/poster/200/megamind-2469.jpg", bigImg: "https://img.vxdn.net/cover/1440/megamind-2469.jpg", src: "https://player.voxzer.org/view/0967632b04f685572c4e85e0", desc: "A supervillain named Megamind defeats and kills his enemy. Out of boredom he creates a superhero who becomes evil, forcing Megamind to turn into a hero.", genre: "Family, Comedy, Animation"},
    {title: "Rick And Morty", link: "Animated/Shows/Rick-And-Morty", smallImg: "https://img.vxdn.net/poster/200/rick-and-morty-season-1-9011.jpg", bigImg: "https://img.vxdn.net/cover/1440/rick-and-morty-season-1-9011.jpg", desc: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.", genre: "Sitcom, Comedy, Animation", eps: ["https://player.voxzer.org/view/e6e0710d0714b6fbcadd85e0", "https://player.voxzer.org/view/0ea0740d0714b6fcfaefd5e0", "https://player.voxzer.org/view/8c90720d0714b6f0eaee35e0", "https://vidcloud9.com/streaming.php?id=MjMzNjc", "https://vidcloud9.com/streaming.php?id=MjMzNjg", "https://player.voxzer.org/view/05176a2b04f685500c5835e0", "https://player.voxzer.org/view/1650730d0714b6fcdaeec5e0", "https://vidcloud9.com/streaming.php?id=MjMzNzE", "https://vidcloud9.com/streaming.php?id=MjMzNzI", "https://vidcloud9.com/streaming.php?id=MjMzNzM", "https://vidcloud9.com/streaming.php?id=MjMzNzQ"], seasons: ["/Animated/Shows/Rick-And-Morty", "/Animated/Shows/Rick-And-Morty2", "/Animated/Shows/Rick-And-Morty3", "/Animated/Shows/Rick-And-Morty4"]},
    {title: "Rick And Morty S2", link: "Animated/Shows/Rick-And-Morty2", bigImg: "https://img.vxdn.net/cover/1440/rick-and-morty-season-2-5636.jpg", desc: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.", genre: "Sitcom, Comedy, Animation", eps: ["https://vidcloud9.com/streaming.php?id=MzkyNzI", "https://vidcloud9.com/streaming.php?id=MzkyNzM", "https://vidcloud9.com/streaming.php?id=MzkyNzQ", "https://vidcloud9.com/streaming.php?id=MzkyNzU", "https://vidcloud9.com/streaming.php?id=MzkyNzY", "https://vidcloud9.com/streaming.php?id=MzkyNzc", "https://vidcloud9.com/streaming.php?id=MzkyNzg", "https://player.voxzer.org/view/06d7652b04f6855eec5145e0", "https://vidcloud9.com/streaming.php?id=MzkyODA", "https://vidcloud9.com/streaming.php?id=MzkyODE"], seasons: ["/Animated/Shows/Rick-And-Morty", "/Animated/Shows/Rick-And-Morty2", "/Animated/Shows/Rick-And-Morty3", "/Animated/Shows/Rick-And-Morty4"], display: false},
    {title: "Rick And Morty S3", link: "Animated/Shows/Rick-And-Morty3", bigImg: "https://img.vxdn.net/cover/1440/rick-and-morty-season-3-20109.jpg", desc: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.", genre: "Sitcom, Comedy, Animation", eps: ["https://player.voxzer.org/view/0427682b04f685533c5575e0", "https://player.voxzer.org/view/70c7682b04f685595c5605e0", "https://player.voxzer.org/view/eb60690d0714b6fa7ab9c5e0", "https://player.voxzer.org/view/77a7602b04f68550fc4ae5e0", "https://player.voxzer.org/view/0417612b04f6855c5c4ba5e0", "https://player.voxzer.org/view/66506b0d0714b6f2aabc35e0", "https://player.voxzer.org/view/18806e0d0714b6f44ac285e0", "https://player.voxzer.org/view/efb0690d0714b6ffeab9c5e0", "https://vidcloud9.com/streaming.php?id=MTE0ODEx", "https://player.voxzer.org/view/6407632b04f685558c4f05e0"], seasons: ["/Animated/Shows/Rick-And-Morty", "/Animated/Shows/Rick-And-Morty2", "/Animated/Shows/Rick-And-Morty3", "/Animated/Shows/Rick-And-Morty4"], display: false},
    {title: "Rick And Morty S4", link: "Animated/Shows/Rick-And-Morty4", bigImg: "https://releasedate.me/wp-content/uploads/2018/10/rick-and-morty-poster.jpg", desc: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.", genre: "Sitcom, Comedy, Animation", eps: ["https://vidcloud9.com/streaming.php?id=MjkyODE1", "https://player.voxzer.org/view/0b706e0d0714b6f56ac265e0", "https://player.voxzer.org/view/03006d0d0714b6fa3abff5e0", "https://player.voxzer.org/view/c4e7652b04f685576c5255e0", "https://player.voxzer.org/view/e1106a0d0714b6f14abb05e0", "https://player.voxzer.org/view/ee7eee3ef9933bd18eff85ea", "https://player.voxzer.org/view/a1c1a83ef9933bd27e8da5eb", "https://player.voxzer.org/view/50b9778636a0afa1e52265ec", "https://player.voxzer.org/view/19b058d3c451722bc1b845ec", "https://player.voxzer.org/view/4986225485b2fe48bd4c85ed"], seasons: ["/Animated/Shows/Rick-And-Morty", "/Animated/Shows/Rick-And-Morty2", "/Animated/Shows/Rick-And-Morty3", "/Animated/Shows/Rick-And-Morty4"], display: false},
    {title: "Rio", link: "Animated/Movies/Rio", smallImg: "https://img.vxdn.net/poster/200/rio-2057.jpg", bigImg: "https://img.vxdn.net/cover/1440/rio-2057.jpg", src: "https://player.voxzer.org/view/bfd7652b04f685506c5255e0", desc: "A bookshop owner, Linda, nurtures Blu, a macaw, after smugglers lose him in Minnesota. When she takes him to Rio, to help review his dying species, Blu is again abducted by a few smugglers.", genre: "Family, Comedy, Animation"}, {title: "Rio 2", link: "Animated/Movies/Rio2", smallImg: "https://img.vxdn.net/poster/200/rio-2-2060.jpg", bigImg: "https://img.vxdn.net/cover/1440/rio-2-2060.jpg", src: "https://vidcloud9.com/streaming.php?id=ODQ3Mw", desc: "After moving out of Rio de Janeiro, Blu, Jewel and their children try to cope with the new surroundings in the Amazon. But Blu encounters the revengeful Nigel who further complicates the situation.", genre: "Family, Comedy, Animation"},
    {title: "Mr. Peabody & Sherman", link: "Animated/Movies/Mr-Peabody-And-Sherman", smallImg: "https://img.vxdn.net/poster/200/mr-peabody-sherman-1960.jpg", bigImg: "https://img.vxdn.net/cover/1440/mr-peabody-sherman-1960.jpg", src: "https://player.voxzer.org/view/4ff06c0d0714b6f61abe55e0", desc: "A talking dog, Mr. Peabody, embarks on a life dedicated to science, technology and athletics after being rejected by a potential owner. He adopts a son, Sherman.", genre: "Family, Comedy, Animation, Adventure"},
    {title: "Despicable Me", link: "Animated/Movies/Despicable-Me", smallImg: "https://img.vxdn.net/poster/200/despicable-me-4327.jpg", bigImg: "https://img.vxdn.net/cover/1440/despicable-me-4327.jpg", src: "https://player.voxzer.org/view/c260710d0714b6fe1add35e0", desc: "Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.", genre: "Family, Comedy, Animation"}, {title: "Despicable Me 2", link: "Animated/Movies/Despicable-Me2", smallImg: "https://img.vxdn.net/poster/200/despicable-me-2-4328.jpg", bigImg: "https://img.vxdn.net/cover/1440/despicable-me-2-4328.jpg", src: "https://vidcloud9.com/streaming.php?id=NjY5Mg", desc: "When a new criminal comes to town, the Anti-Villain League decides to hire Gru in order to fight him off. While Gru initially refuses, he eventually agrees after his aide goes back to his evil ways.", genre: "Family, Comedy, Animation"}, {title: "Despicable Me 3", link: "Animated/Movies/Despicable-Me3", smallImg: "https://img.vxdn.net/poster/200/despicable-me-3-21195.jpg", bigImg: "https://img.vxdn.net/cover/1440/despicable-me-3-21195.jpg", src: "https://player.voxzer.org/view/7d97672b04f68558dc54b5e0", desc: "Gru meets his long-lost twin brother Dru, after getting fired from the Anti-Villain League. However, the siblings find themselves at loggerheads with a child actor-turned-villain.", genre: "Family, Comedy, Animation"},
    {title: "Gravity Falls", link: "Animated/Shows/Gravity-Falls", smallImg: "https://img.vxdn.net/poster/200/gravity-falls-season-1-4437.jpg", bigImg: "https://img.vxdn.net/cover/1440/gravity-falls-season-1-4437.jpg", desc: "Twins Dipper and Mabel travel to the mysterious town of Gravity Falls in Oregon for their summer vacations but are shocked after they discover some strange occurrences.", genre: "Mystery, Comedy, Fantasy, Adventure, Animation", eps: ["https://vidcloud9.com/streaming.php?id=NDE1MTU", "https://player.voxzer.org/view/c490750d0714b6fc8af1b5e0", "https://vidcloud9.com/streaming.php?id=NDE1MTc", "https://vidcloud9.com/streaming.php?id=NDE1MTg", "https://m5.vidcloudpng.com/public/dist/index.html?id=a2fb7d9668288874692a509bc2d3f7ad", "https://vidcloud9.com/streaming.php?id=NDE1MjA", "https://vidcloud9.com/streaming.php?id=NDE1MjE", "https://vidcloud9.com/streaming.php?id=NDE1MjI", "https://vidcloud9.com/streaming.php?id=NDE1MjM", "https://vidcloud9.com/streaming.php?id=NDE1MjQ", "https://vidcloud9.com/streaming.php?id=NDE1MjU", "https://vidcloud9.com/streaming.php?id=NDE1MjY", "https://player.voxzer.org/view/7710750d0714b6f7aaf165e0", "https://vidcloud9.com/streaming.php?id=NDE1Mjg", "https://player.voxzer.org/view/7e5378d68d354fed871065e1", "https://vidcloud9.com/streaming.php?id=NDE1MzA", "https://vidcloud9.com/streaming.php?id=NDE1MzE", "https://vidcloud9.com/streaming.php?id=NDE1MzI", "https://vidcloud9.com/streaming.php?id=NDE1MzM", "https://player.voxzer.org/view/39906e0d0714b6f45ac2d5e0"], seasons: ["/Animated/Shows/Gravity-Falls", "/Animated/Shows/Gravity-Falls2"]},
    {title: "Gravity Falls S2", link: "Animated/Shows/Gravity-Falls2", bigImg: "https://honey4pooh.files.wordpress.com/2015/02/gravity-falls-27598-1920x1080.jpg", desc: "Twins Dipper and Mabel travel to the mysterious town of Gravity Falls in Oregon for their summer vacations but are shocked after they discover some strange occurrences.", genre: "Mystery, Comedy, Fantasy, Adventure, Animation", eps: ["https://vidcloud9.com/streaming.php?id=NDE0OTU", "https://vidcloud9.com/streaming.php?id=NDE0OTY", "https://vidcloud9.com/streaming.php?id=NDE0OTc", "https://vidcloud9.com/streaming.php?id=NDE0OTg", "https://vidcloud9.com/streaming.php?id=NDE0OTk", "https://vidcloud9.com/streaming.php?id=NDE1MDA", "https://vidcloud9.com/streaming.php?id=NDE1MDE", "https://vidcloud9.com/streaming.php?id=NDE1MDI", "https://vidcloud9.com/streaming.php?id=NDE1MDM", "https://vidcloud9.com/streaming.php?id=NDE1MDQ", "https://vidcloud9.com/streaming.php?id=NDE1MDU", "https://vidcloud9.com/streaming.php?id=NDE1MDY", "https://vidcloud9.com/streaming.php?id=NDE1MDc", "https://vidcloud9.com/streaming.php?id=NDE1MDg", "https://vidcloud9.com/streaming.php?id=NDE1MDk", "https://vidcloud9.com/streaming.php?id=NDE1MTA", "https://vidcloud9.com/streaming.php?id=NDE1MTE", "https://vidcloud9.com/streaming.php?id=NDE1MTI", "https://vidcloud9.com/streaming.php?id=NDE1MTM", "https://vidcloud9.com/streaming.php?id=NDE1MTQ"], seasons: ["/Animated/Shows/Gravity-Falls", "/Animated/Shows/Gravity-Falls2"], display: false},
    {title: "Madagascar", link: "Animated/Movies/Madagascar", smallImg: "https://img.vxdn.net/poster/200/madagascar-4604.jpg", bigImg: "https://img.vxdn.net/cover/1440/madagascar-4604.jpg", src: "https://player.voxzer.org/view/4d87662b04f68554cc5315e0", desc: "Four spoiled animals from the New York Central Zoo escape with the unintentional help of four fugitive penguins. They subsequently find themselves in Madagascar amidst happy lemurs.", genre: "Animation, Comedy, Family"},
    {title: "Madagascar: Escape 2 Africa", link: "Animated/Movies/Madagascar-Escape-2-Africa", smallImg: "https://img.vxdn.net/poster/200/madagascar-escape-2-africa-4605.jpg", bigImg: "https://img.vxdn.net/cover/1440/madagascar-escape-2-africa-4605.jpg", src: "https://player.voxzer.org/view/3d10710d0714b6f3aadc05e0", desc: "Alex, Marty, Melman and Gloria find themselves in Africa, where Alex meets his long-lost parents. Meanwhile, Makunga, his father's rival, will stop at nothing to be the king of the jungle.", genre: "Animation, Comedy, Family"},
    {title: "Madagascar 3: Europe's Most Wanted", link: "Animated/Movies/Madagascar3-Europes-Most-Wanted", smallImg: "https://img.vxdn.net/poster/200/madagascar-3-europes-most-wanted-4606.jpg", bigImg: "https://img.vxdn.net/cover/1440/madagascar-3-europes-most-wanted-4606.jpg", src: "https://player.voxzer.org/view/7247662b04f68557ac5345e0", desc: "To get back home and evade capture by Animal Control, Alex, Marty, Gloria and Melman embark on a riotous adventure as they join a travelling circus.", genre: "Animation, Comedy, Family"},
    {title: "The Lion King", link: "Animated/Movies/The-Lion-King", smallImg: "https://img.vxdn.net/poster/200/the-lion-king-4897.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-lion-king-4897.jpg", src: "https://player.voxzer.org/view/c9506d0d0714b6f86ac1c5e0", desc: "As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne.", genre: "Animation, Family, Adventure"},
    {title: "The Lion King 1 ½", link: "Animated/Movies/The-Lion-King-1-½", smallImg: "https://img.vxdn.net/poster/200/the-lion-king-1a-8421.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-lion-king-1a-8421.jpg", src: "https://player.voxzer.org/view/b3106d0d0714b6f4bac195e0", desc: "Timon leaves his colony because he feels he is a misfit. Soon after that, he meets the lonely Pumbaa. They grow close when they traverse through various adventures in the search of a home.", genre: "Animation, Family, Adventure"},
    {title: "The Lion King 2: Simba's Pride", link: "Animated/Movies/The-Lion-King-2-Simbas-Pride", smallImg: "https://img.vxdn.net/poster/200/the-lion-king-2-simbas-pride-5471.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-lion-king-2-simbas-pride-5471.jpg", src: "https://player.voxzer.org/view/a3d3c1e7c333d796e15b25e0", desc: "Simba's relationship with his daughter Kiara is put to the test when she escapes Timon and Pumba's care, ventures into the forbidden lands and befriends Kovu, the son of Scar.", genre: "Animation, Family, Adventure"},
    {title: "The Lion King (2019)", link: "Animated/Movies/The-Lion-King-2019", smallImg: "https://img.vxdn.net/poster/200/the-lion-king-2019-28997.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-lion-king-2019-28997.jpg", src: "https://player.voxzer.org/view/6b47662b04f6855e0c5335e0", desc: "Simba, a young lion prince, flees his kingdom after the murder of his father, Mufasa. Years later, a chance encounter with Nala, a lioness, causes him to return and take back what is rightfully his.", genre: "(not animated but like too bad), Family, Adventure"},
    {title: "Aladdin", link: "Animated/Movies/Aladdin", smallImg: "https://img.vxdn.net/poster/200/aladdin-6506.jpg", bigImg: "https://img.vxdn.net/cover/1440/aladdin-6506.jpg", src: "https://player.voxzer.org/view/e050690d0714b6fc6ab9b5e0", desc: "Aladdin, a common thief, falls in love with Princess Jasmine, but cannot marry her as he is not a prince. Jafar, a royal vizier with a hidden agenda, enlists Aladdin's help to retrieve a magical lamp.", genre: "Animation, Family, Musical"},
    {title: "Aladdin: The Return of Jafar", link: "Animated/Movies/Aladdin-The-Return-Of-Jafar", smallImg: "https://img.vxdn.net/poster/200/the-return-of-jafar-9602.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-return-of-jafar-9602.jpg", src: "https://vidcloud9.com/streaming.php?id=Mjc5Mg=", desc: "Jafar seeks revenge on Aladdin and his companions. Using Iago and a childish thief, Abis Mal, he finally finds a way to destroy Aladdin when he sees a golden opportunity.", genre: "Animation, Family, Adventure"},
    {title: "Aladdin and the King of Thieves", link: "Animated/Movies/Aladdin-And-The-King-Of-Thieves", smallImg: "https://img.vxdn.net/poster/200/aladdin-and-the-king-of-thieves-9518.jpg", bigImg: "https://img.vxdn.net/cover/1440/aladdin-and-the-king-of-thieves-9518.jpg", src: "https://player.voxzer.org/view/00f7632b04f6855bdc4e75e0", desc: "Aladdin is about to marry Princess Jasmine, but when the 40 thieves try to steal a magical oracular talisman, Aladdin is drawn into a dangerous quest to stop the thieves and find his long-lost father.", genre: "Animation, Family, Adventure"},
    {title: "Aladdin (2019)", link: "Animated/Movies/Aladdin-2019", smallImg: "https://img.vxdn.net/poster/200/aladdin-28645.jpg", bigImg: "https://img.vxdn.net/cover/1440/aladdin-28645.jpg", src: "https://player.voxzer.org/view/5d906c0d0714b6f70abe75e0", desc: "Aladdin, a kind thief, woos Jasmine, the princess of Agrabah, with the help of Genie. When Jafar, the grand vizier, tries to usurp the king, Jasmine, Aladdin and Genie must stop him from succeeding.", genre: "(not animated but like too bad), Family, Comedy"},
    {title: "The Incredibles", link: "Animated/Movies/The-Incredibles", smallImg: "https://img.vxdn.net/poster/200/the-incredibles-4468.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-incredibles-4468.jpg", src: "https://player.voxzer.org/view/52e7632b04f6855e0c4ee5e0", desc: "Forced to adopt a civilian identity and stuck in a white-collar job, Mr Incredible itches to get back into action. When he is lured into a trap by the evil Syndrome, his family contrives to save him.", genre: "Animation, Family, Comedy"},
    {title: "Incredibles 2", link: "Animated/Movies/Incredibles2", smallImg: "https://img.vxdn.net/poster/200/incredibles-2-25373.jpg", bigImg: "https://img.vxdn.net/cover/1440/incredibles-2-25373.jpg", src: "https://vidnext.net/streaming.php?id=MTk3MzA3", desc: "Entrusted with a task to restore public faith in superheroes, Helen sets off on a mission to catch a supervillain, while Bob faces the challenges of stay-at-home parenting.", genre: "Animation, Family, Comedy"}
]

router.get('/', (req, res) => {
    res.send(animation);
});

router.get('/Shows/:id', (req, res) => {
    try {
        const foundIndex = animation.findIndex((item) => {
            return item.link === `Animated/Shows/${req.params.id}`
        });
    
        res.render('shows', {
            title: animation[foundIndex].title,
            img: animation[foundIndex].bigImg,
            desc: animation[foundIndex].desc,
            genre: animation[foundIndex].genre,
            eps: animation[foundIndex].eps,
            seasons: animation[foundIndex].seasons ? animation[foundIndex].seasons : null
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

router.get('/Movies/:id', (req, res) => {
    try {
        const foundIndex = animation.findIndex((item) => {
            return item.link === `Animated/Movies/${req.params.id}`
        });
    
        res.render('movies', {
            title: animation[foundIndex].title,
            src: animation[foundIndex].src,
            img: animation[foundIndex].bigImg,
            desc: animation[foundIndex].desc,
            genre: animation[foundIndex].genre
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

module.exports = {router: router, animation: animation};