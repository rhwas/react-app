import './App.css';
import './AppUtilities.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import States from "pages/States/States";
import Provinces from "pages/Provinces/Provinces";
import { RoutePaths } from 'Enums/RoutePaths';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePaths.HOME} element={<Home />} />
        <Route path={RoutePaths.STATES} element={<States />} />
        <Route path={RoutePaths.PROVINCES} element={<Provinces />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
