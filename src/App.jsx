import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Pages/Navbar";
import ApiCards from "./ApiCards"
import Display from "./Api/Display";
import PracDisplay from "./Api/PracDisplay";
import MovieDisplay from "./Api/PracDisplay";
import Movies from "./Api/Movies";
import GetApi from "./Api/GetApi";
import Prac from "./Api/Prac";
import Navbar2 from "./page/Navbar"
import NewsSection from "./page/NewsSction";


function App() {

  return (
    <>
      {/* <Navbar />
      <ApiCards /> */}
      {/* <Display /> */}
      {/* <MovieDisplay /> */}
      {/* <Movies /> */}
      {/* <GetApi /> */}
      {/* <Prac /> */}
      <Navbar2 />
      <NewsSection />
    </>
  )
}

export default App
