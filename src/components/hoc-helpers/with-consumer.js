import React from 'react';
import {Consumer} from '../swapi-context';

const withConsumer = (Wrapped) => {
  return (props) => {
    return (
    <Consumer>
     {
       (swapi) => {
         return <Wrapped {...props} swapi={swapi}/>;
       } 
     }
    </Consumer>
    );
  }
} 

export default withConsumer;