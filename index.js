// dependencies
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const Datastore = require('nedb');

const app = express();
const db = new Datastore('database.nedb');
db.loadDatabase(); 

// routes
const netflixRoute = require('./routes/netflix');
const marvelRoute = require('./routes/marvel');
const dcRoute = require('./routes/dc');
const starWarsRoute = require('./routes/starWars');
const animatedRoute = require('./routes/animated');
const horrorRoute = require('./routes/horror');
const actionRoute = require('./routes/action');
const crimeRoute = require('./routes/crime');
const sciFiRoute = require('./routes/scifi');
const comedyRoute = require('./routes/comedy');

let all = [];
all = all.concat(marvelRoute.marvel);
all = all.concat(netflixRoute.netflix);
all = all.concat(dcRoute.dc);
all = all.concat(starWarsRoute.starWars);
all = all.concat(animatedRoute.animation);
all = all.concat(horrorRoute.horror);
all = all.concat(actionRoute.action);
all = all.concat(crimeRoute.crime);
all = all.concat(sciFiRoute.sciFi);
all = all.concat(comedyRoute.comedy);

app.use(compression());
app.use(cors());
app.use(express.json({ limit: '10MB'}));
app.disable('x-powered-by');

// ejs view engine
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('views'));

// set routes
app.use("/netflix", netflixRoute.router);
app.use("/marvel", marvelRoute.router);
app.use("/dc", dcRoute.router);
app.use("/Star-Wars", starWarsRoute.router);
app.use("/animated", animatedRoute.router);
app.use("/horror", horrorRoute.router);
app.use("/action", actionRoute.router);
app.use("/crime", crimeRoute.router);
app.use("/sci-fi", sciFiRoute.router);
app.use("/comedy", comedyRoute.router);

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

// report a bug system
app.get('/report-bug', (req, res) => {
    res.render('report');
});

app.post('/report-bug', (req, res) => {
    try {
        db.insert(req.body);
    } catch (err) {
        res.sendStatus(409);
    }
});

app.get('/issues', (req, res) => {
    if (req.query.dev == "true") {
        db.find({}, (err, docs) => {
            res.render('issues', {
                issues: docs 
            });
        });   
    } else {
        res.render('error', {
            error: "You are not allowed to view this because you are not a developer."
        });
    }
});

app.post('/issues', (req, res) => {
    if (req.query.dev == "true") {
        console.log(req.body.delete);
        db.remove({ _id: req.body.delete });
    } else {
        res.sendStatus(401);
    }
});

// the search page
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
        all: all
    });
});

const port = process.env.PORT || 3000;
app.listen(port);