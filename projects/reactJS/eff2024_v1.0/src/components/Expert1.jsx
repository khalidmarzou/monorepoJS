import Expert from "./Expert";
import expertsData from "./expertsData";

export default function Expert1({ experts = expertsData }) {
  return (
    <>
      <h2 className="mb-2 text-2xl font-semibold text-gray-900 text-center">List des Experts :</h2>
      <ul className="w-5/6 space-y-1 text-gray-500 list-disc list-inside px-5 flex flex-col gap-10">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </ul>
    </>
  );
}
