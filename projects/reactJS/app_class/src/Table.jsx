import { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("Table component unmounted");
  }

  componentDidMount() {
    console.log("Table component rendered");
  }

  render() {
    return (
      <table className="min-w-full mt-4 text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-blue-50">
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
          {this.props.students.map((item, index) => (
            <tr key={index} className="bg-white border-b transition duration-200 hover:bg-blue-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {item.id}
              </th>
              <td className="px-6 py-4">{item.firstName}</td>
              <td className="px-6 py-4">{item.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
