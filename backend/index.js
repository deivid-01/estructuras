//Res-api creation ->Get and send data
//#region Libraries
const express= require('express');
const morgan = require('morgan'); //No es necesario, pero ayuda a ver por consola lo que el usuario pide
const cors = require('cors');
const app= express();//Funcionalidad del servidor
const { mongoose } = require('./database'); //Voy a database y solicito la conexion(mongoose)
const passport = require('passport')
const session = require('express-session');
//#endregion

//#region Settings
app.set('port',3000,process.env.PORT||3000)//variable para acceder desde cualquier parte de la aplicación
require('./config/passport');
//process.env.PORT -> Si existe un puerto dado por el sistema operativo Take it!!
//
//#endregion

//#region Middlewares
app.use(morgan('dev'));
app.use(express.json());//Para entender el formato json que le envien
app.use(cors({origin:'htpp://localhost:4200'}));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
//#endregion

//#region Routes

app.use('/api/',require('./routes/users.routes'));
//#endregion

//#region Starting Servidor
app.listen(app.get('port'),()=>{
    console.log('Server on port ',app.get('port'));
});
//#endregion