import { table_heading } from "../../data.js";

function ReportTable({ inputs, array, DeleteData}) {
  console.log("data", array);
  console.log("inputs", inputs);

  return (
    <table className="table-auto w-3/4 my-9 rounded-lg bg-[#5B5790] ">
      <thead>
        <tr>
          {table_heading.map((heading) => (
            <th className="text-white text-center p-2">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {inputs.map((data, i) => {
          return (
            <>
              <tr className="text-white text-center p-2">
                <td><div className="flex justify-between items-center"><p>{data.location}</p><svg onClick ={()=>DeleteData(location.id)} xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg></div></td>
                {array[i].map((sales) => (
                  <td>{sales}</td>
                ))}
                <td>
                  {array[i].reduce((total, sales) => (total += sales), 0)}
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
      <tfoot className="text-white text-center p-4">
        <td>Totals</td>

        {array[0]
          .map((val, index) => array.map((row) => row[index]).reverse())
          .map((data, i) => {
            return (
              <>
                <td>
                  {data.reduce((total, sales) => (total += sales), 0)}
                </td>
              </>
            );
          })}
        <td>
        {array.map(row => row.reduce((total, num) => total += num, 0)).reduce((total, num) => total += num, 0)}        </td>
      </tfoot>
    </table>
  );
}
export default ReportTable;
