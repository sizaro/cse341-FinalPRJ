const passport = require('passport');

const auth = {};

//auth.home
auth.buildHome = async function (req, res) {
    try {
        // #swagger.tags=['we did it']
        res.render('home');
    } catch (err) {
        res.status(500).json({ error: 'Error building home' });
    }
}


// Render the login page
auth.loginPage = function (req, res) {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json({ error: 'Error rendering login page' });
    }
};


// Handle logout and render the logout page
auth.logOutPage = async function (req, res) {
    res.render('home');
};

// Handle login with Google
auth.loginGoogle = async function (req, res) {
    res.send('logging with google');
};

// Authenticate with Google
auth.authPage = passport.authenticate('google', {
    scope: ['profile']
});

//Handle Google callback
auth.handleGoogleCallback = async (req, res) => {
    if (req.isAuthenticated()) {
        // Pass the user object to the view
        res.render('userpage', { user: req.user });
    } else {
        res.redirect('/login');
    }
};

auth.handleGithubCallback = async (req, res) => {
    if (req.isAuthenticated()) {
        // Pass the user object to the view
        res.render('userpage', { user: req.user });
    } else {
        res.redirect('/login');
    }
};

module.exports = auth;
