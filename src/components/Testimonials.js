import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <div className="myCarousel">
            <h3>Andrew Phelps</h3>
            <h4>Assan Customerr</h4>
            <p>
                "Brought some great knowledge and experience to the team when we started out using Sitecore.  
                His work rate has to be seen to be believed!"
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <h3>Greg Hunter</h3>
            <h4>Assan Customer</h4>
            <p>
                "Conscientious, productive, and very willing to share his knowledge with others."
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <h3>Simon Procter</h3>
            <h4>Director at Codeminers Solutions</h4>
            <p>
                "highly skilled, knowledgeable and an asset to the team."
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}