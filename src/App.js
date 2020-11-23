import './config/ReactotronConfig';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { store, persistor } from './store';
import Routes from './routes';
import Global from './styles/global';
import Notifier from '~/components/Notifier';

const snackbarProviderOptions = {
  vertical: 'top',
  horizontal: 'right',
};

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
          <Global />
          <SnackbarProvider maxSnack={4} anchorOrigin={snackbarProviderOptions}>
            <BrowserRouter>
              <Notifier />
              <Routes />
            </BrowserRouter>
          </SnackbarProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
