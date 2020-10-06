import React from 'react';

import ItemDetails, {Record} from '../item-details';
import SwapiService from '../../services/swapi-service';

const swapi = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = swapi;

const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails itemId={itemId}
                 getData = {getPerson}
                 getImage ={getPersonImage}>

    <Record field="gender" label="Gender"/>
    <Record field="eyeColor" label="Eye color"/>
    </ItemDetails>
  );
};
const PlanetDetails = ({itemId}) => {
  return (
    <ItemDetails itemId={itemId}
                 getData = {getPlanet}
                 getImage ={getPlanetImage}>

    <Record field="gender" label="Gender"/>
    <Record field="eyeColor" label="Eye color"/>
    </ItemDetails>
  );
};
const StarshipDetails = ({itemId}) => {
  return (
    <ItemDetails itemId={itemId}
                 getData = {getStarship}
                 getImage ={getStarshipImage}>

    <Record field="gender" label="Gender"/>
    <Record field="eyeColor" label="Eye color"/>
    </ItemDetails>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
}