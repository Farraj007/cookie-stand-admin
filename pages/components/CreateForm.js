function CreateForm({handleSubmit}) {
    // const [minValue, setMinValue] = useState(0);
    // const [maxValue, setMaxValue] = useState(0);
    // const avgValue=(maxValue+minValue)/2;
  return (
      <form
        className="mx-auto bg-[#5B5790] py-8 w-4/5 text-center rounded-xl mt-16"
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="text-bold text-xl p-2">Create Cookie Stand</h1>
        </div>
        <div className="flex justify-around py-4 ">
          <div className="flex flex-col place-items-center w-1/2">
          <label className=" text-sm ">
            Location
          </label>
          <input required
            type="text"
            name="location"
            placeholder="Cookie Stand Location"
            className="w-full text-center"
          />
          </div>
          
          <button type="submit"className="bg-[#585780] hover:bg-[#584dbb] rounded-lg px-10 mr-4 ">
            Create Stand
          </button>
        </div>
        <div className="flex justity-between py-4">
          <label className="flex-col text-sm">
            Minimum Customers per Hour
            <input required
              // onChange={event => setMinValue(parseInt(event.target.value))} 

              type="number"
              name="minimum_customers_per_hour"
              placeholder=""
              className="w-3/4 text-center"
            />
          </label>
          <label className="flex-col text-sm">
            Maximum Customers per Hour
            <input required
              // onChange={event => setMaxValue(parseInt(event.target.value))}
              type="number"
              placeholder=""
              className="w-3/4 text-center"
              name="maximum_customers_per_hour"
            />
          </label>
          <label className="flex-col text-sm">
            Average Cookies per Sale
            <input reqired
              // value={avgValue}
              type="number"
              placeholder=""
              className="w-3/4 text-center"
              name="average_cookies_per_sale"
            />
      
          </label>
          
        </div>
      </form>
  );
}

export default CreateForm;
