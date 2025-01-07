import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./features/view/public/login/LoginPage";

const Dashboard = React.lazy(() =>
  import("./features/view/private/dashboard/Dashboard")
);

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="spinner-container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
