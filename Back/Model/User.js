const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    user: String,
    pass: String,
    email: String
})

module.exports=mongoose.model("User",UserSchema)
