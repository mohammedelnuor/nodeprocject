const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create a schema and model for the database

const marioCharacterSchema = new Schema({
    name: String,
    weight: Number

});

const Character = mongoose.model('Character', marioCharacterSchema);

module.exports = Character;