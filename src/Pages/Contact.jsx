import React from "react";
import "../Style/contact.css";
import mail_icon from "../Assets/Images/gmail-icon-free-png.webp";
import Whatapp from "../Assets/Images/whatsapp+icon-removebg-preview.png";
import Call from "../Assets/Images/call_icon-removebg-preview.png";
function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      <div className="first_address_wrapper">
        <div className="address_data">
          <p>
            Address 1 : Plot No. 1, Sarvodaya Nagar, Near Ram Mandir, Behind
            Khamla Telephone Exchange, Nagpur - 440022.
          </p>
          <p>
            Address 2 : Plot No. 100, Corner House, 1st Floor, Nelco Society,
            Opposite Union Bank Of India, Friends Colony Road, Nagpur.
          </p>
        </div>
        <div className="contact_detail">
          <p>Phone: 9422439804/9823189804</p>
          <p>Email: vijayan.yoga@gmail.com</p>
        </div>

        <div className="address_icon">
          <div className="mail_wrapper">
            <img src={mail_icon} alt="" />
            {/* <IoMailUnread /> */}
          </div>
          <div className="mail_wrapper">
            <img src={Call} alt="" />
          </div>
          <div className="mail_wrapper">
            <img src={Whatapp} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
