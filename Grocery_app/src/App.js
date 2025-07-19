import './App.css';
import Header from './Header';
import Home from './Home'
import AllProducts from './AllProducts';
import ProductCategories from './ProductCategories';
import Blogs from './Blogs';
import Review from './Review';
import FooterFinal from './FooterFinal';
import OurProducts from './OurProducts.js';

// import './External.js'
import UIEvents from './External.js';


import products from './data/products.json';
import productCategories from './data/productCategories.json';
import BlogMessage from './data/BlogMessage.json';
import customerReviews from './data/customerReviews.json';

function App() {

// const products = [
//   {
//     "image": "./assets/image/product-1.png",
//     "name": "fresh orange",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-2.png",
//     "name": "fresh onion",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-3.png",
//     "name": "fresh meat",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-4.png",
//     "name": "fresh cabbage",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-5.png",
//     "name": "fresh potato",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-6.png",
//     "name": "fresh avocado",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-7.png",
//     "name": "fresh carrot",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/product-8.png",
//     "name": "green lemon",
//     "price": "$4.99/- - 10.99/-",
//     "rating": 4.5
//   }
// ]


// const productCategories = [
//   {
//     "image": "./assets/image/cat-1.png",
//     "title": "vegitables",
//     "description": "upto 45% off"
//   },
//   {
//     "image": "./assets/image/cat-2.png",
//     "title": "fresh fruits",
//     "description": "upto 45% off"
//   },
//   {
//     "image": "./assets/image/cat-3.png",
//     "title": "dairy products",
//     "description": "upto 45% off"
//   },
//   {
//     "image": "./assets/image/cat-4.png",
//     "title": "fresh meat",
//     "description": "upto 45% off"
//   },
//   {
//     "image": "./assets/image/product-9.png",
//     "title": "see food",
//     "description": "upto 45% off"
//   },
//   {
//     "image": "./assets/image/product-10.jpg",
//     "title": "Fast Food",
//     "description": "upto 45% off"
//   }
// ]


// const BlogMessage = [
//   {
//     "image": "./assets/image/blog-1.jpg",
//     "author": "John",
//     "date": "1st oct, 2021",
//     "title": "fresh and organic vegitables and fruits",
//     "description": "Organica Is Where Early Adopters And Innovation Sockers Find Lively, Imaginative Tech Before It Hits The Mainstream.",
//   },
//   {
//     "image": "./assets/image/blog-2.jpg",
//     "author": "David",
//     "date": "1st oct, 2021",
//     "title": "fresh and organic vegitables and fruits",
//     "description": "Organica Is Where Early Adopters And Innovation Sockers Find Lively, Imaginative Tech Before It Hits The Mainstream.",
//   },
//   {
//     "image": "./assets/image/blog-3.jpg",
//     "author": "Jack",
//     "date": "1st oct, 2021",
//     "title": "fresh and organic vegitables and fruits",
//     "description": "Organica Is Where Early Adopters And Innovation Sockers Find Lively, Imaginative Tech Before It Hits The Mainstream.",
//   }
// ]

// const customerReviews = [
//   {
//     "image": "./assets/image/pic-1.png",
//     "text": "Very good website. All the stuff on this website is absolutely great. You all can buy your stuff from here.",
//     "reviewer": "john",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/pic-2.png",
//     "text": "Very good website. All the stuff on this website is absolutely great. You all can buy your stuff from here.",
//     "reviewer": "Juliyana",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/pic-3.png",
//     "text": "Very good website. All the stuff on this website is absolutely great. You all can buy your stuff from here.",
//     "reviewer": "Jonathon",
//     "rating": 4.5
//   },
//   {
//     "image": "./assets/image/pic-4.png",
//     "text": "Very good website. All the stuff on this website is absolutely great. You all can buy your stuff from here.",
//     "reviewer": "Oliveya",
//     "rating": 4.5
//   }
// ]



  return (
    <div>
        <Header></Header>
        <Home></Home>
        {/* <OurProducts></OurProducts> */}
      <AllProducts products={products}></AllProducts>
        <ProductCategories categories = {productCategories}></ProductCategories>
        <Review reviews={customerReviews}></Review>
        <Blogs blockMSG={BlogMessage}></Blogs>
        <FooterFinal></FooterFinal>
        <UIEvents/>

    </div>
  );
}



export default App;
