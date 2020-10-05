import React, {Component} from 'react';
import './people-page.css';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
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
    console.log(getData);
    const itemList = (
      <ItemList onPersonSelected={this.onPersonSelected}
                getData={getData}
      >
        {({name, gender}) => `${name}:${gender}`}
      </ItemList>
    );
    const itemDetails =( 
    <ErrorBoundry>
      <ItemDetails itemId={this.state.selectedPerson}/>;
    </ErrorBoundry>
    );

    if (this.state.hasError) {
      return <div>Sorry, app has error</div>
    }
    return (
      itemList
      // <Row left={itemList} right={itemDetails}/>
    );
  }
}

