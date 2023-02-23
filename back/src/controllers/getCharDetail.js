const axios = require("axios");
//const url = 'https://rickandmortyapi.com/api/character/';

const getCharDetail = async function (req, res) {
  const { id } = req.params;
  //const { id } = req.params;
  try {
    const result = await axios(`https://rickandmortyapi.com/api/character/${id}`)
    const characterDetail = result.data;
    //axios(`${url}${id}`)
    //.then(data => data.data)
    //.then(data => {
    const character = {
      id: characterDetail.id,
      image: characterDetail.image,
      name: characterDetail.name,
      gender: characterDetail.gender,
      species: characterDetail.species,
      origin: characterDetail.origin
    }
    return res.status(200).json(character);
  }
  catch (error) {
    return res.status(500).json("Personaje no encontrado", error);
  }
};

module.exports = getCharDetail;

/*
const axios = require("axios");


const getCharDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const info = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        let character = {
          id: info.data.id,
          name: info.data.name,
          image: info.data.image,
          gender: info.data.gender,
          specie: info.data.specie,
        };
        res.status(200).send(character);
      } catch (error) {
        res.status(400).send(err);
      }
}
*/

// const axios = require("axios");

// const getCharDetail = function (res, id) {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
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

// module.exports = {
//   getCharDetail
// };