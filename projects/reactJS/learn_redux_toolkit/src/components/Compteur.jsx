import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrementer, incrementer } from "../features/compteur/compteurSlice";

export default function Compteur() {
  const count = useSelector((state) => state.compteur.nombre);
  const dispatch = useDispatch();

  function handleIncrementer() {
    dispatch(incrementer());
  }

  function handleDecrementer() {
    dispatch(decrementer());
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url(bg.jpg)" }}>
      <div className="flex items-center justify-center w-full gap-4">
        <div className="rounded-xl bg-black/30 backdrop-blur-sm py-6 px-4 flex flex-col items-center gap-2">
          <h3 className="font-bold text-9xl px-5 py-3 text-white">
            {count < 10 && count >= 0 ? "0" : ""}
            {count}
          </h3>
          <p className="text-lg font-light text-gray-300">Current Count</p>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <button
          onMouseDown={handleIncrementer}
          className="px-6 py-4 font-extrabold text-xl rounded bg-green-500 text-white hover:bg-green-600 transition"
        >
          Incrementer
        </button>
        <button
          onMouseDown={handleDecrementer}
          className="px-6 py-4 font-extrabold text-xl rounded bg-red-500 text-white hover:bg-red-600 transition"
        >
          Decrementer
        </button>
      </div>
    </div>
  );
}
