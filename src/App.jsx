import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Featured_vehicle from "./pages/Featured_vehicle";
import Hero from "./pages/Hero";
import Promo from "./pages/Promo";
import Testomonials from "./pages/Testomonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured_vehicle/>
      <Promo/>
      <Testomonials/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
