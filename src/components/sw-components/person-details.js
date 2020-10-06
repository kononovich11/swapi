import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withConsumer} from '../hoc-helpers';

const PersonDetails = ({itemId, swapi}) => {
  const {getPerson, getPersonImage} = swapi;
  return (
    <ItemDetails itemId={itemId}
    getData = {getPerson}
    getImage ={getPersonImage}>

    <Record field="gender" label="Gender"/>
    <Record field="eyeColor" label="Eye color"/>
    </ItemDetails>
  );
};

export default withConsumer(PersonDetails);