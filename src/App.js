import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./About";
import { useState } from "react";
import Alert from "./Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// practice set
// import PracticeSet from "./components/PracticeSet";

function App() {
  const [alert, setAlert] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#072845";
      showAlert("Darkmode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route
              path="/"
              element={ */}
                <Textform
                  heading="Try TextUtils - Word Counter, Charcater Counter, Remove Extra Spaces"
                  mode={mode}
                  showAlert={showAlert}
                />
              {/* }
            />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
    // <>
    // <PracticeSet/>
    // </>
  );
}

export default App;


