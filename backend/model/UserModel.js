const {model} = require('mongoose');
const bcrupt = require('bcrypt');

const {UserSchema} = require("./server/schemas/UserSchema");

const UserModel = new model("user", UserSchema);

module.exports = {UserModel};

