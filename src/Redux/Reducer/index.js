const initialState = {
  quotes: [],
  quote: {},
  genreQuotes: [],
  authorQuotes: [],
  searchQuotes: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_QUOTES":
      return {
        ...state,
        quotes: action.payload,
      };
    //---------SETTERS---------------------------+
    case "SET_QUOTES":
      return {
        ...state,
        quotes: initialState.quotes,
      };
    case "SET_QUOTE":
      return {
        ...state,
        quote: initialState.quote,
      };
    case "GET_GENRE_QUOTES":
      return {
        ...state,
        quotes: action.payload,
      };
    case "GET_AUTHOR_QUOTES":
      return {
        ...state,
        quotes: action.payload,
      };
    case "SEARCH_QUOTES":
      return {
        ...state,
        quotes: action.payload,
      };
    case "GET_RANDOM_QUOTE":
      return {
        ...state,
        quote: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
