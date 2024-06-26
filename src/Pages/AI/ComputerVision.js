import React from "react"
//Libraries
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";

//Components
import Header, {HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar} from "../../Components/Header/Header"
import Blockquote from "../../Components/Blockquote/Blockquote";
import Buttons from '../../Components/Button/Buttons'
import { fadeIn, fadeInLeft, zoomIn } from "../../Functions/GlobalAnimations";
import SocialIcons from "../../Components/SocialIcon/SocialIcons";
import FooterStyle01 from "../../Components/Footers/FooterStyle01";
import Overlap from "../../Components/Overlap/Overlap";
import SideButtons from "../../Components/SideButtons";

//Images
import RoboticsBasicsCoverImage from "../../Images/RoboticsBasicsCoverImage.png"
import RoboticsGarageLogo from "../../Images/RoboticsGarageLogo1.png"
import RoboticsSlider1 from "../../Images/RoboticsSlider1.png"
import RoboticsSlider2 from "../../Images/RoboticsSlider2.png"
import RoboticsSlider3 from "../../Images/RoboticsSlider3.png"
import RoboticsSlider4 from "../../Images/RoboticsSlider4.png"
import RoboticsSlider5 from "../../Images/RoboticsSlider5.png"
import RoboticsSquare from "../../Images/RoboticsSquare.png"

