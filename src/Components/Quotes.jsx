import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuotes } from "../Redux/Actions";
import Nav from "./Nav";
import './quotes.scss'

const Quotes = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const allQuotes = useSelector((state) => state.quotes);
  const [quote, setQuote] = useState([])

  useEffect(() => {
    dispatch(getAllQuotes(page));
    
  }, [dispatch, page]);

  console.log(allQuotes);

  return (
    <div>
      <Nav />
        <div className="line"></div>
      <div className="cards">
        {allQuotes ? (
          allQuotes.map((e) => {
            return (
              <div className='card'>
                <p className='quote'>{e.quote}</p>
                <p className='author'>~{e.author}</p>
              </div>
            );
          })
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    </div>
  );
};

export default Quotes;
