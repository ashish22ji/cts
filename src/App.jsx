import "./App.css";
import Navbar from "./components/Navbar";
import ContactUs from "./container/ContactUs";
import HeroSlider from "./container/HeroSlider";
import Services from "./container/Services";
import Stats from "./container/Stats";
import Fleet from "./container/Fleet";
import About from "./container/About";
import Footer from "./container/Footer";
import FloatingWtsapp from "./components/FloatingWtsapp";
import CallFloat from "./components/CallFloat";

function App() {
  return (
    <div className="font-sans bg-bg text-gray-800 min-h-screen">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <HeroSlider />

      {/* About Us */}
      <About />

      {/* SERVICES */}
      <Services />

      {/* Stats */}
      <Stats />

      {/* Contact Us */}
      <ContactUs />

      {/* Fleet */}
      <Fleet />

      {/* Floating Whats App */}
      <FloatingWtsapp />

      {/* Floating Call */}
      <CallFloat />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
