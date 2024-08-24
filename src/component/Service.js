import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web1 from "../assets/images/web1.jpg";
import web2 from "../assets/images/web2.jpg";
import web3 from "../assets/images/web3.jpg";

const services = [
  {
    id: 1,
    image: web1,
    alt: "web1",
    description: "jl dj dfdsfdskfjds dsfjoidsjfuidshf dsfjkjdsfjdhsjf fdldsjflidjsoifue mnvknxvncxmv cvcxn",
  },
  {
    id: 2,
    image: web2,
    alt: "web2",
    description: "jl dj dfdsfdskfjds dsfjoidsjfuidshf dsfjkjdsfjdhsjf fdldsjflidjsoifue mnvknxvncxmv cvcxn",
  },
  {
    id: 3,
    image: web3,
    alt: "web3",
    description: "jl dj dfdsfdskfjds dsfjoidsjfuidshf dsfjkjdsfjdhsjf fdldsjflidjsoifue mnvknxvncxmv cvcxn",
  },
];

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      className="flex flex-col md:h-[100vh] px-5 py-32 bg-secondary text-white justify-center"
      style={{ background: "#9975fb45" }}
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 mb-5 w-[150px] font-bold">Project</h1>
          <p>loream cjh cdscndsncm dscndskjncksdcndsjcndscnkds cdcndksjcndms cdsnckjnsdj</p>
        </div>
      </div>
      <div className="w-full px-10">
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="relative">
              <img src={service.image} alt={service.alt} className="h-[200px] w-full object-cover" />
              <div className="service-hover">
                <p className="text-center px-5 py-5">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Service;
