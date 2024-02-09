import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  function handleClick(event: MouseEvent, item: string, index: number) {
    setSelectedIndex(index);
    onSelectItem(item);
  }

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? (
        <p>No item found</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={(event) => handleClick(event, item, index)}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
