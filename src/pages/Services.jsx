import React from "react";
import "./services.css";
const Services = () => {
  return (
    <>
      <section classNameName="services">
        <div className="service-body">
          <div className="service-desc">
              <img src="images/mp.jpg" className="card-img-top" alt="" />
                <h5 className="title">Responsive Webpage Design</h5>
                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quibusdam ex aut iure dignissimos quas deleniti provident autem ab nisi? Harum voluptas, unde ipsum cumque vitae autem earum consequuntur nihil consequatur facere similique, sunt porro laborum eaque illum adipisci. Modi vitae ullam fugiat quam, nisi distinctio repellendus sit? Soluta, alias.
                </p>
                <button className="btn btn-primary">Visit Me</button>
          </div>
          <div className="service-desc">
              <img src="images/mp.jpg" className="card-img-top" alt="" />
                <h5>React JS Development</h5>
                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quibusdam ex aut iure dignissimos quas deleniti provident autem ab nisi? Harum voluptas, unde ipsum cumque vitae autem earum consequuntur nihil consequatur facere similique, sunt porro laborum eaque illum adipisci. Modi vitae ullam fugiat quam, nisi distinctio repellendus sit? Soluta, alias.
                </p>
                <button className="btn btn-primary">Visit Me</button>
          </div>
          <div className="service-desc">
              <img src="images/mp.jpg" className="card-img-top" alt="" />
                <h5 className="title">Node JS Development</h5>
                <p className="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quibusdam ex aut iure dignissimos quas deleniti provident autem ab nisi? Harum voluptas, unde ipsum cumque vitae autem earum consequuntur nihil consequatur facere similique, sunt porro laborum eaque illum adipisci. Modi vitae ullam fugiat quam, nisi distinctio repellendus sit? Soluta, alias.
                </p>
                <button className="btn btn-primary">Visit Me</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
