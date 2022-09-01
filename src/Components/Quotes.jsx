import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuotes } from "../Redux/Actions";
import Nav from "./Nav";
import "./quotes.scss";
import { MdNavigateNext } from "react-icons/md";
import { TbRefresh } from "react-icons/tb";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

const Quotes = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const allQuotes = useSelector((state) => state.quotes);

  const history = useHistory();

  useEffect(() => {
    dispatch(getAllQuotes(page));
  }, [dispatch, page]);

  console.log(allQuotes);

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
          {allQuotes ? (
            allQuotes.map((e) => {
              return (
                <div className="card">
                  <p className="quote">{e.quote}</p>
                  <p className="author">{e.author}</p>
                </div>
              );
            })
          ) : (
            <h1>Loading ...</h1>
          )}

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Quotes;
