import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
    name:{
        type:String,
        required:[true, 'Please provide Name']
    },
    password:{
        type: String,
        required:[true,'Please provide password'],
    },
    email:{
        type:String,
        required:[true,'Please provide useremail'],
    },
    isVerified:{
        type:Boolean,
        default:false,
    }

}

)

export const User = mongoose.model("User",UserSchema);

// export default  {User};