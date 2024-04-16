import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import ButtonToAbout from "./components/ButtonToAbout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/"
          element={
            <div className="h-screen m-auto p-10 flex flex-col content-center">
              <h1 className="mt-[10vw] text-blue-800 font-black text-9xl m-auto">
                Home
              </h1>
              <ButtonToAbout />
            </div>
          }
        />
        <Route
          path="/services"
          element={
            <div className="h-screen m-auto p-10 flex flex-col content-center">
              <h1 className="mt-[10vw] text-blue-800 font-black text-9xl m-auto">
                Services
              </h1>
              <ButtonToAbout />
            </div>
          }
        />
        <Route
          path="/career"
          element={
            <div className="h-screen m-auto p-10 flex flex-col content-center">
              <h1 className="mt-[10vw] text-blue-800 font-black text-9xl m-auto">
                Career
              </h1>
              <ButtonToAbout />
            </div>
          }
        />
        <Route
          path="/blogs"
          element={
            <div className="h-screen m-auto p-10 flex flex-col content-center">
              <h1 className="mt-[10vw] text-blue-800 font-black text-9xl m-auto">
                Blogs
              </h1>
              <ButtonToAbout />
            </div>
          }
        />
      </Routes>
      <Navbar />

      <Footer />
    </>
  );
}

export default App;
