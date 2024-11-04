import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Dynamin Components */}
      <div className="wrapper min-h-screen">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
