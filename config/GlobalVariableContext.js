import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeviceVariables = {
  AUTHORIZATION_HEADER:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjYxNzg5NjUwLCJzdWIiOiJkODZkNzM3MC02NWIxLTQ0YTktYTlkMC0xOGJmYjZlNTBkODIiLCJlbWFpbCI6ImJlbGhvbW1lYWRyaWVuQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCJ9.BJZ--ONSyvsnsLf5bnM0QU6R5KWpcadpZWEu9PKjYfc',
  coachStar: 3,
  courseStar: 1,
  emailReset: 'a',
  getAge: '',
  getName: '',
  id: 'd86d7370-65b1-44a9-a9d0-18bfb6e50d82',
  modalFilter: false,
  name: '',
  ratingDifficile: false,
  ratingFacile: false,
  ratingNormal: true,
  trackActivityUser: '',
};
const AppVariables = {
  access_token:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjYxNzg5NjUwLCJzdWIiOiJkODZkNzM3MC02NWIxLTQ0YTktYTlkMC0xOGJmYjZlNTBkODIiLCJlbWFpbCI6ImJlbGhvbW1lYWRyaWVuQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCJ9.BJZ--ONSyvsnsLf5bnM0QU6R5KWpcadpZWEu9PKjYfc',
  age: 1,
  Api_Key_Header_Supa:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdla21kdG5ubnJmamduYWFkbnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY5NDczOTAsImV4cCI6MTk3MjUyMzM5MH0.4tFToZC4DBn0vC4tWabLgeAZgjNoYil5egWqW5ahffk',
  bande_de_resistance: false,
  block_yoga: false,
  cardio: false,
  category: 'méditation',
  chaise: false,
  cheville: false,
  coaching: false,
  coachName: 'Rahim',
  colorBottom: '5CFDE9',
  colorTop: '07ABC1',
  controlVideoVisible: true,
  corde: false,
  cou: false,
  danse: false,
  dos: false,
  duration: '',
  dureeQuaranteCinq: false,
  dureeQuinze: false,
  dureeSoixante: false,
  dureeTrente: false,
  emailok: '',
  epaules: false,
  ERROR_MESSAGE: '',
  errorUpdateData: '',
  filterListEmpty: false,
  fname: 'prenom...',
  freqCinq: false,
  freqDeux: false,
  freqQuatre: false,
  freqSept: false,
  freqSix: false,
  freqTrois: false,
  freqUn: false,
  genoux: false,
  genre: '',
  Greeting: '',
  haltere: false,
  idcourse: 'd8b74cd3-f38a-4bfa-b1e5-de2ec84d9f81',
  kettlebell: false,
  loading: true,
  modalCategorie: false,
  newClassToPush: '[uuid, uuid2]',
  niveau: 'débutant',
  objectif: '',
  pilates: false,
  poids: 'z',
  poignet: false,
  profilPic:
    'https://res.cloudinary.com/djl9nmkbs/image/upload/v1659953177/photo-avatar-profil_y1lowh.png',
  stop_button: true,
  stretching: false,
  tokenUserLogged: '',
  toning: false,
  true: true,
  uploadPreset: 'draftbitPreset',
  url_video:
    'https://res.cloudinary.com/djl9nmkbs/video/upload/v1655481756/video/vertical_emlpx7.mp4',
  Visible: false,
  yoga: false,
};
const GlobalVariableContext = React.createContext();
const GlobalVariableUpdater = React.createContext();

// Attempt to parse a string as JSON. If the parse fails, return the string as-is.
// This is necessary to account for variables which are already present in local
// storage, but were not stored in JSON syntax (e.g. 'hello' instead of '"hello"').
function tryParseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

class GlobalVariable {
  /**
   *  Filters an object of key-value pairs for those that should be
   *  persisted to storage, and persists them.
   *
   *  @param values Record<string, string>
   */
  static async syncToLocalStorage(values) {
    const update = Object.entries(values)
      .filter(([key]) => key in DeviceVariables)
      .map(([key, value]) => [key, JSON.stringify(value)]);

    if (update.length > 0) {
      await AsyncStorage.multiSet(update);
    }

    return update;
  }

  static async loadLocalStorage() {
    const entries = await AsyncStorage.multiGet(Object.keys(DeviceVariables));

    // If values isn't set, use the default. These will be written back to
    // storage on the next render.
    const withDefaults = entries.map(([key, value]) => [
      key,
      value ? tryParseJson(value) : DeviceVariables[key],
    ]);

    return Object.fromEntries(withDefaults);
  }
}

class State {
  static defaultValues = {
    ...AppVariables,
    ...DeviceVariables,
  };

  static reducer(state, { type, payload }) {
    switch (type) {
      case 'RESET':
        return { values: State.defaultValues, __loaded: true };
      case 'LOAD_FROM_ASYNC_STORAGE':
        return { values: { ...state.values, ...payload }, __loaded: true };
      case 'UPDATE':
        return state.__loaded
          ? {
              ...state,
              values: {
                ...state.values,
                [payload.key]: payload.value,
              },
            }
          : state;
      default:
        return state;
    }
  }

  static initialState = {
    __loaded: false,
    values: State.defaultValues,
  };
}

export function GlobalVariableProvider({ children }) {
  const [state, dispatch] = React.useReducer(State.reducer, State.initialState);

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  // This effect runs on mount to overwrite the default value of any
  // key that has a local value.
  React.useEffect(() => {
    async function initialStorageLoader() {
      try {
        const payload = await GlobalVariable.loadLocalStorage();
        dispatch({ type: 'LOAD_FROM_ASYNC_STORAGE', payload });
      } catch (err) {
        console.error(err);
      }
    }
    initialStorageLoader();
  }, []);

  // This effect runs on every state update after the initial load. Gives us
  // best of both worlds: React state updates sync, but current state made
  // durable next async tick.
  React.useEffect(() => {
    async function syncToAsyncStorage() {
      try {
        await GlobalVariable.syncToLocalStorage(state.values);
      } catch (err) {
        console.error(err);
      }
    }
    if (state.__loaded) {
      syncToAsyncStorage();
    }
  }, [state]);

  const onLayoutRootView = React.useCallback(async () => {
    if (state.__loaded) {
      await SplashScreen.hideAsync();
    }
  }, [state.__loaded]);

  // We won't want an app to read a default state when there might be one
  // incoming from storage.
  if (!state.__loaded) {
    return null;
  }

  return (
    <GlobalVariableUpdater.Provider
      value={dispatch}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableContext.Provider value={state.values}>
        {children}
      </GlobalVariableContext.Provider>
    </GlobalVariableUpdater.Provider>
  );
}

// Hooks
export function useSetValue() {
  const dispatch = React.useContext(GlobalVariableUpdater);
  return ({ key, value }) => {
    dispatch({ type: 'UPDATE', payload: { key, value } });
    return value;
  };
}

export function useValues() {
  return React.useContext(GlobalVariableContext);
}
