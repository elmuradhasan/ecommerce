import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import news from "../images/news.png"
export default function News() {
  return ( <> 
  <section>
    <div className='news_main floating full_w'>
      <div className='center'>
        <div className='sub_div_products full_w floating'>
          <h2>Latest News</h2>
           <div className='product_sub_div floating full_w flex'>
           <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
    >
      <SwiperSlide>
      <div className='item_for_news'>
                  <img className='item_bg' src={news} alt="newsp"/>
                  <div className="full_w floating date_news">
                    <span><i className="fa-solid fa-clock"></i>05, July, 2021</span>
                    <span><i className="fa-solid fa-user"></i>Cristofer Westervelt</span>
                  </div>
                  <h3>We Start Selling WordPress Themes Soon</h3>
               </div>
               <div className='item_for_news two'>
                  <img className='item_bg' src={news} alt="newsp"/>
                  <div className="full_w floating date_news">
                    <span><i className="fa-solid fa-clock"></i>05, July, 2021</span>
                    <span><i className="fa-solid fa-user"></i>Cristofer Westervelt</span>
                  </div>
                  <h3>We Start Selling WordPress Themes Soon</h3>
               </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='item_for_news'>
                  <img className='item_bg' src={news} alt="newsphoto"/>
                  <div className="full_w floating date_news">
                    <span><i className="fa-solid fa-clock"></i>05, July, 2021</span>
                    <span><i className="fa-solid fa-user"></i>Cristofer Westervelt</span>
                  </div>
                  <h3>We Start Selling WordPress Themes Soon</h3>
               </div>
               <div className='item_for_news two'>
                  <img className='item_bg' src={news} alt="newsp"/>
                  <div className="full_w floating date_news">
                    <span><i className="fa-solid fa-clock"></i>05, July, 2021</span>
                    <span><i className="fa-solid fa-user"></i>Cristofer Westervelt</span>
                  </div>
                  <h3>We Start Selling WordPress Themes Soon</h3>
               </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='item_for_news'>
                  <img className='item_bg' src={news} alt="newsphoto"/>
                  <div className='full_w floating date_news'>
                    <span><i className="fa-solid fa-clock"></i>05, July, 2021</span>
                    <span><i className="fa-solid fa-user"></i>Cristofer Westervelt</span>
                  </div>
                  <h3>We Start Selling WordPress Themes Soon</h3>
               </div>
               <div className='item_for_news two'>
                  <img className='item_bg' src={news} alt="newsp"/>
                  <div className="full_w floating date_news">
                    <span><i className="fa-solid fa-clock"></i>05, July, 2021</span>
                    <span><i className="fa-solid fa-user"></i>Cristofer Westervelt</span>
                  </div>
                  <h3>We Start Selling WordPress Themes Soon</h3>
               </div>
      </SwiperSlide>
    </Swiper>
               
              
          </div> 
 
        </div>
      </div>
    </div>
  </section> 
  </>
  )
}