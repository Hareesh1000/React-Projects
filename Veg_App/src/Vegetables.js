import React from 'react'
import Productveg from './data/productVegetable.json'
import Filters from './Filters'

import VegCategories from './data/VegCategories.json';



function Vegetables() {

    
    
    const showProductveg = Productveg.map (
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

<div className='itemSection'>
   
       <Filters filterList={VegCategories}></Filters>


 <div className='bannerSection'>
 
      {/* Fruits and vegetables section below---------*/}
      <div className='displayProduct'>
        <div className='productRow'>
            <div className='productTitle'>
              <h2> vegetables</h2>
              {/* <a> See More</a> */}
            </div>
            <div className='productList'>

              {showProductveg}
            </div>
           
        </div> {/*Row end*/}

      </div>

    </div>
</div>
       

  )
}

export default Vegetables