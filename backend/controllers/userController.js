const { User } = require("../models/userModel");

exports.user = (req, res) => {
    if (req.body.login) {
        res.json("login");
    } else {
        res.json("register");
    }
};
