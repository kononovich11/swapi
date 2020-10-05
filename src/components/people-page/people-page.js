import React, {Component} from 'react';
import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
export default class PeoplePage extends Component {

  state = {
    selectedPerson: 3,
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
      >
        {({name, gender}) => `${name}:${gender}`}
      </ItemList>
    );
    const personDetails =( 
    <ErrorBoundry>
      <PersonDetails personId={this.state.selectedPerson}/>;
    </ErrorBoundry>
    );

    if (this.state.hasError) {
      return <div>Sorry, app has error</div>
    }
    return (
      <Row left={itemList} right={personDetails}/>
    );
  }
}

