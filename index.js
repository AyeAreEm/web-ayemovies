const express = require('express');
const compression = require('compression');
const netflixRoute = require('./routes/netflix');
const marvelRoute = require('./routes/marvel');
const dcRoute = require('./routes/dc')
const starWarsRoute = require('./routes/starWars')
const animatedRoute = require('./routes/animated')

const app = express();

app.use(compression());

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use("/netflix", netflixRoute);
app.use("/marvel", marvelRoute);
app.use("/dc", dcRoute);
app.use("/Star-Wars", starWarsRoute);
app.use("/animated", animatedRoute);

const marvel = [
    {title: "Iron Man", link: "Marvel/Iron-Man", image: "https://img.vxdn.net/poster/200/iron-man-1710.jpg"}, {title: "Iron Man 2", link: "Marvel/Iron-Man2", image: "https://img.vxdn.net/poster/200/iron-man-2-1711.jpg"}, {title: "Iron Man 3", link: "Marvel/Iron-Man3", image: "https://img.vxdn.net/poster/200/iron-man-3-1712.jpg"},
    {title: "The Incredible Hulk", link: "Marvel/Incredible-Hulk", image: "https://img.vxdn.net/poster/200/the-incredible-hulk-3342.jpg"},
    {title: "Thor", link: "Marvel/Thor", image: "https://img.vxdn.net/poster/200/thor-3351.jpg"}, {title: "Thor: The Dark World", link: "Marvel/Thor-The-Dark-World", image: "https://img.vxdn.net/poster/200/thor-the-dark-world-1843.jpg"}, {title: "Thor: Ragnarok", link: "Marvel/Thor-Ragnarok", image: "https://img.vxdn.net/poster/200/thor-ragnarok-22466.jpg"},
    {title: "Captain America: The First Avenger", link: "Marvel/Captain-America", image: "https://img.vxdn.net/poster/200/captain-america-the-first-avenger-3352.jpg"}, {title: "Captain America: The Winter Soldier", link: "Marvel/Captain-America-Winter-Soldier", image: "https://img.vxdn.net/poster/200/captain-america-the-winter-soldier-1632.jpg"}, {title: "Captain America: Civil War", link: "Marvel/Captain-America-Civil-War", image: "https://img.vxdn.net/poster/200/captain-america-civil-war-latino-audio-11797.jpg"},
    {title: "Avengers", link: "Marvel/Avengers", image: "https://img.vxdn.net/poster/200/the-avengers-1717.jpg"}, {title: "Avengers: Age of Ultron", link: "Marvel/Avengers-Age-Of-Ultron", image: "https://img.vxdn.net/poster/200/avengers-age-of-ultron-4632.jpg"}, {title: "Avengers: Infinity War", link: "Marvel/Avengers-Infinity-War", image: "https://img.vxdn.net/poster/200/avengers-infinity-war-24689.jpg"}, {title: "Avengers: Endgame", link: "Marvel/Avengers-Endgame", image: "https://img.vxdn.net/poster/200/avengers-endgame-28501.jpg"},
    {title: "Guardians of the Galaxy", link: "Marvel/GotG", image: "https://img.vxdn.net/poster/200/guardians-of-the-galaxy-1608.jpg"}, {title: "Guardians of the Galaxy Vol. 2", link: "Marvel/GotG2", image: "https://img.vxdn.net/poster/200/guardians-of-the-galaxy-vol-2-20525.jpg"},
    {title: "Ant-Man", link: "Marvel/Ant-Man", image: "https://img.vxdn.net/poster/200/ant-man-4408.jpg"}, {title: "Ant-Man and the Wasp", link: "Marvel/Ant-Man-And-The-Wasp", image: "https://img.vxdn.net/poster/200/ant-man-and-the-wasp-25534.jpg"},
    {title: "Doctor Strange", link: "Marvel/Doctor-Strange", image: "https://img.vxdn.net/poster/200/doctor-strange-17530.jpg"},
    {title: "Spider-Man: Homecoming", link: "Marvel/Spider-Man-Homecoming", image: "https://img.vxdn.net/poster/200/spider-man-homecoming-21248.jpg"}, {title: "Spider-Man: Far From Home", link: "Marvel/Spider-Man-Far-From-Home", image: "https://img.vxdn.net/poster/200/spider-man-far-from-home-28904.jpg"},
    {title: "Black Panther", link: "Marvel/Black-Panther", image: "https://img.vxdn.net/poster/200/black-panther-23800.jpg"},
    {title: "Captain Marvel", link: "Marvel/Captain-Marvel", image: "https://img.vxdn.net/poster/200/captain-marvel-28165.jpg"},
    {title: "Deadpool", link: "Marvel/Deadpool", image: "https://img.vxdn.net/poster/200/deadpool-9802.jpg"}, {title: "Deadpool 2", link: "Marvel/Deadpool2", image: "https://img.vxdn.net/poster/200/deadpool-2-24922.jpg"},
    {title: "Spider-Man", link: "Marvel/Spider-Man", image: "https://img.vxdn.net/poster/200/spider-man-3337.jpg"}, {title: "Spider-Man 2", link: "Marvel/Spider-Man2", image: "https://img.vxdn.net/poster/200/spider-man-2-3338.jpg"}, {title: "Spider-Man 3", link: "Marvel/Spider-Man3", image: "https://img.vxdn.net/poster/200/spider-man-3-3339.jpg"},
    {title: "The Amazing Spider-Man", link: "Marvel/The-Amazing-Spider-Man", image: "https://img.vxdn.net/poster/200/the-amazing-spider-man-1753.jpg"}, {title: "The Amazing Spider-Man 2", link: "Marvel/The-Amazing-Spider-Man2", image: "https://img.vxdn.net/poster/200/the-amazing-spider-man-2-1754.jpg"}
]

