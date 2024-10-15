import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import SettingsProvider from "./contexts/SettingsContext";
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </Provider>,
);
