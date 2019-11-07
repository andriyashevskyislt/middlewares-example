import produce from "immer";

export const teamReducer = produce((state, action) => {
  switch (action.type) {
    case "ADD_TEAMS":
      state.push(...action.payload.data);
      break;
    default:
      return state;
  }
}, []); //[] - thats initial state
