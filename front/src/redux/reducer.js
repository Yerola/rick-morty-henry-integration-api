import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER, GET_FAVORITE } from "./actions";
import by from "../imagenes/Yesica_Lato.jpg";

const initialState = {
  myFavorites: [],
  allCharacters: [{ name: "Yesica - Creadora", image: (by) }],
  detail: {},
  details: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case FILTER:
      const copiaAllCharactersFilter = [...state.allCharacters];
      return {
        ...state,
        myFavorites: copiaAllCharactersFilter.filter(
          (fav) => fav.gender === action.payload
        ),
      };
    case GET_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    /*
case ADD_FAVORITE:
      return {
        ...state,
        allCharacters: action.payload,
        myFavorites: action.payload,
      };
    */

    case ORDER:
      const copiaAllCharactersOrder = [...state.allCharacters];
      if (action.payload === "Ascendente") {
        return {
          ...state,
          myFavorites: copiaAllCharactersOrder.sort(
            (elementA, elementB) => elementA.id - elementB.id
          ),
        };
      } else if (action.payload === "Descendente") {
        return {
          ...state,
          myFavorites: copiaAllCharactersOrder.sort(
            (elementA, elementB) => elementB.id - elementA.id
          ),
        };
      } else {
        break;
      }
    default:
      return { ...state };
  }
}
