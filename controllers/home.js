const express = ('express')

const router = require('../route')

const home = {};

home.buildHome = async function (req, res) {
    try {
        // #swagger.tags=['we did it']
        res.render('home');
    } catch (err) {
        res.status(500).json({ error: 'Error building home' });
    }
}

module.exports = home