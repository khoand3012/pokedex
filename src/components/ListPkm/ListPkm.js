import "./ListPkm.css";
import { useState, useContext } from "react";
import { ListGroup } from "react-bootstrap";
import AppContext from "../../contexts/AppContext";

function ListPkm(props) {
  const pokemonList = useContext(AppContext);
  const [selected, setSelected] = useState(null);

  return (
    <div className="listPkm">
      <ListGroup as="ul">
        {pokemonList.map((pokemon, index) => {
          return (
            <ListGroup.Item
              as="li"
              key={index}
              onClick={() => {
                setSelected(index);
              }}
              active={index === selected}
            >
              {pokemon.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default ListPkm;
