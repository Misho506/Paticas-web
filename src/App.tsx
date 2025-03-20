import Main from "./layout/Main/Main";
import OurTours from "./layout/Categories/Categories";
import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { TourProvider } from "./context/TourContext";
import Category from "./layout/Category/Category";
import Tour from "./layout/Tour/Tour";
import ScrollTop from "./components/scrollTop/ScrollTop";
import BookingTour from "./layout/Booking/BookingTour";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AboutUs from "./layout/AboutUs/AboutUs";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => { i18n.changeLanguage(window.navigator.language) }, [i18n]);
  return (
    <TourProvider>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<OurTours />} />
        <Route path="/category/:title" element={<Category />} />
        <Route path="/tour/detailed" element={<Tour />} />
        <Route path="/tour/booking" element={<BookingTour />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </TourProvider>
  );
}

export default App;
