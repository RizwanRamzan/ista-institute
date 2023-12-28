import React from "react";
import "./home.scss";
import { CEo, ISTA, SubHero, Welcome } from "../../assets";
import InstituteContainer from "../../Component/institute/instituteContainer";
import { WebsiteData } from "./constant";
import { Input, Row } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="home">
        <div className="sub-home">
          <img src={SubHero} />
          <div className="titles">
            <p>INSTITUTE</p>
            <p style={{ marginBottom: "10px" }}>|</p>
            <p>SOLUTIONS</p>
            <p style={{ marginBottom: "10px" }}>|</p>
            <p>IT SHOP</p>
          </div>
        </div>
        <div className="tabs">
          <button
            className="instituteButton"
            onClick={() => navigate("/insitute")}
          >
            isttaa Institute
          </button>
          <button
            className="solutionButton"
            onClick={() => navigate("/solutions")}
          >
            isttaa Solutions
          </button>
          <button className="shopButton" onClick={() => navigate("/it-shop")}>
            isttaa IT Shop
          </button>
        </div>
      </div>
      <div className="welcomeisttaa">
        <div className="welcome">
          <div className="welcome-left">
            <p className="welcome-text">Welcome To</p>
            <img src={ISTA} />
            <p className="description">
              isttaa is a global company that offers a wide range of services
              across various industries. From technology solutions to
              consulting, finance, marketing, and logistics, isttaa aims to
              simplify complex challenges and deliver reliable, tailored
              services to clients worldwide. With expertise in cutting-edge
              technologies, strategic consulting, financial planning, marketing,
              and logistics management, isttaa strives to be a trusted partner in
              driving growth and success for businesses of all sizes.
            </p>
          </div>
          <div className="welcome-right">
            <img src={Welcome} />
          </div>
        </div>
      </div>
      {/* Institute Component */}
      {WebsiteData?.map((item) => (
        <InstituteContainer item={item} />
      ))}

      {/* Start Buisness With isttaa */}

      <div className="start-buisness">
        <div className="start">
          <h2>Start Business With isttaa</h2>
          <p>Build Your Dreams With isttaa</p>
          <button onClick={() => navigate("/start-business")}>
            Start Business
          </button>
        </div>
      </div>

      {/* founder */}
      <div className="CEo">
        <div className="founder">
          <div className="welcome-right">
            <img src={CEo} />
          </div>
          <div className="welcome-left">
            <p className="welcome-text">Founder & CEO</p>
            <h2>Tayyab Imtiaz</h2>
            <p className="welcome-des">
              As the Founder & CEO of isttaa, I am thrilled to lead a company that
              offers comprehensive IT Training, cutting-edge Software House
              solutions, and an IT Shop, catering to all your technology needs.
              Our commitment to excellence drives us to stay ahead in the
              ever-evolving tech world, delivering personalized services to
              empower individuals and businesses alike. At isttaa, innovation is
              our fuel, and customer satisfaction is our goal. With gratitude to
              our clients and dedication from our team, we look forward to
              shaping a brighter future together. Thank be a part of our
              journey.
            </p>
            <button>About Us</button>
          </div>
        </div>
      </div>

      {/* Meet Our isttaa Team */}

      <div className="meet">
        <div className="meet-team">
          <div className="meet-box">
            <p className="meet-our">Meet Our isttaa Team</p>
            <p className="meet-explor">Explore</p>
          </div>
        </div>
      </div>

      {/* Email Updates */}

      <div className="Email">
        <div className="email-box">
          <div className="email-text">
            <p>
              Want Us to Email you About
              <br /> Special Offers & Updates?
            </p>
          </div>
          <div className="email-input">
            <Input
              className="ant-input-affix-wrapper"
              placeholder="your email"
            />
            <button>Subscribe</button>
          </div>
          <div></div>
        </div>
      </div>

      {/* Footer */}

     </div>
  );
};

export default Home;
