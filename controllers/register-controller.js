const { db } = require("../models/index");

const registerController = {
  register: async (req, res) => {
    try {
      const data = {
        nomeAluno: req.body.nomeAluno,
        cpfAluno: req.body.cpfAluno,
        telefoneAluno: req.body.telefoneAluno,
        emailAluno: req.body.emailAluno,
        rendaAluno: req.body.rendaAluno,
        nomeGarantidor: req.body.nomeGarantidor,
        telefoneGarantidor: req.body.telefoneGarantidor,
        emailGarantidor: req.body.emailGarantidor,
        rendaGarantidor: req.body.rendaGarantidor,
        instituicao: req.body.instituicao,
        curso: req.body.curso,
        cep: req.body.cep,
        rua: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado
      };
      const user = await db.Users.create({
        data
      });
      res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
        const allUsers = await db.Users.findAll({
        });
        res.status(200).json(allUsers);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
  },
};

module.exports = registerController ;
