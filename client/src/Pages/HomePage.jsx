import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Loading from "../Components/loading";
import authContext from "../Context/auth/authContext";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  const getAuthContext = useContext(authContext);

  

  useEffect(() => {
    setLoading(false);
    getAuthContext.authAndLoading();
    
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="HomePage">
        <header className="hero">
          <h1 className="hero-text">
            Hi, I am
            <span> Raj Kushwaha </span>
          </h1>
          <p className="h-sub-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            explicabo! Reprehenderit sed tempore quaerat asperiores dicta nemo
            sunt expedita non temporibus consequatur, nesciunt incidunt
            assumenda, consequuntur quidem molestiae placeat quasi, ab
            voluptatum odit itaque. Eveniet sunt, laudantium laboriosam, non
            excepturi vero soluta tempore sequi nisi labore iste ipsa nam atque!
          </p>
          <div className="icons">
            <Link to="" className="icon-holder">
              <FontAwesomeIcon icon={faFacebook} className="icon fb" />
            </Link>
            <Link to="" className="icon-holder">
              <FontAwesomeIcon icon={faGithub} className="icon gh" />
            </Link>
          </div>
        </header>
      </div>
    );
  }
};

export default HomePage;
