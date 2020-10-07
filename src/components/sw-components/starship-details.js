import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withConsumer} from '../hoc-helpers';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="passengers" label="Passengers"/>
      <Record field="manufacturer" label="Manufacturer"/>
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getStarship,
    getImage: swapi.getStarshipImage,
  }
}

export default withConsumer(StarshipDetails, mapMethodsToProps);