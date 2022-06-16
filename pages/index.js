import CookieStandAdmin from "./components/CookieStandAdmin";
import Login from "./components/Login";
import { useState} from "react";
import axios from "axios";

function Home() {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const loginHandle= async(event) =>{
    event.preventDefault();
    // if (localStorage.token === undefined) {
      await axios
        .post(
          "https://cookie-stand-barham-farraj.herokuapp.com/api/token/",
          {
            username: event.target.username.value,
            password: event.target.password.value,
          }
        )
        .then((res) => {
          localStorage.setItem("token", res.data.access);
        });
      setToken(localStorage.getItem("token"));
    // }
    setToken(localStorage.getItem("token"));

    {validateForm() ? setIsLoggedIn(true) : alert("Invalid Username or Password");}

  }
  function validateForm() {
    if (token) {
      console.log('token login true', token)
      return true;
    } else {
      console.log('token login false', token)
      return false;
    }
  }
  
  return (
    <>
      {isLoggedIn ? (
        <CookieStandAdmin setIsLoggedIn={setIsLoggedIn} token={token}/>
      ) : (
        <Login loginHandle={loginHandle} />
      )}
    </>
  );
}

export default Home;
