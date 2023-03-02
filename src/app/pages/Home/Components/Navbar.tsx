import React, { Fragment } from 'react'
import img1 from '../logos/logo-demo2.png'
import img2 from '../logos/word-LOGO-White.png'
import img3 from '../logos/logo-demo2-sticky.png'
import img4 from '../logos/word-LOGO.png'
function Navbar() {
  return (
   <Fragment>
          <div className="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
                <a href="index.html">
                  <img alt="Logo" src={img1} className="logo-default h-50px" />
                  <img alt="Logo" src={img2} className="logo-default h-30px" />
                  <img alt="Logo" src={img3} className="logo-sticky h-50px" />
                  <img alt="Logo" src={img4} className="logo-sticky h-30px" />
                </a>
              </div>
   </Fragment>
  )
}

export default Navbar