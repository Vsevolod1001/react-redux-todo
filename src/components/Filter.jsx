export const Filter = ({ setFilter, filter }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.currentTarget.value)}
      />
    </div>
  );
};
