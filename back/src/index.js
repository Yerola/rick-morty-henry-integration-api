const app = require('./App');
//const { db } = require('./db');

const PORT = 3001

app.listen(PORT, () => {
    db.sync()
    console.log("in server http://localhost:3001")
})