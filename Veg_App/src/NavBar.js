import React from 'react'

function NavBar({navItems}) {

    const listNavItems = navItems.map(
        (item,index)=>(
            <div className='.navBarcard'>
            <img src={item.image} alt="Nav Image"/>
            <p>{item.item}</p>
            </div>
            
        )
    )
  return (
    <div className='navBar'>
        <h3>This is nav abr </h3>
        {listNavItems}
    </div>
  )
}

export default NavBar