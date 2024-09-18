const db = require('./database');
const model = require('./schema');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/services', async (req, res) => {
	try {
		const data = await model.find({});
		res.status(200).send(data);
	}
	catch(error) {
		console.log(error);
	}
});
app.post('/addservice', async (req, res) => {
	try {
	   const { name, description, price } = req.body;
	   const data = new model({ name, description, price });
	   await data.save();
	   res.status(200).send({ message: "Service Added" });
	}
	catch(error) {
       console.log(error);
	}
});
app.put('/updateservice/:id', async (req, res) => {
    try {
       const id = req.params.id;
	   const updates = req.body;
	   const data = await model.findByIdAndUpdate(id, updates, { new: true });
	   if (!data) {
		  res.status(404).send({ message: "Service not Found" });
	   }
	   res.status(200).send(updates);
	}
	catch(error) {
       console.log(error);
	}
});
app.delete('/deleteservice/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const data = await model.findByIdAndDelete(id);
		if (!data) {
			res.status(404).send({ message: "Service not Found" });
		}
		res.status(200).send({ message: "Service Deleted" });
	}
	catch(error) {
		console.log(error);
	}
});
app.listen(3000, () => {
    console.log("Server Running");
});