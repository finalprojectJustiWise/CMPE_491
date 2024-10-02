import React, { useState } from 'react'
import './TeamCard.css'

type TeamMember = {
    fullName:string,
    imageUrl:string,
    desc:string,
}

const TeamCard : React.FC<TeamMember> =({fullName,imageUrl,desc}: TeamMember) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`person-card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
    
    <div className='front'>
    <img className='teamImage' src={imageUrl} alt={fullName} />
    <div>{fullName}</div>
    </div>

   <div className='back'>
   <div>{desc}</div>
   </div>
   
    
    </div>
   

 
  )
}

export default TeamCard