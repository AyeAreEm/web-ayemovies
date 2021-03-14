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
app.use("/netflix", netflixRoute.router);
app.use("/marvel", marvelRoute.router);
app.use("/dc", dcRoute.router);
app.use("/Star-Wars", starWarsRoute.router);
app.use("/animated", animatedRoute.router);

app.get('/', (req, res) => {
    res.render('index', {
        marvel: marvelRoute.marvel,
        dc: dcRoute.dc,
        netflix: netflixRoute.netflix,
        starWars: starWarsRoute.starWars,
        animation: animatedRoute.animation
    });
});

const port = process.env.PORT || 3000;
app.listen(port);