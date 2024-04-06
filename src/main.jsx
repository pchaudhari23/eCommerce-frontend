import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'

// import configureStore from './store/configureStore';

// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react'; // eslint-disable-line global-require

const initialState = {};
// const store = configureStore(initialState, history);

// const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>,
)
