import React, { useContext } from "react";
import { AppContext } from "./contextFolder";
import "./components.css";

const Footer = () => {
  const { page, totalPages, pageHandler } = useContext(AppContext);
  console.log("CurrentPage =>", page, " TotalPage =>", totalPages);
  const pagehandlerController = (action) => {
    if (action === "prev") {
      pageHandler(page - 1);
    } else {
      pageHandler(page + 1);
    }
  };
  return (
    <div className="footer ">
      <div className="innerFooter">
        <div className="left ">
          {page > 1 ? (
            <button
              className="Button"
              onClick={() => pagehandlerController("prev")}
            >
              Previous
            </button>
          ) : (
            ""
          )}

          {page < totalPages ? (
            <button
              className="Button"
              onClick={() => pagehandlerController("next")}
            >
              Next
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="right">
          Page - <span className="currentPage page">{page}</span> of{" "}
          <span className="totalPages page">{totalPages}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
