import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MenuActions } from '../../../actions/authenticationActions';


/**
 * React component class for showing up 'signin' menu link
 * @param {object} authentication - holds user data
 * @param {function} toggleLogInPopup
 * @param {function} logOutUser
 */

class SignInMenu extends React.Component {

  itemsAllowed = (itemName, forRegisteredUser) => {
    const userItems = {
      loggedInUser: ['user_signin', 'account', 'watchlist', 'makeit'],
      anonymousUser: ['user_signin', 'pro_subscriber']
    }

    const list = forRegisteredUser ? userItems.loggedInUser : userItems.anonymousUser;
    return list.includes(itemName);
  }

  getSignInSignOutButton = (link, signedIn) => {
    const label = signedIn ? 'SIGN OUT' : link.label;
    const onClickAction = signedIn ? this.props.logOutUser : this.props.toggleLogInPopup;
    return(<li><a href="#" onClick={onClickAction}>{label}</a></li>);
  }

  getButton = (link) => {
    return(
      <li key={link.name}>
        <a href={`${link.host}${link.path}`} title={link.name}>
          {link.label}
          {link.label.toUpperCase() === "MAKE IT" ? <span className="icon-offsite-arrow" /> : null }
        </a>
      </li>      
    );
  }

  render() {
    const result = this.props.featuredLinks.map(link => {  
      const button = this.itemsAllowed(link.name, this.props.authentication.user) ? this.getButton(link) : null;
      return link.name === 'user_signin' ? this.getSignInSignOutButton(link, this.props.authentication.user) : button;
    });

    return(
      <ul>
        {result}
      </ul>
    );
  }
}

SignInMenu.propTypes = {
  authentication: PropTypes.any,
  logOutUser: PropTypes.any,
  toggleLogInPopup: PropTypes.any,
  featuredLinks: PropTypes.any,
};

SignInMenu.defaultProps = {
  authentication: {},
  logOutUser: {},
  toggleLogInPopup: {},
  featuredLinks: {}
};

const mapStateToProps = (state) => ({
  authentication: state.authentication
})

const mapDispatchToProps = {
  toggleLogInPopup: MenuActions.toggleLogInPopupWindow,
  logOutUser: MenuActions.logOutUser,
}

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInMenu)

export default MenuContainer