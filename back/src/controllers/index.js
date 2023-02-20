//modularicé en controladres individuales por separado

// const axios = require("axios");

// var fav = [];

// getFav = (req, res) => {
//   const { id } = req.params
//   if (!id) res.status(400)
//   else {
//     let fav = favs.find(fav => fav.id === id)
//     if (fav?.id == id) {
//       res.status(200).send(fav)
//     }
//     res.status(404).send({ error: 'id no encontrado' })
//   }
// };

// postFav = (req, res) => {
//   const { name, species, gender, image, id } = req.body
//   if (!name || !species || !gender || !image || !id) res.status(400)
//   else {
//     let fav = fav.find(fav => fav.id === id)
//     if (fav?.id == id) {
//       res.status(400).send({ error: 'Favorito existente' })
//     }
//     fav.push({ name, species, gender, image, id })
//     res.status(201).send({ success: 'Favorito agregado' })
//   }
// };
// // const postFav = function (req, res) {
// //   fav.push(req.body)
// //   // console.log("post fav -> ", fav)
// //   res.status(200).end(JSON.stringify(req.body))
// // };
// const deleteFavId = function (req, res) {
//   const { id } = req.params;
//   const character = fav.find(c => c.id === Number(id))
//   if (character) {
//     fav = fav.filter(e => e.id !== Number(id))
//     //console.log("delete fav -> ", fav)
//     res.status(200).end(JSON.stringify(character))
//   } else {
//     res.status(404).end("el personaje ya no se encuentra en los favoritos")
//   }
// };

// const getCharById = function (req, res) { //modificación express
//   //const getCharById = (res, id) => {
//   const { id } = req.params;
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((data) => data.data) // se puede llamar banana => bananas.data
//     .then((data) => { // acá si debe llamarse "data" porque data es el objeto
//       const character = {
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         id: data.id,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     }).catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Character not found");
//       //res.end(error.message)
//     })
// };

// const getCharDetail = function (req, res) { // express
//   const { detailId } = req.params;
//   axios(`https://rickandmortyapi.com/api/character/${detailId}`)
//     .then((data) => data.data)
//     .then((data) => {
//       const character = {
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         status: data.status,
//         origin: data.origin,
//         species: data.species,
//         id: data.id,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     }).catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Character not found");
//       //res.end(error.message)
//     });
// };

// module.exports = { getCharById, getCharDetail, getFav, postFav, deleteFavId };