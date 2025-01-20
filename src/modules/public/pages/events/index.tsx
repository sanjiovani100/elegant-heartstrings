import React from "react";
import { Routes, Route } from "react-router-dom";
import EventsListing from "./EventsListing";
import EventDetails from "./EventDetails";
import ValentinesEvent from "./ValentinesEvent";
import PublicLayout from "@/modules/public/layouts/PublicLayout";

const EventsPage = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route index element={<EventsListing />} />
        <Route path="valentines-2025" element={<ValentinesEvent />} />
        <Route path=":id" element={<EventDetails />} />
      </Routes>
    </PublicLayout>
  );
};

export default EventsPage;