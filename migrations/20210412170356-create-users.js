'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      nomeAluno: {
        type: Sequelize.STRING,
       
      },
      cpfAluno: {
        type: Sequelize.STRING,
       
      },
      telefoneAluno: {
        type: Sequelize.STRING,
        
      },
      emailAluno: {
        type: Sequelize.STRING,
        
      },
      rendaAluno: {
        type: Sequelize.STRING,
       
      },
      nomeGarantidor: {
        type: Sequelize.STRING
      },
      cpfGarantidor: {
        type: Sequelize.STRING
      },
      telefoneGarantidor: {
        type: Sequelize.STRING
      },
      emailGarantidor: {
        type: Sequelize.STRING
      },
      rendaGarantidor: {
        type: Sequelize.STRING
      },
      instituicao: {
        type: Sequelize.STRING,
       
      },
      curso: {
        type: Sequelize.STRING,
       
      },
      cep: {
        type: Sequelize.STRING,
        
      },
      rua: {
        type: Sequelize.STRING,
        
      },
      numero: {
        type: Sequelize.STRING,
        
      },
      bairro: {
        type: Sequelize.STRING,
        
      },
      cidade: {
        type: Sequelize.STRING,
       
      },
      estado: {
        type: Sequelize.STRING,
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};