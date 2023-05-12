import { createSelector } from "reselect";
import { RootState } from "../../app/store";

export const selectors = {
  getContacts: createSelector(
    (state: RootState) => state.counter.contacts,
    (state) => state
  ),
};
