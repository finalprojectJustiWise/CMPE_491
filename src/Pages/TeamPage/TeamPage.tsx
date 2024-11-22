import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import TeamCard from '../../Components/TeamCard/TeamCard'
import engine from '../../Assets/engin.jpeg'


type Props = {}

const TeamPage = (props: Props) => {
  return (
    <><Navbar/> <TeamCard fullName={'Ahmet Engin Büyükdığan'} imageUrl={engine} desc={'Cicikuş'}/></>
  )
}

export default TeamPage