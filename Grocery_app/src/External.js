// src/UIEvents.js
import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

export default function UIEvents() {
  useEffect(() => {
    const searchBtn = document.querySelector('#search-btn');
    const cartBtn = document.querySelector('#cart-btn');
    const loginBtn = document.querySelector('#login-btn');
    const menuBtn = document.querySelector('#menu-btn');

    const searchForm = document.querySelector('.search-form');
    const shoppingCart = document.querySelector('.shopping-cart');
    const loginForm = document.querySelector('.login-form');
    const navbar = document.querySelector('.navbar');

    searchBtn.onclick = () => {
      searchForm?.classList.toggle('active');
      shoppingCart?.classList.remove('active');
      loginForm?.classList.remove('active');
      navbar?.classList.remove('active');
    };

    cartBtn.onclick = () => {
      shoppingCart?.classList.toggle('active');
      searchForm?.classList.remove('active');
      loginForm?.classList.remove('active');
      navbar?.classList.remove('active');
    };

    loginBtn.onclick = () => {
      loginForm?.classList.toggle('active');
      searchForm?.classList.remove('active');
      shoppingCart?.classList.remove('active');
      navbar?.classList.remove('active');
    };

    menuBtn.onclick = () => {
      navbar?.classList.toggle('active');
      searchForm?.classList.remove('active');
      shoppingCart?.classList.remove('active');
      loginForm?.classList.remove('active');
    };

    window.onscroll = () => {
      searchForm?.classList.remove('active');
      shoppingCart?.classList.remove('active');
      loginForm?.classList.remove('active');
      navbar?.classList.remove('active');
    };

    new Swiper(".product-slider", {
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1020: { slidesPerView: 3 },
      },
    });

    new Swiper(".review-slider", {
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1020: { slidesPerView: 3 },
      },
    });

  }, []);

  return null;
}
