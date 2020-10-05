import React, {Component} from 'react';
import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';
export default class PeoplePage extends Component {

  state = {
    selectedPerson: 3,
    hasError: false,
  }

  componentDidCatch() {
    this.setState({hasError: true});
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  }

  render() {
    const {getData} = this.props;
    const itemList = (
      <ItemList onPersonSelected={this.onPersonSelected}
                getData={getData}
                renderItem={(item) => item.name}
      />
    );
    const personDetails =<PersonDetails personId={this.state.selectedPerson}/>;

    if (this.state.hasError) {
      return <div>Sorry, app has error</div>
    }
    return (
      <Row left={itemList} right={personDetails}/>
    );
  }
}

