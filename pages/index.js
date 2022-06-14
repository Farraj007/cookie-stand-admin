import CookieStandAdmin from "./components/CookieStandAdmin";
import Login from "./components/Login";
import { useState } from "react";

function Home() {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  
  function loginHandle(event) {
    event.preventDefault();
    const loginConfig = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    function validateForm() {
      if (loginConfig.username.length > 0 && loginConfig.password.length > 0) {
        return true;}
        else{
          return false
        }}   
    {validateForm()?setIsLoggedIn(true):alert("Please fill in all fields")}
  }

  return (
    <>
      {isLoggedIn ? (
        <CookieStandAdmin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login loginHandle={loginHandle} />
      )}
    </>
  );
}

export default Home;
