const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicies = require('./policies/AuthenticationControllerPolicies');
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
	app.post('/register', 
		AuthenticationControllerPolicies.register,
		AuthenticationController.register
	);
	app.post('/login', 
		AuthenticationController.login
	);
	

	app.get('/songs', 
		SongsController.index
	);
	app.get('/songs/:songId', 
		SongsController.show
	);
	app.post('/songs', 
		SongsController.post
	);
	app.put('/songs/:songId', 
		SongsController.put
	);
}