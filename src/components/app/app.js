import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import TestSwapiService from '../../services/test-service';
import {Provider} from '../swapi-context';
import { StarshipDetails } from '../sw-components';
import './app.css';
import {PeoplePage, 
        PlanetPage, 
        StarshipPage,
        SecretPage,
        LoginPage} from '../pages';
import {BrowserRouter as Router, 
        Route, 
        Switch, 
        Redirect } from 'react-router-dom';

export default class App extends Component {

  state = {
    swapi: new SwapiService(),
    showRandomPlanet: true,
    hasError: false,
    isLogin: false,
  }

  onLogin = () => {
    console.log('click');
    this.setState({isLogin:true});
  }

  componentDidCatch() {
    console.log('componentDidCatch');
    this.setState({hasError: true});
  }

  onServiceChange = () => {
    this.setState(({swapi}) => {
      const Service = swapi instanceof SwapiService? 
                      TestSwapiService: SwapiService;
      return {
        swapi: new Service(),
      }
    });
  }

  toggelRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
        personSelected: null,
      }
    });
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Sorry, app has error</div>
    }

    const planet = this.state.showRandomPlanet? <RandomPlanet/> : null; 
    const {isLogin} = this.state;

    return (
      <Provider value={this.state.swapi}>
        <Router>
          <Header onServiceChange={this.onServiceChange}/>
          {planet} 

          <button className="toggel-planet btn btn-warning btn-lg"
                  onClick={this.toggelRandomPlanet}>
            Toggel Random Planet
          </button>

          <Switch>
            <Route path="/" 
                  render={() => <h2>Welcome to StarDB</h2>}
                  exact/>
            <Route path="/people/:id?" 
                  component={PeoplePage}/>
            <Route path="/planets" component={PlanetPage}/>
            <Route path="/starships" 
                  component={StarshipPage} 
                  exact/>
            <Route path="/starships/:id" 
                  render={({match}) => {
                  const id = match.params.id;
                  return <StarshipDetails itemId={id}/>}}
                  exact/>
            <Route path="/secret/"
                  render={() => {
                    return <SecretPage isLogin={isLogin}/>
                  }}/>  
            <Route path="/login/"
                  render={() => {
                    return <LoginPage 
                              isLogin={isLogin}
                              loginClick={this.onLogin}/>
                  }}/> 
            <Route render={() => <h2>Page not found</h2>}/>
          </Switch>    

        </Router>
      </Provider>
    );
  } 
};
