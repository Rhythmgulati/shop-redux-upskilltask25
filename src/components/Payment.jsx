import React from 'react'
import { Cart } from './Cart'
import { Header } from './Header'
import PaymentOption from "./PaymentOption"
import { PaymentCart } from './PaymentCart'

function Payment() {
  return (
    <div>
        <Header/>
    <main className="flex w-full h-[93vh] bg-gray-800">
       <PaymentOption/>
      <PaymentCart/>
      </main>
    </div>
  )
}

export default Payment
