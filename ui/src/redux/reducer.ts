import { Action, ActionType } from './action';
import { Store } from './store';

export const reducer = (store: Store, action: Action): Store => {
  switch (action.type) {
    case ActionType.PersistUser:
      return { ...store, user: action.user };

    case ActionType.Logout:
      return { ...store, user: null };

    default:
      return store;
  }
};
