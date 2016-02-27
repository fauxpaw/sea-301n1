"use strict";


/*function Cat(name, age){
this.name =name;
this.age = age;
};*/

//above similar to below

module.exports = function(sequelize, DataTypes){
  var Cat = sequelize.define("Cat", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  })
  return Cat;
}
