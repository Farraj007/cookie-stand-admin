import { useState } from "react";

export default function Main() {
  const [inputs, setInputs] = useState(null);
  const [newValue, setNewValue] = useState("");
  function handleChange(e) {
    let value = { ...newValue, [e.target.name]: e.target.value };
    setNewValue(value);
  }
  function handleSubmit(e) {
    setInputs(newValue);
  }
  return (
    <div className="h-full bg-[#787586] flex items-center justify-center flex-col">
      <div className="mx-auto bg-[#5b5790] py-2 h-1/2 w-1/2 text-center rounded-xl">
        <div>
          <h1 className="text-bold text-xl p-2">Create Cookie Stand</h1>
        </div>
        <div>
          <label className="flex justify-around m-3">
            Location
            <input
              type="text"
              name="Location"
              placeholder="Cookie Stand Location"
              className="w-3/4"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="flex justity-between p-2 ">
          <label className="flex-col text-sm">
            Minimum Customers per Hour
            <input
              type="number"
              name="MinCustomers"
              placeholder=""
              className="w-3/4"
              onChange={handleChange}
            />
          </label>
          <label className="flex-col text-sm">
            Maximum Customers per Hour
            <input
              type="number"
              placeholder=""
              className="w-3/4"
              name="MaxCustomers"
              onChange={handleChange}
            />
          </label>
          <label className="flex-col text-sm">
            Average Cookies per Sale
            <input
              type="number"
              placeholder=""
              className="w-3/4"
              name="AvgCustomers"
              onChange={handleChange}
            />
          </label>
          <button
            onClick={handleSubmit}
            className="bg-[#5b5790] hover:bg-[#787586] rounded-lg"
          >
            Create
          </button>
        </div>
      </div>
      {inputs && (
          <div>
            <div className="flex justify-center items-center">
            <p className="text-lg p-2">Report Table....</p>
            </div>
            <div>
                <div>{JSON.stringify(inputs)}</div>
            </div>
          </div>
      )}
    </div>
  );
}
