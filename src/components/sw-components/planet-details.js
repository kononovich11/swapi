import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withConsumer} from '../hoc-helpers';

const PlanetDetails = (props) => {
  return (
  <ItemDetails {...props}>
    <Record field="diameter" label="Diameter"/>
  </ItemDetails>
  )   
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getPlanet,
    getImage: swapi.getPlanetImage,
  }
}

export default withConsumer(mapMethodsToProps)(PlanetDetails);