import { DELETE_FAVORITE, ADD_FAVORITE, FILTER, ORDER } from "./actionTypes";
import axios from 'axios';


export function addFavorite(fav) {
  return async function (dispatch) {
    try {
      let chart = await axios.post('http://localhost:3001/rickandmorty/fav', fav);
      dispatch({
        type: ADD_FAVORITE,
        payload: chart.data
      });
    } catch (error) {
      console.log("error")
    }
  };
}

export const deleteFavorite = (id) => {
  return async function (dispatch) {
    try {
      const chartDelete = await axios
        .delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      console.log(chartDelete.data)
      return dispatch({
        type: DELETE_FAVORITE,
        payload: id,
      });
    } catch (error) {
      console.log("error")
    }
  };
};

export function filterCards(status) {
  return {
    type: FILTER,
    payload: status
  };
};

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id
  };
};

export function getFavorites() {
  return async function (dispatch) {
    try {
      const character = await axios.get(`http://localhost:3001/rickandmorty/fav`)
      return dispatch({
        type: "GET_FAVORITE",
        payload: character.data
      });
    } catch (error) {
      console.log(error);
    };
  };
};

