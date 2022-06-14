import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { useState } from "react";
import ReportTable from "./ReportTable";
import CreateForm from "./CreateForm";

function CookieStandAdmin({setIsLoggedIn,isLoggedIn}) {

  const [inputs, setInputs] = useState([]);
  const [counter,setcounter]= useState(0);  
  const [array,setArray]= useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const addedLocation = {
      location: event.target.location.value,
      minCookie: event.target.minimum_customers_per_hour.value,
      maxCookie: event.target.maximum_customers_per_hour.value,
    };
    const randomArray = Array.from({length: 14}, () => Math.floor((Math.random() * parseInt(addedLocation.maxCookie)) + parseInt(addedLocation.minCookie)));
    setInputs([...inputs,addedLocation]);
    setArray([...array,randomArray]);
    setcounter(counter+1);
  }
  return (
    <div>
      <Head><title>Cookie Stand</title></Head>
      <div className="bg-[#ACA9BB] flex items-center  flex-col h-full ">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <CreateForm handleSubmit={handleSubmit} />
        {inputs.length? <ReportTable inputs={inputs} array={array} /> : <h1 className="my-14 font-bold font-xl">No Cookie Stand Created</h1>}
      <Footer counter={counter}/>
      </div>
    </div>
  );
}

export default CookieStandAdmin;