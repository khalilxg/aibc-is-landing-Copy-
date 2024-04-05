import React from "react";
import "./HomePage.scss";
// SwiperJs for Carousel
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// Image imports
import headerLogo from "../../assets/header-logo.png";

// Video Imports
import bgMp4 from '../../assets/ezgif.com-gif-maker.mp4'
import bgWebM from '../../assets/ezgif.com-gif-maker.webm'

function HomePage(props) {
    return (
        <>
            <main className="homepage">
                <section className="header padding ">
                    <video id="bg-video" autoPlay loop muted playsInline>
                        <source src={bgWebM} type="video/webm" />
                        <source src={bgMp4} type="video/mp4" />
                    </video>
                    <div className="header__brand " id="tsparticles">
                        <h1 className="hidden-title">Wyvern Team</h1>
                        <img
                            src={headerLogo}
                            alt=""
                            className="header__brand__icon"
                        />
                        <p className="header__brand__description">
                        Welcome to AIBC, your one-stop AI solution for every industry. From healthcare to finance, law to education, and IT, we've got the tools and expertise to propel your business forward. Whether it's our ASI chat system, SupportGPT, powered by your data or our range of other services, we're here to revolutionize how you work. Experience the power of AI with AIBC – where innovation meets versatility, and success is inevitable                        
                        
                        </p>
                    
                    </div>
                </section>

                {/* Wrapper for background */}
                <div className="wrapper-top">
                    {/* Stats Section */}

                    <section className="stats padding">
                        <div class="video-container">
                            <iframe
                                class="video-iframe"
                                src="https://www.youtube.com/embed/52_0zQLqATE"
                                title="Rick Roll"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div className="stats__container">
                            <div className="stats__container__item">
                                <h2 className="stats__container__item__counter">
                                    <Ticker
                                        end={100}
                                        duration={1}
                                        suffix=" +"
                                    />
                                </h2>
                                <p className="stats__container__item__description">
                                    Unique Clients
                                </p>
                            </div>
                            <div className="stats__container__border"></div>
                            <div className="stats__container__item">
                                <h2 className="stats__container__item__counter">
                                    <Ticker
                                        end={100}
                                        duration={1}
                                        suffix=" +"
                                    />
                                </h2>
                                <p className="stats__container__item__description">
                                    Freelancers
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="services padding">
                        <h2 className="services__heading">OUR SERVICES</h2>
                        <div className="services__container">
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./web development.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        SupportGPT - Your GenAI Technical Support Virtual Assistant
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    SupportGPT is GenAI Tech's web-based chat interface powered by an exceptionally intelligent system known as ASI (Artificial Super Intelligence). It serves as your virtual technical support assistant, adept at deriving solutions from your documents, including PDFs, docs, spreadsheets, and databases. With SupportGPT, your clients receive swift and accurate assistance, leveraging the power of AI to resolve their queries effectively.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./plugin.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                    AI Consulting Services
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    At AIBC Tech, we offer comprehensive AI consulting services to guide our clients through the realm of artificial intelligence. From deep learning and machine learning strategies to various forecasting techniques, our experts provide invaluable insights and recommendations tailored to your business needs. Let us navigate the complexities of AI together and unlock its full potential for your organization.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./minecraft configuration.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                    Prototyping Robotics Solutions
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    Our prototyping robotics services empower clients to materialize their product concepts into reality. Leveraging advanced robotics technologies, we assist in the development and prototyping of innovative products. Whether it's automating processes, enhancing efficiency, or creating interactive experiences, our team is dedicated to bringing your ideas to life through cutting-edge robotics solutions
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./Discord Bot.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                    AI-Driven Product Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    AIBC Tech specializes in AI-driven product development, offering tailored solutions to meet diverse business requirements. From conceptualization to implementation, we harness the power of artificial intelligence to create innovative products that drive growth and competitiveness in the market. Partner with us to revolutionize your product offerings and stay ahead in the digital age
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./design.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                    Computer Vision Solutions for Enhanced Insights
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    Unlock the potential of visual data with our advanced computer vision solutions. Our expertise in computer vision enables us to extract valuable insights from images and videos, empowering businesses to make data-driven decisions and optimize processes. Whether it's object detection, image recognition, or video analysis, we leverage cutting-edge AI algorithms to deliver actionable insights and drive business success
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./minecraft design.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                    AI-Powered Automation Solutions
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    Streamline your operations and enhance efficiency with our AI-powered automation solutions. From business process automation to intelligent workflow management, we deploy cutting-edge AI technologies to automate repetitive tasks, optimize resource allocation, and drive productivity gains. Experience seamless operations and accelerated growth with our tailored automation solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Features Section */}
                <section className="features padding">
                    <h2 className="features__heading">OUR FEATURES</h2>
                    <div className="features__container">
                        <div className="features__container__item card-hover">
                            <img
                                src="./quality.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Quality
                            </h3>
                            <p className="features__container__item__details">
                            Exemplifying excellence, AIBC delivers solutions of unmatched reliability.".
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="./AFFORDABLE.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Affordable
                            </h3>
                            <p className="features__container__item__details">
                            Combining excellence and affordability, AIBC offers exceptional solutions
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="./EFFICIENT.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Efficient
                            </h3>
                            <p className="features__container__item__details">
                            Streamlining operations across diverse industries, AIBC provides effective solutions..
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="PROFESSIONAL.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Professional
                            </h3>
                            <p className="features__container__item__details">
                            Delivering expert solutions tailored to your industry, AIBC ensures professional outcomes..
                            </p>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="reviews padding">
                    <h2 className="reviews__heading">OUR REVIEWS</h2>

                    <div className="reviews__carousel">
                        <img
                            src="./btn-prev.png"
                            alt="btn-prev"
                            className="prev"
                        />
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            navigation={{
                                nextEl: ".next",
                                prevEl: ".prev",
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                    En tant que gestionnaire dans le secteur de la finance, je suis ravie des services proposés par AIBC. Leurs outils d'analyse et de prévision basés sur l'IA m'ont permis de prendre des décisions éclairées, pour le plus grand bénéfice de mes clients. Hautement recommandé!                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                    Luna Starr
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                    AIBC's AI solutions have revolutionized our IT operations! The seamless integration of their services has boosted our productivity and efficiency beyond expectations. Shukran!
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                    Ahmed Al-Fars
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                    AIBC's legal AI solutions have been a game-changer for our law firm. Document review used to be tedious and time-consuming, but with their assistance, we've increased our efficiency and accuracy. Couldn't be happier!
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                    Sophia Chin
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                    As a sound engineer, I am amazed by the capabilities of AIBC's AI solutions. Their algorithms for audio processing and waveform optimization have elevated our auditory experiences to new heights. AIBC is simply unmatched in their expertise!
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                    Amelia Silva
                                    </h2>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <img src="./btn-next.png" alt="" className="next" />
                    </div>
                    <a
                        href="https://discord.com"
                        target="_blank"
                        className="btn btn-primary"
                    >
                        Join Our Discord
                    </a>
                </section>
            </main>
        </>
    );
}
import "./HomePage.scss";
import Ticker from "../../components/Ticker/Ticker";

export default HomePage;
