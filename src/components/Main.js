import React, { useContext, useEffect } from "react";
import { AppContext } from "./contextFolder";
import Spinner from "./Spinner/Spinner";
import "./components.css";
import BlogsDetails from "./Pages/BlogsDetails";




const Main = () => {
  const { loading, getPostData, posts } = useContext(AppContext);
  console.log("Posts =>", posts);

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="main">
      {loading ? (
        <div className="spinner">
          {" "}
          <Spinner />{" "}
        </div>
      ) : posts.length == 0 ? (
        <div className="nopost">No Posts</div>
      ) : (
        <div className="post-main">
          {posts.map((post, index) => (
            <BlogsDetails key={post.id || index} post={post}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
