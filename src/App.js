import "./App.css";
import Home from "./views/Home/home";
import EpisodePage from "./views/EpisodePage/episodePage";
import CharacterPage from "./views/CharacterPage/characterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div data-testid="app" className="App font-Montserrat">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episode/:id" element={<EpisodePage />} />
          <Route path="/character/:characterName" element={<CharacterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
