import React from "react";
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import { m } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import { FloatButton } from "antd";
import { useNavigate } from 'react-router-dom';

//Components
import { fadeIn, fadeInLeft } from '../../Functions/GlobalAnimations';
import Header, { HamburgerMenu, HeaderNav } from '../../Components/Header/Header';
import PortfolioOverlay from "../../Components/Portfolio/PortfolioOverlay";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import SocialIcons from '../../Components/SocialIcon/SocialIcons'
import ReactCustomScrollbar from "../../Components/ReactCustomScrollbar";
import {Footer} from "../../Components/Footers/Footer" ;
import { TextAnime } from "../../Components/FancyText/FancyText";
import SideButtons from "../../Components/SideButtons";
import Blockquote from "../../Components/Blockquote/Blockquote";

//Data
import { ProgressBarData01 } from "../../Components/ProgressBar/ProgressBarData";


//Images
import RoboticsAdvancedCoverImage from "../../Images/RoboticsAdvancedCoverImage.png";
import logo2 from "../../Images/logo2.png";
import Lego from "../../Images/RoboticsBasics.png";
import Cue from "../../Images/Cue.png"
import RoboticsRealWorldProjects from "../../Images/RoboticsRealWorldProjects.png";
import RoboticsAdvancedSquare from "../../Images/RoboticsAdvancedSquare.png"
import NarenHumanoid from "../../Images/NarenHumanoid.png"
import ArduinoAdvanced from "../../Images/ArduinoAdvanced.png"
import RoboticsSlider1 from "../../Images/RoboticsSlider1.png"
import RoboticsSlider2 from "../../Images/RoboticsSlider2.png"
import RoboticsSlider3 from "../../Images/RoboticsSlider3.png"
import RoboticsSlider4 from "../../Images/RoboticsSlider4.png"

