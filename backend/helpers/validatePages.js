
const helpers = {}
const User=require('../models/users');

const passport=require('passport');


helpers.isAuthenticated = (req,res,next)=>{
if(req.isAuthenticated()){
    return next();
}

res.json({
    'status':'in'
})
}

module.exports= helpers;