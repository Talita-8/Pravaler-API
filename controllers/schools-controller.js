const db = require("../models");

const schoolController = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            await db.Schools.create({ name, email, password });
            res.status(201).json({ message: "escola registrada com sucesso" });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const allSchools = await db.Schools.findAll({ attributes: { exclude: ['password'] } });
            res.status(200).json(allSchools);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    schoolUpdate: async (req, res) => {
        const schoolId = req.params.id;
        try {

            const {
                name,
                email,
                password
            } = req.body
            await db.Schools.update(
                {
                    name,
                    email,
                    password
                },
                {
                    where: {
                        id: schoolId,
                    },
                }
            );
            res.send("Dados atualizados!");
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    schoolDelete: async (req, res) => {
        const schoolId = req.params.id;
        try {
            await db.Schools.destroy({
                where: {
                    id: schoolId,
                },
            });
            res.send("Candidato excluído");
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },
};

module.exports = schoolController;
