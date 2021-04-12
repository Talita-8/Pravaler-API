const db  = require("../models");

const registerController = {
  
  register: async (req, res) => {
    try {
      const {
        status,
        nomeAluno,
        cpfAluno,
        telefoneAluno,
        emailAluno,
        rendaAluno,
        nomeGarantidor,
        cpfGarantidor,
        telefoneGarantidor,
        emailGarantidor,
        rendaGarantidor,
        instituicao,
        curso,
        cep,
        rua,
        numero,
        bairro,
        cidade,
        estado
      } = req.body;
      const user = await db.Users.create({
        status,
        nomeAluno,
        cpfAluno,
        telefoneAluno,
        emailAluno,
        rendaAluno,
        nomeGarantidor,
        cpfGarantidor,
        telefoneGarantidor,
        emailGarantidor,
        rendaGarantidor,
        instituicao,
        curso,
        cep,
        rua,
        numero,
        bairro,
        cidade,
        estado,
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

module.exports = registerController;
