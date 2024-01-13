import React, { useContext, useEffect, useState } from 'react'
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import {  useLocation, useNavigate, } from 'react-router-dom';
import { AppContext } from '../contextFolder';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import BlogsDetails from './BlogsDetails';
import '../components.css'

const Blogpage = () => {

  const {loading,setLoading} = useContext(AppContext);
  const [blog,setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate()
  const blogId = location.pathname.split('/').at(-1);
  const { theme } = useContext(AppContext);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let URL = "https://codehelp-apis.vercel.app/api/get-blog";
    let url = `${URL}?blogId=${blogId}`
    try{
      await axios(url)
      .then((res)=>{
        console.log("Res =>",res);
        setBlog(res.data.blog);
        setRelatedBlog(res.data.relatedBlogs);

 
      })

    }catch(e){
      console.log("Error in BlogId call")
      setBlog(null)
      setRelatedBlog([]);
      
    }
    setLoading(false); 
  }

  useEffect(()=>{
      if(blogId) fetchRelatedBlogs();
  },[location.pathname])

  return (
    <>
      <Header />
      <div className={theme == false ? "bg-[#e3e1e1]" : "bg-[#6d6d6d]"}>
        <div className="blogpage">
          <button className="backButton" onClick={() => navigation(-1)}>
            BACK
          </button>
          {loading ? (
            <div className="blogPageSpinner">
              <Spinner />
            </div>
          ) : blog ? (
            <div className="w-11/12 mx-auto mt-[50px]">
              <BlogsDetails post={blog} />
              <h2 className='relatedBlog'>Related Blogs</h2>
              <div className="mt-[10px]">
                {relatedBlog.map((post, index) => (
                  <div className="mt-[10px]" key={post.id || index}>
                    <BlogsDetails post={post} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>No Blog Found</div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blogpage
