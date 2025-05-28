import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Signup from "./pages/Signup";
import MovieCard from "./components/MovieCard";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
function App() {
  return (
    <>
      <HashRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </HashRouter>
      <MovieCard/>
      <Footer />
    </>
  );
}

export default App;
