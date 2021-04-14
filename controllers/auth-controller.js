const jwt = require("jsonwebtoken");
const {
    Bearer
} = require("permit");

const db = require("../models");

const permit = new Bearer();

module.exports = {
    login(req, res, next) {

        const {
            email,
            password
        } = req.body;

        db.Schools.findOne({
            where: {
                email: email,
                password: password
            },
        }).then((school) => {
            if (!school) return res.status(401).json({
                error: "confirme suas informações e tente novamente"
            });

            let jwtPayload = {
                id: school.id
            };
            let token = jwt.sign(jwtPayload, process.env.JWT);

            return res.status(200).json({
                token, email
            });
        });
    },


    auth(req, res, next) {
        const token = req.headers.token;

        if (!token) {
            permit.fail(res);
            return res.status(401).json({
                error: "authentication required!"
            });
        }

        jwt.verify(token, process.env.JWT, (err, decoded) => {
            if (err) {
                permit.fail(res);
                return res.status(401).json({
                    error: "failed to authenticate token!"
                });
            }

            req.id = decoded.id;
            next();
        });
    },

};