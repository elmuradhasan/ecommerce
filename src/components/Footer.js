import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className='full_w floating'>
       <div className='top_footer_menu full_w floating flex'>
           <h3>Newsletter</h3>
           <form>
            <input type="text" placeholder='Enter Email' />
             <button><i className="fa-solid fa-paper-plane"></i></button>
           </form>
       </div>
       <div className='bootem_footer_menu full_w floating flex'>
          <div className='center'>
            <ul className='full_w floating flex footer_menu_list'>
                <a href='#'>HTML Design</a>
                <a href='#'>WP  Themes</a>
                <a href='#'>CMS Themes</a>
                <a href='#'>eCommerce</a>
                <a href='#'>Blogging</a>
                <a href='#'> UI Templates</a>
            </ul>
          </div>
          <div className='full_w flex abs_fott'>
                <h4>Created by Frontend developer:<b>Elmurad Hasanov</b></h4>
            </div>
       </div>
    </footer> 
    </>
  )
}
