import React from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/kubes2020/followers")
      .then((res) => {
        console.log("gh response", res.data);
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log("something wong", err);
      });
  }

  render() {
    return (
      <>
        <h1>Followers</h1>
        <Card allFollowers={this.state.followers} />
      </>
    );
  }
}

export default App;
