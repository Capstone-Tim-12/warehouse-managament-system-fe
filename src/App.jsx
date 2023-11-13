import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/index";
import Dashboard from "./pages/admin/dashboard";
import Error from "./pages/error";
import ManageGudang from "./pages/admin/manage-gudang";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Dashboard />} path="/admin/dashboard" />
          <Route element={<ManageGudang />} path="/admin/manage-gudang" />
          <Route element={<Error />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
