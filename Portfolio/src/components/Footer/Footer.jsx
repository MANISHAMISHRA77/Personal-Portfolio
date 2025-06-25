import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <hr />
      <div className="footer-top">
        <p className="footer-top-left">
            @2025 Manisha Kumari. All rights reserved.
        </p>
        <div className="footer-top-right">
            <p>Term of services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
