import React, {Component} from 'react';
import Row from '../row';
import {
  PlanetDetails,
  PlanetList,
} from '../sw-components';

export default class PlanetPage extends Component {

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
        left={<PlanetList onPersonSelected={this.onPersonSelected}/>}     right={<PlanetDetails itemId={selectedItem}/>}
      />
    );
  }
}