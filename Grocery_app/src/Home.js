import React from 'react'

function Home() {
  return (
    <div>
        
{/* <!-- home section starts  --> */}

<section class="home" id="home">

    <div class="content">
        <h3>fresh and <span>organic</span> products for your</h3>
        <p>Organica is where early adopters and innovation sockers find lively, imaginative tech before it hits the mainstream.</p>
        <a href="#" class="btn">shop now</a>
    </div>

</section>

{/* <!-- home section ends --> */}

{/* <!-- features section starts  --> */}

<section class="features" id="features">

    <h1 class="heading"> our <span>features</span> </h1>

    <div class="box-container">

        <div class="box">
            <img src="./assets/image/feature-img-1.png" alt=""/>
            <h3>fresh and organic</h3>
            <p>Fresh vegetables and fruits in cheap price.</p>
            <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
            <img src="./assets/image/feature-img-2.png" alt=""/>
            <h3>free delivery</h3>
            <p>We always do fast delivery on our customers.</p>
            <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
            <img src="./assets/image/feature-img-3.png" alt=""/>
            <h3>easy payments</h3>
            <p>It is very easy to pay on our website, you can pay easily.</p>
            <a href="#" class="btn">read more</a>
        </div>

    </div>

</section>

{/* <!-- features section ends --> */}

    </div>
  )
}

export default Home