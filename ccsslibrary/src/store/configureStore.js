import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
//import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage,
  // stateReconciler: hardSet
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const persistor = persistStore(store)
// persistor.purge()
// export persistor
