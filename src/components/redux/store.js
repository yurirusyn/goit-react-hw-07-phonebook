import { configureStore } from '@reduxjs/toolkit';
import { filter } from '../redux/phonebook/phonebook-reducer';
import storage from 'redux-persist/lib/storage';
import { contactsApi } from './phonebook/phonebookApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { composeWithDevTools } from 'redux-devtools-extension';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

export const store = configureStore(
  {
    reducer: {
      filter: filter,
      [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddlware =>
      getDefaultMiddlware().concat(contactsApi.middleware),
    // middleware: getDefaultMiddleware => [
    //   ...getDefaultMiddleware(),
    //   contactsApi.middleware,

    // ],
  },

  composeWithDevTools(),
);

setupListeners(store.dispatch);
