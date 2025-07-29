import React from 'react';
// import VegCategories from './data/VegCategories.json';

function Filters({filterList}) {

  const productCategories = filterList[0];

  
  const showProductFilter = Object.keys(productCategories).map((element) => (
    <div className='categoryList' key={element}>
      <h3>{element}</h3>
      <ul>
        {productCategories[element].map((item, index) => (
          <li key={index}><a>{item}</a></li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className='filterSection'>
      <h2>Shop by Category</h2>
      {showProductFilter}
      {/* {console.log(showProductFilter)} */}
    </div>
  );
}

export default Filters;
