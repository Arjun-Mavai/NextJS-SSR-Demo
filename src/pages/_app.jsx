import { Provider } from "react-redux";
import { store } from "../store";

function MyApp({ Component, pageProps }) {
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>;
}

export default MyApp;
