import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

export default function Container() {
  return (
    <div className="bg-white md:w-2/3 w-full md:h-[90%] md:relative top-3 px-5 py-2 shadow-[inset_10px_0px_10px_rgba(0,0,0,0.25)] overflow-y-auto scrollbar-thin scrollbar-webkit">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
