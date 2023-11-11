import CardTotal from "../../../components/admin-dashboard/CardTotal";
import RecentCustomer from "../../../components/admin-dashboard/RecentCustomer";
import StatisticCarts from "../../../components/admin-dashboard/StatisticCarts";
import TopBar from "../../../components/admin-dashboard/TopBar";
import TransactionDashboard from "../../../components/admin-dashboard/TransactionDashboard";
import SidedarAdmin from "../../../components/global-component/SidedarAdmin";

const Dashboard = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="grid " style={{ gridTemplateColumns: "1fr 3fr" }}>
        <SidedarAdmin />
        <div>
          <TopBar />
          <CardTotal />
          <div className="p-3  grid grid-cols-1 gap-3 md:m-3 md:grid-cols-2">
            <StatisticCarts />
            <RecentCustomer />
          </div>
          <TransactionDashboard />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
