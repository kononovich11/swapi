import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withConsumer} from '../hoc-helpers';

const StarshipDetails = ({itemId, swapi}) => {
  const {getStarship, getStarshipImage} = swapi;
  return (
    <ItemDetails itemId={itemId}
            getData = {getStarship}
            getImage ={getStarshipImage}>

    <Record field="gender" label="Gender"/>
    <Record field="eyeColor" label="Eye color"/>
    </ItemDetails>
  )
};

export default withConsumer(StarshipDetails);