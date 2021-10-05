import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Notifier from '~/components/Notifier';
import './config/ReactotronConfig';
import Routes from './routes';
import { persistor, store } from './store';
import Global from './styles/global';

const snackbarProviderOptions = {
  vertical: 'top',
  horizontal: 'right',
};

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
          <Global />
          <SnackbarProvider maxSnack={4} anchorOrigin={snackbarProviderOptions}>
            <BrowserRouter>
              <QueryClientProvider client={queryClient}>
                <Notifier />
                <Routes />
              </QueryClientProvider>
            </BrowserRouter>
          </SnackbarProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
