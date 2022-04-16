var express = require("express");
var router = express.Router();
var User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async(req, res) => {
    try {
        let user = await User.findOne({ email_address: req.body.email });

        if (!user) {
            res.send({ error: "User not found !" });
            return null;
        } else {
            if (await bcrypt.compare(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    email: user.email_address,
                    age: user.age,
                    fullName: user.full_name,
                    token: jwt.sign({ userId: user._id }, "TOKEN_KEY", {
                        expiresIn: "24h",
                    }),
                });
            } else {
                res.send({ error: "Incorrect Password  !" });
            }
        }
    } catch (e) {
        res.send(e);
    }
});

module.exports = router;