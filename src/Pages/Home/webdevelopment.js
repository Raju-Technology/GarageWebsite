import React from "react";
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import { m } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import RoboticsSlider3 from "../../Images/RoboticsSlider3.png"
import RoboticsSlider4 from "../../Images/RoboticsSlider4.png"
import RoboticsBasicsCoverImage from "../../Images/RoboticsBasicsCoverImage.png"
import RoboticsGarageLogo from "../../Images/RoboticsGarageLogo1.png"
import RoboticsSlider1 from "../../Images/RoboticsSlider1.png"
import RoboticsSlider2 from "../../Images/RoboticsSlider2.png"
import websquare from "../../Images/websquare.png"
import kidsweb from "../../Images/kidsweb.png"
import Blockquote from "../../Components/Blockquote/Blockquote";
import cssweb from "../../Images/cssweb.png";
//Components
import { fadeIn, fadeInLeft } from '../../Functions/GlobalAnimations'
import Header, { HamburgerMenu, HeaderNav } from '../../Components/Header/Header'
import PortfolioOverlay from "../../Components/Portfolio/PortfolioOverlay";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import SocialIcons from '../../Components/SocialIcon/SocialIcons'
import ReactCustomScrollbar from "../../Components/ReactCustomScrollbar";
import {Footer} from "../../Components/Footers/Footer" 
import { TextAnime } from "../../Components/FancyText/FancyText";
import SideButtons from "../../Components/SideButtons";



//Data
import { ProgressBarData01 } from "../../Components/ProgressBar/ProgressBarData";
//Images
import webdes from "../../Images/webdes.png";
import logo2 from "../../Images/logo2.png";
import web from "../../Images/web.png";

