import React from 'react';

function Footer() {
  return (

    <div>
 <footer className="footer">
      <div className="footerSection">
        <div className="footerColumn">
          <h3><u>ZippyCart</u></h3>
          <ul>
            <li>About Us</li>
            <li>In News</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div className="footerColumn">
          <h3>Help</h3>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Vendor Connect</li>
          </ul>
        </div>

        <div className="footerBrand">
          <div className="footerLogo">
            <img src="/assets/images/logo/logo-3.png" alt="logo" />
          
          </div>

          

          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest-p"></i>
          </div>
        </div>
      </div>

      <hr />
       <div style={{textAlign:"center"}}> 
        <p>Copyrights owned by HR</p>
    </div>
    </footer>
   
    </div>
   
  );
}

export default Footer;
