import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import All from "./style/All.css";
import responsive from "./style/responsive.css";
import Choose from './components/Choose';
import Products from './components/Products';
import Footer from './components/Footer';
import Allproduct from './components/Allproduct';
import News from './components/News';
import Client from './components/Client';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [cart, setcart] = useState(JSON.parse(localStorage.getItem("cart")) === null   ? [] : JSON.parse(localStorage.getItem("cart")));
  useEffect(() => {

  },[cart])
  return (
    <>
      <main className='floating full_w'>
      <Header cart={cart} setcart={setcart} />
       <Choose/>
       <Products cart={cart} setcart={setcart} />
       <Allproduct cart={cart} setcart={setcart}/>
       <Client/>
       <News />
      </main>
      <Footer/>
    </>
  );
}
export default App;