const PortfolioOverlayData = [
    // {
    //   title: "Webdevelopment",
    //   img: web,
    //   category: [""],
    //   subtitle: "Beginners",
    //   link: "/webdevelopment/Kids"
    // },
    // {
    //   title: "Real time",
    //   img: "https://via.placeholder.com/800x800",
    //   category: [""],
    //   subtitle: "Project",
    //   link: "/webdevelopment/read world"
    // },
    // {
    //   title: "Leather",
    //   img: "https://via.placeholder.com/800x800",
    //   category: [""],
    //   subtitle: "Photography",
    //   link: "/portfolio/single-project-page-03"
    // },
    // {
    //   title: "Gardner",
    //   img: "https://via.placeholder.com/800x800",
    //   category: [""],
    //   subtitle: "Photography",
    //   link: "/portfolio/single-project-page-04"
    // },
    // {
    //   title: "Manchester",
    //   img: "https://via.placeholder.com/800x800",
    //   category: [""],
    //   subtitle: "Photography",
    //   link: "/portfolio/single-project-page-05"
    // },
    // {
    //   title: "Armchair",
    //   img: "https://via.placeholder.com/800x800",
    //   category: [""],
    //   subtitle: "Photography",
    //   link: "/portfolio/single-project-page-01"
    // },
    // {
    //   title: "Truenorth",
    //   img: "https://via.placeholder.com/800x800",
    //   category: [""],
    //   subtitle: "Identity",
    //   link: "/portfolio/single-project-page-02"
    // },
    // {
    //   title: "Cortifiel",
    //   img: "https://via.placeholder.com/800x800",
    //   category: [""],
    //   subtitle: "Photography",
    //   link: "/portfolio/single-project-page-03"
    // }
  ]

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
    },]

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

  const webdevelopment = (props) => {
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
                          <h2 className="heading-6 mb-0"><a aria-label="gmail" href="mailto:info@domain.com" className="text-[#5CE1E6] border-b border-[#5CE1E6] hover:text-white hover:border-white">info@domain.com</a></h2>
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
          <Parallax className="lg-no-parallax bg-cover absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh] sm:h-[100vh] md:h-[650px] !bg-[50%_0] lg:bg-[right_-230px_center] md:bg-right sm:top-0 sm:bg-[right_-350px_center] landscape:bg-right" translateY={[-20, 20]} style={{ backgroundImage: `url(${webdes})` }}></Parallax>
          <Container>
            <Row className="full-screen md:h-[520px] sm:h-[100vh]">
              <Col xl={5} md={5} className="relative flex flex-col justify-center">
                <h2 className="font-serif font-light -tracking-[2px] text-darkgray uppercase mb-[15px]">Hello,  i am</h2>
                <div className="font-serif cd-headline push">
                  <h3 className="heading-5 mb-0 text-darkgray font-serif">
                    <TextAnime color="#232323" duration={3000} className="font-bold text-darkgray uppercase text-[60px] leading-[95px] -tracking-[5px] sm:-tracking-[.5px] lg:text-[90px] lg:leading-[90px] md:text-[70px] md:leading-[65px] sm:text-[45px] sm:leading-[43px]" animation="push" data={["Code", "Web", "web"]} />
                  </h3>
                  <h4 className="heading-5 mb-0 text-darkgray font-serif">
                    <TextAnime color="#232323" duration={3000} className="font-bold text-darkgray uppercase text-[60px] leading-[95px] -tracking-[5px] sm:-tracking-[.5px] lg:text-[90px] lg:leading-[90px] md:text-[70px] md:leading-[65px] sm:text-[45px] sm:leading-[43px]" animation="push" data={["Craft", "Pluse", "Builder"]} />
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
                <h2 className="heading-6 font-serif leading-[40px] w-[90%] mb-0 lg:w-full sm:leading-[26px] xs:text-center">Web development entails the creation and upkeep of websites or web applications, involving the implementation of coding, design, and functionality to deliver dynamic experiences&nbsp;
                  <span className="font-bold text-decoration-line-bottom-medium leading-[40px] whitespace-nowrap sm:leading-[26px]">industries</span></h2>
              </m.div>
              <Col xl={{ span: 6, offset: 1 }} lg={7} md={9} className="flex items-center xs:flex-col">
                <m.div className="w-[60%] md:w-[55%] xs:w-full xs:mb-[15px]" {...{ ...fadeInLeft, transition: { delay: 0.4, duration: 0.4 } }}>
                  <span className="font-serif text-[11rem] leading-[11rem] text-darkgray font-semibold -tracking-[7px] block xs:text-center md:text-[9rem]"><span className="text-[#5CE1E6] font-light mr-[35px]">|</span>02<span className="text-[#5CE1E6] font-light ml-[35px]">|</span></span>
                </m.div>
                <m.div className="text- w-[40%] pl-[25px] xs:w-full md:pl-0"  {...{ ...fadeInLeft, transition: { delay: 0.6, duration: 0.6 } }}>
                  <h3 className="heading-5 font-serif font-medium text-darkgray mb-0 -tracking-[1px] xs:text-center">Years of Gamified Way Of Coaching</h3>
                </m.div>
              </Col>

               <div style={{ marginBottom: '100px' }}></div> 
               
              <Container>
                
            <Row className="justify-center">
              <Col className="col-12 col-lg-11">
                <m.div {...fadeIn} className="row">
                  <Col lg={4} className="pr-[5%] lg:pr-[15px] md:mb-[50px]">
                    <h5 className="font-serif text-darkgray font-medium mb-16 -tracking-[1px]">
                     Why Web Technology ?
                    </h5>
                    </Col>
                  <Col lg={{ span: 7, offset: 1 }}>
                    <span className="font-serif text-md uppercase font-medium mb-[20px] inline-block text-darkgray">
Webtechnology innovates our world</span>
                    <p className="mb-[25px] text-justify xs:text-left xs:mb-[15px]">
                   
Web technology is the foundation of our online world, making it easy for people everywhere to communicate and work together. It lets businesses and individuals create cool stuff, like interactive websites and apps. Web tech also helps businesses sell things online and brings people together in online communities. 
                    </p>

                    
                    {/* <Buttons ariaLabel="button" href="#" className="font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray hover:text-darkgray" color="#232323" title="Yourdomain.com" size="lg" /> */}
                  </Col>
                </m.div>
              </Col>
            </Row>
          </Container>
            </Row>
          </Container>
        </section>

        <section className="py-0 relative">
        <Container>
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
          </Container>

        </section>
    

        <m.section className="py-[130px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden" {...fadeIn}>
          <Container>
            <Row>
              <Col lg={11} xs={12}>
                <Row className="items-center">
                  <m.div className="col-12 col-md-6 xs:mb-[30px]" {...fadeIn}>
                    <img height="" width="" src={kidsweb} alt="" />
                  </m.div>
                  <m.div className="col-12 col-md-6 col-xl-5 offset-xl-1" {...fadeInLeft}>
                    <Blockquote
                      className="xs:my-0"
                      theme="blockquote-style-02"
                      heading="Why Technology Garage for Webtechnology?"
                      title="Explore Technology & Automation at Technology Garage: From Production to Efficiency, Dive into Concise Learning to Master the Basics. Join Us to Fuel Your Tech Passion with Completely Practical, Hands-On, and One-on-One Coaching for All!"
                    />
                  </m.div>
                </Row>
              </Col>
            </Row>
          </Container>
        </m.section>

       
           <Container>
            <Row className="justify-center">
              <Col className="col-12 col-lg-11">
                <m.div {...fadeIn} className="row">
                  <Col lg={4} className="pr-[5%] lg:pr-[15px] md:mb-[50px]">
                    <h5 className="font-serif text-darkgray font-medium mb-16 -tracking-[1px]">
                    Frontend Mastery for Kids!
                    </h5>
                    </Col>
                  <Col lg={{ span: 7, offset: 1 }}>
                    <span className="font-serif text-md uppercase font-medium mb-[20px] inline-block text-darkgray">
                    Frontend Skills for Young Coders!</span>
                    <p className="mb-[25px] text-justify xs:text-left xs:mb-[15px]">
                    Technology Garage, where young minds dive headfirst into the dynamic world of HTML, CSS, and JavaScript! 
                    Our innovative approach transforms the learning process into an exhilarating adventure, complete with captivating stories, 
                    gamified challenges, and immersive hands-on experiences.We journey through the exciting realm of frontend development, 
                    where every line of code opens doors to endless possibilities and empowers young learners to shape the future of technology! Explore, create, and unleash your potential with us at Technology Garage - where the digital frontier awaits your exploration!
              
                    </p>
                    {/* <Buttons ariaLabel="button" href="#" className="font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray hover:text-darkgray" color="#232323" title="Yourdomain.com" size="lg" /> */}
                  </Col>
                </m.div>
              </Col>
            </Row>
            </Container>
        
                  

            <m.section className="py-[130px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden" {...fadeIn}>
          <Container>
            <Row>
              <Col lg={11} xs={12}>
                <Row className="items-center">
                  <m.div className="col-12 col-md-6 xs:mb-[30px]" {...fadeIn}>
                    <img height="" width="" src={websquare} alt="" />
                  </m.div>
                  <m.div className="col-12 col-md-6 col-xl-5 offset-xl-1" {...fadeInLeft}>
                    <Blockquote
                      className="xs:my-0"
                      theme="blockquote-style-02"
                      heading="Craft Their Own Web Platforms!"
                      title="At Technology Garage, we empower kids to take the reins of web technology, delving into the realms of HTML, CSS, and JavaScript with enthusiasm and creativity. With our guidance, young learners discover the power of coding as they design their own websites, bringing their favorite hobbies, interests, and stories to life. Utilizing HTML, they add text, images, and links, crafting their site to reflect their unique vision and style!"
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
                        <div className="flex font-serif text-darkgray mb-[15px] font-medium"><span className="flex-shrink-0 self-center h-[1px] w-[40px] bg-[#ff6437] mr-[20px]"></span><div className="grow">HTML - Building the Foundation!</div></div>
                            <p className="fmd:w-[80%] xs:w-ful">
                        At Technology Garage, young explorers embark on a thrilling journey into the world of HTML! We believe every child can become a coding wizard, crafting digital wonders. 
                        Through interactive lessons and interactive activities, we spark creativity and unlock the endless possibilities of the web. 
                        Dive into this exciting adventure filled with learning and imagination!  </p>
                        </m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.5 } }} className="col-12 col-xl-3 col-lg-4 col-md-6 sm:mb-[30px]">
                            <div className="flex font-serif text-darkgray mb-[15px] font-medium"><span className="flex-shrink-0 self-center h-[1px] w-[40px] bg-[#ff6437] mr-[20px]"></span><div className="grow">CSS - Crafting the Digital Aesthetics!</div></div>
                            <p className="md:w-[80%] xs:w-full">In the world of digital artistry, CSS opens doors to a vibrant landscape of design and style. 
                            Through cascading style sheets, we craft elegant layouts, infuse our creations with life, and paint vivid landscapes. 
                            With bold colors and mesmerizing animations, CSS transforms our dreams into visually stunning realities!</p>
                        </m.div>
                        <m.div {...{ ...fadeIn, transition: { delay: 0.6 } }} className="col-12 col-xl-3 col-lg-4 col-md-6">
                            <div className="flex font-serif text-darkgray mb-[15px] font-medium"><span className="flex-shrink-0 self-center h-[1px] w-[40px] bg-[#ff6437] mr-[20px]"></span><div className="grow"> 
                            JavaScript - Bringing Adventures to Life!</div></div>
                            <p className="md:w-[80%] xs:w-full">

                            In JavaScript's magical realm, we unleash the power of interactivity and dynamism.
                             Through coding quests, we animate our web creations, crafting engaging games and storytelling with animation.
                              JavaScript fuels our imagination, transforming regular websites into captivating adventures that captivate audiences worldwide.</p>
                        </m.div>
                    </Row>
                </Container>
            </section>
        {/* Portfolio Section Start */}
        <section className="">
          <Container fluid className="px-0">
            <PortfolioOverlay
              overlay="#000"
              grid="portfoliooverlay-personalportfolio grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col mt-0"
              data={PortfolioOverlayData}
            />
          </Container>
        </section>
        {/* Portfolio Section End */}
  
        {/* Progressbar Section Start */}
        <section className="py-[160px] overflow-hidden bg-[#5CE1E6] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <m.div className="row" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
              <Col className="col-lg-5 md:mb-20 sm:mb-16">
                <h2 className="heading-6 font-serif text-darkgray mb-0 leading-[40px] sm:leading-[26px]">
                     Offering<span className="font-semibold"> top gadgets, methodologies, and mechanisms </span>to foster an enjoyable learning journey, gradually introducing technical concepts in a playful manner.</h2>
              </Col>
              <Col lg={{ span: 6, offset: 1 }}>
                <ProgressBar theme="progressbar-style-01" data={ProgressBarData01} trailColor="transparent" height="4px" color="#232323" animation={fadeIn} />
              </Col>
            </m.div> 
          </Container>
        </section>
        {/* Progressbar Section End */}
  
        {/* Section Start */}
        <section className="bg-[#5CE1E6] py-[80px] pt-0 md:pb-0">
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
  
        {/* Footer Start */}
        <Footer className="bg-[#5CE1E6] py-20" theme="light">
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

export default webdevelopment