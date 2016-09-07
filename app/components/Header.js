import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Header.css';

export default class Header extends Component {
   render() {
      return (
         <div className={styles.headerBase}>
            <div className={`${styles.header} ${styles.headerLeft}`}>
               <Link to='/'>
                  one
               </Link>
               <Link to='/'>
                  two
               </Link>
               <Link to='/'>
                  three
               </Link>
            </div>
            <div className={`${styles.header} ${styles.headerMiddle}`}>
               <Link to='/' className={styles.headerTitle}>
                  bet
               </Link>
            </div>
            <div className={`${styles.header} ${styles.headerRight}`}>
               <Link to='/'>
                  <i className="fa fa fa-search" />
               </Link>
            </div>
         </div>
      )
   }
}
