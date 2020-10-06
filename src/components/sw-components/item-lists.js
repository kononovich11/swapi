import React from 'react';
import ItemList from '../item-list';
import {withData} from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapi = new SwapiService();

const { 
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} = swapi;

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

const listWithChildren = withChildFunction(ItemList, renderName);

const PersonList = withData(listWithChildren, getAllPeople);
const PlanetList = withData(listWithChildren, getAllPlanets);
const StarshipList = withData(
                      withChildFunction(ItemList, renderModelAndName), 
                      getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList,
};