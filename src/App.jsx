import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import ListedBooksPage from "./pages/ListedBooksPage";
import ReadPage from "./pages/ReadPage";
import ErrorPage from "./pages/ErrorPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ContacUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/books" element={<ListedBooksPage />} />
          <Route path="/contact" element={<ContacUs />} />
          <Route path="/read" element={<ReadPage />} />
          <Route path="/book/:id" element={<BookPage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
