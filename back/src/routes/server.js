const express = require('express');
const { router } = require('../routes/index');
const cors = require('cors');
const PORT = 3001;

const server = express();

server.use(express.json());
server.use(cors());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //Autorizo recibir solicitudes de este dominio
  res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});

server.use('/', router);

server.listen(PORT, () => {
  console.log('Server raised in port ' + PORT);
});

module.exports = server;




// const http = require('http');
// const PORT = 3001;
// //const characters = require('../utils/data');
// const { getCharById } = require("../controllers/getCharById");
// const { getCharDetail } = require("../controllers/getCharDetail");


// http.createServer((req, res) => {

//   res.setHeader('Access-Control-Allow-Origin', '*')
//   // const allUrl = req.url.split("/");
//   // const id = Number(allUrl.pop());
//   // const url = allUrl.join("/");


//   let id = req.url.split("/").at(-1);
//   if (req.url.includes("onsearch")) {
//     getCharById(res, id);
//   }
//   if (req.url.includes("detail")) {
//     getCharDetail(res, id);
//   }


//   // switch (url) {
//   //   case "/onsearch":
//   //     return getCharById(res, id)
//   //   case "/detail":
//   //     return getCharDetail(res, id)

//   //   default:
//   //     res.writeHead(404, { 'Content-Type': 'text/plain' })
//   //     res.end("Character not found");
//   // }
//   //const url = req.url;
//   // if (url.split("/rickandmorty/").length > 1) {
//   //   // if (req.url.includes("rickandmorty/character")) {
//   //   let id = req.url.split("/rickandmorty/")[1];
//   //   //const id = Number(allUrl.pop()); // 7
//   //   //const url = allUrl.join("/"): // ["", "rick", "nana" ] /rick/nana
//   //   // let id = req.url.split("/").at(-1);
//   //   let data = characters.find(char => char.id === Number(id));
//   //   data
//   //     ? res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(data))
//   //     : res.writeHead(404, { 'Content-Type': 'text/plain' }).end("Character not found")
//   //   return;
//   // }
//   // res.writeHead(404, { 'Content-Type': 'text/plain' }).end("Route not found")
//   // //res.writeHead(200,{"content-type":"text/plain"}).end("JSON.stringify(characters_filter)")

// }
// ).listen(PORT, () => {
//   // console.log(`http://localhost:${PORT}`);
//   console.log("Back 3001 levantado con éxito!");
// });