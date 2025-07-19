import React from 'react'

function ProductCategories({categories}) {

     const listCategories = categories.map(
        (category,index) => (
            
        <div class="box">
            <img src={category.image} alt=""/>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <a href="#" class="btn">shop now</a>
        </div>
        )
     )


  return (
    <div>


        
{/* <!-- categories section starts  --> */}

<section class="categories" id="categories">

    <h1 class="heading"> product <span>categories</span> </h1>

    <div class="box-container">

            {listCategories}
    </div>

</section>

{/* <!-- categories section ends --> */}
    </div>
  )
}

export default ProductCategories