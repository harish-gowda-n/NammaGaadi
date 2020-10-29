const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const path = require('path');
const fast2sms = require('fast-two-sms');
// const Razorpay = require('razorpay')
const shortid = require('shortid')
const firebase = require('./firebase/firebase')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json()); 
// var nodemailer = require("nodemailer");

// const razorpay = new Razorpay({
// 	key_id: process.env.REACT_APP_RazorPayKeyID,
// 	key_secret: process.env.REACT_APP_RazorPayKeySecret
// })

app.use(express.static(path.join(__dirname, 'build')));

//Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get("/order", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get("/agreement", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// //Send Mail
// app.post("/sendMail", (req, res) => {
//     const email = req.body.email
//     const msg = req.body.msg
    
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'gaadinamma@gmail.com',
//             pass: 'Nammagaadi@123'
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//     })

//     var mailOptions = {
//         from: "gaadinamma@gmail.com",
//         to: email,
//         subject: 'NammaGaadi - Contact US : ',
//         text: msg
//     }

//     transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//             console.log(error);
//             res.json({
//                 msg: 'fail'
//               })
//         } else {
//             res.json({
//                 msg: 'success'
//               })
//         }
//       });
// })

//Send OTP
app.post('/sendotp', async (req, res) => {
    console.log(process.env.REACT_APP_Fast2SMS)
    const response = await fast2sms.sendMessage({
      authorization: process.env.REACT_APP_Fast2SMS,
      message: `Dear Customer, your otp for Namma Gaadi is : ${req.body.otp}`,
      numbers: [req.body.phone],
    });
    res.send(response);
  });

  //Razorpay
//   app.post('/razorpay', async (req, res) => {
//     const payment_capture = 1
//     const new_amount = req.body.price
//     const amount = new_amount
// 	const currency = 'INR'
// 	const options = {
// 		amount: amount * 100,
// 		currency,
// 		receipt: shortid.generate(),
// 		payment_capture
// 	}

// 	try {
// 		const response = await razorpay.orders.create(options)
// 		console.log(response)
// 		res.json({
// 			id: response.id,
// 			currency: response.currency,
// 			amount: response.amount
// 		})
// 	} catch (error) {
// 		console.log(error)
// 	}
// })

//Send Razorpay Verification
// app.post('/verification', (req, res) => {
// 	// do a validation
// 	const secret = process.env.REACT_APP_verification_RazorPayKeySecret

// 	const crypto = require('crypto')

// 	const shasum = crypto.createHmac('sha256', secret)
// 	shasum.update(JSON.stringify(req.body))
// 	const digest = shasum.digest('hex')

// 	console.log(digest, req.headers['x-razorpay-signature'])

// 	if (digest === req.headers['x-razorpay-signature']) {
// 		console.log('request is legit')
// 	} else {
// 		// pass it
// 	}
// 	res.json({ status: 'ok' })
// })

// Firebase write
app.post('/firebase', async (req, res) => {
    const db_data = req.body.db_data
    firebase.write(db_data, res);    
})

app.post('/contactadmin', async (req, res) => {
    console.log("reached")
    const response = await fast2sms.sendMessage({
      authorization: process.env.REACT_APP_Fast2SMS,
      message: `New Order summary: \n Customer Name : ${req.body.cName}\n Customer Ph No : ${req.body.cPhNo}\n Vehicle : ${req.body.vehicle}\n Pickup Location : ${req.body.pL}\n Delivery Location : ${req.body.dL}\n Date : ${req.body.date}\n price : ${req.body.price}`,
      numbers: [8792600639],
    });
    res.send(response);
  });

// PORT CONFIG
app.listen(process.env.PORT || 3001, () => {
    console.log("Server listening on port 3001");
});
