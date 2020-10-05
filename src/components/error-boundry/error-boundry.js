import React, {Component} from 'react';

export default class ErrorBoundry extends Component {

  componentDidCatch() {
    this.setState({hasError: true});
  }

  state =  {
    hasError: false,
  }

  render() {
    if(this.state.hasError) {
      return <div>Sorry, app has error</div>;
    }
    return this.props.children;
  }
}
