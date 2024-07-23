// APPLICATION CONTROL FILE
const express = require('express');
const mongodb = require('./data/db');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const routes = require('./routes/index')
const passportSetup = require('./helper/passportSetup')


const app = express();

// PORT AND HOST
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost"

// middleware

app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})
app.use(cors({methods:['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']}));
app.use(cors({origin: '*'}));
app.use('/', require('./routes'));
app.use('/auth', authRoutes);

/*app.get('/', (req, res) => {
    res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.displayName}`:'Logged Out')
});*/

//Middleware

// INITIALIZE MONGODB 
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Listening on ${host}:${port}.`);
        })
    }
});