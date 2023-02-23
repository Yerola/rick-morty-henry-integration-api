const favs = require('../utils/favs');

const getFavorite = function (req, res) {
    try {
        return res.status(200).json(favs);
    } catch (error) {
        return res.status(500).json(error);
    };
};

module.exports = getFavorite;