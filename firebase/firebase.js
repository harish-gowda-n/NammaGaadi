const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const fast2sms = require('fast-two-sms');
const { firestore } = require('firebase-admin');
//initialize admin SDK using serviceAcountKey
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

let collectionRef = db.collection('Orders');

module.exports.write = function (data, res) {
  collectionRef.add({
    customerName: data.name,
    customerPhoneNumber: "+91"+data.phone,
    deliveryLoad: parseInt(data.load),
    driverStatus: 0,
    dropLocationText: data.dropCity,
    dropPoint: new firestore.GeoPoint(data.dropPoint.dropLat, data.dropPoint.dropLong),
    orderPlacedTime: new firestore.Timestamp(Math.floor(Date.now() / 1000), 0),
    orderStatus: 1,
    pickUpLocation: new firestore.GeoPoint(data.pickupPoint.pickupLat, data.pickupPoint.pickupLong),
    pickUpLocationText: data.pickupCity,
    transactionAmount: data.price,
    transactionID: data.payment_id,
    vehicleCapacity: 1000,
    vehicleType: data.vehicleType
  }).then(() => {
    res.json({ status: 'ok' })
    fast2sms.sendMessage({
      authorization: process.env.REACT_APP_Fast2SMS,
      message: `Dear Customer, your order has been registered successfully. Please note down your transaction id for reference ${data.payment_id} Feel free to contact us at +912020202020 Thanks for choosing us!!`,
      numbers: [data.phone],
    });
  })
  .catch(() => {
    alert("OOPS something went wrong!! If your money was deducted, our team will contact you shortly.\n Please co-operate, Thanks!!")
  });
}