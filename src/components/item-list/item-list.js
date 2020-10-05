import React, { Component } from 'react';
import './item-list.css';
import Loader from '../loader';

export default class ItemList extends Component {

  state = {
    itemList: null,
  }

  componentDidMount() {
    const {getData} = this.props;
    console.log(getData);
    getData().then((itemList) => {
      this.setState({itemList})
    });
  }


  renderItems = (itemList) => {
    return itemList.map((item) => {
      return (
        <li className="list-group-item"
            key={item.id}
            onClick={() => this.props.onPersonSelected(item.id)}>
          {item.name}
        </li>
      )
    })
  }

  render() {
    const {itemList} = this.state;

    if(!itemList) {
      return <Loader/>;
    }
    const items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}