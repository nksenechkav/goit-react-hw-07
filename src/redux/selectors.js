export const selectContacts = (state) => state.contacts.contacts.items;

export const getIsLoading = (state) => state.contacts.isLoading;

export const getError = (state) => state.contacts.error;

export const selectNameFilter = (state) => state.filters.filters.name;