import Evenements from "./Evenements";

export default function Expert({ expert }) {
  return (
    <li className="flex flex-col gap-3">
      <h1 className="font-bold">{expert.nom_complet}</h1>
      <Evenements evenements={expert.evenements} />
    </li>
  );
}
