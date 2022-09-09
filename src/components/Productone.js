import React, {useState,useEffect} from 'react';
import {Modal} from 'antd';
import { toast,ToastContainer } from 'react-toastify';
export default function Productone({product,cart,setcart}) {
  useEffect(() => {
    localStorage.setItem("cart",JSON.stringify(cart));
  }, [cart])
  const addtocart = (product)=>{
    setcart([...JSON.parse(localStorage.getItem("cart")),product]);
     toast.success("Element added cart");
  }
  const [open,setOpen] = useState(false);
  return ( <>
                   <div className='item_for_product'>
                      <div className='floating'>
                        <img className='item_bg' src={product.image} alt="pr1"/>
                        <div className='preview flex'>
                          <button onClick={()=>setOpen(true)}>Preview</button>
                          <i class="fa-solid fa-cart-shopping" onClick={()=>addtocart(product)}></i>
                        </div>
                      </div>
                      <h3>{product.title}</h3>
                      <div className='floating full_w price_div'>
                        <p>${product.price}</p>
                        <span>{product.spancont}</span>
                      </div>
  <Modal
    title="Product detail modal"
    centered
    open={open}
    onOk={() => setOpen(false)}
    onCancel={() => setOpen(false)}
    width={1000}>
    <div className='open_modal_div'>
    <img  src={product.image} alt="products"/>
    <div className='open_menu_price'>
      <h3><b>Product title: </b> {product.title}</h3>
      <p><b>Product price: </b> ${product.price}</p>
      <span><b>Product sale count: </b>{product.spancont}</span>
    </div>
    <button className='open_add_to' onClick={()=>addtocart(product)}>Add to Cart</button>
    </div>
  </Modal>
  <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
</div>
   </>
  )
}
