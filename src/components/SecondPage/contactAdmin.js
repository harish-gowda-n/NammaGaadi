import axios from 'axios'

export default (orderDet, props, setLoadingSuccess) => {
    setLoadingSuccess(true)
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
    }).finally(() => {
        setLoadingSuccess(false)
    })
}

function notifyAdmin(orderDet, props){
    axios({
        method: "POST",
        url: "/contactadmin",
        data: {
            cName: orderDet.name,
            cPhNo: orderDet.phone,
            pL: orderDet.pickupArea||orderDet.pickupCity,
            dL: orderDet.dropArea || orderDet.dropCity,
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