import { table_heading } from "../../data.js";

function ReportTable({ inputs,deleteData}) {
  console.log("inputs", inputs);
  // console.log(inputs[0].hourly_sales[0]);
  // const newArray = inputs.map((item) => {item.hourly_sales});
  // console.log("newArray", newArray);


  return (
    <table className="table-auto w-3/4 my-9 rounded-lg bg-[#5B5790] ">
      <thead>
        <tr>
          {table_heading?.map((heading) => (
            <th key={heading} className="text-white text-center p-2">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {inputs?.map((data,i) => {
          return (
            <>
              <tr key={i} className="text-white text-center p-2">
                <td key={data.id}>
                  <div className="flex justify-between items-center"><p>{data.location}</p><button><svg onClick ={()=>deleteData(data.id)} xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg></button>
                  </div>
                </td>
                {data.hourly_sales?.map((hour,i) => (<td key={i} >{hour}</td>))}
                <td key="hourly_sales">
                  {data.hourly_sales?.reduce((total, sales) => (total += sales))}
                </td> 
              </tr>
            </>
          );
        })}
      </tbody>
      <tfoot className="text-white text-center p-4">
        <tr>
        <th key="totals">Totals</th>

        </tr>
      </tfoot>
    </table>
  );
}
export default ReportTable;
