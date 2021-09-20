import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sections from "./components/sections";
import { GlobalStyles } from "./globalSytles";
import { ThemeProvider } from "styled-components";
import theme from "./components/commons/themes";
import SeeMoreSection from "./components/SeeMoreSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Hero />
        <Sections />
        <SeeMoreSection />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
