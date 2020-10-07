import React from 'react';
import {Consumer} from '../swapi-context';

const withConsumer = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
    <Consumer>
     {
       (swapi) => {
         const serviceProps = mapMethodsToProps(swapi);
         return <Wrapped {...props} {...serviceProps}/>;
       } 
     }
    </Consumer>
    );
  }
} 

export default withConsumer;