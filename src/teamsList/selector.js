export function teamsListContainerSelector(state) {
  const {
    teams,
    ui: { pendingLabels }
  } = state;

  const isLoading = pendingLabels.findIndex(item => item === "team");

  return {
    teams,
    isLoading: isLoading !== -1
  };
}
