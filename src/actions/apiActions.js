export const apiStart = label => ({
  type: "API_START",
  payload: {
    label
  }
});

export const apiFinish = label => ({
  type: "API_FINISH",
  payload: {
    label
  }
});
