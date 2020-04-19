const mongoose=require('mongoose');

const{ Schema } = mongoose;

const userloginSchema = new Schema({
    nickname:{type: String,required:true},
    password:{ type: String,required:true}
})

module.exports = mongoose.model('Userlogin',userloginSchema);