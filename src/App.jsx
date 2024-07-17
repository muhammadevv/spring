import Products from "./components/product/Products";
import Banner from "./components/swiper/Banner";
import Card from "./pages/Card";
import Main from "./pages/Main";
import Kontact from "./pages/kontact/Kontact";
import OurColleagues from "./pages/section/OurColleagues";


function App() {

  return (
    <>
      <main>
        <Banner />
        <Products />
        <Main />
        <OurColleagues />
        <Card />
        <Kontact />
      </main>
    
    </>
  );
}

export default App;
