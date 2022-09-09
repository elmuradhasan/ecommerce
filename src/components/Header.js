import React,{useState,useEffect}from 'react';
import { Badge,Modal } from 'antd'
import bg from '../images/Ellipse.jpg';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
export default function Header({cart}) {
  const [open, setOpen] = useState(false);
  return (
    <>
       <header className='full_w floating'>
       <div className="header_main_div full_w floating">
         <img src={bg} alt="bg" className='absolute_foto'/>
         <div className='center'>
                 <div className='bucket_and_sing floating flex'>
                  <div className='logo flex'>
                       <p className='flex'>DS</p>
                       <h2>DigiSell</h2>
                       <div className='category flex'><i class="fa-solid fa-layer-group"></i> Categories <i class="fa-sharp fa-solid fa-caret-down"></i></div>
                  </div>
                  <div className='signin_sub floating flex'>
                    <a href='javascript:void(0)' ><i class="fa-solid fa-heart"></i></a> 
                    <a href='javascript:void(0)'  onClick={()=>setOpen(true)}>
                       <Badge count={cart.length}>
                          <i class="fa-solid fa-cart-shopping"></i>    
                       </Badge></a> 
                    <a href='#'><i class="fa-solid fa-user"></i>Sign in</a>  
                  </div>
                 </div>
                 <div className='plugins floating full_w flex'>
                     <div className='head_lorem_div'>
                     <h1>
                       World Top <b>Themes,<br />Plugins & Templates</b> 
                     </h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean in dolor. Praesent mi velit in id hac platea leo vulputate.</p>
                     <form className='form_user'>
                       <input type="text" placeholder='Enter your email' />
                        <button>Search</button>
                     </form>
                     </div>
              
                   <div className='abs_image_group floating '>
                     <img src={image2} className="image1" alt="one"/>
                     <img src={image3} className="image2" alt="one"/>
                     <img src={image6} className="image3" alt="one"/>
                     <img src={image7} className="image4" alt="one"/>
                     <img src={image8} className="image5" alt="one"/>
                   </div>
                 </div>
              </div>
              <Modal
    title="Shopping Cart"
    centered
    open={open}
    onOk={() => setOpen(false)}
    onCancel={() => setOpen(false)}
    width={1000}>
      {
        cart.length > 0  ? cart.map((element,index)=>{
          return (
            <div className='open_modal_div'>
            <div className='cart_div_open'>
              <img src={element.image} alt="cartphoto"/>
              <h3><b>Product title: </b>{element.title}</h3>
              <p><b>Product price: </b>{element.price}</p>
              <span><b>Product sale count: </b>{element.spancont}</span>
              <span><b>Product  count: </b>{element.count}</span>
            </div>
            </div>
          )
        }) : "Cart is empty"
      }
   
  </Modal>
         </div>
       </header>
    </>
  )
}
