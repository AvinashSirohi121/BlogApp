import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import { useCallback, useContext, useEffect } from "react";
import { AppContext } from "./components/contextFolder";
import Home from "./components/Pages/Home"
import BlogPage from "./components/Pages/Blogpage"
import TagPage from "./components/Pages/Tagpage"
import CategoryPage from "./components/Pages/CategoryPage"

function App() {
const {getPostData} = useContext(AppContext);

  const [searchParams , setSearchParams] = useSearchParams();
  const location = useLocation();



  useEffect(()=>{
    const page = searchParams.get('page') ?? 1;
    if(location.pathname.includes('tags')){
      // if yes then show tags page
      const tag = location.pathname.split('/').at(-1).replace('-'," ");
      getPostData(Number(page),tag);
    }
    else if(location.pathname.includes('categories')){
      const category = location.pathname.split("/").at(-1).replace("-", " ");
       getPostData(Number(page), null, category);
    }
    else{
      getPostData(page);
    }
  },[location.pathname,location.search])
  return (
    // <>
    //   <Header />
    //   <Main />
    //   <Footer />
    // </>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blog/:blogId" element={<BlogPage />}></Route>
      <Route path="/tags/:tag" element={<TagPage />}></Route>
      <Route path="/categories/:category" element={<CategoryPage />}></Route>
    </Routes>
  );
}

export default App;
