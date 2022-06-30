const Character = require('../models/Character');

const getAllCharacters = async (req, res, next) => {
    console.log('> ...initializing connection at "getAllCharacters"');

    try {
        let characters = await Character.find({});
        characters.length ? res.json(characters) : res.status(404).json({error: 'cannot find characters'});
    } catch (error) {
        return next(error);
    };
};

module.exports = { getAllCharacters };