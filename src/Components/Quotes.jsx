import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuotes } from "../Redux/Actions";

const Quotes = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const allQuotes = useSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(getAllQuotes(page));
  }, [dispatch, page]);

  console.log(allQuotes);

  return <div>Quotes</div>;
};

export default Quotes;
