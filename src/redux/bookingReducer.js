import { BOOKING, DELETE } from "./actionTypes";

const initialState = {
  data: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
      return { ...state, data: [...state.data, action.payload] };
    case DELETE:
      return { ...state, data: state.data.filter((d) => d.id !== action.payload) };
    default:
      return state;
  }
};

export default bookingReducer;
