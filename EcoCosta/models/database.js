const Sequelize = require('sequelize');
const sequelize = new Sequelize('dbTCC', 'root', '442266L#2023',{
    host: 'localhost',
    dialect: 'mysql',
});
sequelize.authenticate().then(function(){
    console.log('[DEU TUDO CERTO]')
}).catch(function(){
    console.log('[ERRO]')
})

module.exports = sequelize;