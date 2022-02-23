import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

export const filter = createReducer('', {
  [actions.filter]: (_, { payload }) => payload,
});

// const phonebook = {
//   filter,
// };
// export default phonebook;
