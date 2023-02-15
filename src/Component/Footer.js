import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className= 'footer-container'>
      <div className="right-box">
        <div className='message'>
          <input type='text'></input>
          <button>Send</button>
        </div>
        <div className='social-media'>
          <div className='instagram'><img src='https://toppng.com/uploads/preview/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png' alt='instagram' width='60px' height='60px'/></div>
          <div className='facebook'><img src='https://toppng.com/uploads/preview/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png' alt='instagram' width='60px' height='60px'/></div>
          <div className='youtube'><img src='https://toppng.com/uploads/preview/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png' alt='instagram' width='60px' height='60px'/></div>
        </div>
      </div>
      <div className='left-box'>
        <div className=''>Contact Us </div>
        <div className=''>About Us</div>
        <div className=''>Privacy Policy</div>
        <div className=''>Terms and condition</div>
      </div>
    </div>
  )
}

export default Footer
