import React, { Component } from 'react';
import './item-list.css';
import SwapiService from '../../services/swapi-service';
import {WithData} from '../hoc-helpers';


const ItemList = (props) => {

  const {data, 
        onPersonSelected } = props;

  const renderItems = (itemList) => {
    return itemList.map((item) => {
      const {id} = item;
      const label = props.children(item);
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => onPersonSelected(id)}>
          {label}
        </li>
      )
    })
  }
    const items = renderItems(data);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
}

const {getAllPeople} = new SwapiService();
export default WithData(ItemList, getAllPeople);