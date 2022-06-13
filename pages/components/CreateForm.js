function CreateForm(props) {
  return (
      <form
        className="mx-auto bg-[#5b5790] py-8 w-4/5 text-center rounded-xl mt-16"
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
        <div className="flex justity-between py-4">
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
          <button className="bg-[#5b5790] hover:bg-[#584dbb] rounded-lg">
            Create
          </button>
        </div>
      </form>
  );
}

export default CreateForm;
