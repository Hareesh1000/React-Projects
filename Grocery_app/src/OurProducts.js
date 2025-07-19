// import React from 'react'

// function OurProducts() {
// const products = [
//   {
//     "image": "./assets/image/product-1.png",
//     "name": "fresh orange",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-2.png",
//     "name": "fresh onion",
//     "price": "6/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-3.png",
//     "name": "fresh meat",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-4.png",
//     "name": "fresh cabbage",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-5.png",
//     "name": "fresh potato",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-6.png",
//     "name": "fresh avocado",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-7.png",
//     "name": "fresh carrot",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-8.png",
//     "name": "green lemon",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
    
//   }
// ]

// const ShowAllProducts = products.map (
//     (element)=>(
//              <div class="swiper-slide box">
//                 <img src={element.image} alt=""/>
//                 <h3>{element.name}</h3>
//                 <div class="price">{element.price} </div>
//                 <div class="stars">
//                     <i class="fas fa-star"></i>
//                     <i class="fas fa-star"></i>
//                     <i class="fas fa-star"></i>
//                     <i class="fas fa-star"></i>
//                     <i class="fas fa-star-half-alt"></i>
//                 </div>
//                 <a href="#" class="btn">add to cart</a>
//             </div>
//     )
// )


//   return (
//     <div>
//         {/* <!-- products section starts  --> */}

// <section class="products" id="products">

//     <h1 class="heading"> our <span>products</span> </h1>

//     <div class="swiper product-slider">

//         <div class="swiper-wrapper">

//             {ShowAllProducts}
           

//         </div>

//     </div>


// </section>

// {/* <!-- products section ends --> */}


//     </div>
//   )
// }

// export default OurProducts