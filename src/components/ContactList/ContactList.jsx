import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteTodo } from 'redux/todosSlice';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(us =>
    us.name.toLowerCase().includes(filter.toLowerCase())
  );
  const hendleDelete = e => {
    dispatch(deleteTodo(e.currentTarget.id));
  };
  return (
    <div>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" id={id} onClick={hendleDelete}>
            delete
          </button>
        </li>
      ))}
    </div>
  );
};
