function Login({loginHandle}) {
 
  return (
    <div className="h-screen flex bg-[#ACA9BB]">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center animate-pulse">
          Log In 🔐
        </h1>
        
        <form id="logInForm"onSubmit={loginHandle} >
          <div>
            <label htmlFor="username">UserName</label>
            <input
              type="username"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="username"
              placeholder="Your UserName"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button className="bg-[#8885EF] hover:bg-[#5B5790] py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
