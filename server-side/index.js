const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');


// we should import User first before we import passport
// otherwise, the passport.js will be executed without defining the user schema,
// which will cause an error
require('./models/User');          // to get that file of code executed
require('./models/Survey');
require('./services/passport');    // to get that file of code executed

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = epress();


// each of the app.use() are wiring up middleware object into the app

app.use(bodyParser.json());
app.use(

    cookieSession({
        //maxAge is how long this cookie can exist inside browser, measured with millisecond
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);


// to make the app know that we are going to use cookie 
app.use(passport.initialize());
app.use(passport.session());

//returns a function, and immediately calls the function we just required with app as input
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // express will serve up production assets
    // like our main.js file or main.css file
    app.use(express.static('client/build'));

    // express will serve up the index.html file if it does not recognise the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);