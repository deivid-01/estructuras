//routes.js -> las rutas para los protocolos http
const express = require('express');
const router = express.Router();
const user =require('../controllers/users.controller')
const {isAuthenticated}= require('../helpers/validatePages')
//router.get('/login')

router.get('/signup', user.RenderSignUpForm); //Get

router.post('/signup',user.SignUp);

router.get('/signin', user.RenderSignInForm); //Get

router.post('/signin',user.SignIn);

router.get('/logout',user.Logout);

router.get('/home',user.Home);

router.get('/home/misdatos',isAuthenticated,user.GetData);

router.put('/home/misdatos',isAuthenticated,user.EditData);

router.delete('/home/misdatos',isAuthenticated,user.Delete);
module.exports = router;
/*passport.authenticate('local',{
    failureRedirect:'api/users/signin',
    successRedirect: 'api/users'*/