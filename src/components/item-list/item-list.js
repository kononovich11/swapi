import React from 'react';
import './item-list.css';

const ItemList = (props) => {

  const {data, onItemSelected } = props;

  const items = data.map((item) => {
      const {id} = item;
      const label = props.children(item);
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => onItemSelected(id)}>
          {label}
        </li>
      );
    });

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
};

ItemList.defaultProps = {
  onItemSelected: () => {},
};

export default ItemList;