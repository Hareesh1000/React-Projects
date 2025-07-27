import React from 'react'
import ProductFruits from './data/ProductFruits.json'
import Filters from './Filters'


import FruitCategories from './data/FruitsCategories.json'

function Fruits() {

     {/* Display only first five items in the Home page ------*/}

     const showProductFruits = ProductFruits.map (
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

  return (
<div className='itemSection'>
   
       <Filters filterList={FruitCategories}></Filters>


        <div className='bannerSection'>
 
      {/* Fruits and vegetables section below---------*/}
      <div className='displayProduct'>
        <div className='productRow'>
            <div className='productTitle'>
              <h2>Fruits </h2>
              {/* <a> See More</a> */}
            </div>
            <div className='productList'>

              {showProductFruits}
            </div>
           
        </div> {/*Row end*/}

      </div>

    </div>
    </div>
    
  )
}

export default Fruits