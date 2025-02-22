import React, { useState } from "react";
import "./TeamCard.css";
import { FaLinkedin } from "react-icons/fa"; // LinkedIn ikonunu ekliyoruz

type TeamMember = {
  fullName: string;
  imageUrl: string;
  desc: string;
  linkedin: string; // LinkedIn linki için yeni prop
};

const TeamCard: React.FC<TeamMember> = ({ fullName, imageUrl, desc, linkedin }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`person-card ${flipped ? "flipped" : ""}`} onClick={handleCardClick}>
      {/* Ön Yüz */}
      <div className="front">
        <img className="teamImage" src={imageUrl} alt={fullName} />
        <div className="name">{fullName}</div>
        {/* LinkedIn Butonu */}
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
          <FaLinkedin className="linkedin-icon" />
        </a>
      </div>

      {/* Arka Yüz */}
      <div className="back">
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default TeamCard;