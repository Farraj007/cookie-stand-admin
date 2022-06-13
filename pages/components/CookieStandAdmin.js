import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { useState } from "react";
import ReportTable from "./ReportTable";
import CreateForm from "./CreateForm";

function CookieStandAdmin() {
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
    <div>
      <Head><title>Cookie Stand</title></Head>
      <div className="bg-[#787586] flex items-center  flex-col h-full ">
      <Header/>
        <CreateForm handleChange={handleChange} inputs={inputs}/>
        {inputs.length? <ReportTable inputs={inputs}/> : <h1 className="my-14 font-bold font-xl">No Cookie Stand Created</h1>}
      <Footer counter={counter}/>
      </div>
    </div>
  );
}

export default CookieStandAdmin;