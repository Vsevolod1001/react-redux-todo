import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 'id-1', name: 'Юрий Иванович ', number: '459-12-56' },
    { id: 'id-2', name: 'Сергей Петрович ', number: '443-89-12' },
    { id: 'id-3', name: 'Ашот  Арабович', number: '645-17-79' },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: shortid.generate(),
        name: action.payload.name,
        number: action.payload.number,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
