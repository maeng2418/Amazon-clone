import React from "react";
import "./Home.css";
import Product from "./Product";
import productItem from "./product.json";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="banner"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        />
        <div className="home__row">
          <Product
            id={productItem.product[0].id}
            title={productItem.product[0].title}
            price={productItem.product[0].price}
            image={productItem.product[0].image}
            rating={productItem.product[0].rating}
          />
          <Product
            id={productItem.product[1].id}
            title={productItem.product[1].title}
            price={productItem.product[1].price}
            image={productItem.product[1].image}
            rating={productItem.product[1].rating}
          />
        </div>
        <div className="home__row">
          <Product
            id={productItem.product[2].id}
            title={productItem.product[2].title}
            price={productItem.product[2].price}
            image={productItem.product[2].image}
            rating={productItem.product[2].rating}
          />
          <Product
            id={productItem.product[3].id}
            title={productItem.product[3].title}
            price={productItem.product[3].price}
            image={productItem.product[3].image}
            rating={productItem.product[3].rating}
          />
          <Product
            id={productItem.product[4].id}
            title={productItem.product[4].title}
            price={productItem.product[4].price}
            image={productItem.product[4].image}
            rating={productItem.product[4].rating}
          />
        </div>
        <div className="home__row">
          <Product
            id={productItem.product[5].id}
            title={productItem.product[5].title}
            price={productItem.product[5].price}
            image={productItem.product[5].image}
            rating={productItem.product[5].rating}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
