import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import TeamCard from '../../Components/TeamCard/TeamCard';
import engine from '../../Assets/engin.jpeg';
import xd from '../../Assets/aslil.jpeg';
import irmak from '../../Assets/irmak.jpeg';
import '../TeamPage/TeamPage.css';

type Props = {};

const TeamPage = (props: Props) => {
  return (
    <div className="teams-container">
      <Navbar />
      <h2 className="section-title">Team Members</h2>
      <div className="teams">
        <TeamCard 
          fullName="Ahmet Engin Büyükdığan" 
          imageUrl={engine} 
          desc="Cicikuş" 
          linkedin=""
        />
        <TeamCard 
          fullName="Aslı Algın" 
          imageUrl={xd} 
          desc="Aslil" 
          linkedin="https://www.linkedin.com/in/aslı-algın-84467a21a"
        />
        <TeamCard 
          fullName="Irmak Orhan" 
          imageUrl={irmak} 
          desc="Irmak" 
          linkedin="https://www.linkedin.com/in/irmak-orhan-48040b245/"
        />
        <TeamCard 
          fullName="Ali Fuat Dündar" 
          imageUrl={engine} 
          desc="Alifuat" 
          linkedin=""
        />
      </div>
    </div>
  );
};

export default TeamPage;
