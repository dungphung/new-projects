import { combineReducers } from "redux";
import TodoReducer from "./todoReducer";
import WeatherReducer from "./weatherReducer";

export default combineReducers({
  TodoReducer,
  WeatherReducer
});
