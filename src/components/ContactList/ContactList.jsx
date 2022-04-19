// import { useDispatch } from 'react-redux';
// import { deleteTodo } from 'redux/todosSlice';
export const ContactList = ({ contacts, setContacts }) => {
  // const dispatch = useDispatch();
  const hendleDelete = id => {
    setContacts([...contacts].filter(us => us.id !== id));
  };
  return (
    <div>
      {contacts.map(us => (
        <li key={us.id}>
          {us.name}: {us.number}
          <button type="button" onClick={() => hendleDelete(us.id)}>
            delete
          </button>
        </li>
      ))}
    </div>
  );
};
