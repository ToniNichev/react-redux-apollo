import { onUserLoggedIn, onUserSignedOut } from '../../actions/authenticationActions';

/**
 * Plain JS object, to manage SURF
 */

 const SurfWrapper =  {
   /**
    * React component class responsible for injecting SURF and showing login/register popup modal
    * @init
    * @augments {object} authentication - authentication object, from redux store
    * @param {object} MenuActions - from authentication actions
    */
  init: (authentication, MenuActions) => {
    window.SURF.init({debug:false, element: "surfWrapper", responsive:true});

    window.SURF.event.bind(window.SURF.events.READY, () => {
      if(typeof window.SURF.globals.user !== 'undefined' && window.SURF.globals.user.status === 'active') {
       authentication.dispatch(onUserLoggedIn());
      }
      else {
       authentication.dispatch(onUserSignedOut());
      }
    });

    window.SURF.event.bind(window.SURF.events.SIGNIN, () => {
     authentication.dispatch(onUserLoggedIn());
    });

    window.SURF.event.bind(window.SURF.events.SIGNOUT, () => {
     authentication.dispatch(onUserSignedOut());
    });

    window.addEventListener("message", (event) => {
      // adding event listener to trigger login popup. For example if piano needs it.
      if( typeof event.data  === "undefined" || event.data !== 'TOGGLE_LOGIN_POPUP')
       return;
       if(authentication.user == null) {
         // show log in popup only if the user is not logged in
         authentication.dispatch( MenuActions.toggleLogInPopupWindow() );
       }
    }, false);

   },
 }

 export default SurfWrapper;
