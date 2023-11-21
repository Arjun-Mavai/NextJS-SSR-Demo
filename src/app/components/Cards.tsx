import React from 'react'
import Link from 'next/link'

const Cards = () => {
  return (
   <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/shoe.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" > <Link href="/">Listen</Link> </button>
    </div>
  </div>
</div>
  )
}

export default Cards
