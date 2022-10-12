import { Route, Routes } from "react-router-dom";
import "./App.css";
import Donate from "./pages/Forms";
import Landing from "./pages/Landing";
import Success from "./pages/Success";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
