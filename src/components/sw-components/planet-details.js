import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withConsumer} from '../hoc-helpers';

const PlanetDetails = ({itemId, swapi}) => {
  const {getPlanet, getPlanetImage} = swapi;
  return (
  <ItemDetails itemId={itemId}
    getData = {getPlanet}
    getImage ={getPlanetImage}>

    <Record field="gender" label="Gender"/>
    <Record field="eyeColor" label="Eye color"/>
    </ItemDetails>
  )   
};

export default withConsumer(PlanetDetails);