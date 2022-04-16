var express = require("express");
var router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
/* GET users listing. */
router.get("/", async(req, res) => {
    try {
        console.log("get users");
        const users = await User.find();

        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ "error message": error });
    }
});

/* register user */
router.post("/", async(req, res) => {
    try {
        const user = req.body;
        console.log(user.password);

        const hashedPassword = await bcrypt.hash(user.password, 10);

        const newUser = new User({
            full_name: user.full_name,
            email_address: user.email_address,
            age: user.age,
            password: hashedPassword,
        });

        const result = await newUser.save();

        res.status(200).send(result);
    } catch (e) {
        res.status(500).send({ "error message": e });
    }
});

module.exports = router;
