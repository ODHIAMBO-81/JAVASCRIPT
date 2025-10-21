
import Header from "./src/COMPONENT/Header.jsx"
import Hero from "./src/COMPONENT/Hero.jsx"
import Stats from "./src/COMPONENT/Stats.jsx"
import Testimonials from "./src/COMPONENT/Testimonials.jsx"
import Footer from "./src/COMPONENT/Footer.jsx"
import".App.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Stats />
     <Hero />
     <Testimonials />
     <Footer />
    </>
  );
};

export default App
