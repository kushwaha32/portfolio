

import layout from "../img/service/paintbrush.png";


const PortfolioContent = ({ portfolio }) => {
    const localhost = "http://localhost:5000"
    return(
        <div className="portfolio-content">
            <div className="portfolio-img">
                <img src={ localhost + `/${portfolio.img}`} alt="" />
                <div className="port-link">
                    <a href="" className="link_a">G</a>
                    <a href="" className="link_a">Y</a>
                </div>
                
            </div>
            <a href="" className="link_portfolio">{ portfolio.title }</a>
        </div>
    )
}

export default PortfolioContent;