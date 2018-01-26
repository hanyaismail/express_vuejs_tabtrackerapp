const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

//hashing function
function hashPassword (user, options) {
	const SALT_FACTOR = 8

	if(!user.changed('password')) {
		return;
	}

	return bcrypt
		.genSaltAsync(SALT_FACTOR)
		.then(salt => bcrypt.hashAsync(user.password, salt, null))
		.then(hash => {
			user.setDataValue('password', hash)
		})
}

//exports a function which takes sequelize and datatypes
module.exports = (sequelize, DataTypes) => { 
const User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			unique: true
		},
		password: DataTypes.STRING
	}, {
		hooks: {
			// beforeCreate: hashPassword,
			// beforeUpdate: hashPassword,
			beforeSave: hashPassword
		}
	})
	

	//prototype comparePassword function, used in AuthenticationController.login to
	User.prototype.comparePassword = function (password) {
		return bcrypt.compareAsync(password, this.password)
	}

	return User
}