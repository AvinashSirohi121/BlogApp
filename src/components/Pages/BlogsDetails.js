import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../contextFolder";

const BlogsDetails = ({ post }) => {
  const { theme } = useContext(AppContext);
  return (
    <div className="post">
      <NavLink to={`/blog/${post.id}`}>
        <span className="postTitle">{post.title}</span>
      </NavLink>

      <p className="postDesc">
        By <span className="postAuthor">{post.author}</span> on {""}
        <NavLink
          className="postCategory"
          to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          {post.category}
        </NavLink>
      </p>

      <p>
        Posted on <span className="postDate">{post.date}</span>
      </p>
      <p className="postContent">{post.content}</p>
      <div className="tags">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="postTags">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>

    // <div>
    //   <div className="post-main">
    //     {posts.map((post, index) => (
    //       <div className="post" key={post.id}>
    //          <p className="postTitle">{post.title}</p>
    //         <p className="postDesc">
    //           By <span className="postAuthor">{post.author}</span> on{" "}
    //           <span className="postCategory">{post.category}</span>
    //         </p>
    //         <p>
    //           Posted on <span className="postDate">{post.date}</span>
    //         </p>
    //         <p className="postContent">{post.content}</p>
    //         <div className="tags">
    //           {/* {post.tags.map((tag, index) => (
    //             <div className="postTags" key={index}>
    //               <a href="#">#{tag}</a>
    //             </div>
    //           ))} */}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default BlogsDetails;
