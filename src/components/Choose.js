import React from 'react'

export default function Choose() {
  return ( <> 
  <section>
    <div className='choose_us_main floating full_w'>
      <div className='center'>
        <div className='sub_div_choose full_w floating'>
          <h2>Why Choose Us</h2>
          <div className='sub_item_main_div floating full_w flex'>
            <div className='choose_item_div first'>
              <b  className='flex'><i class="fa-solid fa-file"></i></b>
              <h3>Well Documentation</h3>
              <p className='first_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor ornare in mattis.</p>
            </div>
            <div className='choose_item_div'>
              <b  className='flex'><i class="fa-solid fa-comments"></i></b>
              <h3>Live Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor ornare in mattis.</p>
            </div>
            <div className='choose_item_div'>
              <b  className='flex'><i class="fa-solid fa-layer-group"></i></b>
              <h3>Free Resource</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor ornare in mattis.</p>
            </div>
            <div className='choose_item_div'>
             <b className='flex'><i class="fa-solid fa-recycle"></i></b>
              <h3>Regular Update</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor ornare in mattis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
  </>
  )
}