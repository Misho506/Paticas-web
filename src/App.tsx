import Main from "./layout/Main/Main";
import OurTours from "./layout/Categories/Categories";
import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { TourProvider } from "./context/TourContext";
import Tour from "./layout/Category/Category";
import SubCategory from "./layout/Tour/Tour";

function App() {
  return (
    <TourProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/our-tours" element={<OurTours />} />
        <Route path="/tour/:title" element={<Tour />} />
        <Route path="/tour/detailed" element={<SubCategory />} />
      </Routes>
      <Footer />
    </TourProvider>
  );
}

export default App;
