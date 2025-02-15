import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { BackgroundEffect } from "./components/BackgroundEffect";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BackgroundEffect />
      <Router />
    </BrowserRouter>
  );
}

export default App;
