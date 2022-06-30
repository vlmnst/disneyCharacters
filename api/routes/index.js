const { Router } = require('express');
const router = Router();
const characters = require('./characters');

// router.use('/movies', movies);

router.use('/characters', characters);

router.get('*', (req, res) => {
    res.status(404).send('404 not found');
});

module.exports = router;