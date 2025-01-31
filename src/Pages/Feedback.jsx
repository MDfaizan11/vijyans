import React from "react";
import "../Style/feedback.css";
function Feedback() {
  return (
    <>
      <h1 className="feedback_heading"> FeedBack Form</h1>
      <div className="feedback_main_wrapper">
        <div className="feedback_form_wrapper">
          <form action="">
            <input type="text" placeholder="Enter Your Name" />
            <input type="number" placeholder="Enter Your Number" />
            <input type="text" placeholder="Enter Your Address" />
            <textarea
              name=""
              id=""
              placeholder="Enter Valuable FeedBack"
            ></textarea>
            <textarea name="" id="" placeholder="Suggestion"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Feedback;
