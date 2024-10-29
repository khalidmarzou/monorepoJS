import { useEffect } from "react";
import Expert from "./Expert";
import { useState } from "react";
import axios from "axios";

export default function Experts() {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/experts").then((data) => setExperts(data.data));
  }, []);

  return (
    <dl className="p-5">
      {experts.map((item, index) => (
        <Expert key={index} expert={item} />
      ))}
    </dl>
  );
}
