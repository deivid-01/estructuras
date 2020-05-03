
const helpers = {}

helpers.isAuthenticated = (req,res,next)=>{
if(req.isAuthenticated()){
    return next();
}
res.json({
    'status':'in'
})
}

module.exports= helpers;