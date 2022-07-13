import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./views/Home";
import Feed from "./views/Feed";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
      <BrowserRouter>
          <Header />
          <div className="wrapper">
              <div className="wrapper--inner">
                  <Routes>
                      <Route path="/" element={ <Home /> } />
                      <Route path="feed" element={<Feed /> } />
                      <Route
                          path="*"
                          element={<Navigate to="/" replace />}
                      />
                  </Routes>
              </div>
          </div>
          <Footer />
      </BrowserRouter>
  )
}

export default App
