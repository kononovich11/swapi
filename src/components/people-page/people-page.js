import React, {Component} from 'react';
import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

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
    if (this.state.hasError) {
      return <div>Sorry, app has error</div>
    }
    return (
      <div className="row mb2">
          <div className="col-md-6">
            <ItemList onPersonSelected={this.onPersonSelected}
                      getData={getData}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
    );
  }
}