const {Schema, Model} = require('mongoose');

const UserSchema = new Schema( {
    id: Number,
    score: Number,
    name: String,
})


const usermodel = new Model("UserModel", UserSchema);

module.exports = usermodel;