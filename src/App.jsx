import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/index";
import Dashboard from "./pages/admin/dashboard";
import Error from "./pages/error";
import ManageGudang from "./pages/admin/manage-gudang";
import DetailGudang from "./pages/admin/detail-gudang";
import AdminSetting from "./pages/admin/setting";
import LoginAdmin from "./pages/admin/login-admin";
import Transaction from "./pages/admin/transaction";
import EditWarehouse from "./pages/admin/edit-warehouse";
import AllTransactions from "./pages/admin/transaction/AllTransactions";
import ManageUser from "./pages/admin/manage-user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<Dashboard />} path="/admin/dashboard" />
        <Route element={<ManageGudang />} path="/admin/manage-gudang" />
        <Route element={<DetailGudang />} path="/admin/detail-gudang" /> 
        <Route element={<AdminSetting />} path="/admin/pengaturan" />
        <Route element={<LoginAdmin />} path="/admin/login-admin" />
        <Route element={<AllTransactions />} path="/admin/all-transactions" />
        <Route element={<Transaction />} path="/admin/transaksi" />
        <Route element={<EditWarehouse/>} path="/admin/edit-warehouse"/>
        <Route element={<ManageUser/>} path="/admin/manage-user"/>
        <Route element={<Error />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
