import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistedStore} from './src/store/configStore';
import {I18nextProvider} from 'react-i18next';
import i18n from './Translations';

import AppNavigator from './src/navigations';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <I18nextProvider i18n={i18n}>
          <AppNavigator />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}
