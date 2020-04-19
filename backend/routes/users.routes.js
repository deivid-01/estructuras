//routes.js -> las rutas para los protocolos http
const express = require('express');
const router = express.Router();
const user=require ('../controllers/user.controller');
const userLogin =require('../controllers/userlogin.controller')

//router.get('/login')

router.get('/', user.GetUsers); //Get

router.post('/',user.CreateUser);//Save

router.get('/:id',user.GetUser); //Get

router.put('/:id',user.EditUser);//Update

router.delete('/:id',user.DeleteUser);

router.delete('/',user.DeleteAll);



module.exports = router;
//5e9b5cef60462c1e74e1b461