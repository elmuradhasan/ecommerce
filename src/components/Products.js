import React, {useEffect, useState} from 'react'
import data from '../data'
import Productone from './Productone';
export default function Products({cart,setcart}) {
  const [limit,setlimit] = useState(106);
  useEffect(() => {

  },
  [limit])

  function viewallitemp(e) {
    setlimit(113);
    e
      .target
      .classList
      .add("none");
  }
  return ( <> <section>
    <div className='product_main floating full_w'>
      <div className='center'>
        <div className='sub_div_products full_w floating'>
          <h2>Featured Products</h2>
          <div className='product_sub_div floating full_w flex'>
            {data[0].featureddata.map((product, index) => {
              if (product.id < limit) {
                return (
                   <Productone product={product} key={index} cart={cart} setcart={setcart}/>
                )
              }
            })
}
          </div>
          <button className='all_button' onClick={viewallitemp}>View all product</button>
        </div>
      </div>
    </div>
  </section> 
  </>
  )
}