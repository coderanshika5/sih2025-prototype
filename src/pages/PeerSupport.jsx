// import React from "react";

// function PeerSupport() {
//   return (
//     <div className="page">
//       <h2>Peer Support</h2>
//       <p>Not active</p>
//     </div>
//   );
// }

// export default PeerSupport;

import React, { useState } from "react";
import "./PeerSupport.css";

function PeerSupport() {
  const [posts, setPosts] = useState([
    { id: 1, user: "Student A", text: "Feeling anxious about exams 😔" },
    { id: 2, user: "Student B", text: "You got this 💪 Just take it one step at a time!" },
    { id: 3, user: "Student C", text: "Anyone else struggling with homesickness?" },
  ]);

  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim() === "") return;
    const newEntry = {
      id: posts.length + 1,
      user: "You",
      text: newPost,
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
  };

  return (
    <div className="peer-page">
      <h2 className="peer-title">🤝 Peer Support Forum</h2>
      <p className="peer-desc">
        A safe forum where students can openly share feelings and support each other.  
        Trained peer buddies make sure the space stays positive and stigma-free. 🌱
      </p>

      {/* Post Input */}
      <div className="post-box">
        <textarea
          placeholder="Share your thoughts..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handlePost}>Post</button>
      </div>

      {/* Posts */}
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h4>{post.user}</h4>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PeerSupport;