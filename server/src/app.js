console.log('Hello');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


var app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
	res.send({
		message: `Hello ${req.body.email} Your user have register now, have fun!`
	});
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});