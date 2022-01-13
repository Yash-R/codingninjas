import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header"; // Header
import Footer from "./Components/Footer"; //Footer
import MainWrapper from "./Components/MainWrapper"; // Main Wrapper Component
import Events from "./Components/Events"; // Events Main Compinent

function App() {
  const mockInterviews = {
    haveDiscount: true,
    discount: "50% OFF",
  };

  return (
    <div className="app_container">
      <header id="app_header" className="app_header">
        <Header mockInterviews={mockInterviews} />
      </header>
      <div className="app_body">
        <Routes>
          <Route
            path="/events"
            element={
              <>
                <MainWrapper>
                  <Events />
                </MainWrapper>
              </>
            }
          />
        </Routes>
      </div>

      <footer className="app_footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
