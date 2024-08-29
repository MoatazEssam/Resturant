import React from "react";
import Slider from "react-slick";
import img from "../../assets/Copy of Happy Culinarians Day! by Slidesgo.pptx.png";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

function Rating() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10   dark:bg-black">
      <div className="container">
        <div
          data-aos="fade-up"
          className="flex flex-col w-full justify-center text-center items-center mb-12"
        >
          <div className="bg-primary mb-5 h-2 w-[80%] sm:w-[40%]"></div>
          <h1 className="text-4xl tracking-wider text-black dark:text-white mb-2 sm:text-6xl font-cairo font-bold">
            What Our Customers <span className="text-primary">Say</span>
          </h1>
          <p className="w-[80%] sm:w-[50%] font-cairo text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            quaerat et recusandae, sed tempora tempore est suscipit error? Harum
            perferendis ex deserunt iusto architecto modi molestiae quos libero,
            error autem.
          </p>
        </div>
        <div>
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
                <div className="my-6 w-fit h-fit " key={data.id}>
                  <div
                    className="flex flex-col gap-4 hover:shadow-2xl border-2 border-gray-200/90 dark:border-gray-200/20
                    py-8 px-6 mx-2  rounded-xl dark:bg-gray-800  relative"
                  >
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full h-30 w-30"
                      />
                    </div>
                    <div className="flex flex-col z-10  max-w-[100%] md:max-w-[80%] gap-4 items-center">
                      <div className="space-y-3">
                        <p className="text-gray-400 font-cairo font-medium text-lg">
                          {data.text}
                        </p>
                        <h1 className="text-3xl font-bold font-cairo text-black/80 dark:text-white">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20   dark:text-white/30 text-9xl font-serif absolute top-[15%] md:top-[25%] right-0">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
