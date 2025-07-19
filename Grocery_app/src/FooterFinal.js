import React from 'react'

function FooterFinal() {
  return (
    <div>

        
{/* <!-- footer section starts  --> */}

<section class="footer">

    <div class="box-container">

        <div class="box">
            <h3> Grocery <i class="fas fa-shopping-basket"></i> </h3>
            <p> I made this website for practice purpose only, I hope you all enjoy this project.</p>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
        </div>

        <div class="box">
            <h3>contact info</h3>
            <a href="#" class="links"> <i class="fas fa-phone"></i> +91 8853455765 </a>
            <a href="#" class="links"> <i class="fas fa-phone"></i> +91 9140026484 </a>
            <a href="#" class="links"> <i class="fas fa-envelope"></i> kapilyadav001144@gmail.com </a>
            <a href="#" class="links"> <i class="fas fa-map-marker-alt"></i> Greater Noida, india - 201306 </a>
        </div>

        <div class="box">
            <h3>quick links</h3>
            <a href="#" class="links"> <i class="fas fa-arrow-right"></i> home </a>
            <a href="#" class="links"> <i class="fas fa-arrow-right"></i> features </a>
            <a href="#" class="links"> <i class="fas fa-arrow-right"></i> products </a>
            <a href="#" class="links"> <i class="fas fa-arrow-right"></i> categories </a>
        </div>

        <div class="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <input type="email" placeholder="your email" class="email"/>
            <input type="submit" value="subscribe" class="btn"/>
            <img src="image/payment.png" class="payment-img" alt=""/>
        </div>

    </div>

    <div class="credit"> created by <span> HR </span> | all rights reserved </div>

</section>

{/* <!-- footer section ends --></div> */}
    </div>
  )
}

export default FooterFinal