// import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import AuthContextProvider from "./Auth/AuthContextProvider";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthContextProvider>
      <Home />
      </AuthContextProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
