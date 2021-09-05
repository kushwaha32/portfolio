import Title from "../Components/Title";
import PortfolioCategory from "../Components/portfolioCategory";
import PortfolioContent from "../Components/portfolioContent";
import PortfolioContext from "../Context/Portfolio/PortfolioContext";
import { useContext, useEffect } from "react";
import authContext from "../Context/auth/authContext";
const Portfolio = () => {
  const portfolioContext = useContext(PortfolioContext);
  const getAuthContext = useContext(authContext);
  const { portfolios, filterContent, getPortfolio } = portfolioContext;
  

  
  useEffect(() => {
      getAuthContext.authAndLoading();
      getPortfolio();
      // eslint-disable-next-line
  }, [])

  return (
    <div className="Portfolio padding-comman">
      <div className="portfolio-title">
        <Title title="Portfolios" opaceTitle="Portfolios" />
      </div>
      <div className="port-container">
        <PortfolioCategory />
        <div className="port-map">
          {filterContent !== null && filterContent.length
            ? filterContent.map((portfolio) => {
                return (
                  <PortfolioContent key={portfolio._id} portfolio={portfolio} />
                );
              })
            : portfolios.map((portfolio) => {
                return (
                  <PortfolioContent key={portfolio._id} portfolio={portfolio} />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
