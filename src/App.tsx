import Main from "./layout/Main/Main";
import OurTours from "./layout/Categories/Categories";
import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { TourProvider } from "./context/TourContext";
import { BlogProvider } from "./context/BlogContext";
import Category from "./layout/Category/Category";
import Tour from "./layout/Tour/Tour";
import ScrollTop from "./components/scrollTop/ScrollTop";
import BookingTour from "./layout/Booking/BookingTour";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AboutUs from "./layout/AboutUs/AboutUs";
import Blog from "./layout/Blog/Blog";
import Blogs from "./layout/Blogs/Blogs";
import Tours from "./layout/Tours/Tours";
import Contact from "./layout/Contact/Contact";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => { i18n.changeLanguage(window.navigator.language) }, [i18n]);
  return (
    <TourProvider>
      <BlogProvider>
        <ScrollTop />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/categories" element={<OurTours />} />
          <Route path="/category/:title" element={<Category />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tour/detailed" element={<Tour />} />
          <Route path="/tour/booking" element={<BookingTour />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:title" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BlogProvider>
    </TourProvider>
  );
}

export default App;
