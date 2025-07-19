import React from 'react'

function AllProducts(props) {


    
    // const productList = props.products.map(
    //     (item,index) => ( <div className="swiper-slide box">
    //             <img src={item.image} alt=""/>
    //             <h3>{item.name}</h3>
    //             <div className="price"> {item.price} </div>
    //             <div className="stars">
    //                 <i className="fas fa-star"></i>
    //                 <i className="fas fa-star"></i>
    //                 <i className="fas fa-star"></i>
    //                 <i className="fas fa-star"></i>
    //                 <i className="fas fa-star-half-alt"></i>
                    
    //             </div>
    //             <a href="#" className="btn">add to cart</a>
    //         </div>
    //             ) 
    // );


     const productList = props.products.map(
      (item,index)=>(

       
                <div class="Product_card">
                <img src={item.image} alt=""/>
                <h3>{item.name}</h3>
                <div class="price"> {item.price} </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#" class="btn">add to cart</a>
            </div>
       

      )
     )

  return (
    <div>
        {/* <section className="products" id="products">

    <h1 className="heading"> our <span>products</span> </h1>
    </section>
            <div className="swiper product-slider">
                  <div className="swiper-wrapper">
                        {productList}
                  </div>

            </div> */}

      <section className='allProducts' id='allProducts'>
        <h1 className="heading"> our <span>products</span> </h1>

         <div className="Product_Swipe">
                {/* <div class="Product_card">
                <img src="/assets/image/product-1.png" alt=""/>
                <h3>fresh orange</h3>
                <div class="price"> $4.99/- - 10.99/- </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#" class="btn">add to cart</a>
            </div> */}
        {productList}
         </div>

      </section>
              <div className="Product_Swipe">
                  <div className="Product_wrapper">

            



                  </div>

            </div>

    </div>
  
  )
}

export default AllProducts