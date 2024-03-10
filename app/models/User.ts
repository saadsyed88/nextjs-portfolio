import mongoose from "mongoose";
import { string } from "zod";

const UserSchema = new mongoose.Schema({
    username: string,
    password: string,
},
{timestamps:true});

const User = mongoose.models.User || mongoose.model("User",UserSchema);

export default User;