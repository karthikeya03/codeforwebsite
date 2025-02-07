import React from "react";
import Header from "./components/Header/header.jsx";
import Carousel from "./components/Carousel/carousel.jsx";
import Grid from "./components/Grid/grid.jsx";
import Card from "./components/Card/card.jsx";
import Footer from "./components/Footer/footer.jsx";


function App() {
  return (
    <div>
      <Header />
      <Carousel/>
      <Grid/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
