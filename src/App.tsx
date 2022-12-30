import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Router as AllRoutes } from "./Router";
import ScrollToTop2 from './components/ScrollToTop2';

function App() {
  return (
    <Router>
      <ScrollToTop2 />
      <AllRoutes />
    </Router>
  );
}

export default App;
