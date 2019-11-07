import { apiFinish, apiStart } from "../actions/apiActions";

export const apiMiddleware = ({ dispatch }) => next => action => {
  const { type, payload } = action;
  if (type !== "API") {
    return next(action);
  }
  if (type === "API") {
    const {
      url,
      method = "GET",
      onSuccess = null,
      onError = null,
      label
    } = payload;
    dispatch(apiStart(label));

    fetch(`${url}`, { method })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        if (typeof onSuccess !== "function") {
          console.log("onSuccess must be a function", onSuccess);
          console.error("onSuccess must be a function");
          return 1;
        }
        dispatch(onSuccess(data));
        dispatch(apiFinish(label));
      })
      .catch(err => {
        if (typeof onError !== "function") {
          console.error("onError must be a function");
          dispatch(apiFinish(label));
          return 1;
        }
        dispatch(onError(err));
        dispatch(apiFinish(label));
      });
  }
};
