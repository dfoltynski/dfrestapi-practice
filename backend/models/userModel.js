const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        last_name: { type: String, required: true },
        profile_pic: { type: String, required: true },
        age: { type: Number, required: true },
        sex: { type: String },
        relationship_status: { type: String },
        friends: [],
    },
    { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = {
    User,
};
