import { SET_WEATHER } from "../actions/weatherAction";
import update from "react-addons-update";

const initialState = {
  weather: null
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WEATHER:
      return setWeather(state, action);
    default:
      return state;
  }
}

export function setWeather(state, { payload }) {
  return update(state, {
    weather: { $set: payload }
  });
}
