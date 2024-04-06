import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createMigrate } from 'redux-persist';

import history from 'utils/history';
import { persist } from 'utils/reduxPersist';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const MIGRATION_DEBUG = false;
const legacyPersistConfig = {
  key: 'persistedLegacy',
  version: 1.2,
  migrate: createMigrate(legacyMigrations, { debug: MIGRATION_DEBUG }),
};

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        // appReducer: persist(legacyPersistConfig, appReducer),
        // KEY VALUE PAIRS - name of reducer: imported reducer from file
        //
        router: connectRouter(history),
        ...injectedReducers,
    });

    return rootReducer;
}
