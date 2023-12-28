import React, { useEffect, useState } from "react";
import "../../Pages/Contact/contact.scss";
import { Col, Form, Input, Row, Select, Spin, message } from "antd";
import { data } from "./constant";
import { useForm } from "@formspree/react";

const JoiningForm = () => {
  const [service, setService] = useState("");
  const [courses, setCourses] = useState([]);
  const { TextArea } = Input;

  const [babag, handleSubmit] = useForm("meqbzlee");
  const [form] = Form.useForm();

  useEffect(() => {
    if (babag.succeeded) {
      form.resetFields();
      message.success("Thanks for joining!");
    }
  }, [babag]);

  const filterCouses = (category) => {
    const filterData = data?.filter((item) => item?.category == category);

    // Update state only if there is a change
    if (category !== service) {
      setCourses(filterData);
      setService(category);
    }
  };
  return (
    <div className="contact-main">
      <div className="contact">
        <p>Connect Now</p>
      </div>

      <div
        style={{ background: "rgba(59, 125, 237, 0.05)" }}
        className="contact-form"
      >
        <div className="contact-form-box">
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            style={{ width: "100%" }}
            form={form}
          >
            <Row gutter={40}>
              <Col span={24}>
                <p style={{ color: "#3B7DED" }}>Get Admission Get Success</p>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="certification"
                  label="Certification"
                  rules={[{ required: true, message: "please select service" }]}
                >
                  <Select
                    onChange={(e) => filterCouses(e)}
                    placeholder="Enter certification"
                    className="ant-select-selector"
                  >
                    {data?.map((item, index) => (
                      <Select.Option key={index} value={item?.category}>
                        {item?.category}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              {service != "Other" && (
                <Col span={12}>
                  <Form.Item
                    name="courses"
                    label="Courses / Diploma"
                    rules={[
                      {
                        required: true,
                        message: "please select courses / diploma",
                      },
                    ]}
                  >
                    <Select
                      disabled={!courses?.length}
                      onChange={(e) => setService(e)}
                      placeholder="Enter courses / diploma"
                      className="ant-select-selector"
                    >
                      {courses[0]?.subCategory?.map((item, index) => (
                        <Select.Option key={index} value={item?.name}>
                          {item?.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              )}
              {service == "Other" && (
                <Col span={12}>
                  <Form.Item
                    name="other"
                    label="Other"
                    rules={[
                      {
                        required: true,
                        message: "please enter other course",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Enter other course"
                      className="ant-input-affix-wrapper"
                    />
                  </Form.Item>
                </Col>
              )}
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Full Name"
                  rules={[
                    { required: true, message: "please enter you full name" },
                  ]}
                >
                  <Input
                    placeholder="Enter Fisrt Name"
                    className="ant-input-affix-wrapper"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="cnic"
                  label="CNIC (Optional)"
                  rules={[
                    { required: false, message: "please enter you CNIC" },
                  ]}
                >
                  <Input
                    placeholder="Enter CNIC"
                    className="ant-input-affix-wrapper"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "please enter you valid email",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter email"
                    className="ant-input-affix-wrapper"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "please enter you phone number",
                    },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="Enter phone number"
                    className="ant-input-affix-wrapper"
                  />
                </Form.Item>
              </Col>
              <Col span={24} className="textarea">
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: false,
                      message: "please enter you description",
                    },
                  ]}
                >
                  <TextArea
                    rows={4}
                    placeholder="Enter description"
                    className="ant-input-affix-wrapper"
                  />
                </Form.Item>
              </Col>
            </Row>
            <div span={24} className="form-button">
              <button style={{ background: "#3B7DED" }}>Submit Now</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default JoiningForm;
