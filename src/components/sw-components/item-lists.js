import React from 'react';
import ItemList from '../item-list';
import {withData, 
        withConsumer, 
        withChildFunction,
        compose} from '../hoc-helpers';

const renderName = ({name}) => `${name}`;

const mapPersonMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPeople,
  }
};

const mapPlanetMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPlanets,
  }
};

const mapSrarshipMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllStarships,
  }
};

const PersonList = compose(
                    withConsumer(mapPersonMethodsToProps),
                    withData,
                    withChildFunction(renderName)
                    )(ItemList);

const PlanetList = compose(
                    withConsumer(mapPlanetMethodsToProps),
                    withData,
                    withChildFunction(renderName)
                    )(ItemList);

const StarshipList = compose(
                      withConsumer(mapSrarshipMethodsToProps),
                      withData,
                      withChildFunction(renderName)
                      )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList,
};