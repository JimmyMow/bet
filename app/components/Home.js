import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <p>
            bet <i>$5</i> I won't <a href="https://vine.co/v/O0OiUYJEmbd" title="Video">destory a 7-11 chips rack</a><span>|</span>
          </p>
        </div>
      </div>
    );
  }
}
