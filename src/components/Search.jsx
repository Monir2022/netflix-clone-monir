export default function Search({ search, onChange }) {
  return (
    <div>
      <input value={search} onChange={onChange} />
      <button>Search</button>
    </div>
  );
}
