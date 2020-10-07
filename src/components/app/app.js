import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import TestSwapiService from '../../services/test-service';
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';
import {Provider} from '../swapi-context';
import './app.css';

export default class App extends Component {

  state = {
    swapi: new SwapiService(),
    showRandomPlanet: true,
    hasError: false,
  }

  componentDidCatch() {
    console.log('componentDidCatch');
    this.setState({hasError: true});
  }

  onServiceChange = () => {
    this.setState(({swapi}) => {
      const Service = swapi instanceof SwapiService? 
                      TestSwapiService: SwapiService;
      return {
        swapi: new Service(),
      }
    });
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
      <Provider value={this.state.swapi}>
        <Header onServiceChange={this.onServiceChange}/>
        {planet} 

        <button className="toggel-planet btn btn-warning btn-lg"
                onClick={this.toggelRandomPlanet}>
          Toggel Random Planet
        </button>

        <PeoplePage/>  
        <PlanetPage/>
        <StarshipPage/>

      </Provider>
    );
  } 
};
