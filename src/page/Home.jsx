import React from "react";
import { Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home</div>

      <Link to="/login">Login</Link>
    </>
  );
}

export default Home;
