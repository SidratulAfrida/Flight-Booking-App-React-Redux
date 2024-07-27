import { legacy_createStore as createStore } from "redux";
import bookingReducer from "./bookingReducer";

// Create the store with the rootReducer
const store = createStore(bookingReducer);

export default store;
