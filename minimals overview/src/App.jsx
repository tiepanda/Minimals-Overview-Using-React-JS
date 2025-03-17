import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Course Component
import Course from "./pages/Course";
import NavBar from "./pages/nav-bar/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Course />
    </>
  );
}

export default App;
