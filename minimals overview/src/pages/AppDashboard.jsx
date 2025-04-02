import Dashboard from "../components/appDashboardComponents/dashboard/Dashboard.jsx";
import StatsSection from "../components/appDashboardComponents/statesSection/StatsSection.jsx";
import DownloadAnalytics from "../components/appDashboardComponents/analytics/DownloadAnalytics.jsx";
import InvoiceTable from "../components/appDashboardComponents/invoiceRelated/InvoiceTable.jsx";
import TopInstalledCountries from "../components/appDashboardComponents/topInstalledCountries/TopInstalledCountries.jsx";
// import ProfileMenu from '../components/appDashboardComponents/profileMenu/ProfileMenu.jsx'
import ProfileMenu from "../pages/profileMenu/ProfileMenu.jsx";

const AppDashboard = () => {
  return (
    // <StrictMode>
    <>
      {/* <ProfileMenu/> */}
      {/* <ProfileMenu/> */}
      <Dashboard />
      <StatsSection />
      <DownloadAnalytics />
      <InvoiceTable />
      <TopInstalledCountries />
    </>
  );
};

export default AppDashboard;
