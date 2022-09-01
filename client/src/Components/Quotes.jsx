import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuotes } from "../Redux/Actions";
import Nav from "./Nav";
import "./quotes.scss";
import { MdNavigateNext } from "react-icons/md";
import { TbRefresh } from "react-icons/tb";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import { PuffLoader } from "react-spinners";
import { RiFileCopyLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quotes = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const allQuotes = useSelector((state) => state.quotes);

  const history = useHistory();

  useEffect(() => {
    dispatch(getAllQuotes(page));
  }, [dispatch, page]);

  function copyText(text) {
    navigator.clipboard.writeText(text);
    toast.info("Copied to clipboard");
  }

  return (
    <div>
      <div>
        <Nav />
        <button className="next" onClick={() => setPage(page + 1)}>
          Next
          <MdNavigateNext />
        </button>
        <button className="next" onClick={() => history.push("/random")}>
          <TbRefresh />
          Random
        </button>

        <div className="line"></div>
        <div className="cards">
          {allQuotes[0]?.quote ? (
            allQuotes.map((e) => {
              return (
                <div key={e.id} className="card">
                  <p  className="quote">{e.quote}</p>
                  <p className="author">{e.author}</p>
                  <button className="copy" onClick={() => copyText(`${e.quote} ~${e.author}`)}>
                    <RiFileCopyLine />
                  </button>
                </div>
              );
            })
          ) : (
            <div className="spinner">
              <PuffLoader speedMultiplier={1.2} size={80} />
            </div>
          )}
          <div style={{ marginTop: "3rem" }}>
            <Footer />
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default Quotes;
