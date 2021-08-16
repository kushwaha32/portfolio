import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Portfolio from "./Pages/Portfolio";
import Messagess from "./Pages/Messagess";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import BlogState from "./Context/Blog/blogState";
import PortfolioState from "./Context/Portfolio/PortfolioState";
import ContactState from "./Context/Contact/ContactState";
import { useEffect, useState } from "react";
import Loading from "./Components/loading";
import Login from "./Pages/Login";
import AuthState from "./Context/auth/authState";
import CreatePortfolio from "./Pages/CreatePortfolio";
import setAuthToken from "./utils/setAuthToken";
import AlertState from "./Context/Alert/alertState";
import PrivateRoute from "./routes/privateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);

    // eslint-disable-next-line
  }, []);
  const toggleFunction = () => {
    setNavToggle(!navToggle);
  };

  return (
    <AlertState>
      <AuthState>
        <BlogState>
          <PortfolioState>
            <ContactState>
              <Router>
                {loading ? (
                  <Loading />
                ) : (
                  <div className="App">
                    <div
                      className={`sidebar ${navToggle ? "clnav-toggle" : ""}`}
                    >
                      <NavBar />
                    </div>
                    <div className="hamburger-menu" onClick={toggleFunction}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="main-content">
                      <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <PrivateRoute
                          exact
                          path="/portfolio/create"
                          component={CreatePortfolio}
                        />
                        <PrivateRoute
                          exact
                          path="/messagess"
                          component={Messagess}
                        />
                        

                        <Route exact path="/blogs" component={Blogs} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/login" component={Login} />
                      </Switch>
                    </div>
                  </div>
                )}
              </Router>
            </ContactState>
          </PortfolioState>
        </BlogState>
      </AuthState>
    </AlertState>
  );
};

export default App;
