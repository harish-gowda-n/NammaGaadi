const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const { firestore } = require('firebase-admin');
//initialize admin SDK using serciceAcountKey
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

let collectionRef = db.collection('Orders');

module.exports.write = function (data) {
  collectionRef.add({
    customerName: data.name,
    customerPhoneNumber: data.phone,
    deliveryLoad: data.load,
    docID: "nvchsbhfcbsfhsbd",
    driverPhoneNumber: '',
    driverStatus: 0,
    dropLocationText: data.dropCity,
    dropPoint: new firestore.GeoPoint(data.dropPoint.dropLat, data.dropPoint.dropLong),
    feedBack: "",
    feedBackStatus: 0,
    orderConfirmedTime: "",
    orderDeliveredTime: "",
    orderPlacedTime: (new firestore.Timestamp(Math.floor(Date.now() / 1000), 0)),
    orderStatus: 1,
    pickupLocation: new firestore.GeoPoint(data.pickupPoint.pickupLat, data.pickupPoint.pickupLong),
    pickupLocationText: data.pickupCity,
    reasonForRejecting: "",
    transactionAmount: data.price,
    transactionID: data.payment_id,
    vehicleCapacity: 600,
    vehicleType: data.vehicleType
  });
}