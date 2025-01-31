import React, { useState, useEffect } from "react";
import "../Style/Testimonial.css"; // Make sure to create this CSS file

const testimonials = [
  {
    id: 1,
    text: "Before joining Vijayansyoga,I was suffering from Spondylitis,but now i dont feel any pain in my back.",
    author: "Mr. Shyam Jaiswal",
  },
  {
    id: 2,
    text: "Before joining Vijayans yoga i got tired in little bi time,was facing some other problems, but Only in 1 month i got rid of these problems, built up my stamina, whole day feel fresh, so i m very thank ful to Vijayans Yoga and res Vijayan sir also, thank u sir",
    author: "Smt. Hema Dubey",
  },
  {
    id: 3,
    text: "I have achieved these results in Vijayan’s Yoga not only due to my hard work but also because of Yogacharya Vijayan Sir’s motivation and guidance. He always helps his students in gaining their results by providing them with proper counseling and advice. The meditation class on Sundays also help a lot in leading a good lifestyle and controlled life. Also the motivational speech by Vijayan Sir guides us in various ways to take care of ourselves and our family. Yoga is a complete program that lights our life.",
    author: "Manisha Malpani",
  },
  {
    id: 4,
    text: "Under the guidance of Yogacharya Vijayan Raman, our Yoga Guru, my weight has reduced, For me, its not just a yoga class, its an overall Personality development. I remain cool and enthusiastic all the time. Sir taught us spirituality and showed us how beautiful life is.",
    author: " Mr. Shrikant Panpaliya",
  },
  {
    id: 5,
    text: "Three months ago I joined Vijayan yoga classes. I had problems relating to obesity, B.P., Hypertension, knee problem. Under the guidance of Yogacharya Vijayan Raman, our yoga  Guru, my weight has reduced by 25kgs in three months time and my health related problems have been solved drastically. For me its not just a yoga class, its a overall personality development for me, because of which  I remain cool and enhance my decision making capability. Within a span of three months, Guru taught us how to live life with simplicity, simple nutritious food with the help of yoga. For me, its a great experience. Hats off to you.",
    author: " Mr. Deepak Pandit",
  },
  {
    id: 6,
    text: "I joined Vijayan's Yoga centre 3 months back.Here daily Iam experiencing a new source of energy. Since last 10 to 12 years I have been suffering from B.P., gastric troubles and also obesity. I had to take medicines for B.P. I was sleepless if I didn't have the tablet Aten 25 at night. Even a flight of 10 -12 steps made me breathless and I used to gasp for breath. For my breathing to be normal I had to take rest for 5 mins. Due to all these my confidence level was going down.",
    author: "Sarita Gupta",
  },
  {
    id: 7,
    text: "Yoga alone made it possible for me to loose weight and start a healthy and disciplined life.I am continuing with my weight loss program and hope to reach my target weight in the next three months and live healthy for the rest of my life.",
    author: "Pooja Cornelius",
  },
  {
    id: 8,
    text: "At the time of joining Vijayans Yoga, I had two objectives, firstly to regain fitness and prepare myself well for postretirement life because I belive this is the time when one can actually enjoy life and for to be fit and secondly I was getting fed up with taking a number of medicines/pills every day. My wife realized the benefits of Vijayans Yoga after observing the positive changes in me and decided to follow suit. I am now on the verge of retirement and very happy to note that I have been successful in achieving my aim. My wife has also benefitted tremendously after joining Vijayans Yoga. she joins me in sharing the joy of fitness and full credit for this undoubtedly goes to Vijayan Sir. His constant guidance has helped us in lifestyle change, the benefits of which can only be experienced Satyabrata Lahiri & Smt. Bala Lahiri",
    author: "Smt. Bala Lahiri",
  },
  {
    id: 9,
    text: "Mr.Atul Ingle and Mrs. Renu IngleAfter joining Vijayan’s Yoga to my surprise I got amazing results in one month only. My stamina increased tremendously and my body became flexible. Now I can work upto 16 hours without any stress. Now Iam a strong person physically, mentally and spiritually just because I obeyed all the instructions of sir and worked hard to implement the same..",
    author: "Mr.Atul Ingle and Mrs. Renu Ingle",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set up an interval to automatically change the testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // 3000 ms = 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-slider">
      <div
        className="testimonial-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
