import React, { useState } from 'react'

function PaymentOption() {
  const [choice,setchoice]=useState("cash")
 
  const handlePaymentMethodChange = (event) => {
    setchoice(event.target.value);
  };

    return (
 
 
 <div className=" scroll-style w-[60%] bg-gray-900 flex flex-col gap-12 justify-center overflow-x-auto we p-12">
 

   <div className="flex align-middle items-center gap-4"> 
    <input type="radio" name="type" defaultChecked={true} id="" value={"cash"} onClick={handlePaymentMethodChange}/><p className='text-white'>Cash on delivery</p>
    <input type="radio" name="type" id="" value={"card"} onClick={handlePaymentMethodChange}/><p className='text-white'>Card</p>
    </div>
  
<div className="h-[50vh]">
  {choice=="cash" && (
    <div className="flex flex-col gap-1">
       <p className="text-white">You have selected Cash. Please pay the amount on delivery.</p>
       <button className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Confirm Order</button>
        </div>
        
  )}
  {choice=="card" && (<div className="flex  flex-col gap-1">
   <label htmlFor="cardno" className="text-white">Card No:</label>
   <input type="number" name="" id="" />
   
   <label htmlFor="expiry"className="text-white">Expiry Date:</label>
   <input type="date" />

   <label htmlFor="cvno" className="text-white">CVV No:</label>
   <input type="number" name="" id="" />

   <button className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Confirm Payment</button>
   </div> )}
    </div></div>
  )
}

export default PaymentOption
