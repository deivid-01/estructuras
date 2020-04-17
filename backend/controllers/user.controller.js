
//user.controller.js-> funciones de cada ruta
const User = require('../models/users');
const userCtrl = {};

userCtrl.GetUsers=async(req,res)=>{
    
    const users = await User.find()
     
    res.json(users);
    
};
userCtrl.CreateUser= async (req,res)=> {
    const user = new User(req.body);
    await user.save();
    res.json({
        'status':'user saved'
    })
}
userCtrl.GetUser= async (req,res)=>{
    
    const user=await User.findById(req.params.id)
    res.json(user);

}
userCtrl.EditUser= async(req,res) => {
    const { id } =req.params
    const user = {
        name: req.body.name,
        estatura: req.body.estatura
    }
    await User.findByIdAndUpdate(id,{$set:user},{new:true}) //search id and update with 'user' | 'new true' crea un nuevo usuario en caso de que no exista
    res.json({'status':'user updated'})
}
userCtrl.DeleteUser= async(req,res)=>{
    await User.findByIdAndRemove(req.params.id)
    res.json({'status':'user deleted'});
}

module.exports = userCtrl;