import { Navigate, Route, Routes } from "react-router";

import { Layout } from "@/components/Layout";
import { Dashboard } from "@/pages/Dashboard";
import { Home } from "@/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
