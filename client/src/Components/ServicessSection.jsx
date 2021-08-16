const ServicessSection = ({ image, title }) => {
  return (
    <div className="ServicessSection">
      <div className="service">
        <img src={ image } alt="" />
        <h5 className="s-title">{ title }</h5>
        <p className="s-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing ...
          
        </p>
      </div>
    </div>
  );
};

export default ServicessSection;
