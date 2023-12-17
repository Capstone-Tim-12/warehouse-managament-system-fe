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
import DetailUser from "./pages/admin/manage-user/DetailUser";
import CreateWarehouse from "./pages/admin/create-warehouse/CreateWarehouse";
import PrivateRoute from "./features/PrivateRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
          path="/admin/dashboard"
        />
        <Route
          element={
            <PrivateRoute>
              <ManageGudang />
            </PrivateRoute>
          }
          path="/admin/manage-gudang"
        />
        <Route
          element={
            <PrivateRoute>
              <DetailGudang />
            </PrivateRoute>
          }
          path="/admin/detail-gudang/:id"
        />
        <Route
          element={
            <PrivateRoute>
              <AdminSetting />
            </PrivateRoute>
          }
          path="/admin/pengaturan"
        />
        <Route element={<LoginAdmin />} path="/admin/login-admin" />
        <Route
          element={
            <PrivateRoute>
              <AllTransactions />
            </PrivateRoute>
          }
          path="/admin/all-transactions"
        />
        <Route
          element={
            <PrivateRoute>
              <Transaction />
            </PrivateRoute>
          }
          path="/admin/transaksi"
        />
        <Route
          element={
            <PrivateRoute>
              <EditWarehouse />
            </PrivateRoute>
          }
          path="/admin/edit-warehouse/:id"
        />
        <Route
          element={
            <PrivateRoute>
              <ManageUser />
            </PrivateRoute>
          }
          path="/admin/manage-user"
        />
        <Route
          element={
            <PrivateRoute>
              <DetailUser />
            </PrivateRoute>
          }
          path="/admin/detail-user/:id"
        />
        <Route
          element={
            <PrivateRoute>
              <CreateWarehouse />
            </PrivateRoute>
          }
          path="/admin/create-warehouse"
        />
        <Route element={<Error />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
