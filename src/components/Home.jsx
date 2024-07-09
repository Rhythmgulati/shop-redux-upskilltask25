import React from 'react'
import { Header } from './Header'
import ProductList from './ProductList'
import { Cart } from './Cart'

function Home() {
  return (
    <div>
      <Header/>
    <main className="flex w-full h-[93vh] bg-gray-800">
      <ProductList />
      <Cart  />
    </main>
    </div>
  )
}

export default Home
