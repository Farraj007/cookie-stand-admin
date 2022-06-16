import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { useEffect, useState } from "react";
import ReportTable from "./ReportTable";
import CreateForm from "./CreateForm";
import axios from "axios";

function CookieStandAdmin({setIsLoggedIn,token}) {

  const [inputs, setInputs] = useState([]);
  const [counter,setcounter]= useState(0);  
  const [array,setArray]= useState([]);
  const [data,setData]= useState([]);

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
    const DeleteData = async (id) => {

      await axios.delete(`https://cookie-standss.herokuapp.com/api/v1/cookie-stands/${id}/`,{headers:{'Authorization': `Bearer ${token}`}})
      .then(res => {
        GetData()
        console.log("deleted data", res)
      })
      .catch(e => {
        console.log("delete error", e)
      })
      
    }
    const GetData = async () => {

      await axios.get("https://cookie-stand-barham-farraj.herokuapp.com/api/v1/cookies/",{headers:{'Authorization': `Bearer ${token}`}})
      .then(res => {
        setData(res.data)
        console.log("data getter", res.data)
      })
      .catch(e => { console.log("error", e)
      })
      
    }
    useEffect(() => {
      GetData();
    },[])

  return (
    <div className="h-full">
      <Head><title>Cookie Stand</title></Head>
      <div className="bg-[#ACA9BB] flex items-center  flex-col h-full ">
      <Header setIsLoggedIn={setIsLoggedIn}/>
        <CreateForm handleSubmit={handleSubmit} />
        {inputs.length? <ReportTable inputs={inputs} array={array} DeleteData={DeleteData}/> : <h1 className="my-14 font-bold font-xl">No Cookie Stand Created</h1>}
      <Footer counter={counter}/>
      </div>
    </div>
  );
}

export default CookieStandAdmin;
