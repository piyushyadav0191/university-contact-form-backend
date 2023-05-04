const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: 'piyushyadav0191@gmail.com', // your email address
		pass: 'vvlpvjyurymkzyba', // your email password
	},
});

function sendMail(name, email, message) {
	// setup email data with unicode symbols
	let mailOptions = {
		from: `${name} <${email}>`, // sender name and email
		to: 'piyushyadav0191@gmail.com', // list of receivers
		subject: 'Message from university App', // Subject line
		text: message, // plain text body
		html: `<p>${message}</p>`, // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Message sent: %s', info.messageId);
		}
	});
}

module.exports = sendMail;
