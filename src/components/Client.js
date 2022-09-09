import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Client() {
  return ( 
  <> 
  <section>
    <div className='client_main floating full_w'>
      <div className='center'>
        <div className='sub_div_products full_w floating'>
          <h2>What Our Clients Say</h2>
          <div className='product_sub_div floating full_w flex'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{
              clickable: true
            }}
              scrollbar={{
              draggable: true
            }}
             >
              <SwiperSlide>
                <div className='item_for_client'>
                  <i class="fa-solid fa-quote-right"></i>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu
                    vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.</p>
                  <h3>Cameron Williamson</h3>
                  <span>CEO, Founder</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='item_for_client'>
                  <i class="fa-solid fa-quote-right"></i>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu
                    vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.</p>
                  <h3>Guy Hawkins</h3>
                  <span>CEO, Founder</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='item_for_client'>
                <i class="fa-solid fa-quote-right"></i>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu
                    vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.</p>
                  <h3>Guy Hawkins</h3>
                  <span>CEO, Founder</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='item_for_client'>
                  <i class="fa-solid fa-quote-right"></i>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu
                    vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.</p>
                  <h3>Guy Hawkins</h3>
                  <span>CEO, Founder</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='item_for_client'>
                <i class="fa-solid fa-quote-right"></i>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu
                    vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.</p>
                  <h3>Guy Hawkins</h3>
                  <span>CEO, Founder</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='item_for_client'>
                <i class="fa-solid fa-quote-right"></i>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu
                    vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.</p>
                  <h3>Guy Hawkins</h3>
                  <span>CEO, Founder</span>
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