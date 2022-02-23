// export const getContacts = state => state.contacts.payload;
export const getFilter = state => state.filter;

export const getFilterContacts = (state, contacts) => {
  // const contacts = getContacts(state);
  if (contacts.length) {
    const filter = getFilter(state);
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  } else {
    return [];
  }
};
