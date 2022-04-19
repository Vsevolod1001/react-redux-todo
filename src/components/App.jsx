import { AddContact } from './AddContact/AddContact';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter';

export const App = () => {
  return (
    <div>
      <AddContact />
      <hr />
      <Filter />
      <hr />
      <ContactList />
    </div>
  );
};
