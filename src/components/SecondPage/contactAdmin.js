import axios from 'axios'

export default (orderDet, props) => {

    axios({
        method: "POST",
        url: "/firebase",
        data: {
            db_data: orderDet,
        }
    }).then(res => {
      if (res.status === 200){
        notifyAdmin(orderDet, props)
      }
    })
}

function notifyAdmin(orderDet, props){
    axios({
        method: "POST",
        url: "/contactadmin",
        data: {
            cName: orderDet.name,
            cPhNo: orderDet.phone,
            pL: orderDet.pickupCity,
            dL: orderDet.dropCity,
            vehicle: orderDet.vehicleType,
            distance: orderDet.distance,
            price: orderDet.price,
            date: orderDet.date
          }
    }).then(res => {
      console.log(res.status)
      if (res.status === 200){
        props.history.push("/paymentsuccess")
      }
    })
}