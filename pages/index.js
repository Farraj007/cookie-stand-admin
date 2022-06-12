import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Head from "next/head";
import { useState } from "react";

function Home() {
  const [inputs, setInputs] = useState([]);
  const [counter,setcounter]= useState(0);

  function handleChange(event) {
    event.preventDefault();
    const addedLocation = {
      location: event.target.Location.value,
      minCookie: event.target.MinCustomers.value,
      maxCookie: event.target.MaxCustomers.value,
      avgCookie: event.target.AvgCustomers.value,
    };
    setInputs([...inputs,addedLocation]);
    handleCounter();
  }
  function handleCounter(event){
    counter++;
    setcounter(counter);
  }
  console.log(inputs);
  return (
    <>
      <Head><title>Cookie Stand</title></Head>
      <div className="h-screen">
      <Header/>
      <Main handleChange={handleChange} inputs={inputs}/>
      <Footer counter={counter}/>
      </div>
    </>
  );
}

export default Home;