const Userlogin=require('../models/userlogin');
const userloginCtrl = {};

userloginCtrl.CreateUser =async function(data) {
   console.log(data);
    // await console.log(data);
     const userlogin=new Userlogin(data);
    userlogin.id=data.id;
    await userlogin.save();
    //res.json({'status':'userLogin save'})
}
userloginCtrl.GetUsers= async(req,res)=>{
    const userslogin = await Userlogin.find()

    res.json(userslogin);

}
/*
userlogin.GetUser =async(req,res)=>{

    const user=await Userlogin.

}
*/


module.exports =userloginCtrl;