import React from "react";
import { Routes, Route } from "react-router-dom";
import { Form } from "../pages/Form";
import { Dashboard } from "../pages/Dashboard";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export { AllRoutes };
