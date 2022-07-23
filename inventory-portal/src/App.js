import logo from "./logo.svg";
import "./App.css";
import UINavbar from "./components/UINavbar";
import "bootstrap/dist/css/bootstrap.css";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <UINavbar />
      <br />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default App;