const dc = [
    {title: "Man of Steel", link: "DC/Man-Of-Steel", image: "https://img.vxdn.net/poster/200/man-of-steel-2164.jpg"},
    {title: "Batman v Superman: Dawn of Justice", link: "DC/Batman-V-Superman", image: "https://img.vxdn.net/poster/200/batman-v-superman-dawn-of-justice-11024.jpg"},
    {title: "Suicide Squad", link: "DC/Suicide-Squad", image: "https://img.vxdn.net/poster/200/suicide-squad--15185.jpg"},
    {title: "Wonder Woman", link: "DC/Wonder-Woman", image: "https://img.vxdn.net/poster/200/wonder-woman-20963.jpg"}, {title: "Wonder Woman 1984", link: "DC/Wonder-Woman-1984", image: "https://img.vxdn.net/poster/200/wonder-woman-1984-101915.jpg"},
    {title: "Justice League", link: "DC/Justice-League", image: "https://img.vxdn.net/poster/200/justice-league-22756.jpg"},
    {title: "Aquaman", link: "DC/Aquaman", image: "https://img.vxdn.net/poster/200/aquaman-27124.jpg"},
    {title: "Shazam!", link: "DC/Shazam!", image: "https://img.vxdn.net/poster/200/shazam-28369.jpg"},
    {title: "Harley Quinn: Birds of Prey", link: "DC/Birds-Of-Prey", image: "https://img.vxdn.net/poster/200/birds-of-prey-100453.jpg"},
    {title: "Joker", link: "DC/Joker", image: "https://img.vxdn.net/poster/200/Joker-2019-29553.jpg"}
]

const netflix = [
    {title: "The Witcher", link: "Netflix/The-Witcher", image: "https://img.vxdn.net/poster/200/The-Witcher-1-100248.jpg"},
    {title: "Sex Educatioe", link: "Netflix/Sex-Education", image: "https://img.vxdn.net/poster/200/sex-education-season-1-27675.jpg"},
    {title: "Bird Box", link: "Netflix/Bird-Box", image: "https://img.vxdn.net/poster/200/bird-box-27241.jpg"},,
    {title: "The Queen's Gambit", link: "Netflix/Queens-Gambit", image: "https://images.123movieshub.tc/2020/10/qIITtEn253x1x7UTVb4g288xcxI.jpg"}
]

const starWars = [
    {title: "Star Wars: The Phantom Menace", link: "Star-Wars/The-Phantom-Menace", image: "https://img.vxdn.net/poster/200/star-wars-episode-i-the-phantom-menace-1915.jpg"},
    {title: "Star Wars: Attack of the Clones", link: "Star-Wars/Attack-Of-The-Clones", image: "https://img.vxdn.net/poster/200/star-wars-episode-ii-attack-of-the-clones-1916.jpg"},
    {title: "Star Wars: Revenge of the Sith", link: "Star-Wars/Revenge-Of-The-Sith", image: "https://img.vxdn.net/poster/200/star-wars-episode-iii-revenge-of-the-sith-2197.jpg"},
    {title: "Star Wars: A New Hope", link: "Star-Wars/A-New-Hope", image: "https://img.vxdn.net/poster/200/star-wars-episode-iv-a-new-hope-2229.jpg"},
    {title: "Star Wars: The Empire Strikes Back", link: "Star-Wars/The-Empire-Strikes-Back", image: "https://img.vxdn.net/poster/200/star-wars-episode-v-the-empire-strikes-back-2233.jpg"},
    {title: "Star Wars: Return of the Jedi", link: "Star-Wars/Return-Of-The-Jedi", image: "https://img.vxdn.net/poster/200/star-wars-episode-vi-return-of-the-jedi-2238.jpg"},
    {title: "Star Wars: The Force Awakens", link: "Star-Wars/The-Force-Awakens", image: "https://img.vxdn.net/poster/200/star-wars-the-force-awakens-7292.jpg"},
    {title: "Star Wars: The Last Jedi", link: "Star-Wars/The-Last-Jedi", image: "https://img.vxdn.net/poster/200/star-wars-the-last-jedi-23033.jpg"},
    {title: "Star Wars: The Rise of Skywalker", link: "Star-Wars/The-Rise-Of-Skywalker", image: "https://img.vxdn.net/poster/200/star-wars-the-rise-of-skywalker-100243.jpg"},
]

