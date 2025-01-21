import Main from './layout/Main/Main';
import { Routes, Route } from "react-router";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
