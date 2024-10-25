import React, { Component } from "react";

class WelcomeMeassage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      salutation: "",
    };
  }

  afficher = () => {
    this.setState({
      salutation: this.state.nom,
    });
  };

  render() {
    return (
      <div className="flex flex-col gap-3">
        <label>Welcome {this.state.salutation}</label>
        <input className="bg-green-100" onChange={(event) => this.setState({ nom: event.target.value })} type="text" />
        <button onClick={this.afficher}>Welcome</button>
      </div>
    );
  }
}

export default WelcomeMeassage;
