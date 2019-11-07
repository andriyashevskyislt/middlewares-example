import produce from "immer";

const initialState = {
  pendingLabels: []
};

export const loadersReducer = produce((state, action) => {
  switch (action.type) {
    case "API_START":
      state.pendingLabels.push(action.payload.label);
      break;
    case "API_FINISH":
      state.pendingLabels = state.pendingLabels.filter(
        item => item !== action.payload.label
      );
      break;
    default:
      return state;
  }
}, initialState);
