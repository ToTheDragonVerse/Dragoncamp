import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import LandingPage from './Components/Landingpage/index.js'
import Banner3 from "./Components/Banner3";
import Banner1 from "./Components/Banner1";
import Banner2 from "./Components/Banner2";
import Teamlist from "./pages/Team";
import NewTopHome from "./pages/NewTopHome";

function App() {
  return (
    <>
      <NewTopHome/>
      <LandingPage />
      <Banner3 />
      <Banner1/>
      <Banner2/>
      <Teamlist/>      
    </>
  );
}

export default App;
