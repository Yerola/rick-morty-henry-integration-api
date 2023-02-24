/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards, getFavorites } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./Favorites.module.css";

export function Favorites({ myFavorites }) {
  console.log(myFavorites)

  useEffect(() => {
    console.log("useEffect")
    dispatch(getFavorites())
  }, []) // revisar
  const dispatch = useDispatch();
  const handleDispatch = (e) => {
    const { name, value } = e.target;
    if (name === 'order') {
      return dispatch(orderCards(value))
    }
    if (name === 'filter') {
      return dispatch(filterCards(value))
    }
  }

  <center><button className={styles.boton}>VOLVER</button></center>
  return (
    <div>
      <div>
        <select name='order' onChange={handleDispatch}>
          <option value="Ascendente" >Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select name='filter' onChange={handleDispatch}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>

      {myFavorites.length ? myFavorites.map(fav =>
        <Card
          key={fav.id}
          name={fav.name}
          id={fav.id}
          gender={fav.gender}
          image={fav.image}
        />
      ) : <h1>no hay personajes favoritos</h1>}

      <NavLink to={"/home"}>
        <button className={styles.boton}>VOLVER</button>
      </NavLink>
    </div>
  );
};

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  };
};

export default connect(mapStateToProps, null)(Favorites);
