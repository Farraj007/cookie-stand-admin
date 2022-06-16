import { table_heading } from "../../data.js";

function ReportTable({ inputs, array }) {
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
                <td>{data.location}</td>
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
