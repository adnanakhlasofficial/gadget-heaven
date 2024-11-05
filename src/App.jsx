import { Outlet} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Toaster } from 'react-hot-toast';

export default function App() {
  
  return (
    <>
      <Toaster />
      {/* Navbar */}
      <Navbar />
      {/* Dynamin Components */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
