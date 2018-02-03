const {Bookmark, Song, User} = require('../models')
const _ = require('lodash')

module.exports = {
	async index (req, res) {
		try {
			let songs = null
			const userId = req.user.id //from passport and isAuthenticated

			//query from SongMetadata when mounted and passed to BookmarkService as a params (client)
			const {songId} = req.query
			// console.log(`songId: ${songId}, userId: ${userId}`)
			const where = {
				UserId: userId
			}

			//when view a song
			if (songId) {
				where.SongId = songId
			}

			const bookmarks = await Bookmark.findAll({
				where: where,
				include: [
					{
						model: Song
					}
				]
			})
			.map(bookmark => bookmark.toJSON())
			.map(bookmark => _.extend(
				{},
			 	bookmark.Song,
			 	bookmark
			 ))
			// console.log(`this is: ${bookmarks}`)
			res.send(bookmarks)
		} catch(err) {
			res.status(400).send({
				error: 'An error has occured trying to fetch the bookmark songs'
			})
		}
	},

	// when setAsBookmark button pressed (client)
	async post (req, res) {
		try {
			const userId = req.user.id
			const {songId} = req.body

			const bookmark = await Bookmark.findOne({
				where: {
					SongId: songId,
					UserId: userId
				}
			})

			if(bookmark) {
				return res.status(400).send({
					error: 'You alredy have this set as a bookmark'
				})
			}

			const newBookmark = await Bookmark.create({
				SongId: songId,
				UserId: userId
			})
			res.send(newBookmark)
		} catch(err) {
			res.status(500).send({
				error: 'An error has occured trying to bookmark the song'
			})
		}
	},

	async delete (req, res) {
		try {
			const userId = req.user.id
			const {bookmarkId} = req.params
			// console.log(bookmarkId)
			const bookmark = await Bookmark.findOne({
				where: {
					id: bookmarkId,
					UserId: userId
				}
			})

			if(!bookmark){
				return res.status(403).send({
					error: 'You do not have access to this bookmark'
				})
			}
			// console.log(bookmark)
			await bookmark.destroy()
			
			res.send(bookmark)
		} catch(err) {
			res.status(500).send({
				error: 'An error has occured trying to unbookmark song'
			})
		}
	}
}