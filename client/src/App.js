import "./App.css";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "./pages/Category/Category";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { NotFound } from "./pages/NotFound/NotFound";
import { Header } from "./components/Header/Header";
import { NewsLetter } from "./components/NewsLetter/NewsLetter";
import { ScrollButton } from "./components/ScrollButton/ScrollButton";
import { Footer } from "./components/Footer/Footer";
import { AppContext } from "./utils/context";
import { Preloader } from "./components/Preloader/Preloader";
import { Terms } from "./pages/Terms/Terms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContext>
          <Preloader />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <NewsLetter />
          <ScrollButton />
          <Footer />
        </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
