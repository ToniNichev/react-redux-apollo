import React, { Component } from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import SignInMenuContainer from '../../components/Authentication/SignInMenu';
import SurfComponent from '../../components/Authentication/SurfComponent';
import PropTypes from 'prop-types';
import TestComponent from  '../../components/Test';
import LegacyPlayerContainer from '../LegacyPlayerContainer';

class AppComponent extends Component {
  render() {
    const featuredLinks = [
      {
        attr: {
            data: {
                trknavattr: "featured:${parent}:${name}:${currentDocNID}",
            },
        },
        host: "",
        items: [],
        label: "Sign In",
        name: "user_signin",
        path: "javascript:void(0);",
      },  

      {
        attr: {
            data: {
                trknavattr: "featured:${parent}:${name}:${currentDocNID}",
            },
        },
        host: "//www.cnbc.com",
        items: [],
        label: "Account",
        name: "account",
        path: "/account/#profile",
      },        

      {
        attr: {
            data: {
                trknavattr: "featured:${parent}:${name}:${currentDocNID}",
            },
        },
        host: "",
        items: [],
        label: "Pro",
        name: "pro_subscriber",
        path: "javascript:void(0);",
      },       
      
      {
        attr: {
            data: {
                trknavattr: "featured:${parent}:${name}:${currentDocNID}",
            },
        },
        host: "",
        items: [],
        label: "Watchlist",
        name: "watchlist",
        path: "javascript:void(0);",
      },        
           
  ];    
    return (
      <div className={styles.appBody}>
        <header className={styles.header}>
          <h1 className={styles.AppTitle}>Welcome to rapid prototyping framework!</h1>
          <SignInMenuContainer featuredLinks={featuredLinks} />
        </header>
        <br />
        <LegacyPlayerContainer id={103657463} />
        <SurfComponent />
        <TestComponent />
        <TestComponent />
      </div>
    );
  }
}


AppComponent.propTypes = {
  authentication: PropTypes.PropTypes.any,
};

AppComponent.defaultProps = {
  authentication: {},
};

function mapStateToProps(state) {
  return {
    authentication: state.authentication
  };
}

export default connect(mapStateToProps, null)(AppComponent);
