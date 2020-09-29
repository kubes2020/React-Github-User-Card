import React from "react";

class Card extends React.Component {
  render() {
    console.log("the list", this.props.allFollowers);
    return (
      <>
        <h2>Card</h2>
        {this.props.allFollowers.map((fol) => (
          <div className="card-container">
            <p>{fol.login}</p>
            <img src={fol.avatar_url} key={fol.id} alt="pic" />
          </div>
        ))}
      </>
    );
  }
}

export default Card;
