import React from "react";
import "./coursesCard.scss";
import { IMAGE_URL } from "../../Utils/baseUrls";

const CoursesCard = ({ item }) => {


  return (
    <>
      <div className="coursesCard">
        <div className="title">
          <h2> {item.name} </h2>
          <p> {item.level} </p>
        </div>
        <div className="img">
          <img src={`${IMAGE_URL}/${item.image}`} alt="" />
        </div>
        <div className="card_btns">
          <button className="left_btn">Details</button>
          <button className="right_btn">Enroll Now</button>
        </div>
      </div>
    </>
  );
};

export default CoursesCard;
