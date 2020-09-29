import React from "react";

class Card extends React.Component {
  render() {
    console.log("the list", this.props.allFollowers);
    return (
      <>
        <h2>Card</h2>
      </>
    );
  }
}

export default Card;
