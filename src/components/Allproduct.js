import React ,{useEffect, useState}from 'react'
import data from "../data";
import ProductItem from './ProductItem';
export default function Allproduct({cart,setcart}) {
  const [limit, setlimit] = useState(9);
useEffect(() => {

}, [limit])


function viewallitem(e){
  setlimit(13);
  e.target.classList.add("none");
}
  return ( 
  <> 
  <section>
    <div className='all_product_main floating full_w'>
      <div className='center'>
        <div className='allsub_div_products full_w floating flex'>
          <h2 className='lets_check_head'>Let’s Check Out News Product Theme Templates & Plugin</h2>
          <div className='category_div_product full_w floating flex'>
               <p className='activec'>All categories</p>
               <p>HTML Design</p>
               <p>WP  Themes</p>
               <p>CMS Themes</p>
               <p>eCommerce</p>
               <p >Blogging</p>
               <p>UI Templates</p>
          </div>
          <div className='allproduct_sub_div floating full_w flex'>
          {data[0]
      .alldata
      .map((product, index) => {
        if (product.id < limit) {
          return (
            <ProductItem product={product} key={index} cart={cart} setcart={setcart}/>
          )
        }
      })
}
          </div>
          
          <button className='all_button' onClick={viewallitem}>View all product</button>
        </div>
      </div>
    </div>
  </section> 
  </>
  )
}