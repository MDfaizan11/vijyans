import React from "react";
import chetnaImg from "../Assets/Images/chetna-img1.ee1d0c124010e8fb972f.png";
import "../Style/chetna.css";
function Chetna() {
  return (
    <>
      <h1 className="chetna_heading">Welcome to Chetna</h1>
      <div className="chetna_frature_wrapper">
        <div className="chetna_image_wrapper">
          <img src={chetnaImg} alt="Chetna" />
        </div>
        <div className="chetna_program_text">
          <h2>FEATURES OF THE PROGRAM</h2>
          <p>
            Special motivation, Solving various issues through group and
            individual counseling. Enhancing the imagination and empathy of
            children through meditation, helping learn self discipline in early
            life. Teaching the power of unity and oneness through counseling,
            helping children to bond with family and friends through yoga and
            its morals, relieving the stress through yoga and meditation,
            increasing concentration through pranayam and meditation, making
            children mentally physically and spiritually strong, special yoga
            sessions for health and mind development, sessions of parents and
            children for an improved relationship, helping children to lead a
            quality life and become a better person.
          </p>
        </div>
      </div>

      <h2 className="cheta_problem">PROBLEM FACED BY CHILDREN AND YOUNGSTER</h2>
      <div className="chetna_program_list">
        <ul>
          <li>No discipline in life.</li>
          <li>Do not listen to parents ‘advice.</li>
          <li>Disrespectful behavior to words parents.</li>
          <li>Failure in maintaining proper relationship with parents.</li>
          <li>Lack of love and understanding with family members.</li>
          <li>Unable to express feelings and emotions.</li>
          <li>Irresponsible behavior.</li>
          <li>Bad habits and behavioral patterns.</li>
          <li>No interest in studies due to extra activities.</li>
          <li>Unable to promote individual skills.</li>
          <li>Hormonal imbalance and its side-effects.</li>
          <li>Various health issues since childhood.</li>
          <li>Low immunity food habits.</li>
        </ul>
      </div>
    </>
  );
}

export default Chetna;
