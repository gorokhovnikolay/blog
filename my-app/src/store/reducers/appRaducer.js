const initialState = {
	reset: false,
};

export const appReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'LOG_OUT_USER':
			return { ...state, reset: !state.reset };
		default:
			return state;
	}
};
