var mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    full_name: { type: String, required: true },
    email_address: { type: String, required: true },
    password: { type: String, required: true },
});
module.exports = mongoose.model("User", UserSchema);
