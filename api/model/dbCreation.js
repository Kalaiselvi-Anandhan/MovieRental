var Sequelize = require("sequelize");

const sequelize = new Sequelize("", "root", "", {
    dialect:"mysql",
    operatorsAliases:false,
    define:{
        timestamps:false
    }
});

sequelize.query("CREATE DATABASE IF NOT EXISTS sampledb;").then(data=>{
    console.log("db created...");
    console.log(data);

});

module.exports = sequelize;