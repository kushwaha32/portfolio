import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicessSection from "../Components/ServicessSection";
import layout from "../img/service/layout.png";
import { useContext, useEffect } from "react";
import authContext from "../Context/auth/authContext";

const AboutPage = () => {
  const getAuthContext = useContext(authContext);

  useEffect(() => {
     getAuthContext.authAndLoading();
     
     // eslint-disable-next-line
  }, []);
  return (
    <div className="AboutPage padding-comman">
      <Title title="About Me" opaceTitle="About Me" />
      <ImageSection />
      <Title title="My Skills" opaceTitle="My Skills" />
      <div className="skills-container-main">
        <SkillsSection skill="Javascript" progress="50%" />
        <SkillsSection skill="HTML5" progress="60%" />
        <SkillsSection skill="CSS3" progress="90%" />
        <SkillsSection skill="React js" progress="70%" />
        <SkillsSection skill="Redux" progress="80%" />
        <SkillsSection skill="Node js" progress="50%" />
        <SkillsSection skill="MongoDb" progress="70%" />
      </div>
      <div className="servicess-container">
        <Title title="Servicess" opaceTitle="Servicess" />
        <div className="service-hold">
          <ServicessSection image={layout} title={"Web Design"} />
          <ServicessSection image={layout} title={"Web Design"} />
          <ServicessSection image={layout} title={"Web Design"} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
