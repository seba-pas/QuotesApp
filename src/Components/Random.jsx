import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./Nav";
import { TbRefresh } from "react-icons/tb";
import { MdNavigateNext } from "react-icons/md";
import { randomQuote } from "../Redux/Actions";
import { useHistory } from "react-router-dom";
import './random.scss'
import Footer from "./Footer";

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
  console.log(quote);

  return (
    <div>
      <Nav />
      <button className="next_random" onClick={() => history.push("/")}>
        All Quotes
        <MdNavigateNext />
      </button>
      <button className="next_random" onClick={(e) => randomHandler(e)}>
        <TbRefresh />
        Random
      </button>
      <div className="line_random"></div>
      <div className="cards_random">
        {quote ? (
          <div className="card_random">
            <p className="quote_random">{quote.quote}</p>
            <p className="author_random">~{quote.author}</p>
          </div>
        ) : (
          <h1>Loading ...</h1>
        )}
<Footer />
      </div>
      
     
    </div>
  );
};

export default Random;
