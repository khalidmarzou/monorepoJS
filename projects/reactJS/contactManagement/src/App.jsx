import React from "react";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import CreateContact from "./components/CreateContact";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import EditContact from "./components/EditContact";

function App() {
  const location = useLocation();

  const validPaths = ["/contacts", "/create-contact", "/contacts/:contactID", "/contacts/:contactID/edit"];

  const showNavbar = validPaths.some((path) => matchPath(path, location.pathname));

  return (
    <>
      {showNavbar && <Navbar />}
      <div className="px-3">
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/create-contact" element={<CreateContact />} />
          <Route path="/contacts/:contactID" element={<Contact />} />
          <Route path="/contacts/:contactID/edit" element={<EditContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
