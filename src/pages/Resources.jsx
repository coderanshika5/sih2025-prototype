
import React from "react";

const resources = [
  {
    title: "Stress- academics,exams,deadlines,placements",
    url: "https://youtube.com/playlist?list=PL_xZUhgNjmoQBR7p26R7W5fTHjilhGykn&si=ABuxwUV0bNxkoIEn",
    image:"/images/stress.jpg",
  },
  {
    title: "Low Self Esteem-body image issues, comparison with peers.",
    url: "https://youtube.com/playlist?list=PL_xZUhgNjmoSYjaDsDczv_r1cKthujmnf&si=h3TzlHIIGjVx1bSj",
    image:"/images/low-self-esteem.jpg",
  },
  {
    title: "Suicidal thoughts/self-harm-in extreme,unaddressed cases.",
    url: "https://youtube.com/playlist?list=PL_xZUhgNjmoSCoZXB7vqyfi06v_NRDGbU&si=Tczs91DPqjGt6xwk",
    image:"./images/suicide.jpg",
  },
];

function Resources() {
  return (
    <div className="page">
      <h2>Resource Hub</h2>
      <p>Click a card to explore mental wellness resources on YouTube.</p>
      <div className="card-grid">
        {resources.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div
              className="card-bg"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="card-content">
              <h3>{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Resources;
