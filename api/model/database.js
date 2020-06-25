const Sequelize = require("sequelize");
const sequelize = require("./dbCreation.js");
let movies = require("./moviesdata.json");

const connection = new Sequelize("sampledb", "root", "", {
    dialect:"mysql",
    operatorsAliases:false,
    define:{
        timestamps:false
    }
});

const Table = connection.define("movies",{
    Rank:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    Title:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    Description:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    Runtime:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    Genre:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    Rating:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    Metascore:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    Votes:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    Gross_Earning_in_Mil:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    Director:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    Actor:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    Year:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

Table.removeAttribute("id");

connection.sync({force:true}).then(()=>{
    Table.bulkCreate(movies,{validate:true}).then(()=>{
        console.log("Movies table created...");
    }).catch((err)=>{
        console.log(err);
    });
});

module.exports = Table;