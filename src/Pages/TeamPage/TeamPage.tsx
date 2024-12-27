import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import TeamCard from '../../Components/TeamCard/TeamCard';
import engine from '../../Assets/engin.jpeg';
import xd from '../../Assets/aslil.jpeg';
import '../TeamPage/TeamPage.css';

type Props = {};

const TeamPage = (props: Props) => {
  return (
    <div className="teams-container">
      <Navbar />
      <div className="teams">
        <TeamCard fullName={'Ahmet Engin Büyükdığan'} imageUrl={engine} desc={'Cicikuş'} />
        <TeamCard fullName={'Aslı Algın'} imageUrl={xd} desc={'Aslil'} />
        <TeamCard fullName={'Irmmak Orhan'} imageUrl={engine} desc={'Cicikuş'} />
        <TeamCard fullName={'Ali Fuat Dündar'} imageUrl={engine} desc={'Cicikuş'} />
      </div>
    </div>
  );
};

export default TeamPage;
