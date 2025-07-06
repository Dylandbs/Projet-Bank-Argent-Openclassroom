import "../css/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Sign_in from "./pages/Sign_in";
import Error404 from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sign_in" element={<Sign_in/>} />
        <Route path="*" element={<Error404/>} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
