import { Routes, Route } from "react-router-dom";
import HomePage from "@/modules/public/pages/home";
import AboutPage from "@/modules/public/pages/about";
import ContactPage from "@/modules/public/pages/contact";
import FAQPage from "@/modules/public/pages/faq";
import DesignerPage from "@/pages/Designer";
import ModelsPage from "@/pages/Models";
import SponsorsPage from "@/pages/Sponsors";
import TicketsPage from "@/pages/Tickets";
import EventsPage from "@/pages/events";
import LoginPage from "@/pages/auth/Login";
import SponsorshipApplicationPage from "@/pages/sponsors/SponsorshipApplication";
import CreateEventPage from "@/pages/admin/CreateEvent";
import RoleManagementPage from "@/components/admin/RoleManagement";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import RoleProtectedRoute from "@/components/auth/RoleProtectedRoute";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/designer" element={<DesignerPage />} />
      <Route path="/models" element={<ModelsPage />} />
      <Route path="/sponsors" element={<SponsorsPage />} />
      <Route path="/tickets" element={<TicketsPage />} />
      <Route path="/events/*" element={<EventsPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes */}
      <Route 
        path="/sponsors/apply" 
        element={
          <ProtectedRoute>
            <SponsorshipApplicationPage />
          </ProtectedRoute>
        } 
      />

      {/* Admin Routes */}
      <Route 
        path="/admin/events/create" 
        element={
          <RoleProtectedRoute allowedRoles={["admin"]}>
            <CreateEventPage />
          </RoleProtectedRoute>
        } 
      />
      <Route 
        path="/admin/roles" 
        element={
          <RoleProtectedRoute allowedRoles={["admin"]}>
            <RoleManagementPage />
          </RoleProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default App;