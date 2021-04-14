const express = require('express');
let router = express.Router();

const action = [
    {title: "John Wick", link: "Action/Movies/John-Wick", smallImg: "https://img.vxdn.net/poster/200/john-wick-1631.jpg", bigImg: "https://img.vxdn.net/cover/1440/john-wick-1631.jpg", src: "https://player.voxzer.org/view/a3406a0d0714b6f31abab5e0", desc: "Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.", genre: "Action, Crime, Thriller"},
    {title: "John Wick: Chapter 2", link: "Action/Movies/John-Wick-Chapter2", smallImg: "https://img.vxdn.net/poster/200/john-wick-chapter-2-19481.jpg", bigImg: "https://img.vxdn.net/cover/1440/john-wick-chapter-2-19481.jpg", src: "https://player.voxzer.org/view/13c7682b04f685590c5585e0", desc: "Renowned assassin John Wick sets out for Rome to duel with some of the deadliest killers to fulfil a vow he made. However, he soon learns that there is a huge bounty on his head.", genre: "Action, Crime, Thriller"},
    {title: "John Wick: Chapter 3 - Parabellum", link: "Action/Movies/John-Wick-Chapter3-Parabellum", smallImg: "https://img.vxdn.net/poster/200/john-wick-chapter-3-parabellum-28606.jpg", bigImg: "https://img.vxdn.net/cover/1440/john-wick-chapter-3-parabellum-28606.jpg", src: "https://player.voxzer.org/view/d3706b0d0714b6f2dabd35e0", desc: "John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.", genre: "Action, Action and of course, Action"},
    {title: "The Man From UNCLE", link: "Action/Movies/The-Man-From-UNCLE", smallImg: "https://img.vxdn.net/poster/200/the-man-from-uncle-5096.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-man-from-uncle-5096.jpg", src: "https://vidnext.net/streaming.php?id=NjAyOA=", desc: "Napoleon Solo, a CIA agent, and Illya Kuryakin, a KGB operative, must set aside their differences and work together to thwart the plans of a criminal organization that wants to use nuclear weapons.", genre: "Action, Comedy"},
    {title: "Rampage", link: "Action/Movies/Rampage", smallImg: "https://img.vxdn.net/poster/200/rampage-24533.jpg", bigImg: "https://img.vxdn.net/cover/1440/rampage-24533.jpg", src: "https://player.voxzer.org/view/7389cbd16323f626ab5aa5e0", desc: "Primatologist Davis Okoye teams up with a geneticist, Dr Kate Caldwell, and tries to save George, an albino gorilla, and prevent two giant mutated animals from wreaking havoc in Chicago.", genre: "Action, Adventure"},
    {title: "Hitman: Agent 47", link: "Action/Movies/Hitman-Agent-47", smallImg: "https://img.vxdn.net/poster/200/hitman-agent-47-5235.jpg", bigImg: "https://img.vxdn.net/cover/1440/hitman-agent-47-5235.jpg", src: "https://player.voxzer.org/view/2407682b04f6855f8c5595e0", desc: "Agent 47, a genetically engineered assassin, joins forces with a young woman to help her reunite with her father. However, in the process, he discovers shocking realities about his origins.", genre: "Action, Spy"},
    {title: "Rise Of The Planet Of The Apes", link: "Action/Movies/Rise-Of-The-Planet-Of-The-Apes", smallImg: "https://img.vxdn.net/poster/200/rise-of-the-planet-of-the-apes-3096.jpg", bigImg: "https://img.vxdn.net/cover/1440/rise-of-the-planet-of-the-apes-3096.jpg", src: "https://vidcloud9.com/streaming.php?id=NzU2Ng=", desc: "Caesar, a chimpanzee, has been with Will ever since he was born, and, with a new drug, he can think and react like humans. When Caesar finds himself subjected to injustice, he decides to revolt.", genre: "Sci-Fi, Action"},
    {title: "Dawn Of The Planet Of The Apes", link: "Action/Movies/Dawn-Of-The-Planet-Of-The-Apes", smallImg: "https://img.vxdn.net/poster/200/dawn-of-the-planet-of-the-apes-1733.jpg", bigImg: "https://img.vxdn.net/cover/1440/dawn-of-the-planet-of-the-apes-1733.jpg", src: "https://vidcloud9.com/streaming.php?id=ODc3MQ=", desc: "Ceasar, a chimpanzee and leader of the evolved apes, allows a human family into his territory. However, due to a vindictive bonobo, misunderstandings arise between the two species, resulting in war.", genre: "Action, Sci-Fi"},
    {title: "War For The Planet Of The Apes", link: "Action/Movies/War-For-The-Planet-Of-The-Apes", smallImg: "https://img.vxdn.net/poster/200/war-for-the-planet-of-the-apes-21331.jpg", bigImg: "https://img.vxdn.net/cover/1440/war-for-the-planet-of-the-apes-21331.jpg", src: "https://player.voxzer.org/view/4327652b04f685530c51a5e0", desc: "When a rogue army of humans kills Caesar's wife and son, he sets out to exact revenge. But his quest for retribution reveals his darker instincts even as he makes a startling discovery.", genre: "Action, Sci-Fi"},
    {title: "Godzilla", link: "Action/Movies/Godzilla", smallImg: "https://img.vxdn.net/poster/200/godzilla-1670.jpg", bigImg: "https://img.vxdn.net/cover/1440/godzilla-1670.jpg", src: "https://player.voxzer.org/view/c6406a0d0714b6ff4abad5e0", desc: "Ford and his father, Joe, find evidence pointing to the existence of giant creatures. When the creatures, classified as MUTO, surface, Godzilla, an ancient behemoth, rises to fight them.", genre: "Action, Sci-Fi"},
    {title: "Godzilla: King of the Monsters", link: "Action/Movies/Godzilla-King-Of-The-Monsters", smallImg: "https://img.vxdn.net/poster/200/godzilla-king-of-the-monsters-28717.jpg", bigImg: "https://img.vxdn.net/cover/1440/godzilla-king-of-the-monsters-28717.jpg", src: "https://player.voxzer.org/view/a667652b04f6855d3c5225e0", desc: "The members of Monarch, an crypto-zoological organisation, must rely on the Godzilla and Mothra to defeat King Ghidorah and Rodan, after the former awakens other dormant Titans to destroy the world.", genre: "Action, Sci-Fi"},
    {title: "Kong: Skull Island", link: "Action/Movies/Kong-Skull-Island", smallImg: "https://img.vxdn.net/poster/200/kong-skull-island-19739.jpg", bigImg: "https://img.vxdn.net/cover/1440/kong-skull-island-19739.jpg", src: "https://vidnext.net/streaming.php?id=ODE0Mzg=", desc: "A crew that reaches Skull Island to map it, is attacked by a humongous ape. The survivors then regroup to find out more about the ape, the island's natives and underground monsters.", genre: "Action, Adventure"},
    {title: "Godzilla vs Kong", link: "Action/Movies/Godzilla-Vs-Kong", smallImg: "https://img.vxdn.net/poster/200/godzilla-vs-kong-12101145.jpg", bigImg: "https://img.vxdn.net/cover/1440/godzilla-vs-kong-12101145.jpg", src: "https://vidnext.net/streaming.php?id=MzM4OTM0", desc: "Kong and his protectors undertake a perilous journey to find his true home. Along for the ride is Jia, an orphaned girl who has a unique and powerful bond with the mighty beast. However, they soon find themselves in the path of an enraged Godzilla as he cuts a swath of destruction across the globe. The initial confrontation between the two titans -- instigated by unseen forces -- is only the beginning of the mystery that lies deep within the core of the planet.", genre: "Action, Sci-Fi"},
    {title: "Mission: Impossible", link: "Action/Movies/Mission-Impossible", smallImg: "https://img.vxdn.net/poster/200/mission-impossible-6924.jpg", bigImg: "https://img.vxdn.net/cover/1440/mission-impossible-6924.jpg", src: "https://player.voxzer.org/view/4fc7642b04f6855ffc5045e0", desc: "Ethan Hunt, an American special agent, struggles to prove his innocence and catch the real culprit when he is falsely accused of murdering his entire team", genre: "Action, Adventure, Spy"},
    {title: "Mission: Impossible 2", link: "Action/Movies/Mission-Impossible2", smallImg: "https://img.vxdn.net/poster/200/mission-impossible-ii-6925.jpg", bigImg: "https://img.vxdn.net/cover/1440/mission-impossible-ii-6925.jpg", src: "https://player.voxzer.org/view/a667672b04f685516c54f5e0", desc: "Ethan Hunt, a member of the Impossible Missions Force, is dispatched to Sydney to stop a terrorist organisation from laying their hands on a genetically-engineered virus created in a lab.", genre: "Action, Adventure, Spy"},
    {title: "Mission: Impossible III", link: "Action/Movies/Mission-Impossible3", smallImg: "https://img.vxdn.net/poster/200/mission-impossible-iii-6926.jpg", bigImg: "https://img.vxdn.net/cover/1440/mission-impossible-iii-6926.jpg", src: "https://player.voxzer.org/view/c9a7642b04f68559ac50f5e0", desc: "IMF agent Ethan Hunt is called out of retirement to rescue one of his students and confront Owen Davian, a ruthless arms dealer, who has kidnapped Julia Meade, Ethan's wife.", genre: "Action, Adventure, Spy"},
    {title: "Mission: Impossible - Ghost Protocol", link: "Action/Movies/Mission-Impossible-Ghost-Protocol", smallImg: "https://img.vxdn.net/poster/200/mission-impossible-ghost-protocol-3982.jpg", bigImg: "https://img.vxdn.net/cover/1440/mission-impossible-ghost-protocol-3982.jpg", src: "https://player.voxzer.org/view/91e7682b04f68556dc5635e0", desc: "When the IMF is wrongly accused of bombing the Kremlin, Ethan and his team race against time to find the real culprits and clear the reputation of their organisation.", genre: "Action, Adventure, Spy"},
    {title: "Mission: Impossible - Rogue Nation", link: "Action/Movies/Mission-Impossible-Rogue-Nation", smallImg: "https://img.vxdn.net/poster/200/mission-impossible-5-rogue-nation-4764.jpg", bigImg: "https://img.vxdn.net/cover/1440/mission-impossible-5-rogue-nation-4764.jpg", src: "https://player.voxzer.org/view/9ed7692b04f68554ec57a5e0", desc: "With the IMF disbanded and the CIA hunting him, Ethan and his team race against time to prove the existence of the Syndicate, a highly-skilled terror organisation, before they plan their next attack.", genre: "Action, Adventure, Spy"},
    {title: "Mission: Impossible - Fallout", link: "Action/Movies/Mission-Impossible-Fallout", smallImg: "https://img.vxdn.net/poster/200/mission-impossible-fallout-25708.jpg", bigImg: "https://img.vxdn.net/cover/1440/mission-impossible-fallout-25708.jpg", src: "https://vidnext.net/streaming.php?id=MjA4NTI3", desc: "A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage.", genre: "Action, Adventure, Spy"},
    {title: "Bad Boys", link: "Action/Movies/Bad-Boys", smallImg: "https://img.vxdn.net/poster/200/bad-boys-4702.jpg", bigImg: "https://img.vxdn.net/cover/1440/bad-boys-4702.jpg", src: "https://vidcloud9.com/streaming.php?id=NjM5Ng=", desc: "Marcus, a family man, and Mike, a ladies' man, are partners in the Miami police. Things get complicated when they assume each other's identity while investigating a drug deal.", genre: "Action, Comedy"},
    {title: "Bad Boys 2", link: "Action/Movies/Bad-Boys2", smallImg: "https://img.vxdn.net/poster/200/bad-boys-2-4107.jpg", bigImg: "https://img.vxdn.net/cover/1440/bad-boys-2-4107.jpg", src: "https://vidcloud9.com/streaming.php?id=Njg1NA=", desc: "Mike and Marcus, the Miami Police Department detectives, investigate the flow of drugs into Miami. Their search leads them to a dangerous drug lord who is planning to control the city's drug trade.", genre: "Action, Comedy"},
    {title: "Bad Boys For Life", link: "Action/Movies/Bad-Boys-For-Life", smallImg: "https://cdn.themovieseries.net/cover/bad-boys-for-life.png", bigImg: "https://specials-images.forbesimg.com/imageserve/5e1e4c67a854780006e88bbd/960x0.jpg", src: "https://vidnext.net/streaming.php?id=MzA2NTgw", desc: "Detectives Mike Lowrey and Marcus Burnett join the Miami Police Department's special team AMMO to bring down the ruthless Armando, who is on a mission to kill Mike at his mother Isabel's orders.", genre: "Action, Comedy"},
    {title: "Kingsman: The Secret Service", link: "Action/Movies/Kingsman-The-Secret-Service", smallImg: "https://img.vxdn.net/poster/200/kingsman-the-secret-service-3104.jpg", bigImg: "https://img.vxdn.net/cover/1440/kingsman-the-secret-service-3104.jpg", src: "https://player.voxzer.org/view/62f7662b04f685520c5335e0", desc: "Gary 'Eggsy' Unwin faces several challenges when he gets recruited as a secret agent in a secret spy organisation in order to look for Richmond Valentine, an eco-terrorist.", genre: "Action, Comedy"},
    {title: "Kingsman: The Golden Circle", link: "Action/Movies/Kingsman-The-Golden-Circle", smallImg: "https://img.vxdn.net/poster/200/kingsman-the-golden-circle-21976.jpg", bigImg: "https://img.vxdn.net/cover/1440/kingsman-the-golden-circle-21976.jpg", src: "https://player.voxzer.org/view/a6a06e0d0714b6f38ac3d5e0", desc: "After the enemies blow up their headquarters, the surviving agents of Kingsman band together with their American counterpart to take down a ruthless drug cartel.", genre: "Action, Comedy"},
    
];

router.get('/', (req, res) => {
    res.send(action);
});

router.get('/Shows/:id', (req, res) => {
    try {
        const foundIndex = action.findIndex((item) => {
            return item.link === `Action/Shows/${req.params.id}`
        });
    
        res.render('shows', {
            title: action[foundIndex].title,
            img: action[foundIndex].bigImg,
            desc: action[foundIndex].desc,
            genre: action[foundIndex].genre,
            eps: action[foundIndex].eps,
            seasons: action[foundIndex].seasons ? action[foundIndex].seasons : null
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

router.get('/Movies/:id', (req, res) => {
    try {
        const foundIndex = action.findIndex((item) => {
            return item.link === `Action/Movies/${req.params.id}`
        });

        res.render('movies', {
            title: action[foundIndex].title,
            src: action[foundIndex].src,
            img: action[foundIndex].bigImg,
            desc: action[foundIndex].desc,
            genre: action[foundIndex].genre
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

module.exports = {router: router, action: action};