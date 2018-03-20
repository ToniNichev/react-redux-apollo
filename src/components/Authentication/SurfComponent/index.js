import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MenuActions } from '../../../actions/authenticationActions';
import SurfWrapper from '../../../containers/Authentication/surfWrapper';
const styles = require('./styles.scss');

/**
 * React component class responsible for injecting SURF and showing login/register popup modal
 * @constructor
 * @augments {React.Component}
 * @param {object} authentication - holds user data
 * @param {bool} toggleLogInPopup
 * @param {function} dispatch - exposes dispatch method to the component
 */

/* window.SurfWrapper = SurfWrapper; */

class SurfComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        activeTab: 1,
    };
    this.surfReady();
  }

  tabClicked = (tabId) => {
    this.setState({activeTab: tabId} );
    if(tabId === 1) {
      window.SURF.signinDialog();
    }else {
      window.SURF.createAccountDialog();
    }
  }

  surfReady() {
    if(typeof window === 'undefined') {
      // prevent server side rendering error since 'window' object doesn't exist
      return;
    }
    window.setTimeout(() =>  {
      if(typeof SURF === 'undefined') {
        this.surfReady();
        return;
      }
      SurfWrapper.init(this.props, MenuActions);
    }, 100);
  }

  closeButtonClicked() {
    this.props.toggleLogInPopup();

  }

 render() {
    return (
      <div>
        <Helmet>
          <script type="text/javascript" src="https://surf.nbcuni.com/rdk/surf.js.php" data-rdk-url="/rdk/" data-config-key="cnbc" />
        </Helmet>

        <div className={styles.surfPopupBackground} style={{display: this.props.authentication.popupVisible ? 'block' : 'none'}}  >
          <div id="surfContainer" className={styles.surfContainer}>

            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <img src="//sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/login-cnbc-logo.png" alt="CNBC logo" />
              </div>
              <a className={styles.surfCloseBtn} onClick={() => this.closeButtonClicked()} role="button" tabIndex={0}>×</a>
            </div>

            <div className={styles.SignInSignUp}>
              <ul className={styles.tab}>
                <li className={this.state.activeTab===1 ? styles.selected : null}>
                  <a role='button' tabIndex={0} onClick={() => this.tabClicked(1)}>LOG IN</a>
                </li>
                <li className={this.state.activeTab===2 ? styles.selected : null}>
                  <a role='button' tabIndex={0} onClick={() => this.tabClicked(2)}>SIGN UP</a>
                </li>
              </ul>
              <div id="surfWrapper" className={styles.surfWrapper} />
              <p><input type="checkbox" />Keep Me Logged In</p>
            </div>

            <div className={styles.Footer}>

              <hr />
              <div>
                <img src="//sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/surf/xfinity-subscribers-logo.png" alt="xfinity subscribers logo" />
              </div>
              <div>
                If you previously logged into CNBC with your Xfinity account, please  <a href="#">reset your password </a> using your Xfinity email address.  Then you will be able to login to CNBC with your Xfinity email to access your account.
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export {SurfComponent}

SurfComponent.propTypes = {
  authentication: PropTypes.PropTypes.any,
  toggleLogInPopup: PropTypes.PropTypes.any,
};

SurfComponent.defaultProps = {
  authentication: {},
  toggleLogInPopup: null,
};

function mapStateToProps(state) {
  return {
    authentication: state.authentication
  };
}

const mapDispatchToProps = dispatch => ({
  dispatch: (action) => {
    dispatch(action);
  },
  toggleLogInPopup: () => {
    // attaching 'close window' action to 'x' button
    dispatch(MenuActions.toggleLogInPopupWindow());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SurfComponent);
