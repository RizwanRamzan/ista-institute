import React, { useEffect, useState } from "react";
import { getRequest } from "../../service/apiCalls";
import { Col, Empty, Row } from "antd";
import CoursesCard from "../../Component/CoursesCard/courses";
import "./courses.scss";

const Courses = () => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [activeBtn, setActiveBtn] = useState("");
  const [loading, setLoading] = useState([]);

  const GetAllCourses = async () => {
    setLoading(true);

    const onSuccess = (res) => {
      setLoading(false);
      setData(res?.data?.reverse());
      setAllData(res?.data?.reverse());
    };

    const onError = () => {
      setLoading(false);
    };

    await getRequest("", "news/get-all", true, onSuccess, onError);
  };

  useEffect(() => {
    GetAllCourses();
  }, []);

  const Buttons = [
    {
      button: "Design",
    },
    {
      button: "Development",
    },
    {
      button: "Marketing",
    },
    {
      button: "Others",
    },
  ];

  const filterData = (elm) => {
    if(elm == activeBtn){
      setData(allData)
      setActiveBtn("")
    }
    setActiveBtn(elm);
    const filterCourses = allData?.filter(
      (item) => item?.type?.toLowerCase() == elm?.toLowerCase()
    );
    setData(filterCourses)
  };

  return (
    <Row style={{width:"100%"}} gutter={20}>
      <div className="buttons">
        {Buttons.map((el,index) => (
          <Col key={index} span={6}>
            <button onClick={() => filterData(el.button)} className="art_btn">

              {el.button}{" "}
            </button>
            <div
              style={
                activeBtn == el?.button
                  ? {
                      borderBottom: "3px solid #3b7ded",
                      marginTop: "5px",
                      borderRadius: "10px",
                    }
                  : {}
              }
            ></div>
          </Col>
        ))}
      </div>

      {data?.length > 0 ? (
        data?.map((item, index) => (
          <Col span={6} key={index}>
            <CoursesCard item={item} />
          </Col>
        ))
      ) : (
        <Empty />
      )}
    </Row>
  );
};

export default Courses;
