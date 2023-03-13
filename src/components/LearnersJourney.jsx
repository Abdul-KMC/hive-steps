import React from "react";
import "./LearnersJourney.css";
import learnerLogo from "../image/learnerLogo.jpg";

export const LearnersJourney = () => {
  return (
    <div className="Learners_Journey">
      <div className="left">
        <h1>Road to language Lab</h1>
        <p>
          Step into the metaverse with Language Lab to develop communication
          skills in the most effective manner. From phonetics to soft skills
          courses, get a hold of the language with global experts and AI with
          ease.
        </p>

        <div className="points">
          <div className="point">
            <div className="numPoint">
              <h3 className="num">1</h3>
            </div>

            <div className="details">
              <h4>Perfect phonetics</h4>
              <p>Perfecting your base foundation</p>
            </div>
          </div>

          <div className="point">
            <div className="numPoint">
              <h3 className="num">2</h3>
            </div>
            <div className="details">
              <h4>Perfect phonetics</h4>
              <p>Perfecting your base foundation</p>
            </div>
          </div>

          <div className="point">
            <div className="numPoint">
              <h3 className="num">3</h3>
            </div>
            <div className="details">
              <h4>Perfect phonetics</h4>
              <p>Perfecting your base foundation</p>
            </div>
          </div>

          <div className="point">
            <div className="numPoint">
              <h3 className="num">4</h3>
            </div>
            <div className="details">
              <h4>Perfect phonetics</h4>
              <p>Perfecting your base foundation</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="image">
          <img src={learnerLogo} alt="" />
        </div>
      </div>
    </div>
  );
};
