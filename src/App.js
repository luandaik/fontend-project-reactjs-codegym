import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Analysis from "./components/Analysis/Analysis";
import Summany from "./components/Summany/Summany";
import ComicVnProject from "./components/ComicVnProject/ComicVnProject";

function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summany />
      <ComicVnProject />
    </div>
  );
}

export default App;
