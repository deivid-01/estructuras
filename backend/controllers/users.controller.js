const User=require('../models/users');
const userCtrl = {};
const passport=require('passport');

//#region loginVerification
userCtrl.RenderSignUpForm = (req,res) => {
    res.json({
        'status':'SingUp Window'
    })
}
userCtrl.SignUp = async (req,res) => {
  
    
    
    const emailUser =  await User.findOne({email:req.body.email})
    
    if(emailUser){
       res.json({
           'message':'The mail is already in use'
       })

   }
   else {
   
    const newUser = new User(req.body);
    
     newUser.password = await newUser.encryptPassword(newUser.password) 
    await newUser.save();
    console.log("Si lo guardo");
    res.json({
        'status':'User saved'
    })

   } 
  
}

userCtrl.RenderSignInForm = (req,res) => {
    
    res.json({
        'status':'out'
    });
}
userCtrl.SignIn  = async (req,res)=>{
    //passport.authenticate("local");
    console.log(req.body)

    const userFound=   await User.findOne({email:req.body.email})
    
    if(!userFound){
       res.json({
           'message':'out'
       })

   }
   else {
        const match = await userFound.matchPassword(req.body.password)
        console.log("match "+match);
        if(match){
            res.json(userFound);
        }
        else{
            res.json(null);

        }
   

   } 
  


 }

userCtrl.Logout = (req,res) => {
    req.logout();
    res.json({
        'status':'Logged out'
    });
    res.redirect('/api/users/signin')
}
userCtrl.Home = (req,res)=> {
    console.log("qwe");
   
    res.json({
        'status':'olaaaaa'
    });
}

userCtrl.GetData = (req,res)=>{
    res.json(req.user);
}

userCtrl.EditData= async(req,res) => {
    const { id } =req.user.id;
    const user = {
        nickname:req.body.nickname,
        email:req.body.email,
        password:req.body.password,
        name:req.body.name,
        estatura:req.body.estatura, 
       
    }
    console.log(req.user.id);
    await User.findByIdAndUpdate(req.user.id,{$set:user},{new:true}) //search id and update with 'user' | 'new true' crea un nuevo usuario en caso de que no exista
    res.json({'status':'user updated'})
}
userCtrl.Delete = async (req,res)=>{
    await User.findByIdAndRemove(req.user.id)
    req.logout();
    res.redirect('/api/users/signin')
}

//#endregion
module.exports =userCtrl;

/*
userCtrl.CreateUser =async function(data) {
   console.log(data);
    // await console.log(data);
     const userlogin=new Userlogin(data);
    userlogin.id=data.id;
    await userlogin.save();
    //res.json({'status':'userLogin save'})
}
userCtrl.GetUsers= async(req,res)=>{
    const userslogin = await Userlogin.find()

    res.json(userslogin);

}
/*
userlogin.GetUser =async(req,res)=>{

    const user=await Userlogin.

}
*/


