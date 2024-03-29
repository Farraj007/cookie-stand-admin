import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { useEffect, useState } from "react";
import ReportTable from "./ReportTable";
import CreateForm from "./CreateForm";
import axios from "axios";

function CookieStandAdmin({setIsLoggedIn,token,UserName}) {

  const [inputs, setInputs] = useState([]);
  const [data,setData]= useState([]);
  const config={headers:{'Authorization': `Bearer ${token}`}}
  const randomArray = (a,b)=> Array.from({length: 14}, () => Math.floor((Math.random() * parseInt(a)) + parseInt(b)));

    function handleSubmit(event) {
    event.preventDefault();
    const addedLocation = {
        location: event.target.location.value,
        minimum_customers_per_hour: event.target.minimum_customers_per_hour.value,
        maximum_customers_per_hour: event.target.maximum_customers_per_hour.value,
        average_cookies_per_sale: event.target.average_cookies_per_sale.value,
        hourly_sales: [],
      }
    setInputs([...inputs,addedLocation]);
    // randomArray(addedLocation.minimum_customers_per_hour,addedLocation.maximum_customers_per_hour);
    // addedLocation.hourly_sales = 
    event.target.reset();
    const postData = async (e) => {

      await axios.post(`https://cookie-stand-barham-farraj.herokuapp.com/api/v1/cookies/`,addedLocation,config)
      .then(res => {
        console.log("created data", res)
      })
      .catch(e => {
        console.log("create error", e)
      })
      .finally(() => {
        getData();
      })
      
    }
    postData(addedLocation);

    }
    const getData = async () => {

      await axios.get("https://cookie-stand-barham-farraj.herokuapp.com/api/v1/cookies/",config)
      .then(res => {
        setData(res.data.map(item => {return {...item,hourly_sales:randomArray(item.minimum_customers_per_hour,item.maximum_customers_per_hour)}}))
      })
      .catch(e => { console.log("error", e)
      }) 
    }
    useEffect(() => {getData()}, [])
    
    const deleteData = async (id) => {

      await axios.delete(`https://cookie-stand-barham-farraj.herokuapp.com/api/v1/cookies/${id}/`,config)
      .then(res => {
        console.log("deleted data", res)
      })
      .catch(e => {
        console.log("delete error", e)
      })
      .finally(() => {
        getData();
      })
    }
    
    
  return (
    <div className="h-full">
      <Head><title>Cookie Stand</title></Head>
      <div className="bg-[#ACA9BB] flex items-center  flex-col h-full ">
      <Header setIsLoggedIn={setIsLoggedIn} UserName={UserName}/>
        <CreateForm handleSubmit={handleSubmit} />
        {data.length? <ReportTable inputs={data}  deleteData={deleteData} /> : <h1 className="my-14 font-bold font-xl">No Cookie Stand Created</h1>}
      <Footer counter={data.length}/>
      </div>
    </div>
  );
}

export default CookieStandAdmin;
