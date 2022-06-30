const { Schema, model } = require('mongoose');

// creamos el schema de los models
    const characterSchema = new Schema({
        name: String,
        films: Array,
        imageUrl: String,
        tvShows: Array,
        videoGames: Array,
    });


// modificamos el método toJSON para que elimine el _id y el __v al hacer la request (no lo elimina de la database)
    characterSchema.set('toJSON', {
        transform: (document, returnedObj) => {
            returnedObj.id = returnedObj._id
            delete returnedObj._id
            delete returnedObj.__v
        }
    });

// creamos la colleción 'movies' con el esquema de 'movieSchema'
    const Character = model('Character', characterSchema);

module.exports = Character;