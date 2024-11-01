import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import ThemeProvider from "./theme";
import SnackbarComp from "./components/SnackBar";

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <SnackbarComp />
    </>
  );
}

export default App;
