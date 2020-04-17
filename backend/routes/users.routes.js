//routes.js -> las rutas para los protocolos http
const express = require('express');
const router = express.Router();
const user=require ('../controllers/user.controller');

router.get('/', user.GetUsers); //Get

router.post('/',user.CreateUser);//Save

router.get('/:id',user.GetUser); //Get

router.put('/:id',user.EditUser);//Update

router.delete('/:id',user.DeleteUser);

module.exports = router;