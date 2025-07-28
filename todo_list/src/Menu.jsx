import React from 'react'

function Menu() {
  return (
    <div className='menuSection'>

        <div className='userName'>
            <p>MY TODO LIST</p>

      </div>
            <div className='menuList'>
                <ul>
                <li><a>My Day</a></li>
                <li><a>Starred</a></li>
                <li><a>Completed</a></li>
                <li><a>Plan</a></li>
            </ul>
            </div>
      

    </div>
  )
}

export default Menu