import React, { useState,useEffect } from 'react'

//css
import "./LandingPage.css"

// Libraries
import { Link } from 'react-router-dom'
import { Col, Navbar, Row, Container } from 'react-bootstrap';
import { Modal,Button } from "antd";
import { m } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";

// Components
import Header, { HamburgerMenu, HeaderNav } from '../../Components/Header/Header';
import ReactCustomScrollbar from '../../Components/ReactCustomScrollbar';
import SideButtons from "../../Components/SideButtons";
import AI from "../../Images/AI.png";
import Robotics from "../../Images/Robotics.png";
import logo from "../../Images/logo.png"
import cloud from "../../Images/cloud.png"
import webdevelopment from "../../Images/coding.png"
import logo2 from "../../Images/logo2.png"
import Iot from "../../Images/IOT.png"
import TechnologyGarageTour from "../../Videos/TechnologyGarageTour.mp4"
import { fadeIn, fadeInLeft } from '../../Functions/GlobalAnimations';
import SocialIcons from '../../Components/SocialIcon/SocialIcons'
import {Footer} from "../../Components/Footers/Footer" ;
import AwarenessPrograms from "../../Images/halloffame1.png"
import Hackathons from "../../Images/halloffame2.png"
import WorkShops from "../../Images/workShopsFame.png"
import Graduations from "../../Images/graduationsFame.png"
import ClubEvents from "../../Images/clubEventsFame.png"


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

const SwiperImgData = [
  {
    img: AwarenessPrograms,
  },
  {
    img: Hackathons,
  },
  {
    img: WorkShops,
  },
  {
    img: Graduations,
  },
  {
    img: ClubEvents
  }
];

