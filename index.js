const express = require('express');
const sendMail = require('./sendMail');
const cors = require('cors')


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
	const { name, email, message } = req.body;
	sendMail(name, email, message);
	res.send('Message sent successfully!');
});

app.listen(3000, () => console.log('Server started on port 3000'));
