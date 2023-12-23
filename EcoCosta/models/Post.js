const Sequelize = require('sequelize')
const database = require('./database')

const PostModel = database.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    especie: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categorias: {
        type: Sequelize.JSON(Sequelize.STRING),
        defaultValue: []
    }
})

PostModel.sync();

module.exports = PostModel;