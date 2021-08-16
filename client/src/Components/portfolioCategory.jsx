

import { useContext } from "react";
import { Link } from "react-router-dom";
import PortfolioContext from "../Context/Portfolio/PortfolioContext";

const PortfolioCategory = () => {
    const portfolio  = useContext(PortfolioContext);
    const { portfolios, filter } = portfolio;
    
    const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

    return(
        <div className="btn-port-container">
            {
                allCategories.map((cat, i) => {
                    return <Link to="/portfolio" exact className="btn-port-single" key={i} onClick={() => filter(cat)}>{cat}</Link>
                })
            }
        </div>
    )
}

export default PortfolioCategory;




