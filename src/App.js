import { Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import ContactPage from "pages/ContactPage";
import About from "pages/About";
import Footer from "components/Footer";
import Volster from "pages/volster/Volster";
import Details from "pages/volster/Details";
import Solarvess from "pages/Solarvess";
import Solarange from "pages/Solarange";
import Page404 from "pages/Page404";
import ProjectsPage from "pages/ProjectsPage";
import Carboat from "pages/Carboat";
import LangProvider from "context/LanguageContext";

function App() {
  return (
    <>
      <LangProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/volster" element={<Volster />} />
          <Route path="/projects/volster/details" element={<Details />} />
          <Route path="/projects/solarvess" element={<Solarvess />} />
          <Route path="/projects/solarange" element={<Solarange />} />
          <Route path="/projects/carboat" element={<Carboat />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </LangProvider>
    </>
  );
}

export default App;
