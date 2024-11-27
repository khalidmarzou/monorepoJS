import logo from "../../assets/gestion_produits_transparent-.png";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="border-gray-200 bg-gray-50 sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center space-x-3">
          <img src={logo} className="h-24" alt="Gestion produits Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Gestion produits</span>
        </Link>
        <div id="navbar-solid-bg">
          <ul className="flex font-medium space-x-8">
            <li>
              <Link
                to={"/produits"}
                className={`py-2 px-3 ${location.pathname === "/produits" ? "text-white bg-blue-700" : "text-gray-900 hover:bg-gray-100"} rounded`}
              >
                Produits
              </Link>
            </li>
            <li>
              <Link
                to={"/produits/ajouter"}
                className={`py-2 px-3 ${
                  location.pathname === "/produits/ajouter" ? "text-white bg-blue-700" : "text-gray-900 hover:bg-gray-100"
                } rounded`}
              >
                Ajouter produit
              </Link>
            </li>
            <li>
              <Link
                to={"/ventes"}
                className={`py-2 px-3 ${location.pathname === "/ventes" ? "text-white bg-blue-700" : "text-gray-900 hover:bg-gray-100"} rounded`}
              >
                Ventes
              </Link>
            </li>
            <li>
              <Link
                to={"/client"}
                className={`py-2 px-3 ${location.pathname === "/client" ? "text-white bg-blue-700" : "text-gray-900 hover:bg-gray-100"} rounded`}
              >
                Client
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
