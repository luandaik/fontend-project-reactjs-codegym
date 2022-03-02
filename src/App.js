import { Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./router/AppRoute";

function App() {
  return (
      <BrowserRouter>
          <AppRoute />
      </BrowserRouter>
  );
}

export default App;
