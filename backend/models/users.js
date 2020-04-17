const mongoose= require('mongoose');
//Definir esquema de los datos
const{ Schema } =mongoose;

const userSchema=new Schema({
    name:{type:String, required: true},
    estatura:{type:Number,required:true}  
    /*
    peso:{type:Number,required:true},
    sexo:{type:String,required:true},
    actFisica:{type:String,required:true},
    contraseña:{type:String,required:true},
    correo:{type:String,required:true}
*/
})
//Pasar a mongodb
module.exports = mongoose.model('User',userSchema);
