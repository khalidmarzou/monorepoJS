import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      student: {
        id: "",
        nom: "",
        prenom: "",
      },
    };
  }

  sauvgarder = () => {
    this.setState({ students: [...this.state.students, this.state.student] });
  };

  render() {
    return (
      <>
        <div className="flex flex-col gap-3 items-center">
          <label htmlFor="id">ID :</label>
          <input
            className="bg-gray-100 border"
            type="number"
            name="id"
            onChange={(event) => this.setState({ student: { ...this.state.student, id: event.target.value } })}
          />
          <label htmlFor="nom">Nom :</label>
          <input
            className="bg-gray-100 border"
            type="text"
            name="nom"
            onChange={(event) => this.setState({ student: { ...this.state.student, nom: event.target.value } })}
          />
          <label htmlFor="prenom">Prenom :</label>
          <input
            className="bg-gray-100 border"
            type="text"
            name="prenom"
            onChange={(event) => this.setState({ student: { ...this.state.student, prenom: event.target.value } })}
          />
          <button onClick={this.sauvgarder}>Ajouter</button>
        </div>
        <table border="2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prenom</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nom}</td>
                  <td>{item.prenom}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Form;
