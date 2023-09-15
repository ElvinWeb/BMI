import React from "react";
import { WhyUsData } from "../../Data/WhyUsData";
import contentImg from "../../bmi-image/about/about-image.png";

const WhyUs = () => {
  return (
    <section className="why-us-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-6">
            <div className="content">
              <h1 className="content-title">NİYƏ BİZ?</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                unde possimus, molestias pariatur necessitatibus deleniti
                repellendus eius consequuntur eligendi adipisci enim impedit, et
                est id quae ad inventore ullam tenetur iure animi dignissimos
                perferendis provident. Dignissimos excepturi recusandae nesciunt
                ratione dolores atque non soluta voluptatum, labore consequuntur
                voluptates sequi minus, sapiente ad delectus, assumenda fugiat
                cum. Architecto dolorem iste, a alias non repellat saepe
                deserunt omnis voluptatibus repudiandae blanditiis culpa
                eligendi illo error assumenda numquam inventore doloremque ipsa
                dolores. Aliquam sit amet, praesentium ex eligendi, ipsam quas
                sed natus atque sunt maxime. Obcaecati necessitatibus
                dignissimos provident. Autem dolor impedit nisi!
              </p>
              <div className="small-images">
                {WhyUsData.map((item) => (
                  <div className="item">
                    <img src={item.icon} alt="" />
                    <div className="item-label">
                      <span>{item.count}</span>
                      <span>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-center">
            <div className="video">
              <div className="video-img">
                <img src={contentImg} alt="" />
              </div>
              <div className="video-hover">
                <a href={contentImg} className="play-button">
                  <i class="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
