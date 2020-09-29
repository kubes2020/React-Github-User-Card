import React from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: [],
      user: "kubes2020",
    };
  }

  // user = "kubes2020";

  componentDidMount() {
    this.getFollowers(this.state.user);
  }

  getFollowers = (user) => {
    axios
      .get(`https://api.github.com/users/${user}/followers`)
      .then((res) => {
        console.log("gh response", res.data);
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log("something wong", err);
      });
  };

  onChange = (e) => {
    e.persist();
    this.setState({
      user: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <h1>Followers</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="user">
            Name of User
            <input
              type="text"
              id="user"
              onChange={this.onChange}
              value={this.state.user}
            ></input>
          </label>
          <button>Submit</button>
        </form>
        <Card allFollowers={this.state.followers} />
      </>
    );
  }
}

export default App;
