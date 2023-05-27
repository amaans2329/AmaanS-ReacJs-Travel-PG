import React from "react";
import "./home.scss";
import img from "../../Assets/Home1.jpg";
import { GrLocation } from "react-icons/gr"
import { HiFilter } from "react-icons/hi"
import {TbApps} from "react-icons/tb"
import{BsListTask} from "react-icons/bs"

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <img src={img} alt="Cant Load"></img>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Find Your holiday's Here...</span>

          <h1 className="homeTitle">Let's Travel & Explore</h1>
        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Seach Your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here....." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select Your Date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">₹1,75000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="157000" min="25000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>        
          <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>

          </div>
        </div>
    </section>
  )
}

export default Home;
