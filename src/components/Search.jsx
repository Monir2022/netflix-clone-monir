export default function Search({ search, onChange }) {
  return (
    <div id="search">
      <input value={search} onChange= {onChange}/>
      <button>Search</button>
    </div>
  );
}
