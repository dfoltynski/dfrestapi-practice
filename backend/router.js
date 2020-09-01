const { register } = require("./controllers/userController");

const router = require("express").Router();
const { user } = require("./controllers/userController");

router.get("/", (req, res) => {
    res.json("✨ Hello ✨");
});

router.post("/users/", user);

module.exports = router;
