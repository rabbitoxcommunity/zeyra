import { Link } from "react-router-dom";
import React from "react";

export default function Banner() {
  return (
    <section className="flat-spacing-14 s-banner-with-text banner-text-skincare">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hover-shine hover-img">
              <div className="image-banner image shine-item img-style">
                <img
                  src="/img/about.jpg"
                  alt=""
                  className="lazyload"
                  width={480}
                  height={563}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content-banner wow fadeInRight">
              <div className="box-title-banner">
                <h4 className="letter-0 fw-normal" display-lg-3="">
                 About Us
                </h4>
                <p className="text-grey-3">
                 We’re an online store dedicated to bringing quality products straight to your home. From stylish home décor to innovative gadgets and everyday essentials, we offer a wide range of carefully selected items to make your life easier and more beautiful.
                </p>
                <p>Customer satisfaction is at the heart of everything we do, and we take pride in the positive reviews and trust our clients have shared about our products. We’re committed to delivering exceptional products, seamless shopping experiences, and reliable service—all under one roof.</p>
              </div>
              <div className="box-btn-banner">
                <Link
                  to={`/about-us`}
                  className="tf-btn animate-btn btn-red btn-lg fw-medium bg-brown-14 border-0"
                >
                  MORE ABOUT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
