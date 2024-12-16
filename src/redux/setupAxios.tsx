import {
  EnhancedStore,
  Action,
  Tuple,
  StoreEnhancer,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";
import { AxiosStatic } from "axios";
import { PersistPartial } from "redux-persist/es/persistReducer";

const setupAxios = (
  axios: AxiosStatic,
  store: EnhancedStore<
    PersistPartial,
    Action,
    Tuple<
      [
        StoreEnhancer<{
          dispatch: ThunkDispatch<PersistPartial, undefined, UnknownAction>;
        }>,
        StoreEnhancer
      ]
    >
  >
) => {
  axios.interceptors.request.use(
    (config) => {
      const { auth }: any = store.getState();

      if (auth) {
        config.headers.Authorization = `Bearer ${auth.token}`;
        config.headers["Access-Key"] =
          "bo9qGEgCOKJqgr0RMqIcqQcBwgeiXv3IsQlqhtGIhm3gdIf0iM5yAwdsvtR20O";
      }
      return config;
    },
    (err) => Promise.reject(err)
  );
  axios.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (err: { response: { status: number } }) => {
      if (err.response && err.response.status === 401) {
      }
      return Promise.reject(err);
    }
  );
};

export default setupAxios;
