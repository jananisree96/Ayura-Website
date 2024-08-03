import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MostPopular.css";

function MostPopular() {
  const products = [
    {
      id: 1,
      name: "Handmade Soap",
      price: "$35.00",
      imgSrc: "shop3.jpeg",
      alt: "handmade soap",
      sale: "true",
    },
    {
      id: 2,
      name: "Herb Candle",
      price: "$55.00",
      imgSrc: "herb-candle.png",
      alt: "herb candle",
      sale: "true",
    },
    {
      id: 3,
      name: "Herbal Oil",
      price: "$45.00",
      imgSrc: "oils.png",
      alt: "herbal oil",
      sale: "false",
    },
    {
      id: 4,
      name: "Honey Soap",
      price: "$25.00",
      imgSrc: "honeysoap.png",
      alt: "honey soap",
      sale: "true",
    },
    {
        id: 5,
        name: "Herb Candle",
        price: "$55.00",
        imgSrc: "herb-candle.png",
        alt: "herb candle",
        sale: "true",
      },
    {
      id: 6,
      name: "Oils",
      price: "$25.00",
      imgSrc: "oils.png",
      alt: "oils",
      sale: "false",
    },
    {
      id: 7,
      name: "Honey Soap",
      price: "$35.00",
      imgSrc: "honeysoap.png",
      alt: "honey soap",
      sale: "false",
    },
    {
      id: 8,
      name: "Oils",
      price: "$45.00",
      imgSrc: "oils.png",
      alt: "oils",
      sale: "true",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Product-list">
      <p className="headerp">MOST POPULAR</p>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="white">
              {product.sale === "true" && (
                <div className="sale-label">Sale</div>
              )}
              <img src={product.imgSrc} alt={product.alt} />
            </div>
            <p className="pro-name">{product.name}</p>
            <p className="pro-cost">{product.price}</p>
            <button className="pro-cart-btn">Add to Cart</button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MostPopular;
