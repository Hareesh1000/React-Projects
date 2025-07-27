import React from 'react'
import ProductFruits from './data/ProductFruits.json'
import Productveg from './data/productVegetable.json'
import productBakery from './data/productBakery.json'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import navBarItems from './data/navBarItems.json'


function Home() {


  {/* Display only first five items in the Home page ------*/}

  const showProductFruits = ProductFruits.slice(0, 5).map (
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


      const showProductgrocery = productBakery.slice(0, 5).map (
    (item) =>(
<div className='ProductCard'>
                <img src={item.images[0]}></img>
                <div className='productName'>
                  <h2>{item.title} </h2>
                   {/* <p>{item.quantity}kg</p> */}
                </div>
          
                 <p className='productPrice'>₹ {item.price}</p>
                
                 <p className='productDiscount'> {item.brand}</p>
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
    
    <div>
          {/* calling  Navbar Item here------------*/}

          <NavBar navItems={navBarItems}/>

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
              <h2>Fruits</h2>
              <Link to='/fruits'> See More</Link>
            </div>
            <div className='productList'>

              {showProductFruits}
            </div>
           
        </div> {/*Row end*/}

        <div className='productRow'>
            <div className='productTitle'>
              <h2>Vegetables</h2>
              <Link to='/vegetables'> See More</Link>
            </div>
            <div className='productList'>

              {showProductveg}
            </div>
           
        </div> {/*Row end*/}


         <div className='productRow'>
            <div className='productTitle'>
              <h2>Sweet and chocolates</h2>
              <Link to='/sweets'> See More</Link>
            </div>
            <div className='productList'>

              {showProductgrocery}
            </div>
           
        </div> {/*Row end*/}



      </div>
       
    </div>

    </div>
    
    
    
  )
}

export default Home