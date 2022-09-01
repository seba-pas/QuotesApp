import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./Nav";
import { TbRefresh } from "react-icons/tb";
import { MdNavigateNext } from "react-icons/md";
import { randomQuote } from "../Redux/Actions";
import { useHistory } from "react-router-dom";
import "./random.scss";
import Footer from "./Footer";
import { PuffLoader } from "react-spinners";
import { RiFileCopyLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Random = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);
  const history = useHistory();

  useEffect(() => {
    dispatch(randomQuote());
  }, [dispatch]);

  function randomHandler(e) {
    e.preventDefault();
    dispatch(randomQuote());
  }

  function copyText(text) {
    navigator.clipboard.writeText(text);
    toast.info("Copied to clipboard");
  }

  return (
    <div>
      <Nav />
      <button className="next_random" onClick={() => history.push("/")}>
        All
        <MdNavigateNext />
      </button>
      <button className="next_random" onClick={(e) => randomHandler(e)}>
        <TbRefresh />
        Random
      </button>
      <div className="line_random"></div>
      <div className="cards_random">
        {quote.author ? (
          <div className="card_random">
            <p className="quote_random">{quote.quote}</p>
            <p className="author_random">~{quote.author}</p>
            <button
              className="copy_random"
              onClick={() => copyText(`${quote.quote} ~${quote.author}`)}
            >
              <RiFileCopyLine />
            </button>
          </div>
        ) : (
          <div className="spinner_random">
            <PuffLoader speedMultiplier={1.2} />
          </div>
        )}
        <div style={{ position: "relative", marginTop: "3rem" }}>
          <Footer />
        </div>
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
  );
};

export default Random;
