const favs = require('../utils/favs');

const getFavorite = async function (req, res) {
    try {
        const favs = await favs.findAll();
        return res.status(200).json(favs);
    } catch (error) {
        return res.status(500).json(error);
    };
};

module.exports = getFavorite;