import CookieStandAdmin from "./components/CookieStandAdmin";
import Login from "./components/Login";
import Loader from "./components/Loader";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Home() {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const loginHandle = async (event) => {
    event.preventDefault();
      await axios
        .post("https://cookie-stand-barham-farraj.herokuapp.com/api/token/", {
          username: event.target.username.value,
          password: event.target.password.value,
        })
        .then(async(res) => {
          setIsLoading(true);
          localStorage.setItem("token", res.data.access);
           setToken(localStorage.getItem("token"))
            (setIsLoggedIn(true),setTimeout(() => {setIsLoading(false)}, 300)) ;     
        })
          .catch(() => {
            setIsLoading(false);
            toast.error("Invalid Username or Password")
           
          })
  };

  return (
    <>
      {((isLoggedIn) && (!isLoading)) ? (
        <CookieStandAdmin setIsLoggedIn={setIsLoggedIn} token={token} />
      ) : ( 
        !isLoading && <Login loginHandle={loginHandle} />
      )}
      {isLoading && <Loader  />}
      <Toaster />
    </>
  );
}

export default Home;
