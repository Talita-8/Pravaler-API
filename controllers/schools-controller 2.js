const db = require("../models");

const registerController = {
    register: async (req, res) => {
        try {
            const { school, password } = req.body;
            const user = await db.Schools.create({ school, password });
            res.status(201).json(user);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const allUsers = await db.Schools.findAll({
            });
            res.status(200).json(allUsers);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },
};

module.exports = registerController;
