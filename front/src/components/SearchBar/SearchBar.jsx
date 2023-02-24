import styled from "styled-components";
import { useState } from "react";

const Contenedor = styled.div``;
const Buscador = styled.input``;
const Boton = styled.button``;

export default function SearchBar(props) {
  let [characterId, setCharacterId] = useState("");// revisar

  return (
    <Contenedor>
      <Buscador
        type="text"
        name="search"
        id="#"
        placeholder='Número de personaje...'
        onChange={(e) => setCharacterId((characterId = e.target.value))}
      />
      <Boton onClick={() => props.onSearch(characterId)}
      >Buscar</Boton>
      <span role="img" aria-labelledby="loupe">🔍</span>
      <button onClick={() => props.onSearch(Math.floor(Math.random() * 826))}>Aleatorio</button>
    </Contenedor>
  );
};
