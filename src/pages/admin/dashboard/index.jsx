import CardTotal from "../../../components/admin-dashboard/CardTotal";
import RecentCustomer from "../../../components/admin-dashboard/RecentCustomer";
import StatisticCarts from "../../../components/admin-dashboard/StatisticCarts";
import TopBar from "../../../components/admin-dashboard/TopBar";
import TransactionDashboard from "../../../components/admin-dashboard/TransactionDashboard";
import SidedarAdmin from "../../../components/global-component/SidedarAdmin";

const Dashboard = () => {
  return (
    <>
      <SidedarAdmin />
      <TopBar />
      <CardTotal />
      <div>
        <StatisticCarts />
        <RecentCustomer />
      </div>
      <TransactionDashboard />
    </>
  );
};
export default Dashboard;
