const { Router } = require('express');
const router = Router();

const { getAllCharacters } = require('../controllers/characters');

router.get('/getCharacters', getAllCharacters);

module.exports = router;