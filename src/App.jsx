import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Feed from "./views/Feed";
import Header from "./components/Header";

function App() {

  return (
      <Router>
          <Header />
          <div className="wrapper">
              <div className="wrapper--inner">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/feed" element={<Feed />} />
                  </Routes>
              </div>
          </div>
      </Router>
  )
}

export default App
