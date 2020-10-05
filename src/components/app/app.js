import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends Component {

  swapi = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  }

  componentDidCatch() {
    console.log('componentDidCatch');
    this.setState({hasError: true});
  }

  toggelRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
        personSelected: null,
      }
    });
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Sorry, app has error</div>
    }

    const planet = this.state.showRandomPlanet? <RandomPlanet/> : null; 
    return (
      <div>
        <Header />
        {planet}

        <button className="toggel-planet btn btn-warning btn-lg"
                onClick={this.toggelRandomPlanet}>
          Toggel Random Planet
        </button>

        <ErrorButton/>
        <PeoplePage getData={this.swapi.getAllPeople}/> 

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onPersonSelected={this.onPersonSelected}
                      getData={this.swapi.getAllPlanets}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onPersonSelected={this.onPersonSelected}
                      getData={this.swapi.getAllStarships}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>

      </div>
    );
  } 
};
