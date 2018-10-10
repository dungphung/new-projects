import axios from "axios";
import { constants } from "../../utils";

export const GET_WEATHER = "weather/get-weather";
export const SET_WEATHER = "weather/set-weather";

export function setWeather(data) {
  return {
    type: SET_WEATHER,
    payload: data
  };
}

export function getWeather(city) {
  return dispatch => {
    console.log(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&id=524901&APPID=${constants.WEATHER_API}`);
    axios
      .get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&id=524901&APPID=${constants.WEATHER_API}`)
      .then(response => {
        console.log(response);

        return response.data.list;
      })
      .then(data => {
        dispatch(setWeather(data));
      })
      .catch(e => {
        console.log(e);
        dispatch(setWeather([]));
      });
  };
}
