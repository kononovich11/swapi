import React, {Component} from 'react';
import Row from '../row';
import {
  PersonDetails,
  PersonList,
} from '../sw-components';

export default class PeoplePage extends Component {

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
        left={<PersonList onPersonSelected={this.onPersonSelected}/>}     right={<PersonDetails itemId={selectedItem}/>}
      />
    );
  }
}

