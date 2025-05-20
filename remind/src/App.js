import MainHomePage from "./pages/MainHomePage";
import MemoryRecordPage from "./pages/MemoryRecordPage";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path = "/" element = { <MainHomePage /> } />
        <Route path = "/home" element = { <MainHomePage /> } />
        <Route path = "/memoryrecord" element = { <MemoryRecordPage /> } />
      </Routes>
    </Router>
  );
}

export default App;