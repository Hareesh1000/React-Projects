import React from 'react'

function NavBar({navItems}) {

    const listNavItems = navItems.map(
        (item,index)=>(
            <div className='navBarcard'>
           <div className='imageDiv'>
             <img src={item.image} alt="Nav Image"/>
           </div>
            <p>{item.item}</p>
            </div>
            
        )
    )
  return (
    <div className='navBar'>
   
        {listNavItems}
    </div>
  )
}

export default NavBar