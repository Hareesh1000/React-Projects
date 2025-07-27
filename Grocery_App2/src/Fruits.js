import React, { useEffect, useState } from 'react'
import ProductFruits from './data/ProductFruits.json'
import Filters from './Filters'


import FruitCategories from './data/FruitsCategories.json'

function Fruits() {

    const [addBtnState, setBtnState] = useState([]);

    const [changeCount, setChangeCount] = useState(0);
     


    const showitemCountButton = (itemName) => {
      setBtnState(
        (prevState) => { return [...prevState,itemName]}
      )

       setChangeCount(changeCount +1);
      
    }

    const addRemoveItem = (itemState,itemName) => {

      if (itemState =='INCREMENT'){
        setChangeCount(changeCount +1);
      }

      else if (itemState == 'DECREMENT') {
        setChangeCount(changeCount-1);
      }

    }
    // useEffect(  
    //   ()=>{
    //     if (setChangeCount ==0) {
    //        setChangeCount(changeCount +1);
    //     }
    //   },[setChangeCount]
    // )

//     const showitemCountButton = (item) => {
//   const add_buttons = document.getElementById(item);
//       console.log(item)
//       setBtnState('Added')
//       console.log(addBtnState);
//     //  add_buttons.style.display = 'none';

// }

    
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
                  {addBtnState.includes(item.name) && changeCount >0 ? <div className='itemCountButton'> 
                                          <button onClick={()=>{addRemoveItem('DECREMENT',item.name)}}> -</button>
                                          <p>{changeCount}</p>
                                           <button onClick={()=>{addRemoveItem('INCREMENT',item.name)}}> +</button>
                                        </div>
                                        :   
                  <button className='add_button' id={item.name} onClick={()=>{showitemCountButton(item.name)}}>Add</button>

}
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