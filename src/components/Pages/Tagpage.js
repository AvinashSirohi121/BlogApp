import React from 'react'
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { useLocation, useNavigate } from 'react-router-dom';

const Tagpage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.slice('/').at(-1);
  return (
    <div>
      <Header/>
      <div>
        <button onClick={()=>navigation(-1)}>BACK</button>
        <h3>Blogs Tagged <span>#{tag}</span></h3>
      </div>
      <Main/>
      <Footer/>
      
    </div>
  )
}

export default Tagpage
