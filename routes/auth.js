const router = require('express').Router();
const controller = require('../controllers/auth');
const passport = require('passport');

router.get('/', controller.buildHome);

router.get('/login', controller.loginPage);

router.get('/logout', controller.logOutPage);

router.get('/google', passport.authenticate('google', {scope:['profile']}))//controller.authPage);

router.get('/google/redirect', passport.authenticate('google'), controller.handleGoogleCallback);

router.get('/github', passport.authenticate('github', {scope:['profile']}))//controller.authGithubPage);

router.get('/github/redirect', passport.authenticate('github'), controller.handleGithubCallback);



module.exports = router;
