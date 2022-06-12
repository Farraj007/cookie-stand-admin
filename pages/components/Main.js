import hourly_sales from "../../data";
export default function Main(props) {
  return (
    <div className="h-full bg-[#787586] flex items-center justify-center flex-col">
      <form
        className="mx-auto bg-[#5b5790] p-2 h-1/4 w-1/2 text-center rounded-xl"
        onSubmit={props.handleChange}
      >
        <div>
          <h1 className="text-bold text-xl p-2">Create Cookie Stand</h1>
        </div>
        <div>
          <label className="flex justify-around m-3 p-1">
            Location
            <input
              type="text"
              name="Location"
              placeholder="Cookie Stand Location"
              className="w-3/4"
            />
          </label>
        </div>
        <div className="flex justity-between p-1">
          <label className="flex-col text-sm">
            Minimum Customers per Hour
            <input
              type="number"
              name="MinCustomers"
              placeholder=""
              className="w-3/4"
            />
          </label>
          <label className="flex-col text-sm">
            Maximum Customers per Hour
            <input
              type="number"
              placeholder=""
              className="w-3/4"
              name="MaxCustomers"
            />
          </label>
          <label className="flex-col text-sm">
            Average Cookies per Sale
            <input
              type="number"
              placeholder=""
              className="w-3/4"
              name="AvgCustomers"
            />
          </label>
          <button className="bg-[#5b5790] hover:bg-[#787586] rounded-lg">
            Create
          </button>
        </div>
      </form>
      {/* {props.inputs && (
        <div>
          <div className="flex justify-center items-center">
            <p className="text-lg p-2">Report Table....</p>
          </div>
          <div>
            <div>{JSON.stringify(props.inputs)}</div>
          </div>
        </div>
      )} */}

      <table className="table-auto w-3/4 mt-9 rounded-lg">
        <thead>
          <tr className="bg-[#5b5790]">
            <th className="text-white text-center p-2">Location</th>
            <th className="text-white text-center p-2">6 Am</th>
            <th className="text-white text-center p-2">7 Am</th>
            <th className="text-white text-center p-2">9 Am</th>
            <th className="text-white text-center p-2">10 Am</th>
            <th className="text-white text-center p-2">11 Am</th>
            <th className="text-white text-center p-2">12 Pm</th>
            <th className="text-white text-center p-2">1 Pm</th>
            <th className="text-white text-center p-2">2 Pm</th>
            <th className="text-white text-center p-2">3 Pm</th>
            <th className="text-white text-center p-2">4 Pm</th>
            <th className="text-white text-center p-2">5 Pm</th>
            <th className="text-white text-center p-2">6 Pm</th>
            <th className="text-white text-center p-2">7 Pm</th>
            <th className="text-white text-center p-2 font-bold">Totals</th>
          </tr>
        </thead>
        <tbody className="bg-[#5b5790]">
          {props.inputs.map((data) => {
            return (
              <>
                <tr>
                  <td>{data.location}</td>

                  {hourly_sales.map((data) => {
                    return (
                      <>
                        <td>{data}</td>
                      </>
                    );
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
