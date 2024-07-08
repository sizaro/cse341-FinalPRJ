const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    res.send('Welcome!');
});

router.use('/groceries', require('./groceries'));
router.use('/electronics', require('./electronics'));
router.use('/clothing', require('./clothing'));

module.exports = router;