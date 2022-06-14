import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { useState } from "react";
import ReportTable from "./ReportTable";
import CreateForm from "./CreateForm";

function CookieStandAdmin({setIsLoggedIn,isLoggedIn}) {

  const [inputs, setInputs] = useState([]);
  const [counter,setcounter]= useState(0);  
  const [list,setlist]= useState([]);

  function handleChange(event) {
    event.preventDefault();
    const addedLocation = {
      location: event.target.location.value,
      minCookie: event.target.minimum_customers_per_hour.value,
      maxCookie: event.target.maximum_customers_per_hour.value,
      avgCookie: Math.floor((event.target.maximum_customers_per_hour.value - event.target.minimum_customers_per_hour.value) / 2),
    };
    setInputs([...inputs,addedLocation]);
    handleCounter();
    randomNumber(addedLocation);
  }
  function handleCounter(event){
    counter++;
    setcounter(counter);
  }
  function randomNumber(addedLocation){
    const randomNumber = [Math.floor(Math.random(addedLocation.minCookie,addedLocation.maxCookie)) + addedLocation.minCookie];
    setlist([...list,randomNumber]);
  }
  return (
    <div>
      <Head><title>Cookie Stand</title></Head>
      <div className="bg-[#ACA9BB] flex items-center  flex-col h-full ">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <CreateForm handleChange={handleChange} />
        {inputs.length? <ReportTable inputs={inputs} list={list}/> : <h1 className="my-14 font-bold font-xl">No Cookie Stand Created</h1>}
      <Footer counter={counter}/>
      </div>
    </div>
  );
}

export default CookieStandAdmin;