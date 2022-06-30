const mongoose = require('mongoose');
require('dotenv').config();
const connection = process.env.CONNECTION_STRING;

mongoose.connect(connection)
	.then(() => console.log('db connected OK'))
	.catch(err => console.error(err))