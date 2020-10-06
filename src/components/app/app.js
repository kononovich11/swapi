import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import Row from '../row';
import SwapiService from '../../services/swapi-service';
import TestSwapiService from '../../services/test-service';
import ItemList from '../item-list';
import ItemDetails, {Record} from '../item-details/item-details';
import './app.css';
import {PersonDetails,
        PlanetDetails,
        StarshipDetails,
        PersonList,
        PlanetList,
        StarshipList} 
from '../sw-components';
import {Provider, Consumer} from '../swapi-context';


export default class App extends Component {

  swapi = new TestSwapiService();

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

    const { getPerson, 
            getStarship, 
            getPersonImage,
            getPlanetsImage,
            getStarshipImage,
          } = this.swapi;

    const personDetails = ( 
      <ItemDetails itemId={11}
                   getData = {getPerson}
                   getImage ={getPersonImage}>

        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye color"/>

      </ItemDetails>
    );
    const starshipDetails = ( 
      <ItemDetails itemId={10}
                    getData = {getStarship}
                    getImage={getStarshipImage}>

        <Record field="model" label="Model"/>

      </ItemDetails>
      );

    return (
      <Provider value={this.swapi}>
        <Header />
        {/* {planet} */}

        {/* <button className="toggel-planet btn btn-warning btn-lg"
                onClick={this.toggelRandomPlanet}>
          Toggel Random Planet
        </button>

        <ErrorButton/>
        <PeoplePage getData={this.swapi.getAllPeople}/>  */}
        <PersonList onPersonSelected={this.onPersonSelected}/>
        <PlanetList/>
        <StarshipList/>

        <PersonDetails itemId={5}/>
        <PlanetDetails itemId={5}/>
        <StarshipDetails itemId={15}/>
   

        {/* <Row left={personDetails} right={starshipDetails}/> */}

      </Provider>
    );
  } 
};
