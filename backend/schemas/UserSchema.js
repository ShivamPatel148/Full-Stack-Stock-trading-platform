const {Schema} = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, // usernames must be unique
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email"], // email validation
  },
  password: {
    type: String,
    required: true,
    minlength: 15, // ensure strong password
  },
});

UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });

exports.UserSchema = {UserSchema};