import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Invalid Username or Password");
const sucessNotify = () => toast.success("Sucess!");
const errorNotify = () => toast.error("Error");

export default function Toast() {
 return (
   <div className="App">
     <h1>React Hot Toast 🍞</h1>
     <button onClick={notify}>Make me a toast</button>
     <button onClick={sucessNotify}>Make me a sucess toast</button>
     <button onClick={errorNotify}>Make me a error toast</button>
     <Toaster />
   </div>
 );
}