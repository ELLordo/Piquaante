const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
//models des users
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
// utilisation de mongoose-unique-validator pour obligé l user a utilisé d une adresse mail
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);