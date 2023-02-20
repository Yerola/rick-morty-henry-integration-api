import React, { useState, useEffect, Fragment } from "react";
import { useParams, NavLink } from "react-router-dom";
import styles from "./Details.module.css"

export default function Detail() {
   const { detailId } = useParams();
   const [character, setCharacter] = useState({});
   useEffect(() => {
      //fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`) // le consulto ahora a mi base de datos
      fetch(`http://localhost:3001/rickandmorty/character/${detailId}`) // cambié character por detail
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         })
         .catch((err) => {
            window.alert('No hay personajes con ese ID');
         });
      return setCharacter({});
   }, [detailId]);

   return <Fragment> <div>
      <center className={styles.info}>
         <h1>{character?.name}</h1>
         <p className={styles.a} value="status">Status: {character?.status}</p>
         <p className={styles.a} value="especie">Especie: {character?.specie}</p>
         <p className={styles.a} value="genero">Género: {character?.gender}</p>
         <p className={styles.a} value="origen">Origen: {character.origin?.name}</p>
         <img src={character?.image} alt="img" />
      </center>
      <NavLink to={"/home"}>
         <center>
            <button className={styles.boton}>VOLVER</button>
         </center>
      </NavLink>
   </div>;
   </Fragment >
}
