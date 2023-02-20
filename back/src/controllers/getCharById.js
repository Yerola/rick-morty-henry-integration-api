const axios = require("axios");
const url = 'https://rickandmortyapi.com/api/character/';

const getCharById = async function (req, res) {
  const { id } = req.params;
  try {
    const result = await axios(`${url}${id}`)
    const characterApi = result.data;
    // .then(info => info.data)
    // .then(data => {
    let character = {
      id: characterApi.id,
      image: characterApi.image,
      name: characterApi.name,
      gender: characterApi.gender,
      species: characterApi.species
    }
    return res.status(200).json(character);
    // return res.status(200).end(JSON.stringify(character));
  } catch (error) {
    return res.status(500).json(error);
    // res.status(500).json({ message: error.message })
  }
};


module.exports = getCharById;



// const axios = require("axios");


// const getCharById = function (res, id) {
//   //const getCharById = (res, id) => {
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


// module.exports = {
//   getCharById
// };
// // module.exports = getCharById;