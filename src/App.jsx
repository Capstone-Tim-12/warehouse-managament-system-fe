import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/index"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage/>} path="/"/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
