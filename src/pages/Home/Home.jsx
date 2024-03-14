import React, { useEffect, useRef } from "react";
import { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/images/image/banner.png";
import project1 from "../../assets/images/image/HandsOn.png";
import project2 from "../../assets/images/image/Autumn.png";
import project3 from "../../assets/images/image/virtual-voter.png";
import voulenteer from "../../assets/images/image/voulenteer.jpeg";
import github from "../../assets/images/image/git.png";
import insta from "../../assets/images/image/insta.png";
import linkdein from "../../assets/images/image/linkedin.png";
import { ROUTES } from "../../routes/RouterConfig";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Home/Home.css";
const Home = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const aboutSectionRef = useRef(null);
  const journeySectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const voulenteerSectionRef = useRef(null);

  const [isMenuVisible, setMenuVisible] = React.useState(true);

  const changeDir = (dir) => {
    navigate(dir);
  };

  const handleAboutClick = () => {
    aboutSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleJourneyClick = () => {
    journeySectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleProjectsClick = () => {
    projectsSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleVoulenteerClick = () => {
    voulenteerSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // You can adjust the threshold as needed
      if (scrollPosition > 100) {
        setMenuVisible(false);
      } else {
        setMenuVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      name: "Handson",
      color: "#F2C347",
      image: project1,
      description:
        "Discover opportunities on a dynamic map-based job platform tailored to your neighborhood.",
      technologies: "AWS | Node.js | SQL",
      border: "#F2C347",
      url: "https://www.handson.ai",
    },
    {
      name: "Autumn",
      color: "#F25C54",
      image: project2,
      description:
        "A transformative app centered on women's menstrual health, delivering tailored insights and support.",
      technologies: "Flutter | React JS | Firebase",
      border: "#F25C54",
      url: "https://getautumn.in",
    },
    {
      name: "Virtual Voter",
      color: "#F2C347",
      image: project3,
      description:
        "A platform where every post becomes an interactive poll,reinventing the way you engage with others.",
      technologies: "AWS | Node.js | Typescript | Mongo",
      border: "#F25C54",
      url: "https://virtualvoter.app",
    },
  ];

  return (
    <div className="bg-[#0D0D0D] scroll-smooth relative">
      <div className="px-[28px]">
        {isMenuVisible && (
          <div className="sticky top-0 z-[100]">
            <div className="sm:text-end z-[100] text-center pt-8 mr-8 absolute sm:top-1 sm:right-1 ">
              <Dropdown
                placement="bottomLeft"
                dropdownRender={() => (
                  <div className="bg-[#0D0D0D] text-white flex flex-col items-start">
                    <button
                      onClick={handleAboutClick}
                      className="py-[2px] custom-fonts"
                    >
                      About
                    </button>
                    <button
                      onClick={handleJourneyClick}
                      className="py-[2px] custom-fonts"
                    >
                      Journey
                    </button>
                    <button
                      onClick={handleProjectsClick}
                      className="py-[2px] custom-fonts"
                    >
                      Projects
                    </button>
                  </div>
                )}
              >
                <div className="flex justify-center items-center text-[#fff] custom-fonts text-[14px] cursor-pointer">
                  <p>Introduction</p>
                  <div>
                    <i className="bi bi-caret-down-fill p-2"></i>
                  </div>
                </div>
              </Dropdown>
            </div>
          </div>
        )}
        <div className="flex flex-col items-center min-h-[100vh] justify-center sm:overflow-hidden w-[100%] top-0 left-0 py-[100px] p-[10px]">
          <div className="intro text-center sm:tracking-[79px] tracking-[17.67px] sm:text-[200px] text-[64px] text-[#fff] opacity-[10%] sm:leading-[240px] font-normal sm:mt-[-10.5%]">
            SAMARTH
          </div>
          <div className="flex flex-col items-center justify-center my-[64px]">
            <div>
              <img
                src={banner}
                alt=""
                className="sm:h-[100%] sm:w-[100%] h-[232px] w-[322.176px] object-cover"
              />
            </div>
            <div className="text-white text-[16px] leading-[19.36px] custom-fonts mt-[30px]">
              Backend | Dev ops
            </div>
          </div>
          <div className="intro text-center sm:tracking-[79px] tracking-[17.67px] sm:text-[200px] text-[64px] text-[#fff] opacity-[10%] sm:leading-[240px] font-normal sm:mb-[-11%] ">
            MANWANI
          </div>
        </div>
        <div
          id="aboutSection"
          ref={aboutSectionRef}
          className="font-normal min-h-[100vh] sm:my-[120px]"
        >
          <div className="sm:mx-[64px]">
            <h3 className="text-[#fff] text-[24px] custom-spacing-title">
              About me
            </h3>
            <div class="border-t-4  border-[#FF4C00] w-[20px] p-2"></div>
          </div>
          <div className="about1 flex flex-col sm:justify-center sm:items-center sm:mt-[150px] sm:w-[778px] mx-auto ">
            <div className="text-[#fff] sm:text-[128px] text-[44px] sm:tracking-[24.50px] tracking-[4.4px] sm:leading-[153.6px]">
              I’m samarth
            </div>

            <div className="custom-fonts text-[#fff] sm:leading-[19.36px] sm:text-[16px] text-[14px] text-justify md:leading-[19.36px] md:pr-[24px]">
              Hey, I'm Samarth Manwani, a backend aficionado rocking TypeScript,
              Node.js, and React in Bangalore. Currently fine-tuning my skills
              at Zluri, I'm all about coding, chai, and a sprinkle of humor.
              Let's sync calendars for some tech banter – no boring meetings,
              just good vibes and clean code. From sci-fi magic to digital
              masterpieces, I'm the guy adding humor and minimalism to the tech
              scene. Not a coding maestro, just a good programmer with a knack
              for turning bugs into punchlines. Let's connect and make coding
              cool!
            </div>
          </div>
          <div className="flex gap-4 mt-[20px] items-center justify-center">
            <div className="bg-[#111111] sm:p-[15px] p-[12px] rounded-[4px]">
              <a
                href="https://github.com/sam82arth"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Github" />
              </a>
            </div>
            <div className="bg-[#111111] sm:p-[15px] p-[12px] rounded-[4px]">
              <a
                href="https://www.instagram.com/samarthmanwani/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={insta} alt="Instagram" />
              </a>
            </div>
            <div className="bg-[#111111] sm:p-[15px] p-[12px] rounded-[4px]">
              <a
                href="https://www.linkedin.com/in/samarth-manwani-2738b820a/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkdein} alt="Linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div
          id="journeySection"
          ref={journeySectionRef}
          className="min-h-[100vh] sm:my-[120px] p-[10px]"
        >
          <div className="sm:mx-[64px]">
            <h3 className="text-[#fff] text-[24px] custom-spacing-title">
              MY EXPERIENCE
            </h3>
            <div class="border-t-4 border-[#FF4C00] w-[20px] p-2"></div>
          </div>
          <div className="sm:mt-[260px] mt-[120px]">
            <div className="exp flex sm:flex-row flex-col text-[#fff] items-center justify-center xl:gap-[260px] custom-fonts">
              <a
                href="https://packetfanatic.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="text-center hidden sm:block">
                  <div className="text-[16px] font-semibold">
                    Packet Fanatic
                  </div>
                  <div className="text-[14px] font-normal leading-normal">
                    Jan 2021 - Jun 2021
                  </div>
                </div>
              </a>
              <a
                href="https://www.samsungprism.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="text-center hidden sm:block">
                  <div className="text-[16px] font-semibold">Samsung R&D</div>
                  <div className="text-[14px] font-normal leading-normal">
                    Jun 2021 - Jun 2022
                  </div>
                </div>
              </a>
              <a href="https://zluri.com" target="_blank" rel="noreferrer">
                <div className="text-center hidden sm:block">
                  <div className="text-[16px] font-semibold">Zluri</div>
                  <div className="text-[14px] font-normal leading-normal">
                    Jul 2021 - Present
                  </div>
                </div>
              </a>
              <a href="https://codeclock.in" target="_blank" rel="noreferrer">
                <div className="text-center hidden sm:block">
                  <div className="text-[16px] font-semibold">Codeclock</div>
                  <div className="text-[14px] font-normal leading-normal">
                    Aug 2023 - Present
                  </div>
                </div>
              </a>
            </div>
            <div className="flex items-center justify-center mt-2">
              <div className="hidden sm:block w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
              <div className="lin hidden sm:block h-[4px] bg-white w-[380px]"></div>
              <div className="hidden sm:block w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
              <div className="lin hidden sm:block h-[4px] bg-white w-[380px]"></div>
              <div className="hidden sm:block w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
              <div className="lin hidden sm:block h-[4px] bg-white w-[380px]"></div>
              <div className="hidden sm:block w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
              {/* <!-- Vertical lines for mobile screens --> */}
              <div className="flex flex-col gap-40 absolute">
                <div className="sm:hidden w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
                <div className="sm:hidden w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
              </div>
              <div className="flex flex-col gap-20 sm:hidden">
                <a
                  href="https://packetfanatic.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-center text-[#ffff] custom-fonts">
                    <div className="text-[16px] font-semibold">
                      Packet Fanatic
                    </div>
                    <div className="text-[14px] font-normal leading-normal">
                      Jan 2021 - Jun 2021
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.samsungprism.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-center text-[#ffff] custom-fonts">
                    <div className="text-[16px] font-semibold">Samsung R&D</div>
                    <div className="text-[14px] font-normal leading-normal">
                      Jun 2021 - Jun 2022
                    </div>
                  </div>
                </a>
              </div>
              <div className="block sm:hidden w-[4px] h-[380px] bg-white"></div>
              <div className="flex flex-col gap-96 absolute">
                <div className="sm:hidden w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
                <div className="sm:hidden w-[12px] h-[12px] bg-white rounded-full border-[2px] border-[black]"></div>
              </div>
              <div className="flex flex-col gap-80 sm:hidden">
                <a href="https://zluri.com" target="_blank" rel="noreferrer">
                  <div className="text-center text-[#ffff] custom-fonts">
                    <div className="text-[16px] font-semibold">Zluri</div>
                    <div className="text-[14px] font-normal leading-normal">
                      Jul 2021 - Present
                    </div>
                  </div>
                </a>
                <a href="https://codeclock.in" target="_blank" rel="noreferrer">
                  <div className="text-center text-[#ffff] custom-fonts">
                    <div className="text-[16px] font-semibold">Codeclock</div>
                    <div className="text-[14px] font-normal leading-normal">
                      Aug 2023 - Present
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Section Start */}
        <div
          className="min-h-[100vh] sm:my-[120px]"
          id="projectsSection"
          ref={projectsSectionRef}
        >
          <div className="sm:mx-[64px]">
            <h3 className="text-[#fff] text-[24px] custom-spacing-title">
              MY PROJECTS
            </h3>
            <div class="border-t-4 border-[#FF4C00] w-[20px] p-2"></div>
          </div>
          <div className="sm:mt-[150px]">
            <div className="grid-cols-1 grid sm:grid-cols-5 gap-[28px]">
              <div></div>
              {projects.map((project, index) => (
                <div key={index}>
                  <div
                    style={{ backgroundColor: project.color }}
                    className="flex rounded-[8px] items-center justify-center h-[190px]"
                  >
                    <div>
                      <img className="object-fill" src={project.image} alt="" />
                    </div>
                  </div>
                  <div className="mx-2">
                    <div className="flex justify-between mt-2">
                      <h3 className="text-[#FFF] custom-fonts text-[20px]">
                        {project.name}
                      </h3>
                      <a
                        className="text-[#FFF] bi bi-box-arrow-up-right"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    </div>
                    <div className="text-[#fff] text-[14px] custom-fonts">
                      {project.description}
                    </div>
                    <div className="flex gap-2 mt-2">
                      <div className="text-[#ffff] custom-fonts text-[14px] whitespace-nowrap">
                        {project.technologies}
                      </div>
                      <div
                        style={{ borderColor: project.border }}
                        className="border-t-4 w-full p-2 mt-2"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
        {/* Project Section End */}
        {/* Voulenteer Section Start */}
        {/* <div
          className="min-h-[100vh] sm:my-[120px]"
          id="voulenteerSection"
          ref={voulenteerSectionRef}
        >
          <div className="sm:mx-[64px] mt-60">
            <h3 className="text-[#fff] text-[24px] custom-spacing-title">
              volunteering
            </h3>
            <div class="border-t-4 border-[#FF4C00] w-[20px] p-2"></div>
          </div>
          <div className="my-[150px]">
            <div className=" grid lg:grid-cols-2  justify-center items-center gap-[24px] md:mx-[180px] sm:grid-cols-1">
              <div className="group cursor-pointer col-span-1 rounded-[8px] text-[#fff] relative flex flex-col justify-center items-center text-center">
                <img
                  className="rounded-[8px] grayscale transition-transform transform group-hover:blur-[4px] group-hover:grayscale-0"
                  src={voulenteer}
                  alt=""
                />
                <div className="sm:mt-4 absolute top-4 left-6 custom-fonts text-start  group-hover:hidden">
                  <h3 className="md:text-[18px] font-bold text-[14px]">
                    GDSC / HUBLI, KARNATAKA
                  </h3>
                  <p className="md:text-[16px] text-[12px]">
                    2023, JUN - 2024, AUG
                  </p>
                </div>
                <div className="absolute top-0 bottom-0 flex justify-center items-center mx-[42px] custom-fonts text-[15px] opacity-0 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  qui excepturi cupiditate eos veritatis, magni maxime fugit
                  facilis est in possimus velit iste temporibus praesentium
                  accusantium quos dolores delectus animi.
                </div>
              </div>

              <div className="group cursor-pointer col-span-1 rounded-[8px] text-[#fff] relative flex flex-col justify-center items-center text-center">
                <img
                  className="rounded-[8px] grayscale transition-transform transform group-hover:blur-[4px] group-hover:grayscale-0"
                  src={voulenteer}
                  alt=""
                />
                <div className="sm:mt-4 absolute top-4 left-6 custom-fonts text-start group-hover:hidden">
                  <h3 className="md:text-[18px] font-bold text-[14px]">
                    Vice President - National Student Council, IUCEE
                  </h3>
                  <p className="md:text-[16px] text-[12px]">
                    2023, JUN - 2024, AUG
                  </p>
                </div>
                <div className="absolute top-0 bottom-0 flex justify-center items-center mx-[42px] custom-fonts text-[15px] opacity-0 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  qui excepturi cupiditate eos veritatis, magni maxime fugit
                  facilis est in possimus velit iste temporibus praesentium
                  accusantium quos dolores delectus animi.
                </div>
              </div>
            </div>
            <div className=" grid lg:grid-cols-2 justify-center items-center gap-[24px] md:mx-[180px] mt-[24px] sm:grid-cols-1 sm:mb-[20px]">
              <div className="group cursor-pointer col-span-1 rounded-[8px] text-[#fff] relative flex flex-col justify-center items-center text-center">
                <img
                  className="rounded-[8px] grayscale transition-transform transform group-hover:blur-[4px] group-hover:grayscale-0"
                  src={voulenteer}
                  alt=""
                />
                <div className="sm:mt-4 absolute top-4 left-6 custom-fonts text-start group-hover:hidden">
                  <h3 className="md:text-[18px] text-[14px] font-bold">
                    ⁠President - IUCEE KLE Tech
                  </h3>
                  <p className="md:text-[16px] text-[12px]">
                    2023, JUN - 2024, AUG
                  </p>
                </div>
                <div className="absolute top-0 bottom-0 flex justify-center items-center mx-[42px] custom-fonts text-[15px] opacity-0 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  qui excepturi cupiditate eos veritatis, magni maxime fugit
                  facilis est in possimus velit iste temporibus praesentium
                  accusantium quos dolores delectus animi.
                </div>
              </div>
              <div className="group cursor-pointer col-span-1 rounded-[8px] text-[#fff] relative flex flex-col justify-center items-center text-center">
                <img
                  className="rounded-[8px] grayscale transition-transform transform group-hover:blur-[4px] group-hover:grayscale-0"
                  src={voulenteer}
                  alt=""
                />
                <div className="sm:mt-4 absolute top-4 left-6 custom-fonts text-start group-hover:hidden">
                  <h3 className="md:text-[18px] text-[14px] font-bold">
                    ⁠Founding Team member - Bits n Bytes
                  </h3>
                  <p className="md:text-[16px] text-[12px]">
                    2023, JUN - 2024, AUG
                  </p>
                </div>
                <div className="absolute top-0 bottom-0 flex justify-center items-center mx-[42px] custom-fonts text-[15px] opacity-0 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  qui excepturi cupiditate eos veritatis, magni maxime fugit
                  facilis est in possimus velit iste temporibus praesentium
                  accusantium quos dolores delectus animi.
                </div>
              </div>
            </div>
          </div>
        </div>{" "} */}
      </div>
      <div className="py-[20px] mt-[30px]">
        <div className="flex gap-2 flex-col justify-center items-center mx-[28px] text-[#fff] footer-font footer-spacing text-[20px] pb-[32px]">
          <p>Lets build something better together</p>
          <a href="mailto:contact@samrth.tech">contact@samrth.tech</a>
          <h3>© {currentYear} All rights reserved </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
