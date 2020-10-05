import React, { Component } from 'react';
import './person-details.css';
import SwapiService from '../../services/swapi-service'; 
import ErrorButton from '../error-button';

const Record = ({item, field , label}) => {
 return ( 
 <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
  );
}

export {
  Record
};
export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null,
  }

  swapi = new SwapiService();

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const {itemId, getData, getImage} = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
        .then((item) => {
          this.setState({
            item: item,
            image: getImage(itemId),
          });
        });
  }

  render() {
    if(!this.state.item) {
      return <div>Select a person from list</div>;
    }

    const {id, name, gender, birthYear, eyecolor} = this.state.item;
    const {image, item} = this.state;

    return (
      <div className="item-details card">
        <img className="item-image"
          src={image}/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item});
              })
            }
          </ul>
          <ErrorButton/>
        </div>
      </div>
    )
  }
}