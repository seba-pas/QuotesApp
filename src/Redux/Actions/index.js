import axios from "axios";
const BASE_URL = "http://localhost:3001/quotes";

export function getAllQuotes(page) {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/quotes?page=${page}`);
    return dispatch({
      type: "GET_ALL_QUOTES",
      payload: json.data,
    });
  };
}

export function getGenreQuotes(genre) {
  return async function (dispatch) {
    const json = await axios.get(`${BASE_URL}/genres/${genre}`);
    return dispatch({
      type: "GET_GENRE_QUOTES",
      payload: json.data,
    });
  };
}

export function searchQuotes(searchKeyword) {
  return async function (dispatch) {
    const json = await axios.get(`${BASE_URL}/search/${searchKeyword}`);
    return dispatch({
      type: "SEARCH_QUOTES",
      payload: json.data,
    });
  };
}

export function randomQuote() {
  return async function (dispatch) {
    const json = await axios.get(`${BASE_URL}/random`); 
    return dispatch({
      type: "GET_RANDOM_QUOTE",
      payload: json.data,
    });
  };
}

export function getAuthorQuotes(authorName) {
  return async function (dispatch) {
    const json = await axios.get(`${BASE_URL}/authors/${authorName}`);
    return dispatch({
      type: "GET_AUTHOR_QUOTES",
      payload: json.data,
    });
  };
}

export function setQuotes() {
  return async function (dispatch) {
    return dispatch({
      type: "SET_QUOTES",
    });
  };
}
export function setQuote() {
  return async function (dispatch) {
    return dispatch({
      type: "SET_QUOTE",
    });
  };
}
