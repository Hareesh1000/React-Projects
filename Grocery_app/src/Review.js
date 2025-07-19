import React from 'react'


function Review({reviews}) {

    const user_Reviews = reviews.map(
        (review,index)=> (
            
            <div class="swiper-slide box">
                <img src={review.image} alt=""/>
                <p>{review.text}</p>
                <h3>{review.reviewer}</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
        )
    )
  return (
    <div>

        
{/* <!-- review section starts  --> */}

<section class="review" id="review">

    <h1 class="heading"> customer's <span>review</span> </h1>

    <div class="swiper review-slider">

        <div class="swiper-wrapper">

            {user_Reviews}


        </div>

    </div>

</section>

{/* <!-- review section ends --> */}
    </div>
  )
}

export default Review