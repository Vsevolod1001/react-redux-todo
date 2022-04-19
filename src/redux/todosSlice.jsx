import { createSlice } from '@reduxjs/toolkit';
// import shortid from 'shortid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 'id-1', name: 'Юрий Иванович ', number: '459-12-56' },
      { id: 'id-2', name: 'Сергей Петрович ', number: '443-89-12' },
      { id: 'id-3', name: 'Ашот  Арабович', number: '645-17-79' },
    ],
    filter: '',
  },

  reducers: {
    addTodo: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
    }),
    // addTodo: (state, action) => {
    //   const newTodo = {
    //     id: shortid.generate(),
    //     name: action.payload.name,
    //     number: action.payload.number,
    //   };
    //   state.push(newTodo);
    // },
    deleteTodo: (state, action) => {
      return {
        items: state.items.filter(todo => todo.id !== action.payload),
        filter: '',
      };
    },
    filterContact: (state, { payload }) => {
      return { ...state, filter: payload };
    },
  },
});

export const { addTodo, deleteTodo, filterContact } = todosSlice.actions;
export default todosSlice.reducer;
