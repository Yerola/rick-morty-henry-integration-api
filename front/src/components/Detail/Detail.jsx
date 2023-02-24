import { useState, useEffect, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Details.module.css"


export default function Detail() {

   const { detailId } = useParams()
   const [character, setCharacter] = useState({})
   const navigate = useNavigate();
   const handleClick = () => navigate("/home");

   useEffect(() => {
      fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert("No hay personajes con ese ID");
            }
         })
         .catch((err) => {
            window.alert("No hay personajes con ese ID");
         });
      return setCharacter({});
   }, [detailId]);

   return <Fragment> <div>
      <center className={styles.info}>
         <h1>{character?.name}</h1>
         <p className={styles.a} value="status">Status: {character?.status}</p>
         <p className={styles.a} value="especie">Especie: {character?.species}</p>
         <p className={styles.a} value="genero">Género: {character?.gender}</p>
         <p className={styles.a} value="origen">Origen: {character.origin?.name}</p>
         <img src={character?.image} alt={character.name} />
      </center>
      <useNavigate to={"/home"}>
         <center>
            <button className={styles.boton} onClick={handleClick}>VOLVER</button>
         </center>
      </useNavigate>
   </div>;
   </Fragment >
};

