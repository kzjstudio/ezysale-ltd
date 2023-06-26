export const middleWrareLogger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type", action.type);
  console.log("payload", action.payLoad);
  console.log("currentState", store.getState());

  next(action);

  console.log("next State", store.getState());
};
