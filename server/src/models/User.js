//exports a function which takes sequelize and datatypes
module.exports = (sequelize, DataTypes) => 
	sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			unique: true
		},
		password: DataTypes.STRING
	})