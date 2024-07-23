const router = require('express').Router();

//router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    res.render('home');
});

//router.use('/groceries', require('./groceries'));
//router.use('/electronics', require('./electronics'));
//router.use('/clothing', require('./clothing'));

module.exports = router;