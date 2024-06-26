import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./components/Benifits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login-Signup/Login";
import SignUp from "./components/Login-Signup/Signup";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
        <Header />
        <Hero />
        <Benifits/>
        <Collaboration/>
        <Services/>
        <Pricing/>
        <Roadmap/>
        
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
