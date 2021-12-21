//  Game Schema which contains the user the colors and pgn = moves
// also contains the result of the game

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

const GameSchema = mongoose.Schema({
    user: {type: Schema.ObjectId, ref: 'User'},
    white: String,
    black: String,
    pgn: String,
    result: String
});

mongoose.model('Game', GameSchema);
