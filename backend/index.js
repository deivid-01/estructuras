//Res-api creation ->Get and send data
//#region Libraries
const express= require('express');
const morgan = require('morgan'); //No es necesario, pero ayuda a ver por consola lo que el usuario pide
const app= express();//Funcionalidad del servidor
const { mongoose } = require('./database'); //Voy a database y solicito la conexion(mongoose)

//#endregion

//#region Settings
app.set('port',3000,process.env.PORT||3000)//variable para acceder desde cualquier parte de la aplicación
//process.env.PORT -> Si existe un puerto dado por el sistema operativo Take it!!
//
//#endregion

//#region Middlewares
app.use(morgan('dev'));
app.use(express.json());//Para entender el formato json que le envien

//#endregion

//#region Routes
app.use('/api/users/',require('./routes/users.routes'));
//#endregion

//#region Starting Servidor
app.listen(app.get('port'),()=>{
    console.log('Server on port ',app.get('port'));
});
//#endregion