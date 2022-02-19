import { FC, createContext, Dispatch, useContext } from 'react';
import { useReducer } from 'reinspect';
import { Action } from './action';
import { User, Game } from './types';
import { reducer } from './reducer';

export interface Store {
  user?: User | null;
  games?: Game[] | null;
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
