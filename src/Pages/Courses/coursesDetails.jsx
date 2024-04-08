import React, { useEffect, useState } from "react";
import { getRequest } from "../../service/apiCalls";
import { useParams } from "react-router-dom";

const CoursesDetails = () => {
  const news = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState([]);

  const GetNewById = async () => {
    setLoading(true);

    const onSuccess = (res) => {
      setLoading(false);
      setData(res?.data);
    };

    const onError = (err) => {
      setLoading(false);
    };

    await getRequest("", `news/new/${news?.id}`, true, onSuccess, onError);
  };

  useEffect(() => {
    if (news?.id) {
      GetNewById();
    }
  }, [news]);

  return (
    <>
      <div className="course-details">
        {/* <div style={styles.courseDetails}>
          <h1 style={styles.heading}>Become A {data?.name}</h1>
          <h2 style={styles.subHeading}>Course Description</h2>
          <p style={styles.description}>
            This graphic designing course is designed to teach the perfect
            techniques of designing, you will learn how to use each tool of
            software and learn how to become an expert in design
          </p>
        </div>
      </div>
      <div style={styles.cardContainer}>
        <div style={styles.cardStyle}>
          <h1 style={styles.heading}>Get Admission Get Success</h1>
          <hr style={styles.divider} />
          <div>
            <h1 style={styles.heading}>Skill Level:</h1>
            <div style={styles.value}>Basic</div>
            <h1 style={styles.heading}>Duration:</h1>
            <div style={styles.value}>2 months</div>
          </div>
          <div>
            <hr style={styles.divider} />
            <div style={styles.text}>View All Courses</div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CoursesDetails;
