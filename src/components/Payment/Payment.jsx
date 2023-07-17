
// import React from 'react';
// import logo from './logo.svg';
import { useState } from 'react';
// import { usePaystackPayment } from 'react-paystack';
import './Payment.css'
import PaystackPop from "@paystack/inline-js"


// const config = {
//     reference: (new Date()).getTime().toString(),
//     email: "faslusky1@gmail.com",
//     amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
//     publicKey: 'pk_test_edc882cfde452f71eba0e2b9218ef6a52650f93d',
// };

// // you can call this function anything
// const onSuccess = (reference) => {
//   // Implementation for whatever you want to do with reference and after success call.
//   console.log(reference);
// };

// // you can call this function anything
// const onClose = () => {
//   // implementation for  whatever you want to do when the Paystack dialog closed.
//   console.log('closed')
// }

const Payment = () => {
    // const initializePayment = usePaystackPayment(config);
    const [email, setEmail] = useState('')
    const [amount, setAmount] = useState('')
    const payment =(e) =>{
e.preventDefault()
const paystack = new PaystackPop()
paystack.newTransaction({
    key:'pk_test_edc882cfde452f71eba0e2b9218ef6a52650f93d',
    amount: amount * 100,
    email:email,
    onSuccess(transaction){
        let message = `Payment Completed! Reference ${transaction.reference}`
        alert(message)
        setEmail(''),
        setAmount('')
    },
    onCancel(){
        alert('Transaction canceled successful')
    }
})

    }
  return (
    <div className='w3-container'>
        <div className='w3-content w3-margin-bottom'>
        <h1 className='w3-h1 w3-center  w3-text w3-text-custom '>Make Donation</h1>
        <div className='w3-container w3-quarter'></div>
        <div className=' w3-center w3-half w3-card-custom'>
            <div className='w3-container w3-card-4  w3-padding w3-margin-custom w3-card-custom  ' >
        <form action="" className='w3-row w3-justify'>
         <div >

            <input type="email"  name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Input your Email' className='w3-input w3-text-custom '  />
         </div>
         <div>

            <input type="email"  name='email' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Amount'  className='w3-input w3-text-custom '/>
         </div>
    <button onClick={payment} className='w3-btn w3-text-white w3-block w3-background ' >Pay</button>
    
        </form>
            </div>
            </div>
            </div>
            </div>
  )
}

export default Payment