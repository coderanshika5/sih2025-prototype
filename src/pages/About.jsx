// import React from "react";

// function About() {
//   return (
//     <div className="page">
//       <h2>About Healing Sphere</h2>
//       <p>
//         We believe every student deserves easy access to mental health support. College life brings pressure, uncertainty, and challenges that can feel heavy—but help should never be out of reach. That’s why we’re building a digital-first solution that is private, stigma-free, and tailored for Indian students.
//       </p>
//       <br />
//       <p>
//         Our platform combines smart tools, professional guidance, and peer support to make mental well-being simple and accessible. With technology and empathy at the core, our mission is to help students stay strong, connected, and ready for the future.
//       </p>

//       <h3>📞 Student Mental Health Hotlines</h3>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         <li><strong>India Helpline:</strong> 1800-599-0019</li>
//         <li><strong>Emergency Helpline Whatsapp:</strong> 9999 666 555 </li>
        
//       </ul>
//       <br />
//      <h1 style={{ fontSize: "2.5rem", fontStyle: "italic", fontWeight: "bold", color: "#333" }}>
//   "We are always there for you!"
// </h1>

//     </div>
//   );
// }

// export default About;

// import React from "react";
// import "./About.css"; // add styles in separate file

// function About() {
//   return (
//     <div className="page">
//       <h2>About Healing Sphere</h2>
//       <p>
//         We believe every student deserves easy access to mental health support.
//         College life brings pressure, uncertainty, and challenges that can feel
//         heavy—but help should never be out of reach. That’s why we’re building a
//         digital-first solution that is private, stigma-free, and tailored for
//         Indian students.
//       </p>
//       <br />
//       <p>
//         Our platform combines smart tools, professional guidance, and peer
//         support to make mental well-being simple and accessible. With technology
//         and empathy at the core, our mission is to help students stay strong,
//         connected, and ready for the future.
//       </p>

//       <h3>📞 Student Mental Health Hotlines</h3>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         <li>
//           <strong>India Helpline:</strong> 1800-599-0019
//         </li>
//         <li>
//           <strong>Emergency Helpline Whatsapp:</strong> 9999 666 555
//         </li>
//       </ul>
//       <br />
//       <h1
//         style={{
//           fontSize: "2.5rem",
//           fontStyle: "italic",
//           fontWeight: "bold",
//           color: "#333",
//         }}
//       >
//         "We are always there for you!"
//       </h1>

//       {/* Footer Section */}
//       <footer className="footer">
//         <p>Connect with us:</p>
//         <div className="social-icons">
//           {/* Instagram */}
//           <a
//             href="https://www.instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="instagram"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="28"
//               height="28"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M7.75 2h8.5C19.55 2 22 4.46 22 7.75v8.5c0 3.29-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.54 2 16.25v-8.5C2 4.46 4.45 2 7.75 2zm0 1.5C5.68 3.5 4 5.18 4 7.25v9.5c0 2.07 1.68 3.75 3.75 3.75h8.5c2.07 0 3.75-1.68 3.75-3.75v-9.5c0-2.07-1.68-3.75-3.75-3.75h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z" />
//             </svg>
//           </a>

//           {/* Facebook */}
//           <a
//             href="https://www.facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="facebook"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="28"
//               height="28"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M22 12a10 10 0 10-11.62 9.87v-6.99H8.9v-2.88h1.48V9.41c0-1.47.87-2.28 2.2-2.28.64 0 1.3.12 1.3.12v1.44h-.73c-.72 0-.95.45-.95.9v1.07h1.62l-.26 2.88h-1.36v6.99A10 10 0 0022 12z" />
//             </svg>
//           </a>

//           {/* X (Twitter) */}
//           <a
//             href="https://www.twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="twitter"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="28"
//               height="28"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M17.21 2H20.7l-7.67 8.77L22 22h-6.78l-5.3-6.5L4.1 22H.6l8.2-9.39L2 2h6.86l4.8 5.91L17.21 2zM6.55 4l10.58 13h1.14L7.68 4H6.55z" />
//             </svg>
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default About;

import React from "react";

function About() {
  return (
    <div className="page" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <h2>About Healing Sphere</h2>
        <p>
          We believe every student deserves easy access to mental health support. College life brings
          pressure, uncertainty, and challenges that can feel heavy—but help should never be out of
          reach. That’s why we’re building a digital-first solution that is private, stigma-free,
          and tailored for Indian students.
        </p>
        <br />
        <p>
          Our platform combines smart tools, professional guidance, and peer support to make mental
          well-being simple and accessible. With technology and empathy at the core, our mission is
          to help students stay strong, connected, and ready for the future.
        </p>

        <h3>📞 Student Mental Health Hotlines</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <strong>India Helpline:</strong> 1800-599-0019
          </li>
          <li>
            <strong>Emergency Helpline Whatsapp:</strong> 9999 666 555
          </li>
        </ul>
        <br />
        <h1
          style={{
            fontSize: "2.5rem",
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          "We are always there for you!"
        </h1>
      </div>

      {/* Footer Section */}
      <footer
        style={{
          marginTop: "40px",
          padding: "15px",
          backgroundColor: "#0fa08fff",
          textAlign: "center",
        }}
      >
        <p style={{ marginBottom: "10px" }}>Connect with us</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {/* Instagram (active) */}
          <a
            href="https://www.instagram.com/spirited_globe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" style={{ fontSize: "2rem", color: "#000000" }}></i>
          </a>

          {/* Facebook (show only, disabled link) */}
          <span title="Coming Soon">
            <i className="fab fa-facebook" style={{ fontSize: "2rem", color: "#000000", opacity: 0.5 }}></i>
          </span>

          {/* Twitter/X (show only, disabled link) */}
          <span title="Coming Soon">
            <i className="fab fa-twitter" style={{ fontSize: "2rem", color: "#000000", opacity: 0.5 }}></i>
          </span>
        </div>
        <p style={{ marginTop: "10px", fontSize: "0.9rem", color: "#000000" }}>
          © 2025 Healing Sphere. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default About;
