import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "antd";
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
            path="/"
            element={
              <>
                <MainWrapper>
                  <div style={{ marginTop: "10%" }}>
                    <div className="events_headings">
                      <div className="events_heading">
                        Codinninja Assignment
                      </div>
                      <Link to="/events">
                        <Button size="large" className="check_assignment">
                          Check
                        </Button>
                      </Link>
                    </div>
                  </div>
                </MainWrapper>
              </>
            }
          />
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
