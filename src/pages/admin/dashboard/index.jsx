import CardTotal from "../../../components/admin-dashboard/CardTotal";
import RecentCustomer from "../../../components/admin-dashboard/RecentCustomer";
import StatisticCarts from "../../../components/admin-dashboard/StatisticCarts";
import TopBar from "../../../components/global-component/TopBar";
import TransactionDashboard from "../../../components/admin-dashboard/TransactionDashboard";
import SidebarAdmin from "../../../components/global-component/SidebarAdmin";

const Dashboard = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div className=" grid grid-cols-1 md:grid-cols-[0fr_3fr]">
        <SidebarAdmin />
        <div>
          <TopBar title={"Statistik Umum"} />
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
