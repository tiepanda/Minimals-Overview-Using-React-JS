import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import StatsSection from './components/statesSection/StatsSection.jsx'
import DownloadAnalytics from './components/analytics/DownloadAnalytics.jsx'
import InvoiceTable from './components/invoiceRelated/InvoiceTable.jsx'
import TopInstalledCountries from './components/topInstalledCountries/TopInstalledCountries.jsx'
import ProfileMenu from './components/profileMenu/ProfileMenu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ProfileMenu/>
    <Dashboard/>
    <StatsSection/>
    <DownloadAnalytics/>
    <InvoiceTable/>
    <TopInstalledCountries/> */}
  </StrictMode>,
)
