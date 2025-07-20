import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='headerSection'>
       <Link to='/'> <h2> ZippyCart</h2></Link>
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