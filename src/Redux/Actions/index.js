import axios from "axios";

export function getAllQuotes(page) {
  return async function (dispatch) {
    const json = await axios.get(`/quotes?page=${page}`);
    return dispatch({
      type: "GET_ALL_QUOTES",
      payload: json.data,
    });
  };
}

export function getGenreQuotes(genre) {
  return async function (dispatch) {
    const json = await axios.get(`/quotes/genres/${genre}`);
    return dispatch({
      type: "GET_GENRE_QUOTES",
      payload: json.data,
    });
  };
}

export function searchQuotes(searchKeyword) {
  return async function (dispatch) {
    const json = await axios.get(`/quotes/search/${searchKeyword}`);
    return dispatch({
      type: "SEARCH_QUOTES",
      payload: json.data,
    });
  };
}

export function randomQuote() {
  return async function (dispatch) {
    const json = await axios.get(`/quotes/random`);
    return dispatch({
      type: "GET_RANDOM_QUOTE",
      payload: json.data,
    });
  };
}

export function getAuthorQuotes(authorName) {
  return async function (dispatch) {
    const json = await axios.get(`quotes/authors/${authorName}`);
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
