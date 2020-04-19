//routes.js -> las rutas para los protocolos http
const express = require('express');
const router = express.Router();
const userLogin =require('../controllers/userlogin.controller')

//router.get('/login')

router.get('/', userLogin.GetUsers); //Get





module.exports = router;
