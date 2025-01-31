import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/detail.css";
import g1 from "../Assets/Images/g1.jpg";
import g2 from "../Assets/Images/g2.jpg";
import g3 from "../Assets/Images/g3.jpg";
import g4 from "../Assets/Images/g4.jpg";
import g5 from "../Assets/Images/g5.jpg";
import g6 from "../Assets/Images/program-2.jpg";
function Details() {
  return (
    <>
      <div className="deatls_card_container">
        <div className="details_card_one">
          <p> YEAR CARD</p>
          <p> ₹ 5000 </p>
          <p>For 1 Year</p>
          <p>Enjoy All The Features</p>
          <p>Onetime Access To All Club</p>
          <p>Group Trainer</p>
          <p>Book A Group Class</p>
          <p>Fitness Orientation</p>
        </div>

        <div className="deep_details">
          <h2 className="deep_details_heading">
            Exclusive Additional Benefits
          </h2>
          <p>
            🧘 Free Yoga & Meditation Guides – Access to expert yoga routines
            and relaxation techniques
          </p>
          <p>
            🥗 Nutrition Plans & Diet Tips – Get diet recommendations tailored
            to your fitness goals
          </p>
          <p>
            📖 Monthly Fitness & Wellness Articles – Stay informed with workout
            tips, health hacks, and more
          </p>
          <p>
            🎯 Goal Tracking Assistance – Help in setting and tracking your
            fitness milestones
          </p>
          <p>🎁 Special Discounts on Personal Training & Merchandise</p>
        </div>
      </div>
      <div className="book_button">
        <button> Book Demo</button>
      </div>
      <div className="home_gallery_section">
        <h1
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          Details Yoga
        </h1>
        <div className="home_gallery_container">
          <img src={g1} alt="" style={{ height: "250px", width: "250px" }} />
          <img src={g2} alt="" style={{ height: "250px", width: "250px" }} />
          <img src={g3} alt="" style={{ height: "250px", width: "250px" }} />
          <img src={g4} alt="" style={{ height: "250px", width: "250px" }} />
          <img src={g5} alt="" style={{ height: "250px", width: "250px" }} />
          <img src={g6} alt="" style={{ height: "250px", width: "250px" }} />
        </div>
      </div>
    </>
  );
}

export default Details;
