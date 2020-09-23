/* eslint-disable import/prefer-default-export */
export const activistReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_ACTIVISTS':
      return { ...state, activists: payload };
    default:
      return state;
  }
};
