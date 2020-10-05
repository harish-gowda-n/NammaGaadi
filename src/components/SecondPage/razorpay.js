import axios from 'axios'

function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

export default async ( db_data, price, props ) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
  
      if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
      }
  
      const b_data = await axios({ method: 'POST', url: '/razorpay',
      data: {
        price
    } })
  
      const options = {
        key: 'rzp_test_L1pHR7BSFCwGjk',
        currency: b_data.data.currency,
        amount: b_data.data.amount,
        order_id: b_data.data.id,
        name: 'Namma Gaadi',
        description: 'Thank you for choosing Namma Gaadi. Please complete the payment to complete your order',
        handler: function (response) {
          console.log(response.razorpay_payment_id)
          db_data.payment_id = response.razorpay_payment_id
          console.log(response.razorpay_order_id)
          console.log(response.razorpay_signature)
          axios({
            method: "POST",
            url: "/firebase",
            data: {
                db_data
            }
        }).then(res => {
          console.log(res.status)
          if (res.status === 200){
            props.history.push("/paymentsuccess")
          }
        })
      }
      }
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
}

