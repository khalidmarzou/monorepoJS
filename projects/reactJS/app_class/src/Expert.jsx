import Event from "./Event";

export default function Expert({ expert }) {
  return (
    <>
      <dt className="font-extrabold text-red-700">
        {expert.nom_complet}
      </dt>
      {expert.evenements.map((item, index) => (
        <Event key={index} event={item} />
      ))}
    </>
  );
}
