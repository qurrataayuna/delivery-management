import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "../redux/index";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = configureStore({
    reducer: rootReducer,
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
