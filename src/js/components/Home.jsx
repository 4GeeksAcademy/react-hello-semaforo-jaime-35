import React, { useState, } from "react";

const Home = () => {
  const [selected, setSelected] = useState("red");

  const changeColor = (color) => {
    setSelected(color);
  };

  return (
    <main className="position-relative"  style={{
		backgroundImage: `url('https://img.freepik.com/fotos-premium/grupo-personas-multietnicas-que-cruzan-calle-ciudad-paso-peatones-horizontal-utilizando-ia-generativa_28914-8168.jpg?w=2000')`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: "100vh",
		width: "100vw"
	  }}>
		
		<div className="p-box"></div>
		<div className="box-light">
			<div className={`red ${ selected == "red" ? "light-on" : ""}`}
			onClick={()=> changeColor("red")}></div>
			<div className={`yellow ${ selected == "yellow" ? "light-on" : ""}`}
			onClick={()=> changeColor("yellow")}></div>
			<div className={`green ${ selected == "green" ? "light-on" : ""}`}
			onClick={()=> changeColor("green")}></div>
        </div>
		
       
     </main>
  )
}
export default Home;