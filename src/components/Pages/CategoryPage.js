import React from 'react'
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.slice('/').at(-1).replace("-"," ");
  return (
    <>
    <Header/>
    <div>
      <button onClick={()=>navigation(-1)}>BACK</button>
      <h3>Blogs on <span>#{category}</span></h3>
    </div>
    <Main/>
    <Footer/>
    </>
  )
}

export default CategoryPage
