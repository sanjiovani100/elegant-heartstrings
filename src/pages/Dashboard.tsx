import { Routes, Route } from 'react-router-dom'
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { DashboardContent } from "@/components/dashboard/DashboardContent"
import { DashboardOverview } from "@/components/dashboard/sections/DashboardOverview"
import { EventManagement } from "@/components/dashboard/sections/EventManagement"
import { TicketManagement } from "@/components/dashboard/sections/TicketManagement"
import { StakeholderManagement } from "@/components/dashboard/sections/StakeholderManagement"
import { Communication } from "@/components/dashboard/sections/Communication"
import { ContentManagement } from "@/components/dashboard/sections/ContentManagement"
import { Settings } from "@/components/dashboard/sections/Settings"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white">
        <DashboardSidebar />
        <Routes>
          <Route index element={<DashboardOverview />} />
          <Route path="events" element={<EventManagement />} />
          <Route path="tickets" element={<TicketManagement />} />
          <Route path="stakeholders" element={<StakeholderManagement />} />
          <Route path="communication" element={<Communication />} />
          <Route path="content" element={<ContentManagement />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </SidebarProvider>
  )
}