import React from 'react';

import ItemDetails, {Record} from '../item-details';
import {Consumer} from '../swapi-context';

const PersonDetails = ({itemId}) => {
  return (
    <Consumer>
      {
        ({getPerson, getPersonImage }) => {
          return (
            <ItemDetails itemId={itemId}
            getData = {getPerson}
            getImage ={getPersonImage}>

            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye color"/>
            </ItemDetails>
          );
        }
      }
    </Consumer>
  );
};
const PlanetDetails = ({itemId}) => {
  return (
    <Consumer>
      {      
      ({getPlanet, getPlanetImage}) => {
        return (
        <ItemDetails itemId={itemId}
          getData = {getPlanet}
          getImage ={getPlanetImage}>

          <Record field="gender" label="Gender"/>
          <Record field="eyeColor" label="Eye color"/>
          </ItemDetails>
        )
      }
    }
    </Consumer>
  );
};
const StarshipDetails = ({itemId}) => {
  return (
    <Consumer>
    {
      ({getStarship, getStarshipImage}) => {
        return (
          <ItemDetails itemId={itemId}
                 getData = {getStarship}
                 getImage ={getStarshipImage}>

          <Record field="gender" label="Gender"/>
          <Record field="eyeColor" label="Eye color"/>
          </ItemDetails>
        )
      }
    }
    </Consumer>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
}