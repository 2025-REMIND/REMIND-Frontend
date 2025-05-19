import MemoryRecord from "./components/memoryrecord/MemoryRecord";
import MainHome from "./pages/MainHome";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainHome />
      <MemoryRecord />
    </>
  );
}

export default App;