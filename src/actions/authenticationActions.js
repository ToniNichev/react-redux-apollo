export const onUserLoggedIn = () => ({
	type: 'USER_LOGGED_IN',
	user: window.SURF.globals.user,
	surf_session_token: window.SURF.globals.session.session_token,
});

export const onUserSignedOut = () => ({
	type: 'USER_SIGNED_OUT',
	user: null,
	surf_session_token: null,
});

export const MenuActions = {
	toggleLogInPopupWindow: () => ({
		type: 'TOGGLE_LOGIN_POPUP',		
  }),

	logOutUser: () => ({
		type: 'LOG_OUT_USER',
	})
}
