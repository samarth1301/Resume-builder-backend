import mongoose from"mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
const UserSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    linkedInUrl:{
        type: String
    },
    slug:{
        type: String
    }
})
UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "resumeBuilder", {expiresIn: "8h"});
};



export const UserModel = mongoose.model("Users", UserSchema);