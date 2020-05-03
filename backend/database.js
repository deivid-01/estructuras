//Conectarse a la base de datos
const mongoose = require('mongoose');

const URI='mongodb://localhost/mean-crud'; //Link de la base de datos

mongoose.connect(URI) //crea o se conecta a una base de datos
    .then(db => console.log('DB IS CONNECTED'))
    .catch(err => console.log(err));


module.exports = mongoose;