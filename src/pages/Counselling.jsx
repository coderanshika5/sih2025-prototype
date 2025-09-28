// import React from "react";

// function Counselling() {
//   return (
//     <div className="page">
//       <h2>Counselling</h2>
//       <p>Not active</p>
//     </div>
//   );
// }

// export default Counselling;

// import React from "react";
// import "./Counselling.css"; // for styling
// import aiFriendImg from "../assets/aifriend.jpeg";
// import instituteImg from "../assets/inscoun.png";
// import topCounsellorImg from "../assets/top.jpeg";

// function Counselling() {
//   const cards = [
//     {
//       title: "AI Friend",
//       img: aiFriendImg,
//       link: "https://your-ai-friend-link.com",
//     },
//     {
//       title: "Institute Counsellor",
//       img: instituteImg,
//       link: "https://your-institute-counsellor-link.com",
//     },
//     {
//       title: "Connect with India's Top Counsellor",
//       img: topCounsellorImg,
//       link: "https://your-top-counsellor-link.com",
//     },
//   ];

//   return (
//     <div className="counselling-page">
//       <h2 className="counselling-title">Counselling Support</h2>
//       <div className="card-container">
//         {cards.map((card, index) => (
//           <div key={index} className="counselling-card">
//             <img src={card.img} alt={card.title} className="card-img" />
//             <h3 className="card-title">{card.title}</h3>
//             <a href={card.link} target="_blank" rel="noopener noreferrer">
//               <button className="card-btn">Explore</button>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Counselling;

import React from "react";
import { Link } from "react-router-dom";
import "./Counselling.css";
import aiFriendImg from "../assets/aifriend.jpeg";
import instituteImg from "../assets/inscoun.png";
import topCounsellorImg from "../assets/top.jpeg";

function Counselling() {
  return (
    <div className="counselling-page">
      <h2 className="counselling-title">Counselling Support</h2>
      <div className="card-container">
        {/* AI Friend card (internal link) */}
        <div className="counselling-card">
          <img src={aiFriendImg} alt="AI Friend" className="card-img" />
          <h3 className="card-title">AI Friend</h3>
          <Link to="/AISupport.jsx">
            <button className="card-btn">Explore</button>
          </Link>
        </div>

        {/* Institute Counsellor card (external link) */}
        <div className="counselling-card">
          <img src={instituteImg} alt="Institute Counsellor" className="card-img" />
          <h3 className="card-title">Institute Counsellor</h3>
          <a href="https://your-institute-counsellor-link.com" target="_blank" rel="noopener noreferrer">
            <button className="card-btn">Explore</button>
          </a>
        </div>

        {/* Top Counsellor card (external link) */}
        <div className="counselling-card">
          <img src={topCounsellorImg} alt="Top Counsellor" className="card-img" />
          <h3 className="card-title">Connect with India's Top Counsellor</h3>
          <a href="https://your-top-counsellor-link.com" target="_blank" rel="noopener noreferrer">
            <button className="card-btn">Explore</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Counselling;