import React from "react";
import "./App.css";
import image from './profil.png'
import Mehdi from "./profile/mehdi";
import ProfilComponent from './profile/profilComponent'

const styleimg = {
  width: "300px",
  height: "300px",
  margin: "47PX",
  borderRadius: "50%",
};


function App() {
  const handlData= (name)=>{
    alert(name)
  }
  // const obj = {
    ProfilComponent.defaultProps={
    LastName: "Arfaoui  ",
    FirstName:" Taher",
    bio: "Software Engineer, 27 years old ",
    profession:"Freelance Developper",
    img: image
  };
  console.log(ProfilComponent.defaultProps)
  return (

  <h2>Bonjour</h2>
  );
}

export default App;


