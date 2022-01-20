import {
  FETCH_FAIL,
  FETCH_START,
  FETCH_SUCCESS,
  fetchActivity,
} from "../actions/actions";

const initState = {
  activity: "",
  isFetching: false,
  error: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        activity: "",
        isFetching: true,
        error: "",
      };

    case FETCH_SUCCESS:
      return {
        activity: action.payload.activity,
        isFetching: false,
        error: "",
      };

    case FETCH_FAIL:
      return {
        activity: "",
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
