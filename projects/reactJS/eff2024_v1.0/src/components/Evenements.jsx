let a = 0;
export default function Evenements({ evenements }) {
  let totalCouts = 0;

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Théme
            </th>
            <th scope="col" className="px-6 py-3">
              Date de début
            </th>
            <th scope="col" className="px-6 py-3">
              Date de fin
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Coût Journalier
            </th>
            <th scope="col" className="px-6 py-3">
              Durée (jours)
            </th>
            <th scope="col" className="px-6 py-3">
              Coût Total Evénement
            </th>
          </tr>
        </thead>
        <tbody>
          {evenements.map((evenement) => {
            const coutTotal = evenement.cout_journalier * evenement.duree;
            totalCouts += coutTotal;
            a++;
            return (
              <tr key={a} className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {evenement.theme}
                </th>
                <td className="px-6 py-4">{evenement.date_debut}</td>
                <td className="px-6 py-4">{evenement.date_fin}</td>
                <td className="px-6 py-4">{evenement.description}</td>
                <td className="px-6 py-4">{evenement.cout_journalier}</td>
                <td className="px-6 py-4">{evenement.duree}</td>
                <td className="px-6 py-4">{coutTotal}</td>
              </tr>
            );
          })}
          <tr className="bg-white border-b">
            <th colSpan="6" scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-red-50">
              Total des couts des événements assurés est :
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-red-50">
              {totalCouts}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
