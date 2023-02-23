import Card from "../Card/Card";
import React from 'react';
import styled from "styled-components";

const Contenedor = styled.div`
  display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
    gap: 10px;
    justify-content: center;
`;

export default function Cards(props) {
  const { characters, onClose } = props;

  const element = characters.map((character) => (
    <Card
      name={character?.name}
      species={character?.species}
      gender={character?.gender}
      image={character?.image}
      origin={character.origin?.name}
      status={character.status}
      id={character?.id}
      key={character?.id}
      onClose={() => onClose(character?.id)}
    />
  ));
  return <Contenedor>{element}</Contenedor>;
}
