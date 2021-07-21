const Reducer = (state, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return {
				user: null,
				isFetching: true,
				error: false,
			};
		case 'SIGNIN_SUCCESS':
			return {
				user: action.payload,
				isFetching: false,
				error: false,
			};
		case 'SIGNIN_FAILURE':
			return {
				user: null,
				isFetching: false,
				error: true,
			};
            case 'SIGNOUT':
			return {
				user: null,
				isFetching: false,
				error: false,
			};
		default:
			return state;
	}
};

export default Reducer;
