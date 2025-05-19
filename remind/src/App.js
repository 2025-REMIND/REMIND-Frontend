import Header from "./components/home/header/Header";
import Intro from "./components/home/intro/Intro";
import PlanArchive from "./components/home/planarchive/PlanArchive";
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
    </>
  );
}

export default App;