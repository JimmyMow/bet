import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
   render() {
      return (
         <div>
            {
               this.props.challenges.map((challenge, i) => {
                  return <li key={i}>{challenge.title}</li>
               })
            }
         </div>
      );
   }
}

Home.propTypes = {
   challenges: PropTypes.array.isRequired
}
