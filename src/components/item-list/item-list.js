import React, { Component } from 'react';
import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Loader from '../loader';

export default class ItemList extends Component {

  swapi = new SwapiService();

  state = {
    peopleList: null,
  }

  componentDidMount() {
    this.swapi
    .getAllPeople()
    .then((peopleList) => {
      this.setState({peopleList})
    })
  }


  renderItems = (peopleList) => {
    return peopleList.map((person) => {
      return (
        <li className="list-group-item"
            key={person.id}
            onClick={() => this.props.onPersonSelected(person.id)}>
          {person.name}
        </li>
      )
    })
  }

  render() {
    const {peopleList} = this.state;

    if(!peopleList) {
      return <Loader/>;
    }
    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}