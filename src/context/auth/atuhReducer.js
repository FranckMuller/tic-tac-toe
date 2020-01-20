import { SET_AUTH_STATE } from './types';

const handlers = {
  [SET_AUTH_STATE]: (state, { isAuhted }) => {
    return {
      ...state,
      isAuhted
    };
  },
  DEFAULT: state => state
};

export const authReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action.payload);
};
