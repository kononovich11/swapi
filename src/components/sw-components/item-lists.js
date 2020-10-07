import React from 'react';
import ItemList from '../item-list';
import {withData, withConsumer} from '../hoc-helpers';

const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    );
  }
}

const renderName = ({name}) => `${name}`;

const mapPersonMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPeople,
  }
}

const mapPlanetMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPlanets,
  }
}

const mapSrarshipMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllStarships,
  }
}


const PersonList = withConsumer(mapPersonMethodsToProps)(
                    withData(
                      withChildFunction(renderName)(
                        ItemList)));       

const PlanetList = withConsumer(mapPlanetMethodsToProps)(
                    withData(
                      withChildFunction(renderName)(
                        ItemList)));  

const StarshipList = withConsumer(mapSrarshipMethodsToProps)(
                      withData(
                        withChildFunction(renderName)(
                          ItemList)));  

export {
  PersonList,
  PlanetList,
  StarshipList,
};