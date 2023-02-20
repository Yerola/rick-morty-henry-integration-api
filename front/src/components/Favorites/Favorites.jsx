import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Cards from "../Cards/Cards";
import { orderCards, filterCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./Favorites.module.css";

const Favorites = ({ myFavorites }) => {
  const [favs, setFavs] = React.useState([])
  React.useEffect(() => {
    setFavs(myFavorites,)

  }, [myFavorites])

  const dispatch = useDispatch();
  //   const onClose = (character) => {
  //     setCharacters((characters) =>
  //       characters.filter((element) => element.id !== character)
  //     );
  //   };
  const handleDispatch = (e) => {
    if (e.target.value === "Ascendente" || e.target.value === "Descendente") {
      dispatch(orderCards(e.target.value));
    } else {
      dispatch(filterCards(e.target.value));
    }
  };
  <center><button className={styles.boton}>VOLVER</button></center>
  return (
    <div>
      <div>
        <select onChange={handleDispatch}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleDispatch}>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Genderless">Sin género</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>
      {favs?.map(fav => (
        <Cards
          name={fav.name}
          id={fav.id}
          key={fav.id}
          gender={fav.gender}
          image={fav.image}
        />
      ))}
      <NavLink to={"/home"}>
        <button className={styles.boton}>VOLVER</button>
      </NavLink>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
