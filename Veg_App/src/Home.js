import React from 'react'
import ProductFruits from './data/ProductFruits.json'
import Productveg from './data/productVegetable.json'

function Home() {


  {/* Display only first five items in the Home page ------*/}

  const showProductList = ProductFruits.slice(0, 5).map (
    (item) =>(
<div className='ProductCard'>
                <img src={item.url}></img>
                <div className='productName'>
                  <h2>{item.name} </h2>
                   <p>{item.weight}kg</p>
                </div>
          
                 <p className='productPrice'>₹ {item.price}</p>
                
                 <p className='productDiscount'> save ₹{item.discount}</p>
                 {/* <div className='rating'>
                      <i class="fa-solid fa-star"></i><p> 4.5(125)</p>
                 </div> */}
                 <div className='addSection'>
                  
                  <i class="fa-regular fa-bookmark"></i>
                  <button className='add_button'>Add</button>
                 </div>
                  
               </div>
    )
  )

    const showProductveg = Productveg.slice(0, 5).map (
    (item) =>(
<div className='ProductCard'>
                <img src={item.photo_url}></img>
                <div className='productName'>
                  <h2>{item.name} </h2>
                   <p>{item.quantity}kg</p>
                </div>
          
                 <p className='productPrice'>₹ {item.price}</p>
                
                 <p className='productDiscount'> save ₹{item.discount}</p>
                 {/* <div className='rating'>
                      <i class="fa-solid fa-star"></i><p> 4.5(125)</p>
                 </div> */}
                 <div className='addSection'>
                  
                  <i class="fa-regular fa-bookmark"></i>
                  <button className='add_button'>Add</button>
                 </div>
                  
               </div>
    )
  )
  return (
    <div className='bannerSection'>
      {/* <div className='banner'>
          <img src='./assets/images/Rice-atta.png' id='advertisement'></img>
           <img src='./assets/images/fresh_bites.png'></img>
      <img src='./assets/images/protobs-adv.png'></img>
      </div> */}


      {/* Fruits and vegetables section below---------*/}
      <div className='displayProduct'>
        <div className='productRow'>
            <div className='productTitle'>
              <h2>Fruits and vegetables</h2>
              <a> See More</a>
            </div>
            <div className='productList'>

              {showProductList}
            </div>
           
        </div> {/*Row end*/}

        <div className='productRow'>
            <div className='productTitle'>
              <h2>Fruits and vegetables</h2>
              <a> See More</a>
            </div>
            <div className='productList'>

              {showProductveg}
            </div>
           
        </div> {/*Row end*/}



      </div>

    </div>
  )
}

export default Home