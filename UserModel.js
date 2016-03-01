var pg = require('pg');
var Sequelize = require('sequelize');


var sequelize = new Sequelize('Jedzeni', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});

var User = sequelize.define('users', {
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userName: {type: Sequelize.STRING},
  password: {type: Sequelize.STRING},
  Email: {type: Sequelize.STRING}
});


var Recipe = sequelize.define('recipes', {
 id: {
   type: Sequelize.INTEGER,
   primaryKey: true,
   autoIncrement: true
 },
 name: Sequelize.STRING,
 instructions: Sequelize.Text
});

var Ingredients = sequelize.define('ingredients', {
 id: {
   type: Sequelize.INTEGER,
   primaryKey: true,
   autoIncrement: true
 },
 name: Sequelize.STRING
});
