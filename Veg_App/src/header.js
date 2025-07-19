import React from 'react'

function Header() {
  return (
    <div className='headerSection'>
        <h2> Veggiee</h2>
        <div className='headerSearch'>
            <a href='#'> select location</a>
            <input type='text' name='Search' placeholder='Search'></input>
            
        </div>
         <div className='headerIcons'>
               <i id ="loginUser"className="fas fa-user"></i>
              <i id="shoppingCart"class="fa-solid fa-cart-shopping"></i>
             </div>
        
    </div>
  )
}

export default Header