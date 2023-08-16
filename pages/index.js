import React from "react";

function Home() {
  const pageStyle = {
    backgroundColor: "#2D2D2A",
    textAlign: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "white",
  };

  const textStyles = {
    fontSize: "24px",
    marginBottom: "20px",
  };

  return (
    <div style={pageStyle}>
      <p style={textStyles}>Teste</p>
    </div>
  );
}

function Teste() {
  return <h1>OI</h1>;
}

export default Home;
