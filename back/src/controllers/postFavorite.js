const favs = require('../utils/favs');

const postFavorite = async function (req, res) {
    try {
        if (req.body) {
            const favs = await favs.push(req.body);
            return res.status(200).json(req.body)
        };
    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = postFavorite;