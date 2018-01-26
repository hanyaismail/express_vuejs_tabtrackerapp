const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config  = require('../config/config')

function jwtSignUser (user) {
	const ONE_WEEK = 60 * 60 * 24 * 7;
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: ONE_WEEK
	})
}

module.exports = {
	async register (req, res) {
		try {
			const user = await User.create(req.body);
			console.log(req.body);
			const userJson = user.toJSON();
			res.send({
				user: userJson,
				token: jwtSignUser(userJson)
			})
		} catch(err) {
			res.status(400).send({
				error: 'email already exists'
			})
		}
	},

	async login (req, res) {
		try {
			const{email, password} = req.body

			//find user based on email
			const user = await User.findOne({
				where: {
					email: email
				}
			});

			//if user doesn't exists
			if(!user) {
				res.status(403).send({
					error: 'The login information was incorrect'
				})
			}

			//check the password with comparePassword function
			const isPasswordValid = await user.comparePassword(password);
			if(!isPasswordValid) {
				res.status(403).send({
					error: 'The password is invalid'
				})
			}

			// make token and send it as the response
			const userJson = user.toJSON();
			res.send({
				user: userJson,
				token: jwtSignUser(userJson)
			})

			// if an error occured
		} catch(err) {
			res.status(500).send({
				error: 'An error was occured trying to log in'
			})
		}
	}
}