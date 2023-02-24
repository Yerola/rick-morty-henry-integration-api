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
  let id = 0;
  const { characters, onClose } = props;

  const element = characters.map((cur) => (
    <Card
      key={id += 1}
      name={cur.name}
      species={cur.species}
      gender={cur.gender}
      image={cur.image}
      onClose={() => onClose(cur.id)}
      id={cur.id}
    />
  ));
  return <><Contenedor>{element}</Contenedor></>;
};
