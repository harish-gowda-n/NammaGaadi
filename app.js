const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const path = require('path');
const fast2sms = require('fast-two-sms');
const Razorpay = require('razorpay')
const shortid = require('shortid')
const firebase = require('./firebase/firebase')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json()); 
app.use(express.urlencoded());
app.use(cors());
var nodemailer = require("nodemailer");

const razorpay = new Razorpay({
	key_id: 'rzp_test_L1pHR7BSFCwGjk',
	key_secret: 'rd9RZb1WngheaQKOZxsBeKeb'
})

app.use(express.static(path.join(__dirname, 'build')));

//Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// Second Page
app.get("/order", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

//Send Mail
app.post("/sendMail", (req, res) => {
    const email = req.body.email
    const msg = req.body.msg
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'embarkventures04@gmail.com',
            pass: 'embark@004'
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    var mailOptions = {
        from: email,
        to: 'hg1532000@gmail.com',
        subject: 'NammaGaadi - Contact US : ',
        text: msg
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.json({
                msg: 'fail'
              })
        } else {
            res.json({
                msg: 'success'
              })
        }
      });
})

//Send OTP
app.post('/sendotp', async (req, res) => {
    const response = await fast2sms.sendMessage({
      authorization: '6t2AAuXknhywVmZFBrton62STv1N6BECwg3rYIbsSEtWXfxpuTYeXULeeYp6',
      message: `Dear Customer, your otp for Namma Gaadi is : ${req.body.otp}`,
      numbers: [req.body.phone],
    });
    res.send(response);
  });

  //Razorpay
  app.post('/razorpay', async (req, res) => {
    const payment_capture = 1
    const new_amount = req.body.price
    const amount = new_amount
	const currency = 'INR'
	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})

//Send Razorpay Verification
app.post('/verification', (req, res) => {
	// do a validation
	const secret = 'PaYmEnT1!SuCcEsSfUl'

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})

// Firebase write
app.post('/firebase', (req, res) => {
    const db_data = req.body.db_data
    firebase.write(db_data);
    res.send("uploaded successfully")
})

app.get('/paymentsuccess', (req, res) => {
    console.log("hit")
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// PORT CONFIG
app.listen(process.env.PORT || 3001, () => {
    console.log("Server listening on port 3001");
});