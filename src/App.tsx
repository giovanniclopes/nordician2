import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { BackgroundEffect } from "./components/BackgroundEffect";
import ScrollToTop from "./components/ScrollToTop";
import { LoadingProvider } from "./components/LoadingProvider";

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <ScrollToTop />
        <BackgroundEffect />
        <Router />
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
