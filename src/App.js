import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TailwindAndStyledComponentsNavbar from "./tailwind-styled/navbar";
// import NavbarWithButtons from "./tailwindcss/navbar/index.jsx"

function App() {
  return (
    <Router>
      {/* <NavbarWithButtons /> */}
      <TailwindAndStyledComponentsNavbar />
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
