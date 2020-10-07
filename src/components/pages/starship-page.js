import React, {Component} from 'react';
import Row from '../row';
import {
  StarshipDetails,
  StarshipList,
} from '../sw-components';

export default class StarshipPage extends Component {

  state = {
    selectedItem: null,
  }

  onPersonSelected = (selectedItem) => {
    this.setState({selectedItem});
  }

  render() {
    const {selectedItem} = this.state;

    return (
      <Row 
        left =
        {<StarshipList onPersonSelected={this.onPersonSelected}/>}     right =
        {<StarshipDetails itemId={selectedItem}/>}
      />
    );
  }
}