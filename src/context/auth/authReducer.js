import { SET_AUTH_STATE, SET_LOADING, SET_ERROR } from './types';

const handlers = {
  [SET_AUTH_STATE]: (state, { isAuthed }) => {
    return {
      ...state,
      isAuthed
    };
  },

  [SET_ERROR]: (state, { message }) => {
    return {
      ...state,
      error: message
    };
  },

  [SET_LOADING]: (state, { isLoading }) => {
    return {
      ...state,
      isLoading
    };
  },
  DEFAULT: state => state
};

export const authReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action.payload);
};
