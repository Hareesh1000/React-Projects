import React from 'react'

function Blogs({blockMSG}) {




    const listBlog = blockMSG.map(
        (blog,index)=>(
        <div class="box">
            <img src={blog.image} alt=""/>
            <div class="content">
                <div class="icons">
                    <a href="#"> <i class="fas fa-user"></i> {blog.author}</a>
                    <a href="#"> <i class="fas fa-calendar"></i> {blog.date}</a>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>)
    )
  return (
    <div>

{/* <!-- blogs section starts  --> */}

<section class="blogs" id="blogs">

    <h1 class="heading"> our <span>blogs</span> </h1>

    <div class="box-container">


       {listBlog}

    </div>

</section>

{/* <!-- blogs section ends --> */}
    </div>
  )
}

export default Blogs