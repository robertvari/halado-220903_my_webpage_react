import React from 'react'

export default function Contact() {
  return (
    <div className='content-container contact-container'>
      <h1>Kérdésed van?</h1>
      <p>Küldj egy üzenetet az alábbi űrlap segítségével.</p>
      
      <form action="">
        <input type="text" placeholder='Név'/>
        <input type="email" placeholder='Email'/>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Küldés</button>
      </form>
    </div>
  )
}
