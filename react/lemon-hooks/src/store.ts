import { Store, createStore } from 'redux';

import { state, State } from './reducers';

export const store: Store<State> = createStore(
  state
);