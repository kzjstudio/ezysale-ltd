export const USER_ACTION_TYPES = {
    SET_CURRRENT_USER: "SET_CURRRENT_USER",
  };

  const INITIAL_STATE = {
    currentUser: null,
  };
  
  
  export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case USER_ACTION_TYPES.SET_CURRRENT_USER:
        return {
          ...state,
          currentUser: payload,
        };
      default:
       return state
    }
  };