import Axios from "axios";
import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/kubes2020/followers")
      .then((res) => {
        console.log("gh response", res.data);
      })
      .catch((err) => {
        console.log("something wong", EvalError);
      });
  }

  render() {
    return (
      <>
        <h1>Followers</h1>
      </>
    );
  }
}

export default App;
