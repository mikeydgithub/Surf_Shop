import img_01 from "./assets/img_01.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Product from './pages/Product'


function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={img_01} />
      <Slider/>
    </div>
  );
}

export default App
