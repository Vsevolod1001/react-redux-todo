import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContact } from 'redux/todosSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(filterContact(e.currentTarget.value))}
        />
      </label>
    </div>
  );
};
