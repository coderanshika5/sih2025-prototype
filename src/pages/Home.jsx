import aiimg from "../assets/ai.jpg";
import counsellingimg from "../assets/counselling.jpg";
import peerimg from "../assets/peer.jpg";
import adminimg from "../assets/admin.jpg";

import React from "react";
import Card from "../components/Card";

function Home() {
  return (
    <div className="page">
      <h2>Welcome to Healing Sphere</h2>
      <p>A Digital Psychological Intervention Platform for College Students</p>
      <div className="card-grid">
        <Card
          title="AI Support"
          description="24/7 AI chat assistant for coping strategies."
          link="/ai-support"
           image={aiimg}
        />
        <Card
          title="Counselling"
          description="Book confidential counselling sessions."
          link="https://www.betterhelp.com"  // external site
          image={counsellingimg}
        />
        <Card
          title="Peer Support"
          description="Join student peer-to-peer support forums."
          link="/peer-support"
          image={peerimg}
        />
        <Card
          title="Admin Dashboard"
          description="Track anonymous data trends for interventions."
          link="/admin-dashboard"
          image={adminimg}
        />
      </div>
    </div>
  );
}

export default Home;
