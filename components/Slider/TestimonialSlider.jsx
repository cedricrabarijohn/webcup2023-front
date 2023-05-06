import React, { useState } from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import Testimonial from "../Testimonial";
import Div from "../Div";
import Spacing from "../Spacing";
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb: "/images/testimonial_1.jpeg",
      testimonialText: `J'ai été époustouflé par les prédictions précises de Onirix d'At-Hack XPerience. C'est vraiment incroyable de voir à quel point cet outil peut décoder et interpréter mes rêves ! Bravo à toute l'équipe pour cette expérience unique !"`,
      avatarName: "Ahon Monsery",
      avatarDesignation: "Menuisier",
      ratings: "4",
    },
    {
      testimonialThumb: "/images/testimonial_2.jpeg",
      testimonialText: `Je suis enchanté par l'outil Onirix d'At-Hack XPerience. Grâce à cette IA, j'ai pu explorer mes rêves de manière totalement nouvelle et en apprendre davantage sur moi-même. Une innovation révolutionnaire !`,
      avatarName: "Ahon Monsery",
      avatarDesignation: "DG Inviso",
      ratings: "5",
    },
    {
      testimonialThumb: "/images/testimonial_3.jpeg",
      testimonialText: `At-Hack XPerience a vraiment repoussé les limites avec Onirix. Les prédictions de rêves étaient étonnamment précises, et cela a ouvert de nouvelles perspectives sur ma vie et mes aspirations. Je recommande vivement cet outil !`,
      avatarName: "Ahon Monsery",
      avatarDesignation: "Docteur",
      ratings: "4.5",
    },
    {
      testimonialThumb: "/images/testimonial_1.jpeg",
      testimonialText: `Onirix d'At-Hack XPerience a apporté une dimension captivante à ma compréhension des rêves. Cet outil m'a permis d'explorer les recoins de mon subconscient et d'en tirer des enseignements précieux. Une expérience inoubliable !"`,
      avatarName: "Ahon Monsery",
      avatarDesignation: "Ingénieur en informatique",
      ratings: "3.5",
    },
  ];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
