import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        id: "",
        firstName: "",
        lastName: "",
      },
      students: [],
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      student: {
        ...this.state.student,
        [name]: value,
      },
    });
  };

  handleButtonClick = () => {
    const { student, students } = this.state;

    this.setState({
      students: [...students, student],
      student: { id: "", firstName: "", lastName: "" },
    });
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 py-10">
        <input
          type="number"
          placeholder="Enter your id"
          name="id"
          value={this.state.student.id}
          onChange={this.handleInputChange}
          className="mb-4 p-2 border rounded shadow w-96"
          required
        />
        <input
          type="text"
          placeholder="Enter your first name"
          name="firstName"
          value={this.state.student.firstName}
          onChange={this.handleInputChange}
          className="mb-4 p-2 border rounded shadow w-96"
          required
        />
        <input
          type="text"
          placeholder="Enter your last name"
          name="lastName"
          value={this.state.student.lastName}
          onChange={this.handleInputChange}
          className="mb-4 p-2 border rounded shadow w-96"
          required
        />
        <button onClick={this.handleButtonClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Add
        </button>
        <div className="relative overflow-x-auto">
          <table className="w-96 mt-6 text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((item, index) => (
                <tr key={index} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.id}
                  </th>
                  <td className="px-6 py-4">{item.firstName}</td>
                  <td className="px-6 py-4">{item.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Welcome;
