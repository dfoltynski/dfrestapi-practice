const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pinSchema = new Schema(
    {
        pins: [],
    },
    { timestamps: true }
);

const Pin = mongoose.model("pins", pinSchema);

module.exports = {
    Pin,
};