// const PortfolioOverlayData = [
//     {
//       title: "Robotics",
//       img: RoboticsBasics,
//       category: [""],
//       subtitle: "Beginners",
//       link: "/robotics/kids"
//     },
//     {
//       title: "Real Time",
//       img: RoboticsRealWorldProjects,
//       category: [""],
//       subtitle: "Projects",
//       link: "/robotics/real-world-projects"
//     },
//     {
//       title: "Leather",
//       img: "https://via.placeholder.com/800x800",
//       category: [""],
//       subtitle: "Photography",
//       link: "/portfolio/single-project-page-03"
//     },
//     {
//       title: "Gardner",
//       img: "https://via.placeholder.com/800x800",
//       category: [""],
//       subtitle: "Photography",
//       link: "/portfolio/single-project-page-04"
//     },
//   ]

  const SwiperImgData = [
    {
      img: RoboticsSlider1,
    },
    {
      img: RoboticsSlider2,
    },
    {
      img: RoboticsSlider3,
    },
    {
      img: RoboticsSlider4,
    },
  ];

  const SocialIconsData = [
    {
      link: "https://www.facebook.com/",
      icon: "fab fa-facebook-f"
    },
    {
      link: "https://dribbble.com/",
      icon: "fab fa-dribbble"
    },
    {
      link: "https://twitter.com/",
      icon: "fab fa-twitter"
    },
    {
      link: "https://www.instagram.com/",
      icon: "fab fa-instagram"
    }
  ]

  const RoboticsAdvanced = (props) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      console.log(props.age);
      console.log("button clicked");
      const newAgeValue = !props.age;
      props.setAge(newAgeValue);
      localStorage.setItem('age', newAgeValue.toString());
    
      // Conditionally navigate based on the newAgeValue
      if (newAgeValue) {
        // Navigate to "home/Robotics/Advanced"
        navigate("/home/Robotics/Advanced")
      } else {
        // Navigate to "home/Robotics"
        navigate("/home/Robotics")
      }
    };

    return (
      <div style={props.style}>
        <SideButtons />
        {/* Header Start */}
        <Header className="absolute top-0 left-0 w-full z-10 md:bg-white header-personalportfolio">
          <HeaderNav fluid="fluid" theme="light" className="h-[100px] md:h-[70px] mr-[50px] ml-[35px] md:mx-[15px]" containerClass="md:px-0">
            <Col lg={2} sm={6} className="col-auto ps-lg-0 me-auto md:!px-0">
              <Link aria-label="link for" className="flex items-center" to="/">
                <Navbar.Brand className="inline-block p-0 m-0">
                  <img className="default-logo" width="111" height="36" loading="lazy" src={logo2} alt='logo' />
                  <img className="alt-logo" width="111" height="36" loading="lazy" src={logo2}  alt='logo' />
                  <img className="mobile-logo" width="111" height="36" loading="lazy" src={logo2} alt='logo' />
                </Navbar.Brand>
              </Link>
            </Col>
            <Col className="col-auto text-end px-0">
              <HamburgerMenu theme="light" className="w-[25%] xl:w-[40%] lg:w-[45%] md:w-[50%] sm:w-full">
                <Row className="h-full mx-0">
                  <Col lg={12} className="p-0">
                    <Row className="h-[100vh] p-28 xs:p-12 mx-0 items-center justify-center bg-black">
                      <Col xs={12} className="hamburgermenu-modern-page text-left h-full max-h-[calc(65vh-100px)] flex-1 px-0">
                        <ReactCustomScrollbar className="h-full flex justify-center" autoHide>
                          <div>
                            <ul className="font-serif w-full flex flex-col justify-center h-full">
                              <li className="py-[13px] px-0 relative sm:text-center xs:!py-[10px]"><Link className="!font-normal" aria-label="link for" to="/">home</Link></li>
                              <li className="py-[13px] px-0 relative sm:text-center xs:!py-[10px]"><Link className="!font-normal" aria-label="link for" to="/page/about-me">about</Link></li>
                              <li className="py-[13px] px-0 relative sm:text-center xs:!py-[10px]"><Link className="!font-normal" aria-label="link for" to="/page/our-services">services</Link></li>
                              <li className="py-[13px] px-0 relative sm:text-center xs:!py-[10px]"><Link className="!font-normal" aria-label="link for" to="/portfolio/portfolio-colorful-metro">portfolio</Link></li>
                              <li className="py-[13px] px-0 relative sm:text-center xs:!py-[10px]"><Link className="!font-normal" aria-label="link for" to="/blogs/blog-grid">blog</Link></li>
                              <li className="py-[13px] px-0 relative sm:text-center xs:!py-[10px]"><Link className="!font-normal" aria-label="link for" to="/page/contact-modern">contact</Link></li>
                            </ul>
                          </div>
                        </ReactCustomScrollbar>
                      </Col>
                      <Col className="col-12 text-left none md:block sm:hidden px-0">
                        <div className="font-serif mt-[50px]">
                          <span className="mb-[10px] font-light text-xlg inline-block">Let's work together?</span>
                          <h2 className="heading-6 mb-0"><a aria-label="gmail" href="mailto:info@domain.com" className="text-[#ffeb04] border-b border-[#ffeb04] hover:text-white hover:border-white">info@domain.com</a></h2>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </HamburgerMenu>
            </Col>
          </HeaderNav>
        </Header>
        {/* Header End */}
  
        {/* Parallax section start */}
        <div className="md:flex md:items-center overflow-hidden relative h-[100vh] landscape:md:h-[600px]">
          <Parallax className="lg-no-parallax bg-cover absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh] sm:h-[100vh] md:h-[650px] !bg-[50%_0] lg:bg-[right_-230px_center] md:bg-right sm:top-0 sm:bg-[right_-350px_center] landscape:bg-right" translateY={[-20, 20]} style={{ backgroundImage: `url(${RoboticsAdvancedCoverImage})` }}></Parallax>
          <Container>
            <Row className="full-screen md:h-[520px] sm:h-[100vh]">
              <Col xl={5} md={5} className="relative flex flex-col justify-center">
                <h2 className="font-serif font-light -tracking-[2px] text-darkgray uppercase mb-[15px]">Hello,  i am</h2>
                <div className="font-serif cd-headline push">
                  <h3 className="heading-5 mb-0 text-darkgray font-serif">
                    <TextAnime color="#232323" duration={3000} className="font-bold text-darkgray uppercase text-[60px] leading-[75px] -tracking-[5px] sm:-tracking-[.5px] lg:text-[90px] lg:leading-[80px] md:text-[70px] md:leading-[60px] sm:text-[30px] sm:leading-[28px]" animation="push" data={["Mechanical", "Machine", "Technological"]} />
                  </h3>
                  <h4 className="heading-5 mb-0 text-darkgray font-serif">
                    <TextAnime color="#232323" duration={3000} className="font-bold text-darkgray uppercase text-[60px] leading-[75px] -tracking-[5px] sm:-tracking-[.5px] lg:text-[90px] lg:leading-[80px] md:text-[70px] md:leading-[60px] sm:text-[30px] sm:leading-[28px]" animation="push" data={["Companion", "Mate", "Buddy"]} />
                  </h4>
                </div>
                <div className="left-[15px] absolute bottom-[100px] sm:bottom-[50px] md:bottom-[30px] landscape:md:bottom-0">
                  <SocialIcons theme="social-icon-style-12" className="justify-start" size="md" iconColor="dark" data={SocialIconsData} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Parallax section End */}
  
        {/* Section Start */}
        <section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <Row className=" align-center">
              <m.div className="col-lg-5 text-darkgray md:mb-[30px] text-left" {...fadeIn}>
                <h2 className="heading-6 font-serif leading-[40px] w-[90%] mb-0 lg:w-full sm:leading-[26px] xs:text-center">Robotics merges engineering, computer science, AI to craft autonomous machines for diverse real-world tasks and &nbsp;
                  <span className="font-bold text-decoration-line-bottom-medium leading-[40px] whitespace-nowrap sm:leading-[26px]">industries</span></h2>
              </m.div>
              <Col xl={{ span: 6, offset: 1 }} lg={7} md={9} className="flex items-center xs:flex-col">
                <m.div className="w-[60%] md:w-[55%] xs:w-full xs:mb-[15px]" {...{ ...fadeInLeft, transition: { delay: 0.4, duration: 0.4 } }}>
                  <span className="font-serif text-[11rem] leading-[11rem] text-darkgray font-semibold -tracking-[7px] block xs:text-center md:text-[9rem]"><span className="text-[#ffeb04] font-light mr-[35px]">|</span>02<span className="text-[#ffeb04] font-light ml-[35px]">|</span></span>
                </m.div>
                <m.div className="text- w-[40%] pl-[25px] xs:w-full md:pl-0"  {...{ ...fadeInLeft, transition: { delay: 0.6, duration: 0.6 } }}>
                  <h3 className="heading-5 font-serif font-medium text-darkgray mb-0 -tracking-[1px] xs:text-center">Years of Gamified Way Of Coaching</h3>
                </m.div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section End */}
  
        {/* Portfolio Section Start */}
        {/* <section className="" >
          <Container fluid className="px-0">
            <PortfolioOverlay
              overlay="#000"
              grid="portfoliooverlay-personalportfolio grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col mt-0"
              data={PortfolioOverlayData}
            />
          </Container>
        </section> */}
        {/* Portfolio Section End */}

        <m.section className="py-[20px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden" {...fadeIn}>
          <Container>
            <Row>
              <Col lg={11} xs={12}>
                <Row className="items-center">
                  <m.div className="col-12 col-md-6 xs:mb-[30px]" {...fadeIn}>
                    <img height="" width="" src={RoboticsAdvancedSquare} alt="" />
                  </m.div>
                  <m.div className="col-12 col-md-6 col-xl-5 offset-xl-1" {...fadeInLeft}>
                    <Blockquote
                      className="xs:my-0"
                      theme="blockquote-style-02"
                      heading="Ready to Dive into Advance Robotics?"
                      title="Step into the forefront of advanced robotics innovation with Technology Garage. Our immersive programs offer hands-on projects, real-world experience, and collaboration with industry leaders. Whether delving into AI integration, crafting autonomous systems, or redefining manufacturing, our platform empowers you to drive your robotics career to new heights. Join us and unlock endless possibilities in advanced robotics."
                    />
                  </m.div>
                </Row>
              </Col>
            </Row>
          </Container>
        </m.section>

        <section className="py-[80px] pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px]">
        <Container>
            <Row className="justify-center">
              <Col className="col-12 col-lg-11">
                <m.div {...fadeIn} className="row">
                  <Col lg={4} className="pr-[5%] lg:pr-[15px] md:mb-[50px]">
                    <h5 className="font-serif text-darkgray font-medium mb-16 -tracking-[1px]">
                    Industrial-Friendly Innovations 
                    </h5>
                  </Col>
                  <Col lg={{ span: 7, offset: 1 }}>
                    {/* <span className="font-serif text-md uppercase font-medium mb-[20px] inline-block text-darkgray">Lego – Showcase your Imagination</span> */}
                    <p className="mb-[25px] text-justify xs:text-left xs:mb-[15px]">
                    At Technology Garage, we invite you to embark on an immersive exploration into the fascinating world of robotics. Our hands-on approach allows students to dive deep into various types and applications of robotics technology, from industrial automation to cutting-edge service robots. Through experiential learning and real-world projects, students gain practical experience and develop the skills needed to thrive in this dynamic field. Our dedicated mentors provide personalized guidance and support, ensuring that each student has the opportunity to excel and succeed. With access to state-of-the-art robotics equipment and resources, students are empowered to push the boundaries of innovation and explore their interests in robotics. Join us at Technology Garage and unlock the door to endless possibilities in the exciting field of robotics.
                    </p>
                    {/* <Buttons ariaLabel="button" href="#" className="font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray hover:text-darkgray" color="#232323" title="Yourdomain.com" size="lg" /> */}
                  </Col>
                </m.div>
              </Col>
            </Row>
          </Container>
        </section>

        <m.section className="py-[20px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden" {...fadeIn}>
          <Container>
            <Row>
              <Col lg={11} xs={12}>
                <Row className="items-center">
                  <m.div className="col-12 col-md-6 xs:mb-[30px]" {...fadeIn}>
                    <img height="" width="" src={NarenHumanoid} alt="" />
                  </m.div>
                  <m.div className="col-12 col-md-6 col-xl-5 offset-xl-1" {...fadeInLeft}>
                    <Blockquote
                      className="xs:my-0"
                      theme="blockquote-style-02"
                      heading="Exploring Real Humanoid Robotics at Technology Garage"
                      title="In the vibrant workshop of Technology Garage, a student stands before a humanoid robot, surrounded by machinery and computer screens. With focused determination, they manipulate the robot's limbs, programming precise movements. Immersed in the task, excitement fills the air, reflecting the endless possibilities of advanced robotics."
                    />
                  </m.div>
                </Row>
              </Col>
            </Row>
          </Container>
        </m.section>

        <section className="py-[80px] pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px]">
        <Container>
            <Row className="justify-center">
              <Col className="col-12 col-lg-11">
                <m.div {...fadeIn} className="row">
                  <Col lg={4} className="pr-[5%] lg:pr-[15px] md:mb-[50px]">
                    <h5 className="font-serif text-darkgray font-medium mb-16 -tracking-[1px]">
                     Arduino, Sensors, and Actuators in Advanced Robotics
                    </h5>
                  </Col>
                  <Col lg={{ span: 7, offset: 1 }}>
                    <span className="font-serif text-md uppercase font-medium mb-[20px] inline-block text-darkgray">Essential-Components in Robotics</span>
                    <p className="mb-[25px] text-justify xs:text-left xs:mb-[15px]">
                    Arduino boards, sensors, and actuators form the backbone of advanced robotics, playing vital roles in enhancing functionality and enabling autonomy. Arduino boards serve as the robot's brain, controlling its behavior and facilitating communication with external devices. Sensors gather essential data from the environment, enabling the robot to sense and respond to changes. Actuators translate digital commands into physical movements, allowing the robot to interact with its surroundings. Together, these components enable robots to exhibit sophisticated behaviors, adapt to dynamic environments, and perform complex tasks with efficiency and precision, pushing the boundaries of innovation in robotics.
                    </p>
                    {/* <Buttons ariaLabel="button" href="#" className="font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray hover:text-darkgray" color="#232323" title="Yourdomain.com" size="lg" /> */}
                  </Col>
                </m.div>
              </Col>
            </Row>
          </Container>
        </section>

        <m.section className="py-[20px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden" {...fadeIn}>
          <Container>
            <Row>
              <Col lg={11} xs={12}>
                <Row className="items-center">
                  <m.div className="col-12 col-md-6 xs:mb-[30px]" {...fadeIn}>
                    <img height="" width="" src={ArduinoAdvanced} alt="" />
                  </m.div>
                  <m.div className="col-12 col-md-6 col-xl-5 offset-xl-1" {...fadeInLeft}>
                    <Blockquote
                      className="xs:my-0"
                      theme="blockquote-style-02"
                      heading="A Kid's Adventure in Arduino Robotics"
                      title="In the realm of hands-on exploration, a young enthusiast delves into Arduino robotics, embarking on a journey to build an electronic controller car from scratch. With sensors and boards, they meticulously assemble each component, infusing innovation into their creation. Through trial and error, they navigate electronic engineering intricacies, turning vision into reality."
                    />
                  </m.div>
                </Row>
              </Col>
            </Row>
          </Container>
        </m.section>

        <section className="py-[70px] relative">
          <Swiper
            slidesPerView="auto"
            speed={1000}
            loop={true}
            modules={[Autoplay, Keyboard]}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            spaceBetween={10}
            centeredSlides={true}
            breakpoints={{
              576: {
                spaceBetween: 20
              },
              768: {
                spaceBetween: 30
              }
            }}
            className="SingleProjectPage05 relative black-move"
          >
            {SwiperImgData.map((item, i) => {
              return (
                <SwiperSlide className="w-[55%] sm:w-[65%]" key={i}>
                  <img height="" width="" src={item.img} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>

        <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]" >
                <Container>
                    <Row className="justify-between">
                        <m.div {...fadeIn} className="col-12 col-lg-4 col-md-7 col-sm-9 md:mb-[35px]">
                            <h6 className="font-serif text-darkgray font-medium m-0">Ready to Dive into Robotics? Explore Our Hands-On Coaching Approach!</h6>
                        </m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.5 } }} className="col-12 col-xl-3 col-lg-4 col-md-6 sm:mb-[30px]">
                            <div className="flex font-serif text-darkgray mb-[15px] font-medium"><span className="flex-shrink-0 self-center h-[1px] w-[40px] bg-[#ff6437] mr-[20px]"></span><div className="grow">The Challenge</div></div>
                            <p className="md:w-[80%] xs:w-full">Ready to take on the world of robotics? Brace yourself for the journey ahead, where each hurdle is a chance to grow and innovate. From mastering algorithms to solving real-world problems, every challenge is an opportunity to push your boundaries and unlock your potential. </p>
                        </m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col-12 col-xl-3 col-lg-4 col-md-6">
                            <div className="flex font-serif text-darkgray mb-[15px] font-medium"><span className="flex-shrink-0 self-center h-[1px] w-[40px] bg-[#ff6437] mr-[20px]"></span><div className="grow">The Strategy</div></div>
                            <p className="md:w-[80%] xs:w-full">At Technology Garage, our hands-on coaching approach is your key to success. With personalized guidance and immersive projects, we'll equip you with the skills and mindset needed to conquer the complexities of robotics. Dive in, explore, and unleash your potential with us today!</p>
                        </m.div>
                    </Row>
                </Container>
            </section>
  
        {/* Progressbar Section Start */}
        <section className="py-[160px] overflow-hidden bg-[#ffeb04] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]" >
          <Container>
            <m.div className="row" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
              <Col className="col-lg-5 md:mb-20 sm:mb-16">
                <h2 className="heading-6 font-serif text-darkgray mb-0 leading-[40px] sm:leading-[26px]">Provide <span className="font-semibold"> top gadgets, methodologies, and mechanisms </span> for a fun learning experience, introducing technical concepts gradually in a playful manner.</h2>
              </Col>
              <Col lg={{ span: 6, offset: 1 }}>
                <ProgressBar theme="progressbar-style-01" data={ProgressBarData01} trailColor="transparent" height="4px" color="#232323" animation={fadeIn} />
              </Col>
            </m.div>
          </Container>
        </section>
        {/* Progressbar Section End */}
  
        {/* Section Start */}
        <section className="bg-[#ffeb04] py-[80px] pt-0 md:pb-0">
          <Container fluid>
            <Row className="items-center">
              <Col className="border-[1px] border-r-0 border-l-0 border-b-0 border-dotted border-darkgray sm:mb-[30px]"></Col>
              <m.div className="col-md-auto text-center px-[4.5rem] md:px-10 xs:pt-6 xs:pb-8" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                <span className="font-serif font-light text-[70px] leading-[90px] text-darkgray -tracking-[3px] block xs:text-[50px] xs:leading-[55px]">Gamified <span className="font-semibold">Learning!</span></span>
              </m.div>
              <div className="col-md border-[1px] border-r-0 border-l-0 border-b-0 border-dotted border-darkgray sm:mt-[30px]"></div>
            </Row>
          </Container>
        </section>
        {/* Section End */}

        <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}>
        <button
            shape="circle"
            type="primary"
            onClick={handleButtonClick}
            style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", padding:"10px", color:"black"}}
          >
            Switch Age
        </button>
        </div>
  
        {/* Footer Start */}
        <Footer className="bg-[#ffeb04] py-20" theme="light">
          <Container>
            <Row>
              <Col lg={4} className="justify-start md:justify-center md:mb-[20px] flex items-center">
                <span className="font-serif font-semibold text-sm uppercase text-darkgray">Call us today! +91 7448427243</span>
              </Col>
              <Col lg={4} className="text-center md:mb-[20px]">
                <SocialIcons theme="social-icon-style-12" iconColor="dark" size="md" data={SocialIconsData} />
              </Col>
              <Col lg={4} className="text-right justify-end md:justify-center md:text-center flex items-center">
                <p className="font-serif font-semibold text-sm uppercase text-darkgray leading-[30px]">Copyright © 2022 - TechnologyGarage</p>
              </Col>
            </Row>
          </Container>
        </Footer>
        {/* Footer End */}
      </div>
    )
  }

export default RoboticsAdvanced