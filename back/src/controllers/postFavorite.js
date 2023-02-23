const favs = require('../utils/favs');

const postFavorite = function (req, res) {
    try {
        if (character) {
            favs.push(character);
            return res.status(200).json(character)
        };
    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = postFavorite;