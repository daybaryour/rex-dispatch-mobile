export default function setupAxios(axios, store) {
  axios.interceptors.request.use(
    (config) => {
      const auth = store.getState().auth;

      if (auth) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );
}
