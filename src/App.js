import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./App.css";
import TeamListContainer from "./teamsList/TeamListContainer";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TeamListContainer />
      </div>
    </Provider>
  );
}

export default App;
