import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

class HomePage extends Component {
   componentWillMount() {
      // fetch challenges
      console.log(this.props)
   }

   render() {
      return (
         <Home challenges={this.props.challenge.items} />
      );
   }
}

const mapStateToProps = (state) => {
   return {
      challenge: state.challenge
   }
}

export default connect(mapStateToProps)(HomePage);
