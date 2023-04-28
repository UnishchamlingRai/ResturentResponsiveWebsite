import React from "react";
import "./Blog.scss";
// import data from '../../data'
const Blog = () => {
  const wines = [
    {
      title: "Chapel Hill Shiraz",
      price: "$56",
      tags: "AU | Bottle",
    },
    {
      title: "Catena Malbee",
      price: "$59",
      tags: "AU | Bottle",
    },
    {
      title: "La Vieillw Rose",
      price: "$44",
      tags: "FR | 750 ml",
    },
    {
      title: "Rhino Pale Ale",
      price: "$31",
      tags: "CA | 750 ml",
    },
    {
      title: "Irish Guinness",
      price: "$26",
      tags: "IE | 750 ml",
    },
  ];

  const cocktails = [
    {
      title: "Aperol Sprtiz",
      price: "$20",
      tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
    },
    {
      title: "Dark 'N' Stormy",
      price: "$16",
      tags: "Dark rum | Ginger beer | Slice of lime",
    },
    {
      title: "Daiquiri",
      price: "$10",
      tags: "Rum | Citrus juice | Sugar",
    },
    {
      title: "Old Fashioned",
      price: "$31",
      tags: "Bourbon | Brown sugar | Angostura Bitters",
    },
    {
      title: "Negroni",
      price: "$26",
      tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
    },
  ];
  //  console.log("Wins:",data.wines)
  const FoodMenu = ({ title, tags, price }) => {
    return (
      <>
        <div className="price">
          <div>
            <div className="price_content">
              <div>
                <p className="p1 commonLetter">{title}</p>
              </div>

             
              <div className="line_content">
              <div className="line"></div>
                <p className="commonLetter">{price}</p>
              </div>
            </div>

            <span>{tags}</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="blog unversal_Padding">
      <div className="blog_head">
        <p className="commonLetter">Menu That First You Palatte</p>
        <img className="spoon" src="./assets/spoon.png" alt="" />

        <h1 className="commonHTag">Today's Special</h1>
      </div>

      <div className="blog_troffe_content">
        <div className="troffe_info">
          <h1 className="commonHTag">Wine & Beer</h1>
          {wines.map((wine) => (
            <FoodMenu title={wine.title} tags={wine.tags} price={wine.price} />
          ))}
        </div>

        <div className="trofee_img">
          <img src="./assets/menu.png" alt="" />
        </div>

        <div className="troffe_info">
          <h1 className="commonHTag">Cocktails</h1>
          {cocktails.map((wine) => (
            <FoodMenu title={wine.title} tags={wine.tags} price={wine.price} />
          ))}
        </div>
      </div>

      <button className="commonBtn">View More</button>
    </div>
  );
};

export default Blog;
