import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    posts,
    setPosts,
    totalPages,
    setTotalPages,
    getPostData,
    pageHandler,
    theme,
    setTheme,
    toggleTheme,
  };

  async function getPostData(page = 1, tag = null, category) {
    setLoading(true);

    const url = "https://codehelp-apis.vercel.app/api/get-blogs";
    let URL = `${url}?page=${page}`;
    if (tag) {
      URL += `&tag=${tag}`;
    }
    if (category) {
      URL += `&category=${category}`;
    }
    await axios(URL)
      .then((res) => {
        //console.log("Response =>>", res);
        setPosts(res.data.posts);
        setPage(res.data.page);
        setTotalPages(res.data.totalPages);
      })
      .catch((e) => {
        console.log("Error =>", e);
        setPosts([]);
        setPage(1);
        setTotalPages(null);
      });
    setLoading(false);
  }

  function pageHandler(page) {
    setPage(page);
    navigate({ search: `page=${page}` });
    getPostData(page);
  }

  function toggleTheme(theme) {
    // false means  light theme
    setTheme(!theme);
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
