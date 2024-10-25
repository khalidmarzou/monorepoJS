import { Component } from "react";

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenement: {
        expert: "",
        theme: "",
        date_debut: "",
        date_fin: "",
        cout_journalier: "",
      },
      submittedData: null,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ evenement: { ...this.state.evenement, [name]: value } });
  };

  handleClick = () => {
    const { date_debut, date_fin, cout_journalier, expert, theme } = this.state.evenement;

    let duree = new Date(date_fin) - new Date(date_debut);
    duree = duree / (1000 * 60 * 60 * 24) + 1;

    this.setState({
      submittedData: {
        expert,
        theme,
        cout_journalier,
        duree,
        totalCost: cout_journalier * duree,
      },
    });
  };

  render() {
    return (
      <div className="px-4 py-2 h-auto w-1/2 flex flex-col items-center justify-center mb-10">
        <h2 className="text-3xl font-semibold text-center">Ajouter Evenement a l'Expert</h2>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="theme">
                Théme
              </label>
              <input
                tabIndex={1}
                type="text"
                name="theme"
                onChange={this.handleChange}
                placeholder="Event Theme"
                required
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date_debut">
                Date de debut
              </label>
              <input
                tabIndex={2}
                type="date"
                name="date_debut"
                onChange={this.handleChange}
                required
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date_fin">
                Date de fin
              </label>
              <input
                tabIndex={3}
                type="date"
                name="date_fin"
                onChange={this.handleChange}
                required
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cout_journalier">
                Cout Journalier
              </label>
              <input
                tabIndex={5}
                type="number"
                name="cout_journalier"
                onChange={this.handleChange}
                placeholder="Daily Cost"
                required
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expert">
              Expert
            </label>
            <input
              tabIndex={1}
              type="text"
              name="expert"
              onChange={this.handleChange}
              placeholder="Expert ..."
              required
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={this.handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full mt-6 transition duration-300"
          >
            Ajouter Evenement a l'expert
          </button>
        </div>

        {this.state.submittedData ? (
          <p className="text-justify py-5">{`L'expert: ${this.state.submittedData.expert} assura le théme: ${this.state.submittedData.theme}. avec un cout journalier: ${this.state.submittedData.cout_journalier} pour une duree de: ${this.state.submittedData.duree}, soit un cout total de: ${this.state.submittedData.totalCost} Dhs`}</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Formulaire;
