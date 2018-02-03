console.log('Hello');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models')
const config = require('./config/config')

var app = express();

// app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./passport')

require('./routes')(app);

//connect to database
sequelize.sync()
	.then(() => {
		app.listen(config.port);
		console.log(`Server running on port ${config.port}`);
	})