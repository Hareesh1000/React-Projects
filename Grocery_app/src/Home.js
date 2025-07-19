import React from 'react'

function Home() {

    const AppFeatures = [
  {
    "image": "./assets/image/feature-img-1.png",
    "title": "fresh and organic",
    "description": "Fresh vegetables and fruits in cheap price."
  },
  {
    "image": "./assets/image/feature-img-2.png",
    "title": "free delivery",
    "description": "We always do fast delivery on our customers."
  },
  {
    "image": "./assets/image/feature-img-3.png",
    "title": "easy payments",
    "description": "It is very easy to pay on our website, you can pay easily."
  }
]

const showAppFeatures = AppFeatures.map (
    (item)=>(
         <div class="box">
            <img src={item.image} alt=""/>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="#" class="btn">read more</a>
        </div>
    )
)
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
        {showAppFeatures}
    </div>

</section>

{/* <!-- features section ends --> */}

    </div>
  )
}

export default Home