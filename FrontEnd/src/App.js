// import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import AuthContextProvider from "./Auth/AuthContextProvider";
import AllRoutes from "./Routes/AllRoutes";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthContextProvider>
      <AllRoutes />
      </AuthContextProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
