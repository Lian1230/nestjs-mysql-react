import { FC, createContext, Dispatch, useContext } from 'react';
import { useReducer } from 'reinspect';
import { Action, User } from './action';
import { reducer } from './reducer';

export interface Store {
  user?: User | null;
}

export const INIT_STATE = {};

const StoreContext = createContext<Store & { dispatch: Dispatch<Action> }>({
  ...INIT_STATE,
  dispatch: () => null,
});

const StoreProvider: FC = ({ children }) => {
  const [store, dispatch] = useReducer(
    reducer,
    INIT_STATE,
    (state) => state,
    'STORE',
  );

  return (
    <StoreContext.Provider value={{ ...store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
