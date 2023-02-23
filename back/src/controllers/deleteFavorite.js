const favs = require('../utils/favs');

const deleteFavorite = function (req, res) {
  // const deleteFavorite = (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      //const findCharac = favs.find(charac => charac.id === Number(id));
      const characterFiltered = favs.filter(charac => charac.id !== Number(id));
      if (characterFiltered.length !== favs.length) {
        //favs = favs.filter((e).id !== Number(id));
        favs = characterFiltered;
        return res.status(200).json(favs);
        // res.status(200).json({ success: true })
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = deleteFavorite;

/*
const deleteFavorite = (req, res) => {
  const { id } = req.params;
  if (id) {
    for (i = 0; i < favorites.length; i++) {
      if (favorites[i].id == id) {
        favorites.splice(i, 1);
      }
    }
    res.status(200).json(favorites);
  }
};
*/

/*
const deleteFav = (req, res) => {
  const { id } = req.params;
  const character = fav.find((f) => f.id === Number(id));

  if (character) {

    fav = fav.filter(f => f !== character)
    //console.log("log de favoritos delete", fav);
    res.status(200).json(character);
  } else {
    res.status(400).json({
      error: "not found this character",
    });
  }
};
*/