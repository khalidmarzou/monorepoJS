import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExpertsList from "./components/ExpertsList";
import CreateExpert from "./components/CreateExpert";
import ExpertDetails from "./components/ExpertDetails";
import AddEvent from "./components/AddEvent";
import DeleteExpert from "./components/DeleteExpert";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="w-full h-full bg-gray-50">
        <Navbar />
        <div className="h-[90%] w-full bg-white shadow-lg rounded-lg p-6">
          <Routes>
            <Route path="/" element={<ExpertsList />} />
            <Route path="/create" element={<CreateExpert />} />
            <Route path="/expert/:id" element={<ExpertDetails />} />
            <Route path="/expert/:id/event/add" element={<AddEvent />} />
            <Route path="/expert/:id/delete" element={<DeleteExpert />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
