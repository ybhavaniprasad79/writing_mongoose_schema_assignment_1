let mongoose = require("mongoose")



const userSchema =mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:[String],
        default:"user"
    }

});

const ProfileSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number
});

const ActivitySchema = mongoose.Schema({
    lastLogin:Date
})


const UserModel =mongoose.model("user",userSchema);
const profileModel=mongoose.model("profile",ProfileSchema);
const activityModel=mongoose.model("activity",ActivitySchema);

module.exports={UserModel,profileModel,activityModel}