//Data
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
    // {
    //   img: RoboticsSlider5,
    // }
  ];

  const SocialIconsData = [
    {
      color: "#3b5998",
      link: "https://www.facebook.com/",
      icon: "fab fa-facebook-f",
    },
    {
      color: "#ea4c89",
      link: "https://dribbble.com/",
      icon: "fab fa-dribbble",
    },
    {
      color: "#1769ff",
      link: "https://www.behance.net/",
      icon: "fab fa-behance",
    },
    {
      color: "#fe1f49",
      link: "https://www.instagram.com/",
      icon: "fab fa-instagram",
    },
  ];

  const ComputerVision = (props) => {
    return (
      <div style={props.style}>
        {/* Header Start */}
        <Header topSpace={{ desktop: false, lg: false, md: true, sm: false, xs: false }} type="reverse-scroll">
          <HeaderNav fluid="fluid" theme="dark" className="px-[35px] py-[0px] md:px-0" containerClass="sm:px-0">
            <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
              <Link aria-label="header logo" className="flex items-center" to="/">
                <Navbar.Brand className="inline-block p-0 m-0">
                  {/* <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-white.webp' data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
                  <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-black.webp' data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
                  <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-black.webp' data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' /> */}
                </Navbar.Brand>
              </Link>
            </Col>
            <div className="col-auto hidden order-last md:block">
              <Navbar.Toggle className="md:ml-[10px] sm:ml-0">
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
              </Navbar.Toggle>
            </div>
            <Navbar.Collapse className="col-auto px-0 justify-end">
              <Menu {...props} />
            </Navbar.Collapse>
            {/* <Col className="col-auto text-right pe-0">
              <SearchBar className="pr-0" />
              <HeaderLanguage />
              <HeaderCart />
            </Col> */}
          </HeaderNav>
        </Header>
        {/* Header End */}
        <SideButtons />
        {/* Parallax Scrolling Start */}
        <div className="h-[800px] md:h-[650px] sm:h-[350px] flex items-center overflow-hidden relative">
          <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh] md:h-[700px] sm:h-[400px] sm:-top-[60px]" translateY={[-40, 40]} style={{ backgroundImage: `url(${RoboticsBasicsCoverImage})` }}></Parallax>
          <div className="absolute top-0 left-0 w-full h-full bg-[#374162] opacity-30"></div>
          <Container fluid className="relative xs:px-0">
            <Row className="h-full justify-center">
              <Col md={6} className="relative text-center flex flex-column justify-center">
                <span className="uppercase text-sm font-serif tracking-[5px] text-white inline-block mb-[20px] font-medium sm:mb-[10px]">
                 Exhilarating journey of AI with
                </span>
                <h2 className="font-serif text-white font-semibold uppercase block mb-0">
                 Computer Vision
                </h2>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Parallax Scrolling End */}
  
        {/* Section Start */}
        <section className="pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px]">
          <Container className="mb-[130px] lg:mb-[90px] md:mb-[75px] sm:mb-[50px]">
            <Row>
              <Overlap className="z-10">
                <img
                  height="" width=""
                  className="rounded-circle sm:w-[30%] xs:w-[40%] border-[12px] border-white rounded-full box-shadow-extra-large mx-auto"
                  src={RoboticsGarageLogo}
                  alt=""
                />
              </Overlap>
            </Row>
          </Container>
          <Container>
            <Row className="justify-center">
              <Col className="col-12 col-lg-11">
                <m.div {...fadeIn} className="row">
                  <Col lg={4} className="pr-[5%] lg:pr-[15px] md:mb-[50px]">
                    <h5 className="font-serif text-darkgray font-medium mb-16 -tracking-[1px]">
                    Begin an exhilarating journey into the world of AI
                    </h5>
                    {/* <ul className="pl-0">
                      <li className="border-b border-mediumgray pb-[20px] mb-[20px]">
                        <span className="uppercase text-darkgray w-[35%] inline-block font-medium font-serif text-md">
                          Published
                        </span>
                        20 January 2020
                      </li>
                      <li className="border-b border-mediumgray pb-[20px] mb-[20px]">
                        <span className="uppercase text-darkgray w-[35%] inline-block font-medium font-serif text-md">
                          Services
                        </span>
                        Branding
                      </li>
                      <li>
                        <span className="uppercase text-darkgray w-[35%] inline-block font-medium font-serif text-md">
                          Industry
                        </span>
                        Lifestyle
                      </li>
                    </ul> */}
                  </Col>
                  <Col lg={{ span: 7, offset: 1 }}>
                    <span className="font-serif text-md uppercase font-medium mb-[20px] inline-block text-darkgray">Mesmerizing journey into the realm of AI evolution</span>
                    <p className="mb-[25px] text-justify xs:text-left xs:mb-[15px]">
                    Embark on a mesmerizing journey into the realm of AI evolution, where computers refine their ability to communicate and comprehend with finesse, catalyzing innovation across diverse tasks. Beyond mere entertainment, they stand as indispensable instruments for broadening knowledge, mastering complex concepts, and nurturing inventive ideas. Experience the enchantment of AI as machines rise to become extraordinary thinkers, sparking the flames of creativity within you!.
                    </p>
                    <p className="mb-[25px] text-justify xs:text-left xs:mb-[15px]">
                    Explore the wonders of computer learning and creating cool AI-based applications. Imagine computers becoming super smart, just like your favorite robot! With AI, you can make awesome apps that understand and generate text, like having a helpful digital buddy who can tell stories, answer questions, and chat with you. Let's explore the fun world of AI and see what amazing things we can create together.     
                    </p>
                    {/* <Buttons ariaLabel="button" href="#" className="font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray hover:text-darkgray" color="#232323" title="Yourdomain.com" size="lg" /> */}
                  </Col>
                </m.div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section End */}
  
        {/* Section Start */}
  
        <section className="py-0 relative">
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
  
        {/* Section End */}
  
        {/* Section Start */}
        <m.section className="py-[130px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden" {...fadeIn}>
          <Container>
            <Row>
              <Col lg={11} xs={12}>
                <Row className="items-center">
                  <m.div className="col-12 col-md-6 xs:mb-[30px]" {...fadeIn}>
                    <img height="" width="" src={RoboticsSquare} alt="" />
                  </m.div>
                  <m.div className="col-12 col-md-6 col-xl-5 offset-xl-1" {...fadeInLeft}>
                    <Blockquote
                      className="xs:my-0"
                      theme="blockquote-style-02"
                      heading="Why technology garage for computer version?"
                      title="At Technology Garage, we're the go-to place for kids interested in learning about computer wizardry and crafting awesome applications. We're all about sparking that love for coding and AI in young minds, making it super fun and easy to understand. Whether you're just starting out or ready to tackle more advanced techniques, we've got you covered! Join us and unlock the secrets of the digital world with confidence and excitement."
                    />
                  </m.div>
                </Row>
              </Col>
            </Row>
          </Container>
        </m.section>
        {/* Section End */}

        <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]" style={{ paddingTop: '30px' }}>
                <Container>
                    <Row className="justify-between">
                        <m.div {...fadeIn} className="col-12 col-lg-4 col-md-7 col-sm-9 md:mb-[35px]">
                            <h6 className="font-serif text-darkgray font-medium m-0">Are you ready to embark on a journey into the boundless horizons of computer language models</h6>
                        </m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.5 } }} className="col-12 col-xl-3 col-lg-4 col-md-6 sm:mb-[30px]">
                            <div className="flex font-serif text-darkgray mb-[15px] font-medium"><span className="flex-shrink-0 self-center h-[1px] w-[40px] bg-[#ff6437] mr-[20px]"></span><div className="grow">The Exciting Journey </div></div>
                            <p className="md:w-[80%] xs:w-full">Embrace the exhilarating voyage through the realm of artificial intelligence—a journey ripe with discovery and revolutionary breakthroughs. Overcome obstacles, unlock the potential of machine learning, and stride boldly towards the forefront of technological evolution with unwavering determination. Experience firsthand how AI can solve complex problems, streamline processes, and revolutionize industries across the globe.</p>
                        </m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col-12 col-xl-3 col-lg-4 col-md-6">
                            <div className="flex font-serif text-darkgray mb-[15px] font-medium"><span className="flex-shrink-0 self-center h-[1px] w-[40px] bg-[#ff6437] mr-[20px]"></span><div className="grow">The Approach</div></div>
                            <p className="md:w-[80%] xs:w-full">Reveal the enchantment of computer language models and the creation of applications based on them, tailored for beginners through our simple approach. We provide easy-to-follow guidance and interactive activities to boost confidence and inspire curiosity, fostering a sense of excitement and discovery along the way.</p>
                        </m.div>
                    </Row>
                </Container>
            </section>
  
        {/* Section Start */}
        {/* <section className="pt-0 py-[250px] px-36 xl:px-12 lg:py-[180px] sm:px-[15px] sm:py-[50px] xs:px-0">
          <Container fluid>
            <Row className="row-cols-1 row-cols-lg-4 row-cols-sm-2">
              <m.div {...fadeIn} className="col mt-32 md:mt-16 xs:mt-0 xs:mb-[15px]">
                <img height="" width="" src="https://via.placeholder.com/800x1138" alt="" />
              </m.div>
              <m.div {...{ ...fadeIn, transition: { delay: 0.5 } }} className="col xs:mb-[15px]">
                <img height="" width="" src="https://via.placeholder.com/800x1138" alt="" />
              </m.div>
              <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col mt-32 md:mt-16 xs:mt-0 xs:mb-[15px]">
                <img height="" width="" src="https://via.placeholder.com/800x1138" alt="" />
              </m.div>
              <m.div {...{ ...fadeIn, transition: { delay: 0.7 } }} className="col">
                <img height="" width="" src="https://via.placeholder.com/800x1138" alt="" />
              </m.div>
            </Row>
          </Container>
        </section> */}
        {/* Section End */}
  
        {/* Section Start */}
        {/* <section className="pt-0 pb-[325px] overflow-visible lg:pb-[265px] md:pb-[185px] sm:pb-[70px] sm:!pt-[50px]" style={{ background: "url(https://via.placeholder.com/1920x700)" }}>
          <Container>
            <Row>
              <Overlap>
                <Col className="text-center relative">
                  <m.div {...zoomIn} className="flex justify-center">
                    <img height="" width="" src="https://via.placeholder.com/282x282" alt="" />
                  </m.div>
                </Col>
              </Overlap>
            </Row>
            <m.div {...fadeIn} className="row justify-center">
              <Col xl={8} lg={10} className="text-center mt-12 md:mt-0 md:mb-12 sm:mb-0">
                <span className="font-serif text-md uppercase font-medium mb-[20px] inline-block text-darkgray">
                  Your timeless staples identity
                </span>
                <h4 className="font-serif font-medium text-darkgray inline-block w-[90%]">
                  Clothing brand that produces timeless wardrobe staples
                </h4>
              </Col>
            </m.div>
          </Container>
        </section> */}
        {/* Section End */}
  
        {/* Section Start */}
        {/* <Overlap>
          <section className="overflow-visible py-[50px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
            <Container>
              <Row>
                <Col className="text-center">
                  <m.div {...fadeIn} className="flex justify-center">
                    <img height="" width="" src="https://via.placeholder.com/1088x578" alt="" />
                  </m.div>
                </Col>
              </Row>
            </Container>
          </section>
        </Overlap> */}
        {/* Section End */}
  
        {/* Section Start */}
        {/* <section className="py-0 overflow-hidden">
          <Container fluid>
            <Row>
              <m.div {...{ ...fadeIn }} className="col-12 col-lg-6 cover-background h-[700px] md:h-[550px] sm:h-[350px]" style={{ backgroundImage: "url(https://via.placeholder.com/960x763)" }}></m.div>
              <m.div {...{ ...fadeIn, transition: { delay: 0.5 } }} className="col-12 col-lg-6 cover-background h-[700px] md:h-[550px] sm:h-[350px]" style={{ backgroundImage: "url(https://via.placeholder.com/960x763)", }}></m.div>
            </Row>
          </Container>
        </section> */}
        {/* Section End */}
  
        {/* Section Start */}
        {/* <section className="py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]">
          <Container>
            <Row className="items-center xs:justify-center">
              <Col md={4} sm={4} className="text-right font-serif text-darkgray uppercase text-md font-medium sm:text-end xs:text-center xs:mb-[10px]">
                Share this project
              </Col>
              <Col md={4} sm={2}>
                <div className="w-full h-[1px] bg-mediumgray xs:my-[15px]"></div>
              </Col>
              <Col md={4} sm={6}>
                <SocialIcons
                  theme="social-icon-style-01"
                  className="text-darkgray xs:justify-center"
                  size="sm"
                  iconColor="dark"
                  data={SocialIconsData}
                />
              </Col>
            </Row>
          </Container>
        </section> */}
        {/* Section End */}
  
        {/* Section Start */}
        {/* <section className="relative z-[1] bg-lightgray p-0 overflow-hidden">
          <Container fluid className="px-0">
            <Row sm={2} className="row-cols-1 justify-center xs:text-center gx-0">
              <Col className="relative">
                <Link
                  to="/portfolio/single-project-page-05"
                  className="portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex"
                >
                  <div
                    className="portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150	bg-no-repeat bg-cover overflow-hidden bg-center"
                    style={{
                      backgroundImage:
                        "url(https://via.placeholder.com/955x185)",
                    }}
                  ></div>
                  <div className="btn_icon font-medium text-darkgray font-serif mr-uto uppercase">
                    <i className="line-icon-Arrow-OutLeft duration-100	text-[40px] inline-block mr-[20px] align-middle	"></i>
                    <span className="text-sm inline-block md:hidden">Prev project</span>
                  </div>
                  <span className="portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-left">
                    Model photography
                  </span>
                </Link>
              </Col>
              <Col className="relative md:flex md:justify-end xs:block">
                <Link
                  to="/portfolio/single-project-page-02"
                  className="portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex"
                >
                  <span className="portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-right">
                    Daimler financial
                  </span>
                  <div
                    className="portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150	bg-no-repeat bg-cover overflow-hidden bg-center"
                    style={{
                      backgroundImage:
                        "url(https://via.placeholder.com/955x185)",
                    }}
                  ></div>
                  <div className="btn_icon font-medium text-darkgray font-serif mr-uto uppercase">
                    <span className="text-sm inline-block md:hidden">Next project </span>
                    <i className="line-icon-Arrow-OutRight duration-100	text-[40px] inline-block ml-[20px] align-middle	"></i>
                  </div>
                </Link>
              </Col>
            </Row>
          </Container>
        </section> */}
        {/* Section End */}
  
        {/* Footer Start */}
        <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />
        {/* Footer End */}
      </div>
    );
  };

export default ComputerVision;