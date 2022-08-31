import axios from "axios";

export async function getAllQuotes(page) {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3000/quotes?page=${page}`);
    return dispatch({
      type: "GET_ALL_QUOTES",
      payload: json.data,
    });
  };
}
