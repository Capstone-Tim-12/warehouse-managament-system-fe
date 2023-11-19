import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/index";
import Dashboard from "./pages/admin/dashboard";
import Error from "./pages/error";
import ManageGudang from "./pages/admin/manage-gudang";
import DetailGudang from "./pages/admin/detail-gudang";
import EditWarehouse from "./pages/admin/edit-warehouse";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Dashboard />} path="/admin/dashboard" />
          <Route element={<ManageGudang />} path="/admin/manage-gudang" />
          <Route element={<DetailGudang/>} path="/admin/detail-gudang"/> {/* router sementara */}
          <Route element={<EditWarehouse/>} path="/admin/edit-warehouse"/>
          <Route element={<Error />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
