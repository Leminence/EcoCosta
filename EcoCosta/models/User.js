const Sequelize = require('sequelize')
const db = require(__dirname + '/database.js')

const User = db.define('user', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.sync(); // Cria o modelo user se a tabela ainda não existe

module.exports = User;