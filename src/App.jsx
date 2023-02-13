import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Company from "./components/company/Company";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Robot7 from "./assets/robot9.jpg";

const App = () => {
  const myStyle = {
    backgroundImage: `url(${Robot7})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
  };
  return (
    <div>
      <div style={myStyle}>
        <Nav />
        <Header />
      </div>
      <Products />
      <Company />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
