import { useState } from "react";
function CreateForm({handleChange}) {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    avgValue=(maxValue+minValue)/2;

  return (
      <form
        className="mx-auto bg-[#5B5790] py-8 w-4/5 text-center rounded-xl mt-16"
        onSubmit={handleChange}
      >
        <div>
          <h1 className="text-bold text-xl p-2">Create Cookie Stand</h1>
        </div>
        <div>
          <label className="flex justify-around m-3 p-1">
            Location
            <input
              type="text"
              name="location"
              placeholder="Cookie Stand Location"
              className="w-3/4"
            />
          </label>
        </div>
        <div className="flex justity-between py-4">
          <label className="flex-col text-sm">
            Minimum Customers per Hour
            <input
              onChange={event => setMinValue(parseInt(event.target.value))} 

              type="number"
              name="minimum_customers_per_hour"
              placeholder=""
              className="w-3/4"
            />
          </label>
          <label className="flex-col text-sm">
            Maximum Customers per Hour
            <input
              onChange={event => setMaxValue(parseInt(event.target.value))} 
              type="number"
              placeholder=""
              className="w-3/4"
              name="maximum_customers_per_hour"
            />
          </label>
          <label className="flex-col text-sm">
            Average Cookies per Sale
            <input
              value={avgValue}
              type="number"
              placeholder=""
              className="w-3/4"
              name="average_cookies_per_sale"
            />
      
          </label>
          <button className="bg-[#5b5790] hover:bg-[#584dbb] rounded-lg mt-2">
            Create
          </button>
        </div>
      </form>
  );
}

export default CreateForm;
