const favs = require('../utils/favs');

const deleteFavorite = async function (req, res) {
    // const deleteFavorite = (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            const findCharac = await favs.find(charac => charac.id === Number(id));
            // const characterFiltered = favs.filter(charac => charac.id !== Number(id));
            if (findCharac) {
                favs = favs.filter((e).id !== Number(id));
                return res.status(200).json(findCharac);
                // res.status(200).json({ success: true })
            }
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = deleteFavorite;