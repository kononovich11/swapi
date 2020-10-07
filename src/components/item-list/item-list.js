import React from 'react';
import PropTypes from 'prop-types';
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

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemList;