import React from "react";
import "./App.css";
import image from './profil.png'
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
    <div className="App">
      <header className="App-header">
      <ProfilComponent x={ProfilComponent.defaultProps} y="E" handleClick={handlData}>

        <h2>Profil Pic</h2>
        <img width="200px" height="240px"
        style={styleimg}
          // style={styleimg}
          src={ProfilComponent.defaultProps.img}
          alt="name">
          </img>
      </ProfilComponent>
      </header>
    </div>
  );
}

export default App;


