//passport->almacena informacion de la sesion
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('../models/users')
passport.use(new localStrategy({
   usernameField :'email', 
    paswordField :'password'
}, async (email,password,done)=> {

    // Match Email's User
        console.log(email);
        const userFound=  await User.findOne({email})
        
        if(!userFound){
           
            return done( null , false , {message: ' Not User found '})
            
        }
        else{
            // Match Password's User
            
            const match = await userFound.matchPassword(password)
            console.log("match "+match);
            if(match){
               
                return done(null,userFound)
            } else {
                return done(null, false, {message:' Incorrect password'})
            }
        }
        
}));

passport.serializeUser((user,done)=>{
    done(null,user.id)
});

passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user);
    });
});