const LandingPage = (props) => {
  
  const [isHover, setHover] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const InteractiveportfolioPageData = [
    {
      number: "01",
      title: "AI",
      img: AI,
      link: props.age ? "/home/AI/Advanced" : "/home/AI/Kids",
    },
    {
      number: "02",
      title: "IOT",
      img: Iot,
      link: "/portfolio/single-project-page-03",
    },
    {
      number: "03",
      title: "Robotics",
      img: Robotics,
      link: props.age ? "/home/robotics/Advanced" : "/home/robotics",
    },
    {
      number: "04",
      title: "Coding",
      img: webdevelopment,
      link: "/home/webdevelopment",
    },
    {
      number: "05",
      title: "Cloud",
      img: cloud,
      link: "/portfolio/single-project-page-05",
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    props.setAge(true);
    localStorage.setItem('age', 'true');
    props.setAskedAgeQuestion(true);
    localStorage.setItem('askedAgeQuestion', 'true');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    props.setAskedAgeQuestion(true);
    localStorage.setItem('askedAgeQuestion', 'true');
  };

  useEffect(() => {
    if (!props.age && !props.askedAgeQuestion) {
      showModal();
    }
  }, [ props.age, props.askedAgeQuestion]);

  const handleMouseEnter = (e, index) => {
    setHover(index);
  };

  return (
    <>
      <SideButtons animation={false} />
      {/* Header Start */}
      <Header topSpace={{ md: true }} className="absolute top-0 left-0 w-full z-10 flex items-center md:py-0">
        <HeaderNav fluid="fluid" theme="dark" expand="lg" containerClass="sm:px-0" className="px-[35px] h-[140px] lg:h-[100px] md:h-[70px] md:px-0 md:py-[17px] py-0 w-full">
          <Col className="col-auto col-sm-6 col-lg-2 mr-auto ps-lg-0">
            <Link aria-label="link for" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img className="default-logo" width="111" height="36" loading="lazy" src={logo} alt='logo' />
                <img className='alt-logo' width="111" height="36" loading="lazy" src={logo2} alt='logo' />
                <img className="mobile-logo" width="111" height="36" loading="lazy" src={logo2} alt='logo' />
                {/* <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/symbol-black.webp' data-rjs='/assets/img/webp/symbol@2x.webp' alt='logo' />
                <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/symbol.webp' data-rjs='/assets/img/webp/symbol@2x.webp' alt='logo' /> */}
                {/* <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/symbol-black.webp' data-rjs='/assets/img/webp/symbol-black@2x.webp' alt='logo' /> */}
              </Navbar.Brand>
            </Link>
          </Col>
          <Col className="col-auto pe-lg-0">
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
                    {/* <Col className="col-12 text-left none md:block sm:hidden px-0">
                      <div className="font-serif mt-[50px]">
                        <span className="mb-[10px] font-light text-xlg inline-block">Let's work together?</span>
                        <h2 className="heading-6 mb-0"><a aria-label="gmail" href="mailto:info@domain.com" className="text-[#fff] border-b border-[#fff] hover:text-white hover:border-white">info@domain.com</a></h2>
                      </div>
                    </Col> */}
                  </Row>
                </Col>
              </Row>
            </HamburgerMenu>
          </Col>
        </HeaderNav>
      </Header>
      {/* Header End */}

      <>
        <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null} className="custom-modal">
          <div className='modal-content'>
            <h6>The Course you looking for the Student's age is greater than 15 ?</h6>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }} className='modal-button'>
              <button className="custom-button custom-button-yes" onClick={handleOk} style={{ marginRight: '8px' }}>Yes</button>
              <button className="custom-button custom-button-no" onClick={handleCancel}>No</button>
            </div>
          </div>
        </Modal>
      </>

      <section className="video-section">
        <video src={TechnologyGarageTour} autoPlay loop muted playsInline className="fullscreen-video"></video>
      </section>

      {/* Section Start */}
      <section className="home-interactive-portfolio">
        <div className="fullscreen-hover-box full-screen">
          <ul className="fullscreen-hover-list light landscape:md:mb-[60px]" style={{ overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {
              InteractiveportfolioPageData.map((item, i) => {
                return (
                  <li key={i} onMouseEnter={e => handleMouseEnter(e, i)} className={`hover-list-item${isHover === i ? " active" : ""}`}>
                    <Link aria-label="link for" to={item.link} className="">
                      <h2 className="heading-6 interactive-number">{item.number}</h2>
                      <span className="interactive-line"></span>
                      <span className="interactive-title interactive_title" data-link-text={item.title}>{item.title}</span>
                      <i className="line-icon-Arrow-OutRight interactive-icon"></i>
                    </Link>
                    <div className="fullscreen-hover-image" style={{ backgroundImage: `url(${item.img})`}}></div>
                  </li>
                )
              })
            }
          </ul>
          <div className="text-center w-full absolute left-0 bottom-[70px] opacity-70 lg:bottom-[25px]">Copyright © 2022 - TechnologyGarage</div>
        </div>
      </section>
      {/* Section End */}

      <section className="py-[80px] pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px] bg-black text-white">
          <Container>
              <Row className="justify-center">
                  <Col className="col-12 col-lg-11">
                      <m.div {...fadeIn} className="row">
                          <Col lg={4} className="pr-[5%] lg:pr-[15px] md:mb-[50px]">
                              <h5 className="font-serif text-white font-medium mb-16 -tracking-[1px]">
                                  Why Technology Garage?
                              </h5>
                          </Col>
                          <Col lg={{ span: 7, offset: 1 }}>
                              <span className="font-serif text-md uppercase font-medium mb-[20px] inline-block text-white">Showcase your Imagination</span>
                              <p className="mb-[25px] text-justify xs:text-left xs:mb-[15px]">
                                  Welcome to the heart of innovation! At Technology Garage, we fuel curiosity, empower minds, and shape futures. With hands-on learning in Robotics, AI, Cloud Computing, Virtual Reality, Web Technologies, IoT, and more, our garage is where dreams take flight. Join us and let's drive innovation together! Explore cutting-edge technologies, unleash your creativity, and become a trailblazer in the digital age. At Technology Garage, the possibilities are endless.
                              </p>
                          </Col>
                      </m.div>
                  </Col>
              </Row>
          </Container>
      </section>

      <section className="py-[80px] pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px] bg-black text-white">
          <Container>
              <Row className="justify-center">
                  <Col className="col-12 col-lg-11">
                      <m.div {...fadeIn} className="row">
                          <Col lg={4} className="pr-[5%] lg:pr-[15px] md:mb-[50px]">
                              <h5 className="font-serif text-white font-medium mb-16 -tracking-[1px]">
                               Technology Garage's Methodology
                              </h5>
                          </Col>
                          <Col lg={{ span: 7, offset: 1 }}><span className="font-serif text-md uppercase font-medium mb-[20px] inline-block text-white">Empowering Young Innovators</span>
                              
                              <p className="mb-[25px] text-justify xs:text-left xs:mb-[15px]">
                              At Technology Garage, we offer hands-on coaching for kids, following a "show and tell" methodology. Our stage-wise curriculum covers Python, AI, hardware, cloud computing, robotics, and more, with captivating stories accompanying each task. With one-on-one coaching and flexible timings, we tailor learning to each child's needs. Our facilities boast world-class technologies, and assessments follow U.S. based scoring systems. Join us to ignite your child's curiosity and unleash their potential in the exciting world of technology!
                              </p>
                          </Col>
                      </m.div>
                  </Col>
              </Row>
          </Container>
      </section>

      <section className="py-[80px] pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px] bg-black text-white">
          <Container>
              <Row className="justify-center">
                  <Col className="col-12 col-lg-11">
                      <m.div {...fadeIn} className="row">
                          <Col lg={4} className="pr-[5%] lg:pr-[15px] md:mb-[50px]">
                              <h5 className="font-serif text-white font-medium mb-16 -tracking-[1px]">
                                 Become Future-Ready with Technology Garage
                              </h5>
                          </Col>
                          <Col lg={{ span: 7, offset: 1 }}>
                              {/* <span className="font-serif text-md uppercase font-medium mb-[20px] inline-block text-white">Showcase your Imagination</span> */}
                              <p className="mb-[25px] text-justify xs:text-left xs:mb-[15px]">
                               In today's rapidly changing world, being future-ready is crucial for success. At Technology Garage, we empower you with cutting-edge skills and a forward-thinking mindset. From coding to AI and beyond, our hands-on approach ensures you're equipped to thrive in tomorrow's tech-driven landscape. Join us and unlock your potential for success in the future!
                              </p>
                          </Col>
                      </m.div>
                  </Col>
              </Row>
          </Container>
      </section>

      <section className=" relative bg-black">
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
                <SwiperSlide className="w-[55%] sm:w-[98%]" key={i}>
                  <img height="" width="" src={item.img} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>

      <Footer className="bg-[#fff] py-20" theme="light">
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
    </>
  )
}

export default LandingPage