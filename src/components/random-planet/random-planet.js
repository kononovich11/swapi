import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-service';

import Loader from '../loader';

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 7000,
  };

  state = {
    planet: {},
    loader: true,
  }

  swapiService = new SwapiService();

  componentDidMount() {
    console.log('did mount');
    const {updateInterval} = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }
  
  componentWillUnmount() {
   console.log('componentWillUnmount');
   clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loader: false,
      error: false,
    });
  }

  onError = (err) => {
    this.setState({error: true});
  };

  updatePlanet = (() => {
    console.log('update');
    const id = Math.floor(Math.random()*25);
    this
      .swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  });

  render() {
    console.log('render');
    const {planet, loader, error} = this.state;
    const isLoader = loader && !error? <Loader/> : null;
    const content = !loader? <PlanetView planet={planet}/> : null;
    const isError = error? <div>Error!</div> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {isLoader}
        {content}
        {isError}
      </div>
    );
  };
}

const PlanetView = ( {planet} ) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  
  return (
    <>
      <img className="planet-image"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
              alt="Planet"/>
          <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">{population}</span>
              </li>
              <li className="list-group-item">
                <span className="term">{rotationPeriod}</span>
              </li>
              <li className="list-group-item">
                <span className="term">{diameter}</span>
              </li>
            </ul>
          </div>
        </>
  )
}