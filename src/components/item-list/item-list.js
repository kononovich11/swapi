import React, { Component } from 'react';
import './item-list.css';
import Loader from '../loader';

export default class ItemList extends Component {

  state = {
    itemList: null,
  }

  componentDidMount() {
    const {getData} = this.props;
    getData().then((itemList) => {
      this.setState({itemList})
    });
  }


  renderItems = (itemList) => {
    return itemList.map((item) => {
      const {id} = item;
      const label = this.props.children(item);
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onPersonSelected(id)}>
          {label}
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