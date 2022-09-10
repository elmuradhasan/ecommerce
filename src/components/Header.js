import React, {useState, useEffect} from 'react';
import {Badge, Modal} from 'antd'
import bg from '../images/Ellipse.jpg';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import {toast} from 'react-toastify';
import {Drawer} from 'antd';

export default function Header({cart, setcart}) {
  const [menum,
    setmenum] = useState(false);
  const showDrawer = () => {
    setmenum(true);
  };

  const onClose = () => {
    setmenum(false);
  };

  const deletecartitem = (cur_id) => {
    if (window.confirm("Delete product in cart?")) {
      var updatecart = cart.filter((cartitem, index) => {
        return cartitem.id !== cur_id;
      });
      setcart(updatecart);
      toast.error("Product success delete cart")
    }
  }
  const [open,
    setOpen] = useState(false);
  return ( <> <header className='full_w floating'>
    <div className="header_main_div full_w floating">
      <img src={bg} alt="bg" className='absolute_foto'/>
      <div className='center'>
        <div className='bucket_and_sing floating flex'>
          <div className='logo flex'>
            <p className='flex'>DS</p>
            <h2>DigiSell</h2>
            <div className='category flex'>
              <i className="fa-solid fa-layer-group"></i>
              Categories
              <i className="fa-sharp fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className='signin_sub floating flex'>
            <a href='#' className='link_r_margin mobile_none'>
              <i className="fa-solid fa-heart"></i>
            </a>
            <a href='#' onClick={() => setOpen(true)} className="link_r_margin">
              <Badge count={cart.length}>
                <i className="fa-solid fa-cart-shopping"></i>
              </Badge>
            </a>
            <a href='#' className='mobile_none'>
              <i className="fa-solid fa-user"></i>Sign in</a>
            <a href='#' className='mobile_icon_h' onClick={showDrawer}>
              <i className="fa-solid fa-bars"></i>
            </a>
          </div>
        </div>
        <Drawer title="Mobile menu" placement="left" onClose={onClose} open={menum}>
          <div className='mebile_menu_left'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>News</a>
            <a href='#'>Client idea</a>
            <a href='#'>Contact me</a>
            <a href='#'>Elmurad Hasanov</a>
          </div>
        </Drawer>
        <div className='plugins floating full_w flex'>
          <div className='head_lorem_div'>
            <h1>
              World Top
              <b>Themes,<br/>Plugins & Templates</b>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies
              habitant eget volutpat ut aenean in dolor. Praesent mi velit in id hac platea
              leo vulputate.</p>
            <form className='form_user'>
              <input type="text" placeholder='Enter your email'/>
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
        <div className='tablescart'>
          <div className='little_div'>
            <p>Product image</p>
            <p>Product title</p>
            <p>Product price</p>
            <p>Product sale count:</p>
            <p>Product count:
            </p>
            <p>Delete product:
            </p>
          </div>
          <div className='full_adds_div'>
            {cart.length > 0
              ? cart.map((element, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className='cart_div_open'>
                      <p><img src={element.image} alt="cartphoto"/></p>
                      <h3>{element.title}</h3>
                      <p>${element.price}</p>
                      <p>{element.spancont}</p>
                      <p>
                        <span>{element.count}
                          item</span>
                      </p>
                      <p>
                        <i className="fa-solid fa-trash" onClick={() => deletecartitem(element.id)}></i>
                      </p>
                    </div>
                  </React.Fragment>
                )
              })
              : <div className='cart_div_open emptys_Div'>
                <h3>Cart is empty</h3>
              </div>
}
          </div>
        </div>
      </Modal>
    </div>
  </header> 
  </>
  )
}