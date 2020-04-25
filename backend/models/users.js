const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const{ Schema } = mongoose;

const userSchema = new Schema({
    nickname:{type: String,required:true},
    email:{type: String,required:true},
    password:{ type: String,required:true},
    name:{type:String, required: true},
    estatura: {type:Number,required:true}, 
    peso: {type:Number,required:true},
    genero: {type:String,required:true},
    actividadFisica: {type:Number,required:true},
})


userSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

userSchema.methods.matchPassword = async function(password)  {
    return await bcrypt.compare(password, this.password)
}

    module.exports = mongoose.model('User',userSchema);

