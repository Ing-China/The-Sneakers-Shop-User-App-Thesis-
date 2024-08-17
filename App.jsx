import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistedStore} from './src/store/configStore';
import {I18nextProvider} from 'react-i18next';
import i18n from './Translations';
import {CacheManager} from '@georstat/react-native-image-cache';
import {Dirs} from 'react-native-file-access';
import AppNavigator from './src/navigations';

CacheManager.config = {
  baseDir: `${Dirs.CacheDir}/images_cache/`,
  blurRadius: 15,
  cacheLimit: 0,
  maxRetries: 3,
  retryDelay: 3000,
  sourceAnimationDuration: 1000,
  thumbnailAnimationDuration: 1000,
};

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
