import React from 'react';
import ItemList from '../item-list';
import {withData, withConsumer} from '../hoc-helpers';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    );
  }
}

const renderName = ({name}) => `${name}`;
const renderModelAndName = (({length, name}) => `${name}:${length}`);

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

const listWithChildren = withChildFunction(ItemList, renderName);

const PersonList = withConsumer(
                    withData(listWithChildren), mapPersonMethodsToProps);
const PlanetList = withConsumer(
                    withData(listWithChildren), mapPlanetMethodsToProps);
const StarshipList = withConsumer(
                    withData(listWithChildren), mapSrarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList,
};