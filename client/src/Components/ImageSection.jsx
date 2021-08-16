import avatar from "../img/raj_img.jpg";

const ImageSection = () => {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={avatar} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am <span> Raj Kushwaha</span>
        </h4>
        <p className="about-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          veritatis aspernatur odit commodi nostrum dignissimos necessitatibus
          beatae molestiae provident ipsum, inventore asperiores accusantium qui
        </p>
        <div className="about-details">
          <div className="details">
            <h4>Name </h4>
            <p> : Raj Kushwaha</p>
          </div>
          <div className="details">
            <h4>Name </h4>
            <p> : Raj Kushwaha</p>
          </div>
          <div className="details">
            <h4>Country </h4>
            <p> : India</p>
          </div>
          <div className="details">
            <h4>Language </h4>
            <p> : Hindi, English</p>
          </div>
          <div className="details">
            <h4>Address </h4>
            <p> : 150a/4 chak meerapatti Prayagraj</p>
          </div>
          <div className="btn">Download Cv</div>
        </div>
        
      </div>
    </div>
  );
};

export default ImageSection;
