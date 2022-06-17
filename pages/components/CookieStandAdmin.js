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
  const [data,setData]= useState([]);

  const randomArray = (a,b)=> Array.from({length: 14}, () => Math.floor((Math.random() * parseInt(a)) + parseInt(b)));

    function handleSubmit(event) {
    event.preventDefault();
    event.target.location.focus();
    const addedLocation = {
        location: event.target.location.value,
        minimum_customers_per_hour: event.target.minimum_customers_per_hour.value,
        maximum_customers_per_hour: event.target.maximum_customers_per_hour.value,
        hourly_sales: [],
      }
    setInputs([...inputs,addedLocation]);
    addedLocation.hourly_sales = randomArray(addedLocation.minimum_customers_per_hour,addedLocation.maximum_customers_per_hour);
    setcounter(counter+1);
    event.target.reset();
    }
    const GetData = async () => {

      await axios.get("https://cookie-stand-barham-farraj.herokuapp.com/api/v1/cookies/",{headers:{'Authorization': `Bearer ${token}`}})
      .then(res => {
        setData(res.data.map(item => {return {...item,hourly_sales:randomArray(item.minimum_customers_per_hour,item.maximum_customers_per_hour)}}))
      })
      .catch(e => { console.log("error", e)
      }) 
    }
    useEffect(() => {GetData()},[])
    const DeleteData = async (id) => {

      await axios.delete(`https://cookie-stand-barham-farraj.herokuapp.com/api/v1/cookies/${id}/`,{headers:{'Authorization': `Bearer ${token}`}})
      .then(res => {
        GetData()
        console.log("deleted data", res)
      })
      .catch(e => {
        console.log("delete error", e)
      })
    }
    const PostData = async (id) => {

      await axios.post(`https://cookie-stand-barham-farraj.herokuapp.com/api/v1/cookies/`,{headers:{'Authorization': `Bearer ${token}`}})
      .then(res => {
        GetData()
        console.log("deleted data", res)
      })
      .catch(e => {
        console.log("delete error", e)
      })
    }

  return (
    <div className="h-full">
      <Head><title>Cookie Stand</title></Head>
      <div className="bg-[#ACA9BB] flex items-center  flex-col h-full ">
      <Header setIsLoggedIn={setIsLoggedIn}/>
        <CreateForm handleSubmit={handleSubmit} />
        {data.length? <ReportTable inputs={data}  DeleteData={DeleteData}/> : <h1 className="my-14 font-bold font-xl">No Cookie Stand Created</h1>}
      <Footer counter={counter}/>
      </div>
    </div>
  );
}

export default CookieStandAdmin;
