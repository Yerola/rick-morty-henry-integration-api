import { DELETE_FAVORITE, ADD_FAVORITE, FILTER, ORDER } from "./actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
        myFavorites: [...state.allCharacters, payload],
      };
    case DELETE_FAVORITE:
      const filtered = state.myFavorites.filter((fav) => fav.id !== payload);
      return {
        ...state,
        allCharacters: filtered,
        myFavorites: filtered
      };
    case FILTER:
      const filterCopy = [...state.allCharacters];
      const filterGender = filterCopy.filter((char) => char.gender === payload);
      return {
        ...state,
        myFavorites: filterGender,
      };

    case ORDER:
      const copiaAllCharactersOrder = [...state.allCharacters];
      if (payload === "Ascendente") {
        return {
          ...state,
          myFavorites: copiaAllCharactersOrder.sort(
            (elementA, elementB) => elementA.id - elementB.id
          ),
        };
      } else if (payload === "Descendente") {
        return {
          ...state,
          myFavorites: copiaAllCharactersOrder.sort(
            (elementA, elementB) => elementB.id - elementA.id
          ),
        };
      } else {
        break;
      }

    case "GET_FAVORITE":
      return {
        ...state,
        myFavorites: payload
      };
    default:
      return { ...state };// revisar
  };
};

export default rootReducer;


