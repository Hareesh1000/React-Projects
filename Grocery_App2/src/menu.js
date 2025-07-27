import React from 'react'
import './App.css'; 
 
function Menu({menuItems}) {


    const menuList = menuItems.map(
      (item,index) => {
        return (
          <div className='menuList' key={index}>
              <p>{item}</p>
          </div>
        );
      }
    );

  //  const menuList = menuItems.map((item, index) => {
  //   return (
  //     <div key={index}>
  //       <p>{item}</p>
  //     </div>
  //   );
  // });

  return (
    <div className="menuSection">
      {menuList}
    </div>
  )
}

export default Menu
