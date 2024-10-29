import React, { Component } from "react";
import Table from "./Table";

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

  componentDidMount() {
    console.log("Welcome component rendered");
  }

  componentDidUpdate() {
    console.log("component Welcome is updated");
  }

  componentWillUnmount() {
    console.log("Welcome component unmounted");
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
      <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 py-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Student Registration</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl">
          <input
            min={1}
            max={10}
            type="number"
            placeholder="Enter your ID"
            name="id"
            value={this.state.student.id}
            onChange={this.handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded shadow w-full"
            required
            tabIndex={1}
          />
          <input
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={this.state.student.firstName}
            onChange={this.handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded shadow w-full"
            required
            tabIndex={2}
          />
          <input
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={this.state.student.lastName}
            onChange={this.handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded shadow w-full"
            required
            tabIndex={3}
          />
          <button
            onClick={this.handleButtonClick}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out"
            tabIndex={4}
          >
            Add Student
          </button>
        </div>

        <div className="relative overflow-x-auto mt-6 w-full max-w-5xl">
          {this.state.students.length < 5 && <Table students={this.state.students} />}
        </div>
      </div>
    );
  }
}

export default Welcome;