const animation = [
    {title: "Kung Fu Panda", link: "Animated/Kung-Fu-Panda", image: "https://img.vxdn.net/poster/200/kung-fu-panda-2420.jpg"}, {title: "Kung Fu Panda 2", link: "Animated/Kung-Fu-Panda2", image: "https://img.vxdn.net/poster/200/kung-fu-panda-2-2248.jpg"}, {title: "Kung Fu Panda 3", link: "Animated/Kung-Fu-Panda3", image: "https://img.vxdn.net/poster/200/kung-fu-panda-3-9053.jpg"},
    {title: "Shrek", link: "Animated/Shrek", image: "https://img.vxdn.net/poster/200/shrek-4608.jpg"}, {title: "Shrek 2", link: "Animated/Shrek2", image: "https://img.vxdn.net/poster/200/shrek-2-4609.jpg"}, {title: "Shrek the Third", link: "Animated/Shrek3", image: "https://img.vxdn.net/poster/200/shrek-the-third-4610.jpg"}, {title: "Shrek Forever After", link: "Animated/Shrek4", image: "https://img.vxdn.net/poster/200/shrek-forever-after-4611.jpg"},
    {title: "Spider-Man: Into the Spider-Verse", link: "Animated/Spider-Man-Into-the-Spider-Verse", image: "https://img.vxdn.net/poster/200/spider-man-into-the-spider-verse-27208.jpg"},
    {title: "Big Hero 6", link: "Animated/Big-Hero-6", image: "https://img.vxdn.net/poster/200/big-hero-6-2043.jpg"},
    {title: "How To Train Your Dragon", link: "Animated/How-To-Train-Your-Dragon", image: "https://img.moviesjoy.to/resize/188x288/ec/35/ec359f4bfd201710f78d41d381c9eeda/ec359f4bfd201710f78d41d381c9eeda.jpg"}, {title: "How To Train Your Dragon 2", link: "Animated/How-To-Train-Your-Dragon2", image: "https://img.moviesjoy.to/resize/188x288/72/3a/723adc6446687ea09ff1ae657c64ce0b/723adc6446687ea09ff1ae657c64ce0b.jpg"}, {title: "How To Train Your Dragon: The Hidden World", link: "Animated/How-To-Train-Your-Dragon3", image: "https://img.vxdn.net/poster/200/how-to-train-your-dragon-the-hidden-world-27688.jpg"},
    {title: "Megamind", link: "Animated/Megamind", image: "https://img.vxdn.net/poster/200/megamind-2469.jpg"},
    {title: "Rick And Morty", link: "Animated/Rick-And-Morty", image: "https://img.vxdn.net/poster/200/rick-and-morty-season-1-9011.jpg"},
    {title: "Rio", link: "Animated/Rio", image: "https://img.vxdn.net/poster/200/rio-2057.jpg"}, {title: "Rio", link: "Animated/Rio2", image: "https://img.vxdn.net/poster/200/rio-2-2060.jpg"},
    {title: "Mr. Peabody & Sherman", link: "Animated/Mr-Peabody-And-Sherman", image: "https://img.vxdn.net/poster/200/mr-peabody-sherman-1960.jpg"},
    {title: "Despicable Me", link: "Animated/Despicable-Me", image: "https://img.vxdn.net/poster/200/despicable-me-4327.jpg"}, {title: "Despicable Me 2", link: "Animated/Despicable-Me2", image: "https://img.vxdn.net/poster/200/despicable-me-2-4328.jpg"}, {title: "Despicable Me 3", link: "Animated/Despicable-Me3", image: "https://img.vxdn.net/poster/200/despicable-me-3-21195.jpg"}
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

const port = process.env.PORT || 3000;
app.listen(port);