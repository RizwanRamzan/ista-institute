import React from "react";
import "./coursesCard.scss";
import { IMAGE_URL } from "../../Utils/baseUrls";
import { useNavigate } from "react-router-dom";

const CoursesCard = ({ item }) => {

  const navigate = useNavigate()

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
          <button onClick={()=>navigate(`/course-detail/${item?._id}`)} className="left_btn">Details</button>
          <button onClick={()=>navigate(`/apply-now?type=${item?.type}`)} className="right_btn">Enroll Now</button>
        </div>
      </div>
    </>
  );
};

export default CoursesCard;
