const mongoose = require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/jaruratCare").then(() => {
	console.log("Connection Successful");
}).catch((error) => {
	console.log(error);
});