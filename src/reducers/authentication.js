const initialState = {
  user: null,
  popupVisible: false,
  activeTab: 1,
  surf_session_token: null,
  signInOutCaption: "Sign In"
}

const authentication = (state = initialState, action) => {
  switch (action.type) {

    case 'TOGGLE_LOGIN_POPUP':
      if(!state.popupVisible)
        window.SURF.signinDialog();
      return {...state,
        popupVisible:!state.popupVisible
      }
    case 'USER_LOGGED_IN':
      return {...state,
        popupVisible: false,
        signInOutCaption: 'SIGN OUT',
        user: action.user,
        surf_session_token: action.surf_session_token
      }
    case 'LOG_OUT_USER':
      window.SURF.signout({});
			return state;
    case 'USER_SIGNED_OUT':
      return {...state,
        signInOutCaption: 'SIGN IN',
        logged_in: false,
        user: action.user,
        surf_session_token: action.surf_session_token
      }
    default:
      return state;
  }
}

export default authentication;
