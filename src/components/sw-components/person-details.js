import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withConsumer} from '../hoc-helpers';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender"/>
      <Record field="eyeColor" label="Eye color"/>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getPerson,
    getImage: swapi.getPersonImage,
  }
}
export default withConsumer(mapMethodsToProps)(PersonDetails);