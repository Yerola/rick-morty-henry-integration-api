const express = require("express");
const router = express.Router();
const {
  getCharDetail,
  getCharById,
  getFav,
  postFav,
  deleteFavId } = require("../controllers");

router.get("/character/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);
router.get("/fav", getFav);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFavId);


module.exports = router;

/*
GET/rickandmorty/fav, que obtenga los personajes guardados en el arreglo fav.

POST/rickandmorty/fav, que guarde los personajes en el arreglo fav.

DELETE/rickandmorty/fav/${id}, que elimine el personaje en el arreglo fav a partir del id

get/rickandmorty/detail/{detailId}
get/rickandmorty/character/{id}

*/