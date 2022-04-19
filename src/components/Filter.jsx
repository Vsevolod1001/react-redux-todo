export const Filter = ({ setFilter, filter }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={e => setFilter(e.currentTarget.value)}
        />
      </label>
    </div>
  );
};
