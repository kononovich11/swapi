import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import Row from '../row';
import SwapiService from '../../services/swapi-service';

import './app.css';
import ItemDetails from '../item-details';

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

    const { getPerson, 
            getStarship, 
            getPersonImage,
            getPlanetsImage,
            getStarshipImage,
          } = this.swapi;
    const personDetails = ( 
      <ItemDetails itemId={11}
                   getData = {getPerson}
                   getImage ={getPersonImage}/>
      );
    const starshipDetails = ( 
      <ItemDetails itemId={10}
                    getData = {getStarship}
                    getImage={getStarshipImage}
                    />
    );

    return (
      <div>
        <Header />
        {/* {planet} */}

        {/* <button className="toggel-planet btn btn-warning btn-lg"
                onClick={this.toggelRandomPlanet}>
          Toggel Random Planet
        </button>

        <ErrorButton/>
        <PeoplePage getData={this.swapi.getAllPeople}/>  */}

        <Row left={personDetails} right={starshipDetails}/>

      </div>
    );
  } 
};
