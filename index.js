const express = require('express');
const compression = require('compression');
const netflixRoute = require('./routes/netflix');
const marvelRoute = require('./routes/marvel');
const dcRoute = require('./routes/dc');
const starWarsRoute = require('./routes/starWars');
const animatedRoute = require('./routes/animated');
const horrorRoute = require('./routes/horror');

const app = express();
let all = [];
all = all.concat(marvelRoute.marvel);
all = all.concat(netflixRoute.netflix);
all = all.concat(dcRoute.dc);
all = all.concat(starWarsRoute.starWars);
all = all.concat(animatedRoute.animation);
all = all.concat(horrorRoute.horror);

app.use(compression());
app.disable('x-powered-by');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use("/netflix", netflixRoute.router);
app.use("/marvel", marvelRoute.router);
app.use("/dc", dcRoute.router);
app.use("/Star-Wars", starWarsRoute.router);
app.use("/animated", animatedRoute.router);
app.use("/horror", horrorRoute.router);

app.get('/', (req, res) => {
    res.render('index', {
        marvel: marvelRoute.marvel,
        dc: dcRoute.dc,
        netflix: netflixRoute.netflix,
        starWars: starWarsRoute.starWars,
        animation: animatedRoute.animation,
        horror: horrorRoute.horror
    });
});

app.get('/:id', (req, res) => {
    let results = [];

    all.forEach((item, index) => {
        if (item.title.toLowerCase().includes(`${req.params.id.toLowerCase()}`)) {
            results = [...results, item];
        }
    });

    res.render('matches', {
        search: req.params.id,
        results: results,
        marvel: marvelRoute.marvel,
        dc: dcRoute.dc,
        netflix: netflixRoute.netflix,
        starWars: starWarsRoute.starWars,
        animation: animatedRoute.animation,
        horror: horrorRoute.horror
    });
});

const port = process.env.PORT || 3000;
app.listen(port);