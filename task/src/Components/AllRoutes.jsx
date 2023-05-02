import React from "react";
import { Routes, Route } from "react-router-dom";
import { Form } from "./Form";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Form />} />
      </Routes>
    </div>
  );
};

export { AllRoutes };
