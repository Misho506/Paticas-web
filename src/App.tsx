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

function App() {
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
      </Routes>
      <Footer />
    </TourProvider>
  );
}

export default App;
