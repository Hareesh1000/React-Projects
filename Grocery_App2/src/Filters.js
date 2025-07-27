import React from 'react';
// import VegCategories from './data/VegCategories.json';

function Filters({filterList}) {

  const vegetableCategories = filterList[0];

  
  const showVegFilter = Object.keys(vegetableCategories).map((element) => (
    <div className='categoryList' key={element}>
      <h3>{element}</h3>
      <ul>
        {vegetableCategories[element].map((item, index) => (
          <li key={index}><a>{item}</a></li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className='filterSection'>
      <h2>Shop by Category</h2>
      {showVegFilter}
      {/* {console.log(showVegFilter)} */}
    </div>
  );
}

export default Filters;
