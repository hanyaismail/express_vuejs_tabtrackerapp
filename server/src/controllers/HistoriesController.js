const {History, Song, User} = require('../models')
const _ = require('lodash')

module.exports = {
	async index (req, res) {
		try {
			// when RecentlyViewedMounted (client)
			const userId = req.user.id
			// console.log(`userId: ${userId}`)
			const histories = await History.findAll({
				where: {
					UserId: userId
				},
				include: [
					{
						model: Song
					}
				]
			})
			.map(history => history.toJSON())
			.map(history => _.extend(
				{},
			 	history.Song,
			 	history
			 ))
			// console.log(`this is: ${histories}`)
			// console.log(histories)
			res.send(_.uniqBy(histories, history => history.SongId))
		} catch(err) {
			res.status(400).send({
				error: 'An error has occured trying to fetch song histories'
			})
		}
	},

	async post (req, res) {
		try {
			//when ViewSong Index (client) mounted
			const userId = req.user.id
			const {songId} = req.body
			console.log('creating history')
			console.log(`songId: ${songId} userId: ${userId}`)
			const history = await History.create({
				SongId: songId,
				UserId: userId
			})
			// console.log('history created')
			// console.log(history)
			res.send(history)
		} catch(err) {
			res.status(500).send({
				error: 'An error has occured trying to create history object'
			})
		}
	}
}