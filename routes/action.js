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
    {title: "War For The Planet Of The Apes", link: "Action/Movies/War-For-The-Planet-Of-The-Apes", smallImg: "https://img.vxdn.net/poster/200/war-for-the-planet-of-the-apes-21331.jpg", bigImg: "https://img.vxdn.net/cover/1440/war-for-the-planet-of-the-apes-21331.jpg", src: "https://player.voxzer.org/view/4327652b04f685530c51a5e0", desc: "When a rogue army of humans kills Caesar's wife and son, he sets out to exact revenge. But his quest for retribution reveals his darker instincts even as he makes a startling discovery.", genre: "Action, Sci-Fi"}

];

router.get('/', (req, res) => {
    res.send(action);
});

router.get('/Shows/:id', (req, res) => {
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
});

router.get('/Movies/:id', (req, res) => {
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
});

module.exports = {router: router, action: action};