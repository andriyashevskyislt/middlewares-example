export const fetchTeams = () => ({
  type: "API",
  payload: {
    url: "https://5dc3e6181666f60014780162.mockapi.io/teams",
    method: "GET",
    onSuccess: addTeams,
    onError: err => {
      console.log("we have error"); // here we can logs error with error action or something else
    },
    label: "team"
  }
});

const addTeams = teamData => ({
  type: "ADD_TEAMS",
  payload: {
    data: teamData
  }
});
