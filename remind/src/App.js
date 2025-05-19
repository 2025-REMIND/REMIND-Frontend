import Header from "./components/home/header/Header";
import Intro from "./components/home/intro/Intro";
import MemoryRecord from "./components/home/memoryrecord/MemoryRecord";
import PlanArchive from "./components/home/planarchive/PlanArchive";
import Rimi from "./components/home/rimi/Rimi";
import TodayPlan from "./components/home/todayplan/TodayPlan";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Intro />
      <PlanArchive />
      <TodayPlan />
      <MemoryRecord />
      <Rimi />
    </>
  );
}

export default App;