import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At [G-13,Mall], we are passionate about bringing you the best products and an exceptional shopping experience. Founded in [Year], our mission is to provide high-quality, affordable items that cater to your needs and preferences. We believe in the power of choice and strive to offer a diverse range of products, from the latest trends to timeless classics. Our dedicated team works tirelessly to ensure that every item in our store meets our high standards of quality and style. We are committed to sustainability and ethical practices, ensuring that our products are not only good for you but also for the planet. Thank you for choosing [G-13 Mall] – we look forward to serving you!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
