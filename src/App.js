import { useContext } from "react";

import { ThemeContext } from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import Appinfo from "./pages/appinfo/Appinfo";
import Appinf from "./pages/appinf/Appinf";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Router>
        <Routes>
           <Route path="/appinfo" element={<Appinfo />} />
           <Route path="/appinf" element ={<Appinf/>}/>
          <Route path="/" element={<Home />
} />

       </Routes>
      </Router>
        
    </div>
  );
};

export default App;