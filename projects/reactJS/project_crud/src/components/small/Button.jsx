export default function Button({ content, colors, action, letsUpdate }) {
  return (
    <button className={`${colors} px-12 py-2 rounded font-bold text-xl text-white`} onClick={() => action(content)}>
      {letsUpdate && content === "Update" ? "Valid Update" : content}
    </button>
  );
}
