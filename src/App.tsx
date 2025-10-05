import Main from "./layout/Main/Main";
import OurTours from "./layout/Categories/Categories";
import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { TourProvider } from "./context/TourContext";
import { BlogProvider } from "./context/BlogContext";
import Category from "./layout/Category/Category";
import OneDayTour from "./layout/OneDayTour/OneDayTour";
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
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import { useLocation } from "react-router";
import TermsConditions from "./layout/Terms&Conditions/Terms&Conditions";
import PrivacyPolitics from "./layout/PrivacyPolitics/PrivacyPolitics";
import CancelationPolitics from "./layout/CancelationPolitics/CancelationPolitics";
import PaymentMethods from "./layout/PaymentMethods/PaymentMethods";
import CommunityImpact from "./layout/CommunityImpact/CommunityImpact";

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  useEffect(() => { i18n.changeLanguage(window.navigator.language) }, [i18n]);
  return (
    <>
      <Header />
      {window.location.pathname !== '/' && <Breadcrumb path={location.pathname} />}
      <TourProvider>
        <BlogProvider>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/categories" element={<OurTours />} />
            <Route path="/categories/:id" element={<Category />} />
            <Route path="/one-day-tours" element={<OneDayTour />} />
            <Route path="/one-day-tours/:tourId" element={<Tour />} />
            <Route path="/multi-day-tours" element={<Tours />} />
            <Route path="/categories/:categoryId/:tourId" element={<Tour />} />
            <Route path="/categories/:categoryId/:tourId/booking" element={<BookingTour />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/contact" element={<Contact showForm />} />
            <Route path="/terms&conditions" element={<TermsConditions />} />
            <Route path="/privacyPolitics" element={<PrivacyPolitics />} />
            <Route path="/cancel" element={<CancelationPolitics />} />
            <Route path="/payment" element={<PaymentMethods />} />
            <Route path="/community" element={<CommunityImpact />} />
          </Routes>
        </BlogProvider>
      </TourProvider>
      <Footer />
    </>
  );
}

export default App;
