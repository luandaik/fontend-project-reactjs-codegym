import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Analysis from "./components/Analysis/Analysis";
import Summany from "./components/Summany/Summany";
import ComicVnProject from "./components/ComicVnProject/ComicVnProject";
import Comics from "./components/Comics/Comics";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summany />
      <ComicVnProject />
      <Comics />
      <AboutMe />
      <Footer/>
    </div>
  );
}

export default App;
