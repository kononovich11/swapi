import React from 'react';
import './item-list.css';

const ItemList = (props) => {

  const {data, onPersonSelected } = props;

  const items = data.map((item) => {
      const {id} = item;
      const label = props.children(item);
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => onPersonSelected(id)}>
          {label}
        </li>
      );
    });

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
}

export default ItemList;