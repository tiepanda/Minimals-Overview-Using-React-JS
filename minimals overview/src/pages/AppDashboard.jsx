import Dashboard from '../components/dashboard/Dashboard.jsx'
import StatsSection from '../components/statesSection/StatsSection.jsx'
import DownloadAnalytics from '../components/analytics/DownloadAnalytics.jsx'
import InvoiceTable from '../components/invoiceRelated/InvoiceTable.jsx'
import TopInstalledCountries from '../components/topInstalledCountries/TopInstalledCountries.jsx'
import ProfileMenu from '../components/profileMenu/ProfileMenu.jsx'

// createRoot(document.getElementById('root')).render(

const AppDashboard =() =>{
    return(
        // <StrictMode>
        <>
        <ProfileMenu/>
        <Dashboard/>
        <StatsSection/>
        <DownloadAnalytics/>
        <InvoiceTable/>
        <TopInstalledCountries/>
    </>
    );
};

// )

export default AppDashboard;